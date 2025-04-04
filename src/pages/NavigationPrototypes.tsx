import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Switch,
  FormControlLabel,
  Tabs,
  Tab,
} from "@mui/material";

// Import our navigation prototypes
import CompactNavigation from "../components/NavigationPrototypes/CompactNavigation";
import TabNavigation from "../components/NavigationPrototypes/TabNavigation";
import GroupedNavigation from "../components/NavigationPrototypes/GroupedNavigation";
import CompactLayoutNavigation from "../components/NavigationPrototypes/CompactLayoutNavigation";

// Import navigation data
import {
  adminNavItems,
  adminSecondaryNavItems,
  learnerNavItems,
  learnerSecondaryNavItems,
} from "../data/navigationData";

// Interface for Tab Panel props
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const NavigationPrototypes = () => {
  // State for controls
  const [dataSet, setDataSet] = useState<"admin" | "learner">("admin");
  const [notificationCount, setNotificationCount] = useState<number>(5);
  const [showNotifications, setShowNotifications] = useState<boolean>(true);
  const [tabValue, setTabValue] = useState(0);

  // Get the correct nav items based on selection
  const navItems = dataSet === "admin" ? adminNavItems : learnerNavItems;
  const secondaryNavItems =
    dataSet === "admin" ? adminSecondaryNavItems : learnerSecondaryNavItems;

  // Calculate notification count based on switch
  const displayedNotificationCount = showNotifications ? notificationCount : 0;

  const handleDataSetChange = (event: SelectChangeEvent) => {
    setDataSet(event.target.value as "admin" | "learner");
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Navigation Prototypes
      </Typography>
      <Typography variant="body1" paragraph>
        Compare different navigation layouts side by side to evaluate which
        works best for your application.
      </Typography>

      {/* Controls */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Configuration
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Data Set</InputLabel>
              <Select
                value={dataSet}
                label="Data Set"
                onChange={handleDataSetChange}
              >
                <MenuItem value="admin">Admin Navigation</MenuItem>
                <MenuItem value="learner">Learner Navigation</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControlLabel
              control={
                <Switch
                  checked={showNotifications}
                  onChange={(e) => setShowNotifications(e.target.checked)}
                />
              }
              label="Show Notifications"
            />
          </Grid>
          {showNotifications && (
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Notification Count</InputLabel>
                <Select
                  value={notificationCount.toString()}
                  label="Notification Count"
                  onChange={(e) =>
                    setNotificationCount(parseInt(e.target.value))
                  }
                >
                  {[0, 1, 5, 10, 99].map((count) => (
                    <MenuItem key={count} value={count}>
                      {count}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}
        </Grid>
      </Paper>

      {/* View Mode Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="navigation prototype tabs"
        >
          <Tab label="Side by Side View" />
          <Tab label="New Compact Layout" />
        </Tabs>
      </Box>

      {/* Side by Side View */}
      <TabPanel value={tabValue} index={0}>
        <Grid container spacing={3}>
          {/* Compact Navigation */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Typography variant="h6" gutterBottom align="center">
                Compact Navigation
              </Typography>
              <Box sx={{ bgcolor: "#f5f5f5", height: 600, overflow: "hidden" }}>
                <CompactNavigation
                  items={navItems}
                  secondaryItems={secondaryNavItems}
                  title={`${
                    dataSet.charAt(0).toUpperCase() + dataSet.slice(1)
                  } Dashboard`}
                  notificationCount={displayedNotificationCount}
                />
              </Box>
              <Typography variant="body2" sx={{ mt: 2 }} color="text.secondary">
                A compact vertical navigation with collapsible drawer that
                toggles between an icon-only and full-width view.
              </Typography>
            </Paper>
          </Grid>

          {/* Tab Navigation */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Typography variant="h6" gutterBottom align="center">
                Tab Navigation
              </Typography>
              <Box sx={{ bgcolor: "#f5f5f5", height: 600, overflow: "hidden" }}>
                <TabNavigation
                  items={navItems}
                  secondaryItems={secondaryNavItems}
                  title={`${
                    dataSet.charAt(0).toUpperCase() + dataSet.slice(1)
                  } Dashboard`}
                  notificationCount={displayedNotificationCount}
                />
              </Box>
              <Typography variant="body2" sx={{ mt: 2 }} color="text.secondary">
                A bottom tab navigation style commonly used in mobile
                applications, with overflow menu for additional items.
              </Typography>
            </Paper>
          </Grid>

          {/* Grouped Navigation */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Typography variant="h6" gutterBottom align="center">
                Grouped Navigation
              </Typography>
              <Box sx={{ bgcolor: "#f5f5f5", height: 600, overflow: "hidden" }}>
                <GroupedNavigation
                  items={navItems}
                  secondaryItems={secondaryNavItems}
                  title={`${
                    dataSet.charAt(0).toUpperCase() + dataSet.slice(1)
                  } Dashboard`}
                  notificationCount={displayedNotificationCount}
                />
              </Box>
              <Typography variant="body2" sx={{ mt: 2 }} color="text.secondary">
                A wider navigation layout with collapsible groups and a profile
                section, suitable for content-rich applications.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>

      {/* New Compact Layout View */}
      <TabPanel value={tabValue} index={1}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom align="center">
            New Compact Layout Navigation
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "#f5f5f5",
              p: 3,
            }}
          >
            <Box sx={{ width: 350, height: 700, overflow: "hidden" }}>
              <CompactLayoutNavigation
                items={
                  dataSet === "learner"
                    ? [
                        { label: "Home", icon: learnerNavItems[0].icon },
                        { label: "Discover", icon: learnerNavItems[1].icon },
                        { label: "Events", icon: learnerNavItems[2].icon },
                        {
                          label: "Skills Builder",
                          icon: learnerNavItems[3].icon,
                        },
                        {
                          label: "My Team Skills",
                          icon: learnerNavItems[4].icon,
                        },
                      ]
                    : [
                        {
                          label: "Admin Dashboard",
                          icon: adminNavItems[0].icon,
                        },
                        {
                          label: "Learning Experiences",
                          icon: adminNavItems[1].icon,
                        },
                        { label: "Resources", icon: adminNavItems[2].icon },
                        { label: "Events", icon: adminNavItems[3].icon },
                        { label: "Playlists", icon: adminNavItems[4].icon },
                        { label: "Users", icon: adminNavItems[5].icon },
                        { label: "Groups", icon: adminNavItems[6].icon },
                        { label: "Settings", icon: adminNavItems[7].icon },
                        { label: "Tools", icon: adminNavItems[8].icon }, // Using adminDashboard icon as placeholder for Tools
                      ]
                }
                notificationCount={displayedNotificationCount}
              />
            </Box>
          </Box>
          <Typography variant="body2" sx={{ mt: 2 }} color="text.secondary">
            A new compact layout following the specified structure with Logo,
            Search, Main Navigation, App Switcher, Support, Notifications,
            Avatar Menu, and Collapse/Expand button. This layout puts important
            navigation elements at the top while keeping utilities at the
            bottom.
          </Typography>
        </Paper>
      </TabPanel>

      <Typography variant="body2" sx={{ mt: 6, mb: 2 }} color="text.secondary">
        Note: These are simplified prototypes to compare layout options. The
        final implementation will include all the required features from the
        EnhancedVerticalNavigation requirements.
      </Typography>
    </Container>
  );
};

export default NavigationPrototypes;
