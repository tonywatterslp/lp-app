import React, { useMemo } from "react";
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

  // Generate a unique key based on navigation items to force remounting
  const navigationKey = useMemo(() => {
    const navItemsString = navItems.map((item) => item.label).join("-");
    const secondaryNavItemsString = secondaryNavItems
      .map((item) => item.label)
      .join("-");
    return `nav-${navItemsString}-${secondaryNavItemsString}`;
  }, [navItems, secondaryNavItems]);

  // Convert items to format expected by VerticalNavigation
  const formattedNavItems = navItems.map((item) => {
    // Instead of passing backgroundColor directly, use sx prop for styling
    const itemProps: any = {
      label: item.label,
      onClick: () => navigate(item.path),
      icon: item.icon,
    };

    // Only add sx prop when backgroundColor or color are provided
    if (item.backgroundColor || item.color) {
      itemProps.sx = {
        backgroundColor: item.backgroundColor,
        color: item.color,
      };
    }

    return itemProps;
  });

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
        key={navigationKey}
        items={formattedNavItems}
        secondaryItems={formattedSecondaryNavItems}
        hasStreamHome={true}
      />
    </ThemeProvider>
  );
};

export default Navigation;
