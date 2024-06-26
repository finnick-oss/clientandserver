import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://backend-sql-yik6.onrender.com/survey')
      .then(response => response.json())
      .then(data => {
        setData(data.reverse());
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container-fluid pt-5">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0"></div>
      </div>

      <form className="form-horizontal" method="POST">
        <div className="form-group">
          <input type="text" name="p_id" className="form-control" placeholder="PID" required />
        </div>
        <div className="form-group">
          <input type="text" name="u_ide" className="form-control" placeholder="UID Ends-with" required />
        </div>
        <div className="form-group">
          <input type="text" name="u_ids" className="form-control" placeholder="UID Starts-with" required />
        </div>
        <div className="form-group">
          <input type="date" name="date" className="form-control" placeholder="Date" required />
        </div>
        <div className="form-group">
          <select className="form-select" name="status" required>
            <option style={{ display: 'none' }} selected value="">Status...</option>
            <option value="complete">Complete</option>
            <option value="terminate">Terminate</option>
            <option value="quotafull">Quotafull</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Filter</button>
        </div>
      </form>

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
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.pid}</td>
                    <td>{item.uid}</td>
                    <td>{item.ip}</td>
                    <td>{item.date}</td>
                    <td className={`status ${item.status.toLowerCase()}`}>{item.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <span className='total-text'>Total ({data.length})</span>

      <button onClick={() => { }} className="btn btn-export">
        Export
      </button>

    </div>

  );
};

export default withRouter(Dashboard);
