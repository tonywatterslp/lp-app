import React, { useState } from "react";
import CustomAlert from "./components/alerts/alerts";
import { VerticalNavigation, ThemeProvider } from "@learningpool/ui";
import Dialogue from "./components/Dialogue/Dialogue";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Button, Stack, Typography, createTheme } from "@mui/material";
import CourseCreator from "./components/CourseCreator/CourseCreator";
import CourseTable, { Course } from "./components/CourseTable/CourseTable";

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

const courses: Course[] = [
  {
    name: "Introduction to Retail Management",
    alias: "introduction-to-retail-management",
    type: "Undertake an Online Course",
    visibility: "Public",
    levels: 3,
    enrolments: 118,
    dateCreated: "2022-01-01",
  },
  {
    name: "Merchandising Strategies",
    alias: "merchandising-strategies",
    type: "Undertake an Online Course",
    visibility: "Public",
    levels: 1,
    enrolments: 115020,
    dateCreated: "2022-01-02",
  },
  {
    name: "Store Operations and Customer Service",
    alias: "store-operations-and-customer-service",
    type: "Undertake an Online Course",
    visibility: "Secret",
    levels: 1,
    enrolments: 998,
    dateCreated: "2022-01-03",
  },
  {
    name: "Basic Retail Store Health and Safety Guide",
    alias: "basic-retail-store-health-and-safety-guide",
    type: "Watch a Video",
    visibility: "Public",
    levels: 1,
    enrolments: 48,
    dateCreated: "2022-07-15",
  },
  {
    name: "2023 Product Showreel",
    alias: "2023-product-showreel",
    type: "Watch a Video",
    visibility: "Public",
    levels: 1,
    enrolments: 48,
    dateCreated: "2022-07-15",
  },
  {
    name: "Advanced Retail Management",
    alias: "advanced-retail-management",
    type: "Undertake an Online Course",
    visibility: "Public",
    levels: 4,
    enrolments: 250,
    dateCreated: "2022-01-04",
  },
  {
    name: "Article on Retail Trends",
    alias: "article-on-retail-trends",
    type: "Read an Article",
    visibility: "Public",
    levels: 1,
    enrolments: 0,
    dateCreated: "2022-01-09",
  },
  {
    name: "Podcast: Customer Service Strategies",
    alias: "podcast-customer-service-strategies",
    type: "Listen to a Podcast",
    visibility: "Public",
    levels: 1,
    enrolments: 0,
    dateCreated: "2022-01-09",
  },
  {
    name: "Article: Effective Visual Merchandising",
    alias: "article-effective-visual-merchandising",
    type: "Read an Article",
    visibility: "Public",
    levels: 1,
    enrolments: 0,
    dateCreated: "2022-01-09",
  },
  {
    name: "Podcast: Retail Sales Techniques",
    alias: "podcast-retail-sales-techniques",
    type: "Listen to a Podcast",
    visibility: "Public",
    levels: 1,
    enrolments: 0,
    dateCreated: "2022-01-09",
  },
  {
    name: "Article: Store Operations Best Practices",
    alias: "article-store-operations-best-practices",
    type: "Read an Article",
    visibility: "Public",
    levels: 1,
    enrolments: 0,
    dateCreated: "2022-01-09",
  },
  {
    name: "Visual Merchandising Techniques",
    alias: "visual-merchandising-techniques",
    type: "Undertake an Online Course",
    visibility: "Public",
    levels: 2,
    enrolments: 500,
    dateCreated: "2022-01-05",
  },
  {
    name: "Customer Relationship Management",
    alias: "customer-relationship-management",
    type: "Undertake an Online Course",
    visibility: "Public",
    levels: 2,
    enrolments: 300,
    dateCreated: "2022-01-06",
  },
  {
    name: "Advanced Store Operations",
    alias: "advanced-store-operations",
    type: "Undertake an Online Course",
    visibility: "Secret",
    levels: 2,
    enrolments: 150,
    dateCreated: "2022-01-07",
  },
  {
    name: "Retail Sales Techniques",
    alias: "retail-sales-techniques",
    type: "Undertake an Online Course",
    visibility: "Public",
    levels: 1,
    enrolments: 1000,
    dateCreated: "2022-01-08",
  },
];

function App() {
  const theme = createTheme(defaultTheme);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ padding: "20px", paddingLeft: "100px" }}>
        <VerticalNavigation />
        <Stack direction={"row"}>
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
