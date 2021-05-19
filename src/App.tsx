import {
    AppBar, Avatar, Button, ButtonGroup,
    Container, createStyles,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, makeStyles, Paper,
    ThemeProvider, Toolbar,
    Typography
} from '@material-ui/core';
import white from './theme/white';
import React, {useState} from 'react';
import { CssBaseline } from '@material-ui/core';
import {Route, BrowserRouter, Link, HashRouter, useLocation, useHistory} from "react-router-dom";
import Center from './component/Center';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Theme } from '@material-ui/core';
import MainPage from './page/MainPage';
import { ListItemAvatar } from '@material-ui/core';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ExposureZeroIcon from '@material-ui/icons/ExposureZero';
import PieChartIcon from '@material-ui/icons/PieChart';
import GroupIcon from '@material-ui/icons/Group';
import NPage from "./page/n/NPage";
import ZPage from "./page/z/ZPage";
import QPage from "./page/q/QPage";
import PPage from "./page/p/PPage";

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

function App() {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();

    let pageTitle = "";

    // я прекрасно понимаю, что это все можно нормально сделать, но: 1) нас поджимает время 2) это все равно не нужно будет поддерживать в будущем
    switch (location.pathname) {
        case "/":
            pageTitle = "Начало";
            break;
        case "/n":
            pageTitle = "Натуральные числа";
            break;
        case "/z":
            pageTitle = "Целые числа";
            break;
        case "/q":
            pageTitle = "Рациональные дроби";
            break;
        case "/p":
            pageTitle = "Многочлены";
            break;
        default:
            pageTitle = location.pathname + " (" + location.pathname.length + ")";
    }

    const isLoc = (s: string) => '/' + s === location.pathname;
    const to = (s: string) => () => history.push(s);

    return (
    <ThemeProvider theme={white}>
      <CssBaseline/>
      <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                  <Typography variant="h6" style={{color: "#fff"}} noWrap>
                      {pageTitle}
                  </Typography>
              </Toolbar>
          </AppBar>
          <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                  paper: classes.drawerPaper,
              }}
              anchor="left"
          >
              <div className={classes.toolbar}>
                  <Toolbar>
                      <Typography variant="h6" color="primary" onClick={to("")} noWrap>
                          Math client
                      </Typography>
                  </Toolbar>
              </div>
              <Divider />
              <List>
                  <ListItem button selected={isLoc("n")} key={"n"} onClick={to("n")}>
                      <ListItemIcon><ExposurePlus1Icon /></ListItemIcon>
                      <ListItemText primary="Натуральные числа" />
                  </ListItem>
                  <ListItem button selected={isLoc("z")} key={"z"} onClick={to("z")}>
                      <ListItemIcon><ExposureZeroIcon /></ListItemIcon>
                      <ListItemText primary="Целые числа" />
                  </ListItem>
                  <ListItem button selected={isLoc("q")} key={"q"} onClick={to("q")}>
                      <ListItemIcon><PieChartIcon /></ListItemIcon>
                      <ListItemText primary="Рациональные дроби" />
                  </ListItem>
                  <ListItem button selected={isLoc("p")} key={"p"} onClick={to("p")}>
                      <ListItemIcon><GroupIcon /></ListItemIcon>
                      <ListItemText primary="Многочлены" />
                  </ListItem>
              </List>
              <Divider />
              <List>
                  <ListItem button key={"noliktop"} onClick={() => window.open("https://vk.com/noliktop")}>
                      <ListItemAvatar>
                          <Avatar alt="NolikTop" src="https://sun9-17.userapi.com/s/v1/ig2/P42zrCHVlv2sXBXOXXH8-yz43mSppQm7EXMS7d8QQc-v-rqLpQQ0fuE38GZENESJxhblih3co_7aOoFbJkMoWjxi.jpg?size=100x0&quality=96&crop=572,842,607,607&ava=1" />
                      </ListItemAvatar>
                      <ListItemText
                          primary={"Айдан Миннегараев"}
                          secondary={"Архитектор"}
                      />
                  </ListItem>
                  <ListItem button key={"kabanc"} onClick={() => window.open("https://vk.com/kabanc")}>
                      <ListItemAvatar>
                          <Avatar alt="KabanC" src="https://sun9-19.userapi.com/s/v1/ig2/86xw1hS50lqlZxPXp4jrJJzSFEabL2TKNh9I_6JxBkkSNcyCjXKKgZECVHbRzZH_64Ae5AmXQb_peVLOBMLbzO-G.jpg?size=50x0&quality=96&crop=22,3,1644,1644&ava=1" />
                      </ListItemAvatar>
                      <ListItemText
                          primary={"Валерий Феданков"}
                          secondary={"Ответственный за качество"}
                      />
                  </ListItem>
              </List>
          </Drawer>

          <main className={classes.content}>
              <div className={classes.toolbar} />

              <Route path="/" exact component={MainPage} />
              <Route path="/n" exact component={NPage} />
              <Route path="/z" exact component={ZPage} />
              <Route path="/q" exact component={QPage} />
              <Route path="/p" exact component={PPage} />
          </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
