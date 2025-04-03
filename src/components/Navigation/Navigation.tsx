import React from "react";
import { useNavigate } from "react-router-dom";
import { VerticalNavigation } from "@learningpool/ui";
import { ThemeProvider } from "@mui/material";
import { navigationTheme } from "../../theme/theme";

// Define the interface for navigation items
export interface NavigationItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  backgroundColor?: string;
  color?: string;
}

interface NavigationProps {
  navItems: NavigationItem[];
  secondaryNavItems: NavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({
  navItems,
  secondaryNavItems,
}) => {
  const navigate = useNavigate();

  // Convert items to format expected by VerticalNavigation
  const formattedNavItems = navItems.map((item) => ({
    label: item.label,
    onClick: () => navigate(item.path),
    icon: item.icon,
    backgroundColor: item.backgroundColor,
    color: item.color,
  }));

  const formattedSecondaryNavItems = secondaryNavItems.map((item) => ({
    label: item.label,
    onClick: () => {
      if (item.label === "Logout") {
        // Perform logout action here
        console.log("Logging out...");
        // Then navigate
        navigate(item.path);
      } else {
        navigate(item.path);
      }
    },
    icon: item.icon,
  }));

  // Force TypeScript to treat this as any to bypass the type issues
  const VerticalNavigationComponent = VerticalNavigation as any;

  return (
    <ThemeProvider theme={navigationTheme}>
      <VerticalNavigationComponent
        items={formattedNavItems}
        secondaryItems={formattedSecondaryNavItems}
        hasStreamHome={true}
      />
    </ThemeProvider>
  );
};

export default Navigation;
