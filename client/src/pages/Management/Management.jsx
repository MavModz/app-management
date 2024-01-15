import React from 'react';
import Header from '../../Components/Header/Header';
import './management.css';

function Management() {
  return (
    <div className='bg-[#f4f7fe]'>
      <Header />
      <div className="management-container h-screen">
        Management Page
        <div className="table-wrapper">
          <table className='data-table'>
            <tr>
              <th>Image</th>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>Course Price</th>
              <th>Teacher Name</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>iimg</td>
              <td>JAVA</td>
              <td>JAVA-204</td>
              <td>$ 1500</td>
              <td>Radha</td>
              <td>Test</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Management