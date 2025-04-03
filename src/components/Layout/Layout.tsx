import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Navigation, { NavigationItem } from "../Navigation/Navigation";
import {
  adminNavItems,
  adminSecondaryNavItems,
  learnerNavItems,
  learnerSecondaryNavItems,
} from "../../data/navigationData";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine if we're in learner view based on route
  const isLearnerView =
    location.pathname.includes("/learner-dashboard") ||
    location.pathname.includes("/dashboard") ||
    location.pathname.includes("/discover") ||
    location.pathname.includes("/skills-builder") ||
    location.pathname.includes("/team-skills");

  // Select the appropriate navigation items based on the view
  // Use type assertion to ensure compatibility with NavigationItem
  const navItems = isLearnerView
    ? (learnerNavItems as NavigationItem[])
    : (adminNavItems as NavigationItem[]);

  const secondaryNavItems = isLearnerView
    ? (learnerSecondaryNavItems as NavigationItem[])
    : (adminSecondaryNavItems as NavigationItem[]);

  return (
    <div style={{ padding: "20px", paddingLeft: "100px" }}>
      <Navigation navItems={navItems} secondaryNavItems={secondaryNavItems} />

      <Stack
        direction="row"
        spacing={1}
        sx={{ mb: 2, justifyContent: "flex-end" }}
      >
        <ToggleButtonGroup
          value={isLearnerView ? "learner" : "admin"}
          exclusive
          onChange={(_, value) => {
            if (value === "learner") {
              navigate("/learner-dashboard");
            } else if (value === "admin") {
              navigate("/learning-experiences");
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

      {children}
    </div>
  );
};

export default Layout;
