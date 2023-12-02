import React, { useEffect, useState } from 'react';
import { userchartfunction } from '../../Services/api';
import Stats from '../../assets/images/vector-points.svg';
import './graph.css';

function Graph() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await userchartfunction();
        console.log(response);
        setData(response);
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchData();

  }, []);
  const maxValue = Math.max(...data.map(item => item.value));
  console.log(maxValue);

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
      <div className="bar-chart">
        {data.map((item) => (
          <div className={`bar ${item === maxValue ? 'max-bar' : ''}`}
            key={item.label}
            style={{ height: `${(item.value / maxValue) * 100}%` }}
          >
            <div className="bar-label">{item.label}</div>
            <div className="bar-value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Graph