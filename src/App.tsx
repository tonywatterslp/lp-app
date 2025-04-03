import { useEffect, useState } from "react";

import { VerticalNavigation } from "@learningpool/ui";
import {
  Button,
  Stack,
  SvgIcon,
  Typography,
  createTheme,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import CourseCreator from "./components/CourseCreator/CourseCreator";
import CourseTable, { Course } from "./components/CourseTable/CourseTable";

// Import SVG icons
import LearningExperiencesIcon from "./assets/icons/LearningExperiencesIcon.svg";
import ResourcesIcon from "./assets/icons/ResourcesIcon.svg";
import PlaylistsIcon from "./assets/icons/PlaylistsIcon.svg";
import SkillsIcon from "./assets/icons/SkillsIcon.svg";
import UsersIcon from "./assets/icons/UsersIcon.svg";
import GroupsIcon from "./assets/icons/GroupsIcon.svg";
import EventsIcon from "./assets/icons/EventsIcon.svg";
import SettingsIcon from "./assets/icons/SettingsIcon.svg";
import SupportIcon from "./assets/icons/SupportIcon.svg";
import GoToLearnerDashboardIcon from "./assets/icons/GoToLearnerDashboardIcon.svg";
import OrganisationListIcon from "./assets/icons/OrganisationListIcon.svg";
import LogoutIcon from "./assets/icons/LogoutIcon.svg";
import GoToAdminDashboardIcon from "./assets/icons/GoToAdminDashboardIcon.svg";
import HomeIcon from "./assets/icons/HomeIcon.svg";
import DiscoverIcon from "./assets/icons/DiscoverIcon.svg";
import MyTeamSkillsIcon from "./assets/icons/MyTeamSkillsIcon.svg";

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

const ICON_SIZE = 28; // Define a constant for the icon size

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
  // Create a separate theme for the navigation component with the paper color explicitly set
  const navigationTheme = createTheme({
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

  const [isOpen, setIsOpen] = useState(false);

  // Determine the current view based on URL path
  const isLearnerView =
    window.location.pathname.includes("/learner-dashboard") ||
    window.location.pathname.includes("/dashboard") ||
    window.location.pathname.includes("/discover") ||
    window.location.pathname.includes("/skills-builder") ||
    window.location.pathname.includes("/team-skills");

  // Admin menu items
  const adminNavItems = [
    {
      label: "AdminDashboard",
      onClick: () => (window.location.href = "/admin-dashboard"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <HomeIcon />
        </SvgIcon>
      ),
    },
    {
      label: "Learning Experiences",
      onClick: () => (window.location.href = "/learning-experiences"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <LearningExperiencesIcon />
        </SvgIcon>
      ),
    },
    {
      label: "Resources",
      onClick: () => (window.location.href = "/resources"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <ResourcesIcon />
        </SvgIcon>
      ),
    },
    {
      label: "Events",
      onClick: () => (window.location.href = "/events"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <EventsIcon />
        </SvgIcon>
      ),
    },
    {
      label: "Playlists",
      onClick: () => (window.location.href = "/playlists"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <PlaylistsIcon />
        </SvgIcon>
      ),
    },
    {
      label: "Users",
      onClick: () => (window.location.href = "/users"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <UsersIcon />
        </SvgIcon>
      ),
    },
    {
      label: "Groups",
      onClick: () => (window.location.href = "/groups"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <GroupsIcon />
        </SvgIcon>
      ),
    },
    {
      label: "Settings",
      onClick: () => (window.location.href = "/settings"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <SettingsIcon />
        </SvgIcon>
      ),
    },
  ];

  const adminSecondaryNavItems = [
    {
      label: "Support",
      onClick: () => (window.location.href = "/support"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <SupportIcon />
        </SvgIcon>
      ),
    },
    {
      label: "Learner Dashboard",
      onClick: () => (window.location.href = "/learner-dashboard"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <GoToLearnerDashboardIcon />
        </SvgIcon>
      ),
    },
    {
      label: "Organisation List",
      onClick: () => (window.location.href = "/organisation-list"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <OrganisationListIcon />
        </SvgIcon>
      ),
    },
    {
      label: "Logout",
      onClick: () => {
        // Perform logout action here
        console.log("Logging out...");
        window.location.href = "/logout";
      },
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <LogoutIcon />
        </SvgIcon>
      ),
    },
  ];

  // Learner menu items
  const learnerNavItems = [
    {
      label: "Dashboard",
      onClick: () => (window.location.href = "/dashboard"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <HomeIcon />
        </SvgIcon>
      ),
      backgroundColor: "#1976d2", // You can change this to any color you prefer
      color: "#ffffff", // Text color to contrast with background
    },
    {
      label: "Discover",
      onClick: () => (window.location.href = "/discover"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <DiscoverIcon />
        </SvgIcon>
      ),
    },
    {
      label: "Events",
      onClick: () => (window.location.href = "/events"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <EventsIcon />
        </SvgIcon>
      ),
    },
    {
      label: "Skills Builder",
      onClick: () => (window.location.href = "/skills-builder"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <SkillsIcon />
        </SvgIcon>
      ),
    },
    {
      label: "My Team Skills",
      onClick: () => (window.location.href = "/team-skills"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <MyTeamSkillsIcon />
        </SvgIcon>
      ),
    },
  ];

  const learnerSecondaryNavItems = [
    {
      label: "Support",
      onClick: () => (window.location.href = "/support"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <SupportIcon />
        </SvgIcon>
      ),
    },
    {
      label: "Admin",
      onClick: () => (window.location.href = "/learning-experiences"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <GoToAdminDashboardIcon />
        </SvgIcon>
      ),
    },
    {
      label: "Organisation List",
      onClick: () => (window.location.href = "/organisation-list"),
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <OrganisationListIcon />
        </SvgIcon>
      ),
    },
    {
      label: "Logout",
      onClick: () => {
        // Perform logout action here
        console.log("Logging out...");
        window.location.href = "/logout";
      },
      icon: (
        <SvgIcon
          sx={{
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <LogoutIcon />
        </SvgIcon>
      ),
    },
  ];

  // Current navigation items based on active menu type
  const navItems = isLearnerView ? learnerNavItems : adminNavItems;
  const secondaryNavItems = isLearnerView
    ? learnerSecondaryNavItems
    : adminSecondaryNavItems;

  // This effect runs once after the component mounts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if the pressed key is 't'
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
        <ThemeProvider theme={navigationTheme}>
          <VerticalNavigation
            items={navItems}
            secondaryItems={secondaryNavItems}
            hasStreamHome={true}
          />
        </ThemeProvider>
        <Stack direction={"row"} marginBottom={2}>
          <Typography flexGrow={1} variant="h5" component="h1">
            {isLearnerView ? "Learner Dashboard" : "Learning Experiences"}
          </Typography>
          <Stack
            direction={"row-reverse"}
            alignItems={"flex-end"}
            flexGrow={1}
            spacing={1}
          >
            {!isLearnerView && (
              <>
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
              </>
            )}
            <ToggleButtonGroup
              value={isLearnerView ? "learner" : "admin"}
              exclusive
              onChange={(_, value) => {
                if (value === "learner") {
                  window.location.href = "/learner-dashboard";
                } else if (value === "admin") {
                  window.location.href = "/learning-experiences";
                }
              }}
              aria-label="Navigation menu type"
              size="small"
            >
              <ToggleButton value="admin" aria-label="admin navigation">
                Admin
              </ToggleButton>
              <ToggleButton value="learner" aria-label="learner navigation">
                Learner
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Stack>
        {!isLearnerView ? (
          <CourseTable courses={courses} />
        ) : (
          <Typography
            variant="h6"
            component="div"
            sx={{ mt: 4, textAlign: "center" }}
          >
            Welcome to the Learner Dashboard
          </Typography>
        )}
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
