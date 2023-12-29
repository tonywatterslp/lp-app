import React, { useEffect, useRef } from "react";
import {
  Typography,
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogTitle,
} from "@mui/material";
import TemplateCard from "./TemplateCard";
import useRadioGroup from "./useRadioGroup";
import { isOptionalChain } from "typescript";

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
    description: "A single document, e.g. a PDF",
  },
  {
    id: 6,
    title: "Video",
    image:
      "https://images.unsplash.com/photo-1556132877-ded3bb0173b5?q=80&w=3273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "An online video, e.g. YouTube or Vimeo",
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

const TITLE_ID = "choose-template-title";

const CourseCreator = (props: {
  isOpen: boolean;
  onCloseHandler: () => void;
}) => {
  const [state, dispatch] = React.useReducer(templateReducer, initialState);
  const dialogRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useRadioGroup(dialogRef, props.isOpen);

  // Super hacky hack here to ensure that the component rerenders :(
  useEffect(() => {
    dispatch({
      type: ActionTypes.SELECT_TEMPLATE,
      payload: 1,
    });
  }, [props.isOpen]);

  return (
    <div>
      <Dialog
        role="radiogroup"
        aria-labelledby={TITLE_ID}
        open={props.isOpen}
        maxWidth={false}
        onClose={props.onCloseHandler}
      >
        <DialogTitle id={TITLE_ID}>Choose Template</DialogTitle>
        <div id="radio-group" ref={props.isOpen ? dialogRef : null}>
          <DialogContent style={{ padding: 0 }}>
            {categories.map((category) => {
              return (
                <div key={category.id}>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{
                      marginTop: "0.5rem",
                      marginBottom: "0rem",
                      fontSize: "1.1em",
                      fontWeight: "bold",
                    }}
                    marginInlineStart={3}
                    marginInlineEnd={3}
                  >
                    {category.title}
                  </Typography>
                  <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="inline-start"
                    style={{
                      background: "linear-gradient(to bottom, white, #efefef)",
                    }}
                    paddingBottom={2}
                    px={2}
                  >
                    {category.templates.map((templateId, index) => {
                      const template = templates.find(
                        (t) => t.id === templateId
                      );
                      if (!template) return null;
                      return (
                        <Box width={260} key={template.id} mx={1} my={1}>
                          <TemplateCard
                            isFirst={index === 0}
                            template={template}
                            isSelected={
                              state.selectedTemplateId === template.id
                            }
                            clickHandler={() => {
                              dispatch({
                                type: ActionTypes.SELECT_TEMPLATE,
                                payload: template.id,
                              });
                            }}
                          />
                        </Box>
                      );
                    })}
                  </Box>
                </div>
              );
            })}
          </DialogContent>
        </div>
        <DialogActions>
          <Button onClick={props.onCloseHandler}>Cancel</Button>
          <Button onClick={props.onCloseHandler} variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CourseCreator;
