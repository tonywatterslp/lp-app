import React, { useState } from "react";
import CustomAlert from "./components/alerts/alerts";
import { VerticalNavigation, ThemeProvider } from "@learningpool/ui";
import Dialogue from "./components/Dialogue/Dialogue";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { createTheme } from "@mui/material";
import CourseCreator from "./components/CourseCreator/CourseCreator";

type AlertObject = {
  type: "success" | "info" | "warning" | "error";
  message: string;
};

const DEFAULT_HEADER_TYPOGRAPHY = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
};

const DEFAULT_BODY_TYPOGRAPHY = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
};

// @TODO: Discuss this with the experience design team, according to the UUI Figma
export const defaultTheme = {
  typography: {
    ...DEFAULT_BODY_TYPOGRAPHY,
    h1: DEFAULT_HEADER_TYPOGRAPHY,
    h2: DEFAULT_HEADER_TYPOGRAPHY,
    h3: DEFAULT_HEADER_TYPOGRAPHY,
    h4: DEFAULT_HEADER_TYPOGRAPHY,
    h5: DEFAULT_HEADER_TYPOGRAPHY,
    h6: DEFAULT_HEADER_TYPOGRAPHY,
    subtitle1: DEFAULT_BODY_TYPOGRAPHY,
    subtitle2: DEFAULT_BODY_TYPOGRAPHY,
    body1: DEFAULT_BODY_TYPOGRAPHY,
    body2: DEFAULT_BODY_TYPOGRAPHY,
    button: {
      ...DEFAULT_BODY_TYPOGRAPHY,
      fontWeight: 700,
    },
    caption: DEFAULT_BODY_TYPOGRAPHY,
    overline: DEFAULT_BODY_TYPOGRAPHY,
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '.MuiAvatarGroup-root .MuiAvatar-root:first-of-type': {
  //         backgroundColor: '#eee',
  //         color: '#333'
  //       }
  //     }
  //   }
  // }
};

function App() {
  // Create an array of sample alerts
  const alerts: AlertObject[] = [
    { type: "success", message: "This is a success alert. Well done!" },
    { type: "info", message: "This is an info alert. Pay attention!" },
    { type: "warning", message: "This is a warning alert. Be cautious!" },
    { type: "error", message: "This is an error alert. Something went wrong!" },
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

  const theme = createTheme(defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ padding: "20px", paddingLeft: "100px" }}>
        <VerticalNavigation />
        <CourseCreator />
      </div>
    </ThemeProvider>
  );
}

function RadioButtonsGroup({
  buttons,
}: {
  buttons: { value: string; label: string }[];
}) {
  const [value, setValue] = React.useState(buttons[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        aria-label="gender"
        defaultValue={buttons[0].value}
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        {buttons.map((button) => (
          <FormControlLabel
            value={button.value}
            control={<Radio />}
            label={button.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default App;
