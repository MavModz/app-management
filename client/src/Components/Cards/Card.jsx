import React from 'react';
import Thumb from '../../assets/images/course-img.png';
import './card.css';
function Card({courseName, courseCode, teacherName, coursePrice}) {
    console.log("Card props:", { courseName, courseCode, teacherName, coursePrice });
    return (
        <>
            <div className="card-container">
                <div className="card-wrapper">
                    <div className="card-image">
                        <img src= {Thumb} alt="courses thumbnail" className='card-thumbnail' />
                    </div>
                    <div className="card-data">
                    <p>{courseCode}</p>
                    <h4>{courseName}</h4>
                    <h5>{teacherName}</h5>  
                    <h5>{coursePrice}</h5>
                  </div>
                </div>
            </div>
        </>
    )
}

export default Card