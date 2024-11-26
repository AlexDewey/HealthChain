import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

import '../styles/dashboard.css';

const AdminIndex = () => {
  const [activePage, setActivePage] = useState('Dashboard'); // Default page

  const handleNavigation = (page) => {
    setActivePage(page); // Change the active page
  };


    
  let updateProfile_ = (
    <div style={{ width: '60%' }}>
      <h2>Update Profile</h2>
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" className="form-control" id="dob" />
        </div>
        <div className="form-group">
          <label htmlFor="ssn">SSN</label>
          <input type="text" className="form-control" id="ssn" placeholder="Enter your SSN" />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" className="form-control" id="phoneNumber" placeholder="Enter your phone number" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>
    </div>
  );

  
  const renderContent = () => {
    // Render content based on active page
    switch (activePage) {
      case 'Dashboard':
        return <h2>Welcome to Admin Dashboard</h2>;
      case 'ViewPatients':
        return <h2>View Patients Page</h2>;
      case 'ViewDoctors':
        return <h2>View Doctors Page</h2>;
      case 'UpdateProfile':
        return updateProfile_;
      default:
        return <h2>Welcome to Patient Dashboard</h2>;
    }
  };

  return (
    <div className="patient-dashboard">
      {/* Top Navigation Bar */}
      <div className="top-navbar">
        <div className="app-name">EduHealthChain</div>
        <button className="logout-button">Logout</button>
      </div>
      
      {/* Main Content Section */}
      <div className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
            <ul>
                <li
                className={activePage === 'Dashboard' ? 'active' : ''}
                onClick={() => handleNavigation('Dashboard')}
                >
                Dashboard
                </li>
                <li
                className={activePage === 'ViewPatients' ? 'active' : ''}
                onClick={() => handleNavigation('ViewPatients')}
                >
                View Patients
                </li>
                <li
                className={activePage === 'ViewDoctors' ? 'active' : ''}
                onClick={() => handleNavigation('ViewDoctors')}
                >
                View Doctors
                </li>
                <li
                className={activePage === 'UpdateProfile' ? 'active' : ''}
                onClick={() => handleNavigation('UpdateProfile')}
                >
                Update Profile
                </li>
            </ul>
            </div>


        {/* Content Area */}
        <div className="content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;
