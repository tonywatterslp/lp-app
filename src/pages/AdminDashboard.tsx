import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import CourseTable from "../components/CourseTable/CourseTable";
import CourseCreator from "../components/CourseCreator/CourseCreator";
import { courses } from "../data/coursesData";
import LearningExperiencesIcon from "../assets/icons/LearningExperiencesIcon.svg";

const AdminDashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Stack direction={"row"} marginBottom={2}>
        <Typography flexGrow={1} variant="h5" component="h1">
          Learning Experiences
        </Typography>
        <Stack
          direction={"row-reverse"}
          alignItems={"flex-end"}
          flexGrow={1}
          spacing={1}
        >
          <Button
            variant="outlined"
            onClick={() => {
              setIsOpen(true);
            }}
            aria-keyshortcuts="Control+T"
            startIcon={
              <SvgIcon>
                <LearningExperiencesIcon />
              </SvgIcon>
            }
          >
            New Learning Experience
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Create from Template
          </Button>
        </Stack>
      </Stack>

      <CourseTable courses={courses} />

      <CourseCreator
        isOpen={isOpen}
        onCloseHandler={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
};

export default AdminDashboard;
