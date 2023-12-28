import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Modal,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogTitle,
} from "@mui/material";
import TemplateCard from "./TemplateCard";
import { stat } from "fs";

const templates = [
  {
    id: 1,
    title: "Elearning",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A standard elearning package such as SCORM or xAPI",
  },
  {
    id: 2,
    title: "Masterclass",
    image:
      "https://images.unsplash.com/photo-1580894732930-0babd100d356?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "An engaging multi-part course or programme",
  },
  {
    id: 3,
    title: "Face-to-Face Event",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "An in-person event, such as a training day or conference",
  },
  {
    id: 4,
    title: "Web",
    image:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A website such as a blog, article or company intranet",
  },
  {
    id: 5,
    title: "Document",
    image:
      "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Create an experience from a single document such as a PDF or Powerpoint",
  },
  {
    id: 6,
    title: "Video",
    image:
      "https://images.unsplash.com/photo-1556132877-ded3bb0173b5?q=80&w=3273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Create an experience from an online video such as YouTube or Vimeo",
  },
  {
    id: 7,
    title: "Online Event",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "An online-only event such as a webinar",
  },
  {
    id: 8,
    title: "Hybrid Event",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "An event with a choice of in-person or remote attendance",
  },
  {
    id: 9,
    title: "MOOC",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A Massive Online Open Course",
  },
];

export type Template = (typeof templates)[number];

const categories = [
  {
    id: 1,
    title: "Course",
    templates: [1, 2, 9],
  },
  {
    id: 2,
    title: "Event",
    templates: [3, 7, 8],
  },
  {
    id: 3,
    title: "Basic",
    templates: [4, 5, 6],
  },
];

const initialState = {
  selectedTemplateId: 1,
};

type State = typeof initialState;

enum ActionTypes {
  SELECT_TEMPLATE = "SELECT_TEMPLATE",
}

type Action = {
  type: ActionTypes;
  payload: any;
};

const templateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SELECT_TEMPLATE":
      return {
        ...state,
        selectedTemplateId: action.payload as number,
      };
    default:
      return state;
  }
};

const CourseCreator = () => {
  const [state, dispatch] = React.useReducer(templateReducer, initialState);
  return (
    <Dialog open={true}>
      <DialogTitle>Choose Template</DialogTitle>
      <DialogContent>
        {categories.map((category) => {
          return (
            <>
              <Typography
                variant="h5"
                component="h2"
                style={{
                  marginTop: "0.5rem",
                  marginBottom: "0.1rem",
                  fontSize: "1.1em",
                  fontWeight: "bold",
                }}
              >
                {category.title}
              </Typography>
              <Box display="flex" flexWrap="wrap" justifyContent="inline-start">
                {category.templates.map((templateId) => {
                  const template = templates.find((t) => t.id === templateId);
                  if (!template) return null;
                  return (
                    <Box width={260} key={template.id} m={2}>
                      <TemplateCard
                        template={template}
                        selected={state.selectedTemplateId === template.id}
                      />
                    </Box>
                  );
                })}
              </Box>
            </>
          );
        })}
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button variant="contained">Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CourseCreator;
