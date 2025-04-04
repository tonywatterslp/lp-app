import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  IconButton,
  Badge,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Grouped navigation prototype with categories
interface GroupedNavigationProps {
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

const GroupedNavigation: React.FC<GroupedNavigationProps> = ({
  items,
  secondaryItems = [],
  title = "Navigation",
  notificationCount = 0,
}) => {
  const [open, setOpen] = useState(true);
  const [openGroups, setOpenGroups] = useState<{ [key: string]: boolean }>({
    main: true,
    tools: false,
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Group items for this layout
  const mainItems = items.slice(0, 4);
  const toolItems = items.slice(4);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleGroupToggle = (group: string) => {
    setOpenGroups({
      ...openGroups,
      [group]: !openGroups[group],
    });
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
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
        open={true}
        sx={{
          width: 280,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            position: "relative",
            whiteSpace: "nowrap",
            width: 280,
            boxSizing: "border-box",
            overflowX: "hidden",
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 2,
            backgroundColor: "primary.main",
            color: "white",
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <Box>
            <IconButton size="small" sx={{ color: "white", mr: 1 }}>
              <SearchIcon />
            </IconButton>
            <IconButton size="small" sx={{ color: "white" }}>
              <Badge badgeContent={notificationCount} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Box>

        {/* Profile Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 2,
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <Avatar sx={{ mr: 2 }}>
            <AccountCircleIcon />
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1" noWrap>
              John Doe
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              john.doe@example.com
            </Typography>
          </Box>
          <IconButton size="small" onClick={handleProfileClick}>
            <ExpandMore />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileClose}
          >
            <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
            <MenuItem onClick={handleProfileClose}>Settings</MenuItem>
            <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
          </Menu>
        </Box>

        {/* Main Navigation Group */}
        <List>
          <ListItem button onClick={() => handleGroupToggle("main")}>
            <ListItemText primary="Main Navigation" />
            {openGroups.main ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openGroups.main} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {mainItems.map((item, index) => (
                <ListItem key={index} button sx={{ pl: 4 }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>

        {/* Tools Navigation Group */}
        <List>
          <ListItem button onClick={() => handleGroupToggle("tools")}>
            <ListItemText primary="Tools & Resources" />
            {openGroups.tools ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openGroups.tools} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {toolItems.map((item, index) => (
                <ListItem key={index} button sx={{ pl: 4 }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>

        <Divider sx={{ mt: "auto" }} />

        {/* Secondary Navigation Items */}
        <List>
          {secondaryItems.map((item, index) => (
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

export default GroupedNavigation;
