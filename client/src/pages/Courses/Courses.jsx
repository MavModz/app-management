import React, {useState} from 'react';
import './courses.css';
import Header from '../../Components/Header/Header';

function Courses() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='bg-[#f4f7fe]'>
      <Header />
      <div className="course-container">
        <span className="course-row">
          <form className='add-courses-form'>
            <span className='top-heading-row'>
              <h1>Add New Course</h1>
            </span>
            <div className="text-field">
              <label htmlFor="course name">Enter Course Name</label>
              <input type="text" name="course name" />
            </div>
            <div className="text-field">
              <label htmlFor="course code">Enter Course Code</label>
              <input type="text" name="course code" />
            </div>
            <div className="submit-course">
              <button className='my-form__button'>
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