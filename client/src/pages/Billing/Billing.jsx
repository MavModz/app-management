import React, { useState, useEffect } from 'react';
import { allcoursesfunction } from '../../Services/api';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Cards/Card';

function Billing() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetchAllCourses();
  }, [])

  const fetchAllCourses = async () => {
    try {
      const response = await allcoursesfunction();
      console.log("Fetched Courses:", response);
      setCourses(response.data);
    }

    catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Header />
      Billing Page
      {Array.isArray(courses) && courses.map(course => (
        <Card
          key={course._id}
          courseName={course.courseName}
          courseCode={course.courseCode}
          teacherName={course.teacherName}
          coursePrice={course.coursePrice}
        />
      ))}
    </div>
  )
}

export default Billing