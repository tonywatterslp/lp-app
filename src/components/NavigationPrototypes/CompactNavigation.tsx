import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Badge,
  Box,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

// Simple generic navigation prototype - Compact Style
// This is a minimal implementation for prototyping purposes
interface CompactNavigationProps {
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

const CompactNavigation: React.FC<CompactNavigationProps> = ({
  items,
  secondaryItems = [],
  title = "Navigation",
  notificationCount = 0,
}) => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        border: "1px solid #ddd",
        borderRadius: 1,
      }}
    >
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? 240 : 65,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            position: "relative",
            whiteSpace: "nowrap",
            width: open ? 240 : 65,
            transition: "width 0.2s ease-in-out",
            boxSizing: "border-box",
            overflowX: "hidden",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "space-between" : "center",
            padding: 1,
          }}
        >
          {open && <Typography variant="subtitle1">{title}</Typography>}
          <IconButton onClick={handleDrawerToggle}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        <Divider />

        {/* Notification Icon */}
        <Box
          sx={{
            display: "flex",
            justifyContent: open ? "flex-end" : "center",
            p: 1,
          }}
        >
          <IconButton>
            <Badge badgeContent={notificationCount} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Box>

        {/* Main Navigation Items */}
        <List>
          {items.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {open && <ListItemText primary={item.label} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ mt: "auto" }} />

        {/* Secondary Navigation Items */}
        <List>
          {secondaryItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {open && <ListItemText primary={item.label} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default CompactNavigation;
