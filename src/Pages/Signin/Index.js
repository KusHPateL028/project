import React, { useState } from "react"
import Layout from "../../Layout/Signin/Index"
import { useTheme } from '@mui/material/styles'
import { Tabs, Tab, Box, AppBar, Typography } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import PatientSignin from './PatientSignin'
import DoctorSignin from './DoctorSignin'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </Typography>
    );
}

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}

export default function Index() {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [role , setRole] = useState('Patient');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    return (
        <Layout height="970px" width="1100px">
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    width: "50%",
                    position: 'relative',
                }}
            >
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="none"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="action tabs example"
                    >
                        <Tab label="Patient" onClick={()=>setRole('Patient')} {...a11yProps(0)} sx={{ borderTopRightRadius: "8px", borderBottomRightRadius: "8px", background: value === 0 ? "linear-gradient(45deg, rgba(64,155,216,1) 0%, rgba(101,19,143,0.1) 55%)" : "" }} />
                        <Tab label="Doctor" onClick={()=>setRole('Doctor')} {...a11yProps(1)} sx={{ borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px", background: value === 1 ? "linear-gradient(315deg, rgba(64,155,216,1) 0%, rgba(101,19,143,0.1) 55%)" : "" }} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'ltr' ? 'x' : 'x-reverse'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <PatientSignin/>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <DoctorSignin />
                    </TabPanel>

                </SwipeableViews>

            </Box>

        </Layout>
    )
}