import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        minHeight: 800,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        minWidth: 200
    },
}));

interface PageProps {
    tabs: {[Key: string]: React.ReactNode}
}

const Page: React.FC<PageProps> = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const tabsNames = Object.keys(props.tabs).map((value1, index) =>
        <Tab label={value1} {...a11yProps(index)} />
    );

    const tabs = Object.keys(props.tabs).map(((value1, index) =>
            <TabPanel value={value} index={index}>
                {props.tabs[value1]}
            </TabPanel>
    ));

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Действия"
                className={classes.tabs}
            >
                {tabsNames}
            </Tabs>
            {tabs}
        </div>
    );
};

export default Page;