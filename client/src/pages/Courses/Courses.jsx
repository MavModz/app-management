import React, { useState } from 'react';
import './courses.css';
import Header from '../../Components/Header/Header';

function Courses() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  }

  return (
    <div className='bg-[#f4f7fe]'>
      <Header />
      <div className="course-container">
        <span className="course-row">
          <form className='add-courses-form'>
            <span className='top-heading-row'>
              <h1>Add New Course</h1>
            </span>
            <div className="course-form-wrapper flex gap-4">
              <div className="form-left w-full">
                <div className="text-field">
                  <label htmlFor="course name">Enter Course Name</label>
                  <input type="text" name="course name" placeholder='Course Name' />
                </div>
                <div className="text-field">
                  <label htmlFor="teacher name">Enter Teacher Name</label>
                  <input type="text" name="teacher name" placeholder='Teacher Name' />
                </div>
              </div>
              <div className="form-right w-full">
                <div className="text-field">
                  <label htmlFor="course name">Enter Course Name</label>
                  <input type="text" name="course name" placeholder='Course Name' />
                </div>
                <div className="text-field">
                  <label htmlFor="course price">Enter Course price</label>
                  <input type="text" name="course price" placeholder='Course Price' />
                </div>
              </div>
            </div>

            <div className="submit-course">
              <button
                className='my-form__button'
                onClick={handleSubmit}
              >
                {isLoading ? 'Loading...' : 'Submit Course'}
              </button>
            </div>
          </form>
        </span>
      </div>
    </div>
  )
}

export default Courses