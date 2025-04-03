import { createTheme } from "@mui/material";

const DEFAULT_HEADER_TYPOGRAPHY = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
};

const DEFAULT_BODY_TYPOGRAPHY = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
};

// @TODO: Discuss this with the experience design team, according to the UUI Figma
export const defaultTheme = createTheme({
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
});

// Create a separate theme for the navigation component with the paper color explicitly set
export const navigationTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "#ffffff",
    },
    background: {
      paper: "#1976d2", // This overrides the background color
      default: "#1976d2",
    },
  },
});
