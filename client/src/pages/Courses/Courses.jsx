import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import { addcoursefunction } from '../../Services/api';
import Success from '../../Components/Modals/Success/Success';
import Error from '../../Components/Modals/Error/Error';
import { UploadCloud } from 'lucide-react';
import './courses.css';

function Courses() {
  const [courseName, setcourseName] = useState('');
  const [courseCode, setcourseCode] = useState('');
  const [teacherName, setteacherName] = useState('');
  const [coursePrice, setcoursePrice] = useState('');
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleFileChange = async (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFileName(uploadedFile.name);
    } else {
      setFileName('');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await addcoursefunction(courseName, courseCode, coursePrice, teacherName)
      console.log(response);
      if(response && response.courseName && response._id) {
        setShowSuccessModal(true);
      }
      else {
        setShowErrorModal(true)
      }
    }

    catch (error) {
      console.log(error);
      setShowErrorModal(true)
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='bg-[#f4f7fe]'>
      <Header />
      <div className="course-container">
        <span className="course-row">
          <form className='add-courses-form'>
            <span className='top-heading-row'>
              <h1>Add a <span style={{ color: `var(--primary-new)` }}>New Course</span></h1>
            </span>
            <div className="upload-thumbnail">
              <label htmlFor="fileInput" className="upload-label">
                <input type="file"
                  id="courseThumbnail"
                  className="course-thumbnail"
                  onChange={handleFileChange}
                />
                <UploadCloud color="#3574F2" />
                <span className="upload-text">{fileName ? `${fileName}` : 'Upload thumbnail here'}</span>
              </label>
            </div>
            <div className="course-form-wrapper flex gap-4">
              <div className="form-left w-full flex flex-col gap-7">
                <div className="text-field">
                  <label htmlFor="course name">Enter Course Name</label>
                  <input type="text"
                    name="courseName"
                    id='courseName'
                    value={courseName}
                    onChange={(e) => setcourseName(e.target.value)}
                    placeholder='Course Name'
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="text-field">
                  <label htmlFor="teacher name">Enter Teacher Name</label>
                  <input type="text"
                    name="teacherName"
                    id='teacherName'
                    value={teacherName}
                    onChange={(e) => setteacherName(e.target.value)}
                    placeholder='Teacher Name'
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="form-right w-full flex flex-col gap-7 ">
                <div className="text-field">
                  <label htmlFor="course name">Enter Course Code</label>
                  <input type="text"
                    name="courseCode"
                    id='courseCode'
                    value={courseCode}
                    onChange={(e) => setcourseCode(e.target.value)}
                    placeholder='Course Code'
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="text-field">
                  <label htmlFor="course price">Enter Course price</label>
                  <input type="text"
                    name="coursePrice"
                    id='coursePrice'
                    value={coursePrice}
                    onChange={(e) => setcoursePrice(e.target.value)}
                    placeholder='Course Price'
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="submit-course">
              <button
                className='my-form__button'
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Submit Course'}
              </button>
            </div>
          </form>
          <Success
            show={showSuccessModal}
            onClose={() => setShowSuccessModal(false)}
            message="addCourse"
          />
          <Error
            show={showErrorModal}
            onClose={() => setShowErrorModal(false)}
            message="addCourseError"
          />
        </span>
      </div>
    </div>
  )
}

export default Courses