import React from "react";
import { Typography } from "@mui/material";

const LearnerDashboard: React.FC = () => {
  return (
    <>
      <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
        Learner Dashboard
      </Typography>
      <Typography
        variant="h6"
        component="div"
        sx={{ mt: 4, textAlign: "center" }}
      >
        Welcome to the Learner Dashboard
      </Typography>
    </>
  );
};

export default LearnerDashboard;
