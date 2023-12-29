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
import { categories, templates } from "./data";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

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
        TransitionComponent={Transition}
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
                      // textAlign: "center",
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
