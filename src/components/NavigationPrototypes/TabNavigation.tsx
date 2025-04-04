import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Badge,
  Typography,
  AppBar,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

// Tab-style navigation prototype
interface TabNavigationProps {
  items: Array<{
    label: string;
    icon: React.ReactNode;
  }>;
  secondaryItems?: Array<{
    label: string;
    icon: React.ReactNode;
  }>;
  title?: string;
  notificationCount?: number;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  items,
  secondaryItems = [],
  title = "Navigation",
  notificationCount = 0,
}) => {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Only use the first 5 items for tabs to avoid overcrowding
  const tabItems = items.slice(0, 5);

  // Put any remaining items into the overflow menu
  const overflowItems = [...items.slice(5), ...secondaryItems];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        border: "1px solid #ddd",
        borderRadius: 1,
        position: "relative",
      }}
    >
      {/* Header with title and action buttons */}
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid #ddd" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="subtitle1" sx={{ ml: 1 }}>
              {title}
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <Badge badgeContent={notificationCount} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </AppBar>

      {/* Main content area */}
      <Box sx={{ flexGrow: 1, bgcolor: "background.paper", p: 2 }}>
        {/* Content would go here in a real app */}
        <Typography variant="body2" color="text.secondary" align="center">
          Content Area - Tab {value + 1}
        </Typography>
      </Box>

      {/* Bottom navigation tabs */}
      <Paper
        sx={{ position: "static", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          {tabItems.map((item, index) => (
            <Tab
              key={index}
              icon={item.icon}
              label={item.label}
              sx={{ minWidth: 0, padding: "6px 12px", fontSize: "0.75rem" }}
            />
          ))}
          <Tab
            icon={<MoreVertIcon />}
            label="More"
            onClick={(e) => {
              e.preventDefault();
              toggleDrawer();
            }}
            sx={{ minWidth: 0, padding: "6px 12px", fontSize: "0.75rem" }}
          />
        </Tabs>
      </Paper>

      {/* Overflow drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle1">More Options</Typography>
        </Box>
        <List>
          {overflowItems.map((item, index) => (
            <ListItem key={index} button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default TabNavigation;
