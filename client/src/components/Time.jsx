import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
}));

export default function Time(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const setSelectedTime = (e) => {
        props.getTime(e.target.value);
    };

    return (
        <div className={`${classes.root} time-tab`}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                
                >
                    <Tab label="Day" {...a11yProps(0)} className="ps-5"/>
                    <Tab label="Night" {...a11yProps(1)} className="pe-5" />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <button
                        value="12:00 pm-12:15 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        12:00 pm-12:15 pm
                    </button>
                    <button
                        value="12:15 pm-12:30 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        12:15 pm-12:30 pm
                    </button>
                    <button
                        value="12:30 pm-12:45 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        12:30 pm-12:45 pm
                    </button>
                    <button
                        value="12:45 pm-01:00 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        12:45 pm-01:00 pm
                    </button>
                    <button
                        value="01:00 pm-1:15 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        01:00 pm-1:15 pm
                    </button>
                    <button
                        value="01:15 pm-01:30 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        01:15 pm-01:30 pm
                    </button>
                    <button
                        value="01:30 pm-01:45 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        01:30 pm-01:45 pm
                    </button>
                    <button
                        value="01:45 pm-02:00 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        01:45 pm-02:00 pm
                    </button>
                    <button
                        value="02:00 pm-02:15 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        02:00 pm-02:15 pm
                    </button>
                    <button
                        value="02:15 pm-02:30 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        02:15 pm-02:30 pm
                    </button>
                    <button
                        value="02:30 pm-02:45 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        02:30 pm-02:45 pm
                    </button>
                    <button
                        value="02:45 pm-03:00 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        02:45 pm-03:00 pm
                    </button>
                    <button
                        value="03:00 pm-03:15 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        03:00 pm-03:15 pm
                    </button>
                    <button
                        value="03:15 pm-03:30 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        03:15 pm-03:30 pm
                    </button>
                    <button
                        value="03:30 pm-03:45 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        03:30 pm-03:45 pm
                    </button>
                    <button
                        value="03:45 pm-04:00 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        03:45 pm-04:00 pm
                    </button>
                    <button
                        value="04:00 pm-04:15 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        04:00 pm-04:15 pm
                    </button>
                    <button
                        value="04:15 pm-04:30 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        04:15 pm-04:30 pm
                    </button>
                    <button
                        value="04:30 pm-04:45 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        04:30 pm-04:45 pm
                    </button>
                    <button
                        value="04:45 pm-05:00 pm"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        04:45 pm-05:00 pm
                    </button>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <button
                        type="buttom"
                        value="12:00 am-12:15 am"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        12:00 am-12:15 am
                    </button>
                    <button
                        value="12:15 am-12:30 am"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        12:15 am-12:30 am
                    </button>
                    <button
                        value="12:30 am-12:45 am"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        12:30 am-12:45 am
                    </button>
                    <button
                        value="12:45 am-01:00 am"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        12:45 am-01:00 am
                    </button>
                    <button
                        value="01:00 am-01:15 am"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        01:00 am-01:15 am
                    </button>
                    <button
                        value="01:15 am-01:30 am"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        01:15 am-01:30 am
                    </button>
                    <button
                        value="01:30 am-01:45am"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        01:30 am-01:45am
                    </button>
                    <button
                        value="01:45 am-02:00 am"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        01:45 am-02:00 am
                    </button>
                    <button
                        value="02:00 am-02:15am"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        02:00 am-02:15am
                    </button>
                    <button
                        value="02:15 am-02:30 am"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        02:15 am-02:30 am
                    </button>
                    <button
                        value="02:30 am-02:45 am"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        02:30 am-02:45 am
                    </button>
                    <button
                        value="02:45 am-03:00 am"
                        className="btn btn-success d-block py-2 px-2 my-4 mx-auto"
                        style={{ fontSize: "1.4rem" }}
                        onClick={setSelectedTime}
                    >
                        02:45 am-03:00 am
                    </button>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}

