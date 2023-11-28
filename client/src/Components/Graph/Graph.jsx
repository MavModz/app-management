import React from 'react';
import Stats from '../../assets/images/vector-points.svg';
import './graph.css';

function Graph() {
  return (
    <div className="bar-charts">
      <div className="bar-heading flex justify-between">
        <div className="bar-text flex flex-col justify-center">
          <p>Total Courses</p>
          <h3>5 Courses</h3>
        </div>
        <div className="bar-stats">
          <img src={Stats} alt="vector-stats" className='stats-vector' />
        </div>
      </div>
      <div className="bar-dotted-line">
        <p>5 course</p>
      </div>
    </div>
  )
}

export default Graph