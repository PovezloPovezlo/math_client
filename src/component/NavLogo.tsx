import React from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {createStyles, makeStyles, Theme, Toolbar, Typography} from "@material-ui/core";
import { AppBar } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    }),
);

interface NavLogoProps extends RouteComponentProps{
    pageTitle: string,
}

const NavLogo: React.FC<NavLogoProps> = (props) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        {props.pageTitle}
                    </Typography>
                </Toolbar>
            </AppBar>

        </>
    )
};

export default withRouter(NavLogo);