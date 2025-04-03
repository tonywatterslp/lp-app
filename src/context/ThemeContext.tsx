import React, { createContext, useState, useContext, ReactNode } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { defaultTheme } from '../theme/theme';

// Define the structure for our navigation theme colors
interface NavigationThemeColors {
  main: string;
  background: string;
}

// Define the context value structure
interface NavigationThemeContextType {
  navColors: NavigationThemeColors;
  setNavColors: React.Dispatch<React.SetStateAction<NavigationThemeColors>>;
  navTheme: ReturnType<typeof createTheme>;
}

// Create the context with default values
const NavigationThemeContext = createContext<NavigationThemeContextType | undefined>(undefined);

// Default navigation theme colors - matching the original navigationTheme
const defaultNavColors: NavigationThemeColors = {
  main: '#1976d2',
  background: '#1976d2',
};

// Provider component
export const NavigationThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [navColors, setNavColors] = useState<NavigationThemeColors>(defaultNavColors);

  // Generate navigation theme based on our colors
  const navTheme = createTheme({
    palette: {
      primary: {
        main: navColors.main,
        contrastText: '#ffffff',
      },
      background: {
        paper: navColors.background,
        default: navColors.background,
      },
    },
  });

  return (
    <NavigationThemeContext.Provider value={{ navColors, setNavColors, navTheme }}>
      <MuiThemeProvider theme={defaultTheme}>
        {children}
      </MuiThemeProvider>
    </NavigationThemeContext.Provider>
  );
};

// Custom hook for using the navigation theme context
export const useNavigationThemeContext = () => {
  const context = useContext(NavigationThemeContext);
  if (context === undefined) {
    throw new Error('useNavigationThemeContext must be used within a NavigationThemeProvider');
  }
  return context;
};