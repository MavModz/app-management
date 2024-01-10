import React, { useState, useEffect } from 'react';
import { allcoursesfunction } from '../../Services/api';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Cards/Card';
import './billing.css';

function Billing() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetchAllCourses();
  }, [])

  const fetchAllCourses = async () => {
    try {
      const response = await allcoursesfunction();
      setCourses(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      Billing Page
      <div className="course-list-cards">
        {courses.map(course => (
          <Card
            key={course._id}
            courseName={course.courseName}
            courseCode={course.courseCode}
            teacherName={course.teacherName}
            coursePrice={course.coursePrice}
          />
        ))}
      </div>
    </div>
  )
}

export default Billing