import React from 'react';
import Thumb from '../../assets/images/course-img.png';
import './card.css';
function Card() {
    return (
        <>
            <div className="card-container">
                <div className="card-wrapper">
                    <div className="card-image">
                        <img src= {Thumb} alt="courses thumbnail" className='card-thumbnail' />
                    </div>
                    <div className="card-data">
                    <p>Coding</p>
                    <h2>Learn JavaSript</h2>
                    <h3>Learn how to use JavaScript — a powerful and flexible programming language for adding website interactivity.</h3>
                  </div>
                </div>
            </div>
        </>
    )
}

export default Card