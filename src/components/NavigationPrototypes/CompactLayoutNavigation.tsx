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
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Popover,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import DescriptionIcon from "@mui/icons-material/Description";
import LogoutIcon from "@mui/icons-material/Logout";

interface CompactLayoutNavigationProps {
  // Main navigation items for the middle section
  items?: Array<{
    label: string;
    icon: React.ReactNode;
  }>;
  // Optional notification count
  notificationCount?: number;
  // User's avatar URL or undefined for default icon
  avatarUrl?: string;
}

const CompactLayoutNavigation: React.FC<CompactLayoutNavigationProps> = ({
  items = [],
  notificationCount = 0,
  avatarUrl,
}) => {
  const [open, setOpen] = useState(true);
  const [avatarMenuAnchorEl, setAvatarMenuAnchorEl] =
    useState<HTMLElement | null>(null);
  const isAvatarMenuOpen = Boolean(avatarMenuAnchorEl);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleAvatarMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAvatarMenuAnchorEl(event.currentTarget);
  };

  const handleAvatarMenuClose = () => {
    setAvatarMenuAnchorEl(null);
  };

  const avatarMenuItems = [
    { label: "My Profile", icon: <PersonIcon fontSize="small" /> },
    { label: "My Reports", icon: <AssessmentIcon fontSize="small" /> },
    { label: "My Playlists", icon: <PlaylistPlayIcon fontSize="small" /> },
    {
      label: "Terms and Conditions",
      icon: <DescriptionIcon fontSize="small" />,
    },
    { label: "Logout", icon: <LogoutIcon fontSize="small" /> },
  ];

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
            height: "100%",
            transition: "width 0.2s ease-in-out",
            boxSizing: "border-box",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {/* Logo Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "flex-start" : "center",
            padding: 2,
            minHeight: 64,
          }}
        >
          <Box
            sx={{
              bgcolor: "primary.light",
              width: open ? 120 : 40,
              height: 40,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="body2" color="white">
              LOGO
            </Typography>
          </Box>
        </Box>

        <Divider />

        {/* Search Section */}
        <Box sx={{ p: 1 }}>
          <ListItem disablePadding>
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
                <SearchIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Search" />}
            </ListItemButton>
          </ListItem>
        </Box>

        <Divider />

        {/* Main Navigation Items */}
        <List sx={{ flex: "1 0 auto", py: 0 }}>
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

        <Divider />

        {/* App Switcher */}
        <Box sx={{ p: 1 }}>
          <ListItem disablePadding>
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
                <AppsIcon />
              </ListItemIcon>
              {open && <ListItemText primary="App Switcher" />}
            </ListItemButton>
          </ListItem>
        </Box>

        <Divider />

        {/* Support */}
        <Box sx={{ p: 1 }}>
          <ListItem disablePadding>
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
                {/* Using a help icon placeholder */}
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
                  />
                </svg>
              </ListItemIcon>
              {open && <ListItemText primary="Support" />}
            </ListItemButton>
          </ListItem>
        </Box>

        <Divider />

        {/* Notifications & Avatar Menu */}
        <Box sx={{ py: 1 }}>
          {/* Notifications */}
          <ListItem disablePadding>
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
                <Badge badgeContent={notificationCount} color="error">
                  <NotificationsIcon />
                </Badge>
              </ListItemIcon>
              {open && <ListItemText primary="Notifications" />}
            </ListItemButton>
          </ListItem>

          {/* Avatar Menu */}
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={handleAvatarMenuOpen}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                {avatarUrl ? (
                  <Avatar src={avatarUrl} sx={{ width: 24, height: 24 }} />
                ) : (
                  <AccountCircleIcon />
                )}
              </ListItemIcon>
              {open && <ListItemText primary="Profile" />}
            </ListItemButton>
          </ListItem>
        </Box>

        {/* Avatar Menu Popover */}
        <Menu
          anchorEl={avatarMenuAnchorEl}
          open={isAvatarMenuOpen}
          onClose={handleAvatarMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: open ? "right" : "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: open ? "right" : "center",
          }}
          PaperProps={{
            sx: {
              mt: 0.5,
              width: 220,
            },
          }}
        >
          {avatarMenuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={handleAvatarMenuClose}
              sx={{ py: 1 }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </MenuItem>
          ))}
        </Menu>

        <Divider />

        {/* Collapse/Expand Button */}
        <Box
          sx={{
            p: 1,
            display: "flex",
            justifyContent: "center",
            mt: "auto", // Push to bottom
          }}
        >
          <Tooltip title={open ? "Collapse" : "Expand"}>
            <IconButton onClick={handleDrawerToggle}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Drawer>
    </Box>
  );
};

export default CompactLayoutNavigation;
