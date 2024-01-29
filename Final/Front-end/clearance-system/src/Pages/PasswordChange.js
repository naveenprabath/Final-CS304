// PasswordChangeForm.js

import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const PasswordChangeForm = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handlePasswordChange = () => {
    // Your password change logic goes here
    // For demonstration purposes, we'll just show an alert
    setShowAlert(true);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      <h2>Password Change</h2>

      {/* Display an alert when showAlert state is true */}
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Password changed successfully!
        </Alert>
      )}

      {/* Password change form */}
      <form>
        <div className="mb-3">
          <label htmlFor="currentPassword" className="form-label">
            Current Password
          </label>
          <input type="password" className="form-control" id="currentPassword" required />
        </div>

        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            New Password
          </label>
          <input type="password" className="form-control" id="newPassword" required />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input type="password" className="form-control" id="confirmPassword" required />
        </div>

        <Button variant="primary" type="button" onClick={handlePasswordChange}>
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default PasswordChangeForm;
