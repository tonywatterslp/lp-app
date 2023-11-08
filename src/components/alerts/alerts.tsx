import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

interface CustomAlertProps {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  open: boolean;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ type, message, open, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={onClose}>
      <Alert onClose={onClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
