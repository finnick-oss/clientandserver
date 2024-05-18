import React, { useState, useEffect } from 'react';
import './Complete.css';

const CompletedPage = ({ location }) => {
  const [ipAddress, setIPAddress] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://geolocation-db.com/json/')
      .then(response => response.json())
      .then(data => {
        setIPAddress(data.IPv4);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pid = searchParams.get('pid');
    const uid = searchParams.get('uid');
    const status = 'Completed';
    const completionTime = new Date().toISOString().slice(0, 10);

    if (pid && uid && ipAddress) {
      const newData = {
        pid,
        uid,
        ip: ipAddress,
        status,
        completionTime, // Include completionTime in newData
      };

      console.log('New Data:', newData);
      setData(prevData => [...prevData, newData]);

      // Send data to backend
      fetch('https://backend-sql-yik6.onrender.com/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      })
        .then(response => {
          if (response.ok) {
            console.log('Data saved successfully');
          } else {
            console.error('Failed to save data');
          }
        })
        .catch(error => {
          console.error('Error saving data:', error);
        });
    }
  }, [location.search, ipAddress]);

  return (
    <div className="complete-page">
      <h1 className="complete-title">Completed Surveys</h1>
      <div className="table-container">
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-sm text-center">
            <thead>
            <tr>
                <th scope="col">Serial NO.</th>
                <th scope="col">Project ID</th>
                <th scope="col">User ID</th>
                <th scope="col">IP Address</th>
                <th scope="col">Completion Time</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody id="table-body">
              {data.map((survey, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{survey.pid}</td>
                  <td>{survey.uid}</td>
                  <td>{survey.ip}</td>
                  <td>{survey.completionTime}</td>
                  <td>{survey.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompletedPage;
