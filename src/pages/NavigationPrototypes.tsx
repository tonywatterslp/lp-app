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
} from "@mui/material";

// Import our navigation prototypes
import CompactNavigation from "../components/NavigationPrototypes/CompactNavigation";
import TabNavigation from "../components/NavigationPrototypes/TabNavigation";
import GroupedNavigation from "../components/NavigationPrototypes/GroupedNavigation";

// Import navigation data
import {
  adminNavItems,
  adminSecondaryNavItems,
  learnerNavItems,
  learnerSecondaryNavItems,
} from "../data/navigationData";

const NavigationPrototypes = () => {
  // State for controls
  const [dataSet, setDataSet] = useState<"admin" | "learner">("admin");
  const [notificationCount, setNotificationCount] = useState<number>(5);
  const [showNotifications, setShowNotifications] = useState<boolean>(true);

  // Get the correct nav items based on selection
  const navItems = dataSet === "admin" ? adminNavItems : learnerNavItems;
  const secondaryNavItems =
    dataSet === "admin" ? adminSecondaryNavItems : learnerSecondaryNavItems;

  // Calculate notification count based on switch
  const displayedNotificationCount = showNotifications ? notificationCount : 0;

  const handleDataSetChange = (event: SelectChangeEvent) => {
    setDataSet(event.target.value as "admin" | "learner");
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

      {/* Prototype Display */}
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
              A compact vertical navigation with collapsible drawer that toggles
              between an icon-only and full-width view.
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

      <Typography variant="body2" sx={{ mt: 6, mb: 2 }} color="text.secondary">
        Note: These are simplified prototypes to compare layout options. The
        final implementation will include all the required features from the
        EnhancedVerticalNavigation requirements.
      </Typography>
    </Container>
  );
};

export default NavigationPrototypes;
