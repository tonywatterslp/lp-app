import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    Divider,
    Paper,
} from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MailIcon from '@mui/icons-material/Mail';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import PersonIcon from '@mui/icons-material/Person';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const LeftNavbar = () => {
    const [dataOpen, setDataOpen] = useState(false);
    const [appSwitcherOpen, setAppSwitcherOpen] = useState(false);
    const [supportOpen, setSupportOpen] = useState(false);

    const handleDataClick = () => {
        setDataOpen(!dataOpen);
    };

    const handleAppSwitcherClick = () => {
        setAppSwitcherOpen(!appSwitcherOpen);
    };

    const handleSupportClick = () => {
        setSupportOpen(!supportOpen);
    };

    return (
        <Drawer variant="permanent">
            <Paper style={{ position: 'relative', height: '100%' }}>
                {/* Placeholder for VertNavBrand (replace with your implementation) */}
                <div style={{ padding: '16px', borderBottom: '1px solid #ccc' }}>
                    VertNavBrand Placeholder
                </div>

                <List style={{ flexGrow: 1 }}>
                    {/* Data Section */}
                    <ListItem button onClick={handleDataClick}>
                        <ListItemIcon>
                            <StorageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Data" />
                        {dataOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                    <Collapse in={dataOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <ListItemIcon>
                                    {/* <ListAltIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Data Source" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    {/* <StorageIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Storage" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    {/* <DashboardIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Dashboards" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    {/* <ShowChartIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Visualise" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    {/* <MailIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Journeys" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>

                {/* Support Section */}
                <List style={{ position: 'absolute', bottom: 0 }}>
                    {/* Divider above Support */}
                    <Divider />
                    <ListItem button onClick={handleSupportClick}>
                        <ListItemIcon>
                            <HelpOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Support" />
                        {supportOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                    <Collapse in={supportOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <ListItemIcon>
                                    {/* <HelpOutlineIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Help Center" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    {/* <ArrowForwardIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Submit Feedback" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    {/* <ArrowForwardIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Contact Us" />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* App Switcher */}
                    <ListItem button onClick={handleAppSwitcherClick}>
                        <ListItemIcon>
                            <AppsIcon />
                        </ListItemIcon>
                        <ListItemText primary="App Switcher" />
                    </ListItem>

                    {/* Profile Section */}
                    <ListItem button>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tony Watters" />
                    </ListItem>
                </List>
            </Paper>
        </Drawer>
    );
};

export default LeftNavbar;
