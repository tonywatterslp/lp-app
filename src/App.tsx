import React, { useState } from 'react';
import CustomAlert from './components/alerts/alerts';
import { VerticalNavigation } from '@learningpool/ui';


type AlertObject = {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
};

function App() {
  // Create an array of sample alerts
  const alerts: AlertObject[] = [
    { type: 'success', message: 'This is a success alert. Well done!' },
    { type: 'info', message: 'This is an info alert. Pay attention!' },
    { type: 'warning', message: 'This is a warning alert. Be cautious!' },
    { type: 'error', message: 'This is an error alert. Something went wrong!' },
  ];

  const [open, setOpen] = useState(false);
  const [currentAlert, setCurrentAlert] = useState<AlertObject>(alerts[0]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (alert: AlertObject) => {
    setCurrentAlert(alert);
    setOpen(true);
  };

  return (
    <div className="App">
      {/* <VerticalNavigation /> */}
      <h1>Custom Alert Component</h1>
      <div className="alert-buttons">
        {alerts.map((alert, index) => (
          <button
            key={index}
            onClick={() => handleOpen(alert)}
          >
            Show {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)} Alert
          </button>
        ))}
      </div>
      <div className="alert-container">
        <CustomAlert
          type={currentAlert.type}
          message={currentAlert.message}
          open={open}
          onClose={handleClose}
        />
        <h2>How to Use the Custom Alert Component</h2>
        <p>
          To use the custom alert component, follow these steps:
        </p>
        <ol>
          <li>Import the `Alert` component into your React application.</li>
          <li>Create an array of alert objects with `type` (success, info, warning, error) and `message` properties.</li>
          <li>Render the `Alert` component for each alert by mapping through the array and providing the `type` and `message` properties as props.</li>
        </ol>
        <p>
          You can customize the alert types and messages to suit your application's needs.
        </p>
      </div>
    </div>
  );
}

export default App;
