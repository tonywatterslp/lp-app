import { useEffect, useState } from "react";

import { VerticalNavigation, ThemeProvider } from "@learningpool/ui";

import { Button, Stack, Typography, createTheme } from "@mui/material";
import CourseCreator from "./components/CourseCreator/CourseCreator";
import CourseTable, { Course } from "./components/CourseTable/CourseTable";

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

  // This effect runs once after the component mounts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if the pressed key is 'n'
      if (event.key === "t" && event.ctrlKey) {
        setIsOpen(true);
      }
    };

    // Add the event listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ padding: "20px", paddingLeft: "100px" }}>
        <VerticalNavigation />
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

export default App;
