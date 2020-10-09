import React from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Home from "../../Links/images/dashboard.png";
import Discover from "../../Links/images/discovery.png";
import Exposed from "../../Links/images/information.png";
import Monitored from "../../Links/images/exposedsystems.png";
import Settings from "../../Links/images/settings.png";
import Support from "../../Links/images/support.png";
import Network from "../../Links/images/network.png";

import Side from "../../Links/images/side.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Swindow from "../Settings/Swindow";
import ContactC from "../Support/ContactC";
import ContactE from "../Support/Contactemail";
import NContent from "../Notification/NContent";
import Dcontent from "../Drawer/Dashboard/Dcontent";
import EContent from "../Exposed/EContent";
import BMContent from "../blackmarkets/BMContent";
import DDContent from "../discussions/DDContent";
import SIContent from "../sensitiveinformation/SIContent";
import HContent from "../Home/HContent";
import MContent from "../Monitored/MContent";
import DiscoverContent from "../Discover1/DiscoverContent";
import FContent from "../financial/FContent";
import ECContent from "../ExposedCredentials/FContent";
import PIContent from "../personalinformation/PIContent";
import HGTContent from "../hackergrouptargeting/HGTContent";
import AACContent from "../attacksandcompromises/AACContent";
import UAContent from "../underanalysis/UAContent";
import RContent from "../remediation/FContent";

const drawerWidth = 255;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  ltext: {},
  ltext1: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    height: "58px",
    color: "white",
    "&:hover": {},
  },
  ltext2: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    color: "white",
    "&:hover": {
      cursor: "pointer",
      background: "rgba(108, 114, 147, 0.3)",
    },
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    display: "flex",
    width: drawerWidth,
    marginTop: "70px",
    backgroundColor: "#1E1E2D",
    color: "white",
    paddingBottom: "70px",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
const initialState = {
  home: false,
  discover: false,
  exposedinformation: false,
  all: {
    allalerts: false,
    sensitiveinformation: false,
    discussions: false,
    blackmarkets: false,
    financial: false,
    exposedcredentials: false,
    personalinformation: false,
    hackergrouptargeting: false,
    attacksandcompromises: false,
    underanalysis: false,
    remediation: false,
  },
  exposedsystems: false,
  exposedpeople: false,
  settings: false,
  support: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "home1":
      return { ...state, home: true };
    case "home":
      // Object.size = function(obj) {
      //     var size = 0, key;
      //     for (key in obj) {
      //         if (obj.hasOwnProperty(key)) size++;
      //     }
      //     return size;
      // };

      // Get the size of an object
      // var size = Object.size(state);
      //   console.log(size)
      var storing = "";
      var storingvalue = "";
      var all = Object.assign(
        ...Object.keys(state.all).map((k) => ({ [k]: false }))
      );
      var size = 0,
        key;

      for (key in state) {
        // console.log(key)
        if (state[key] === true) {
          var storing = key;
          var storingvalue = state[key];
        }
      }
      // Object.keys(state).map((value,index)=>
      //   console.log(state[value],index)

      // )
      if (
        state.home === false &&
        storing.length === 0 &&
        storingvalue.length === 0
      ) {
        return {
          ...state,
          home: !action.payload,
          all,
        };
      } else if (state.home === false) {
        return {
          ...state,
          home: !action.payload,
          [storing]: !storingvalue,
          all,
        };
      } else {
        return {
          ...state,
          home: action.payload,
        };
      }
    case "exposedinformation1":
      return { ...state, exposedinformation: true };
    case "exposedinformation":
      var storing = "";
      var storingvalue = "";
      var all = Object.assign(
        ...Object.keys(state.all).map((k) => ({ [k]: false }))
      );
      var size = 0,
        key;
      for (key in state) {
        console.log(key);
        if (state[key] === true) {
          var storing = key;
          var storingvalue = state[key];
        }
      }
      console.log(all);
      if (
        state.exposedinformation === false &&
        storing.length === 0 &&
        storingvalue.length === 0
      ) {
        return {
          ...state,
          exposedinformation: !action.payload,
          all,
        };
      } else if (state.exposedinformation === false) {
        return {
          ...state,
          exposedinformation: !action.payload,
          [storing]: !storingvalue,
          all,
        };
      } else {
        return {
          ...state,
          exposedinformation: action.payload,
        };
      }
    case "settings1":
      return { ...state, settings: true };
    case "settings2":
      return { ...state, settings: action.payload };
    case "settings":
      var storing = "";
      var storingvalue = "";
      var all = Object.assign(
        ...Object.keys(state.all).map((k) => ({ [k]: false }))
      );
      var size = 0,
        key;
      for (key in state) {
        console.log(key);
        if (state[key] === true) {
          var storing = key;
          var storingvalue = state[key];
        }
      }
      if (
        state.settings === false &&
        storing.length === 0 &&
        storingvalue.length === 0
      ) {
        return {
          ...state,
          settings: !action.payload,
          all,
        };
      } else if (state.settings === false) {
        return {
          ...state,
          settings: !action.payload,
          [storing]: !storingvalue,
          all,
        };
      } else {
        return {
          ...state,
          settings: action.payload,
        };
      }
    case "exposedsystems1":
      return { ...state, exposedsystems: true };
    case "exposedsystems":
      var storing = "";
      var storingvalue = "";
      var all = Object.assign(
        ...Object.keys(state.all).map((k) => ({ [k]: false }))
      );
      var size = 0,
        key;
      for (key in state) {
        console.log(key);
        if (state[key] === true) {
          var storing = key;
          var storingvalue = state[key];
        }
      }
      if (
        state.exposedsystems === false &&
        storing.length === 0 &&
        storingvalue.length === 0
      ) {
        return {
          ...state,
          exposedsystems: !action.payload,
          all,
        };
      } else if (state.exposedsystems === false) {
        return {
          ...state,
          exposedsystems: !action.payload,
          [storing]: !storingvalue,
          all,
        };
      } else {
        return {
          ...state,
          exposedsystems: action.payload,
        };
      }
    case "support1":
      return { ...state, support: true };
    case "support2":
      return { ...state, support: action.payload };
    case "support":
      var storing = "";
      var storingvalue = "";
      var all = Object.assign(
        ...Object.keys(state.all).map((k) => ({ [k]: false }))
      );
      var size = 0,
        key;
      for (key in state) {
        console.log(key);
        if (state[key] === true) {
          var storing = key;
          var storingvalue = state[key];
        }
      }
      if (
        state.support === false &&
        storing.length === 0 &&
        storingvalue.length === 0
      ) {
        return {
          ...state,
          support: !action.payload,
          all,
        };
      } else if (state.support === false) {
        return {
          ...state,
          support: !action.payload,
          [storing]: !storingvalue,
          all,
        };
      } else {
        return {
          ...state,
          support: action.payload,
        };
      }
    case "discover1":
      return { ...state, discover: true };
    case "discover":
      var storing = "";
      var storingvalue = "";
      var all = Object.assign(
        ...Object.keys(state.all).map((k) => ({ [k]: false }))
      );
      var size = 0,
        key;
      for (key in state) {
        console.log(key);
        if (state[key] === true) {
          var storing = key;
          var storingvalue = state[key];
        }
      }
      if (
        state.discover === false &&
        storing.length === 0 &&
        storingvalue.length === 0
      ) {
        return {
          ...state,
          discover: !action.payload,
          all,
        };
      } else if (state.discover === false) {
        return {
          ...state,
          discover: !action.payload,
          [storing]: !storingvalue,
          all,
        };
      } else {
        return {
          ...state,
          discover: action.payload,
        };
      }
    case action.payload.value:
      var storing = "";
      var storingvalue = "";
      var size = 0,
        key;
      for (key in state.all) {
        console.log(key);
        if (state.all[key] === true) {
          console.log("working");
          var storing = key;
          var storingvalue = state.all[key];
        }
      }
      console.log(storing.length, storingvalue.length, "type");
      console.log([action.payload.value], "ssdd", action.payload.state);
      if (
        state.all[action.payload.value] === false &&
        storing.length === 0 &&
        storingvalue.length === 0
      ) {
        return {
          ...state,
          discover: false,
          home: false,
          exposedinformation: false,
          exposedsystems: false,
          exposedpeople: false,
          settings: false,
          support: false,
          all: { ...state.all, [action.payload.value]: !action.payload.state },
        };
      } else if (state.all[action.payload.value] === false) {
        return {
          ...state,
          dicover: false,
          home: false,
          exposedinformation: false,
          exposedsystems: false,
          exposedpeople: false,
          settings: false,
          support: false,
          all: {
            ...state.all,
            [action.payload.value]: !action.payload.state,
            [storing]: !storingvalue,
          },
        };
      } else {
        return {
          ...state,
          all: { ...state.all, [action.payload.value]: action.payload.state },
        };
      }
  }
}
export default function MainDrawer(props) {
  const classes = useStyles();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(false);
  console.log(props.call);
  const control = () => {
    setOpen1(!open1);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    console.log(window.location.href);
    if (window.location.href.includes("/MDashBoard/Home") === true) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({ type: "home1", payload: true });
      };
      f();
    } else if (window.location.href.includes("/MDashBoard/Settings") === true) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({ type: "settings1", payload: true });
      };
      f();
    } else if (window.location.href.includes("/MDashBoard/Support") === true) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({ type: "support1", payload: true });
      };
      f();
    } else if (
      window.location.href.includes("/MDashBoard/ExposedSystems") === true
    ) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({ type: "exposedsystems1", payload: true });
      };
      f();
    } else if (window.location.href.includes("/MDashBoard/Discover") === true) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({ type: "discover1", payload: true });
      };
      f();
    } else if (
      window.location.href.includes("MDashBoard/ExposedInformation") === true
    ) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({
          type: "allalerts",
          payload: { value: "allalerts", state: state.all.allalerts },
        });
      };
      f();
      setOpen1(true);
    } else if (
      window.location.href.includes("MDashBoard/BlackMarket") === true
    ) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({
          type: "blackmarkets",
          payload: { value: "blackmarkets", state: state.all.blackmarkets },
        });
      };
      f();
      setOpen1(true);
    } else if (
      window.location.href.includes("MDashBoard/Discussion") === true
    ) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({
          type: "discussions",
          payload: { value: "discussions", state: state.all.discussions },
        });
      };
      f();
      setOpen1(true);
    } else if (
      window.location.href.includes("/MDashBoard/SensitiveInformation") === true
    ) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({
          type: "sensitiveinformation",
          payload: {
            value: "sensitiveinformation",
            state: state.all.sensitiveinformation,
          },
        });
      };
      f();
      setOpen1(true);
    } else if (
      window.location.href.includes("/MDashBoard/Financial") === true
    ) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({
          type: "financial",
          payload: { value: "financial", state: state.all.financial },
        });
      };
      f();
      setOpen1(true);
    } else if (
      window.location.href.includes("/MDashBoard/ExposedCredentials") === true
    ) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({
          type: "exposedcredentials",
          payload: {
            value: "exposedcredentials",
            state: state.all.exposedcredentials,
          },
        });
      };
      f();
      setOpen1(true);
    } else if (
      window.location.href.includes("/MDashBoard/PersonalInformation") === true
    ) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({
          type: "personalinformation",
          payload: {
            value: "personalinformation",
            state: state.all.personalinformation,
          },
        });
      };
      f();
      setOpen1(true);
    } else if (
      window.location.href.includes("/MDashBoard/HackerGroupTargeting") === true
    ) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({
          type: "hackergrouptargeting",
          payload: {
            value: "hackergrouptargeting",
            state: state.all.hackergrouptargeting,
          },
        });
      };
      f();
      setOpen1(true);
    } else if (
      window.location.href.includes("/MDashBoard/AttackandCompromises") === true
    ) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({
          type: "attacksandcompromises",
          payload: {
            value: "attacksandcompromises",
            state: state.all.attacksandcompromises,
          },
        });
      };
      f();
      setOpen1(true);
    } else if (
      window.location.href.includes("/MDashBoard/UnderAnalysis") === true
    ) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({
          type: "underanalysis",
          payload: { value: "underanalysis", state: state.all.underanalysis },
        });
      };
      f();
      setOpen1(true);
    } else if (
      window.location.href.includes("/MDashBoard/Remediation") === true
    ) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({
          type: "remediation",
          payload: { value: "remediation", state: state.all.remediation },
        });
      };
      f();
      setOpen1(true);
    } else if (window.location.href.includes("/MDashBoard/") === true) {
      console.log(window.location.href, "working");
      const f = () => {
        dispatch({ type: "exposedinformation1", payload: true });
      };
      f();
    } else {
      const f = () => {
        dispatch({ type: "exposedinformation1", payload: true });
      };
      f();
    }
  }, []);

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={props.call}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Divider />
          <List className={classes.ltext}>
            <Link to="/MDashBoard/Home">
              <ListItem
                style={{
                  backgroundColor: state.home
                    ? "rgba(108, 114, 147, 0.3)"
                    : "#1E1E2D",
                }}
                className={classes.ltext1}
                onClick={() => dispatch({ type: "home", payload: state.home })}
              >
                <ListItemIcon style={{ marginLeft: "-5px" }}>
                  <img src={Home} width="28px" height="28px" />{" "}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      style={{
                        fontSize: "13px",
                        marginLeft: "-14px",
                        color: "white",
                        marginTop: "0px",
                      }}
                    >
                      Home
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
            <Link to="/MDashBoard/Discover">
              <ListItem
                className={classes.ltext1}
                style={{
                  backgroundColor: state.discover
                    ? "rgba(108, 114, 147, 0.3)"
                    : "#1E1E2D",
                }}
                className={classes.ltext1}
                onClick={() =>
                  dispatch({ type: "discover", payload: state.discover })
                }
              >
                <ListItemIcon style={{ marginLeft: "-5px" }}>
                  <img src={Discover} width="28px" height="28px" />{" "}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      style={{
                        fontSize: "13px",
                        marginLeft: "-14px",
                        color: "white",
                        marginTop: "0px",
                      }}
                    >
                      Discover
                    </Typography>
                  }
                />
              </ListItem>
            </Link>

            <ListItem
              className={classes.ltext1}
              style={{
                backgroundColor: state.exposedinformation
                  ? "rgba(108, 114, 147, 0.3)"
                  : "#1E1E2D",
              }}
            >
              <ListItemIcon style={{ marginLeft: "-5px" }}>
                <img src={Exposed} width="28px" height="28px" />{" "}
              </ListItemIcon>
              <ListItemText
                primary={
                  <div style={{ display: "flex", width: "100%" }}>
                    <div>
                      <Link to="/MDashBoard/">
                        <pre
                          onClick={() =>
                            dispatch({
                              type: "exposedinformation",
                              payload: state.exposedinformation,
                            })
                          }
                          style={{
                            fontSize: "13px",
                            marginLeft: "-14px",
                            color: "white",
                            marginTop: "14px",
                            fontFamily: "Roboto",
                          }}
                        >
                          Exposed Information
                        </pre>
                      </Link>
                    </div>
                    <div style={{ paddingLeft: "10px" }}>
                      <IconButton style={{ color: "white" }} onClick={control}>
                        <ExpandMoreIcon />
                      </IconButton>
                    </div>
                  </div>
                }
              />
            </ListItem>
            <div style={{ display: open1 ? "block" : "none" }}>
              <Link to="/MDashBoard/ExposedInformation">
                <ListItem
                  className={classes.ltext2}
                  onClick={() =>
                    dispatch({
                      type: "allalerts",
                      payload: {
                        value: "allalerts",
                        state: state.all.allalerts,
                      },
                    })
                  }
                >
                  <ListItemIcon
                    style={{
                      display: state.all.allalerts ? "block" : "none",
                      marginLeft: "-20px",
                    }}
                  >
                    <img src={Side} />{" "}
                  </ListItemIcon>

                  <ListItemText
                    style={{ marginLeft: "20px" }}
                    primary={
                      <Typography style={{ color: "white", fontSize: "14px" }}>
                        All Alerts
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
              <Link to="/MDashBoard/SensitiveInformation">
                <ListItem
                  className={classes.ltext2}
                  onClick={() =>
                    dispatch({
                      type: "sensitiveinformation",
                      payload: {
                        value: "sensitiveinformation",
                        state: state.all.sensitiveinformation,
                      },
                    })
                  }
                >
                  <ListItemIcon
                    style={{
                      display: state.all.sensitiveinformation
                        ? "block"
                        : "none",
                      marginLeft: "-20px",
                    }}
                  >
                    <img src={Side} />{" "}
                  </ListItemIcon>

                  <ListItemText
                    style={{ marginLeft: "20px" }}
                    primary={
                      <Typography style={{ color: "white", fontSize: "14px" }}>
                        Sensitive Information
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
              <Link to="/MDashBoard/Discussion">
                <ListItem
                  className={classes.ltext2}
                  onClick={() =>
                    dispatch({
                      type: "discussions",
                      payload: {
                        value: "discussions",
                        state: state.all.discussions,
                      },
                    })
                  }
                >
                  <ListItemIcon
                    style={{
                      display: state.all.discussions ? "block" : "none",
                      marginLeft: "-20px",
                    }}
                  >
                    <img src={Side} />{" "}
                  </ListItemIcon>

                  <ListItemText
                    style={{ marginLeft: "20px" }}
                    primary={
                      <Typography style={{ color: "white", fontSize: "14px" }}>
                        Discussions
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
              <Link to="/MDashBoard/BlackMarket">
                <ListItem
                  className={classes.ltext2}
                  onClick={() =>
                    dispatch({
                      type: "blackmarkets",
                      payload: {
                        value: "blackmarkets",
                        state: state.all.blackmarkets,
                      },
                    })
                  }
                >
                  <ListItemIcon
                    style={{
                      display: state.all.blackmarkets ? "block" : "none",
                      marginLeft: "-20px",
                    }}
                  >
                    <img src={Side} />{" "}
                  </ListItemIcon>

                  <ListItemText
                    style={{ marginLeft: "20px" }}
                    primary={
                      <Typography style={{ color: "white", fontSize: "14px" }}>
                        Black Markets
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
              <Link to="/MDashBoard/Financial">
                <ListItem
                  className={classes.ltext2}
                  onClick={() =>
                    dispatch({
                      type: "financial",
                      payload: {
                        value: "financial",
                        state: state.all.financial,
                      },
                    })
                  }
                >
                  <ListItemIcon
                    style={{
                      display: state.all.financial ? "block" : "none",
                      marginLeft: "-20px",
                    }}
                  >
                    <img src={Side} />{" "}
                  </ListItemIcon>

                  <ListItemText
                    style={{ marginLeft: "20px" }}
                    primary={
                      <Typography style={{ color: "white", fontSize: "14px" }}>
                        Financial
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
              <Link to="/MDashBoard/ExposedCredentials">
                <ListItem
                  className={classes.ltext2}
                  onClick={() =>
                    dispatch({
                      type: "exposedcredentials",
                      payload: {
                        value: "exposedcredentials",
                        state: state.all.exposedcredentials,
                      },
                    })
                  }
                >
                  <ListItemIcon
                    style={{
                      display: state.all.exposedcredentials ? "block" : "none",
                      marginLeft: "-20px",
                    }}
                  >
                    <img src={Side} />{" "}
                  </ListItemIcon>

                  <ListItemText
                    style={{ marginLeft: "20px" }}
                    primary={
                      <Typography style={{ color: "white", fontSize: "14px" }}>
                        Exposed Credentials
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
              <Link to="/MDashBoard/PersonalInformation">
                <ListItem
                  className={classes.ltext2}
                  onClick={() =>
                    dispatch({
                      type: "personalinformation",
                      payload: {
                        value: "personalinformation",
                        state: state.all.personalinformation,
                      },
                    })
                  }
                >
                  <ListItemIcon
                    style={{
                      display: state.all.personalinformation ? "block" : "none",
                      marginLeft: "-20px",
                    }}
                  >
                    <img src={Side} />{" "}
                  </ListItemIcon>

                  <ListItemText
                    style={{ marginLeft: "20px" }}
                    primary={
                      <Typography style={{ color: "white", fontSize: "14px" }}>
                        Personal Information
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
              <Link to="/MDashBoard/HackerGroupTargeting">
                <ListItem
                  className={classes.ltext2}
                  onClick={() =>
                    dispatch({
                      type: "hackergrouptargeting",
                      payload: {
                        value: "hackergrouptargeting",
                        state: state.all.hackergrouptargeting,
                      },
                    })
                  }
                >
                  <ListItemIcon
                    style={{
                      display: state.all.hackergrouptargeting
                        ? "block"
                        : "none",
                      marginLeft: "-20px",
                    }}
                  >
                    <img src={Side} />{" "}
                  </ListItemIcon>

                  <ListItemText
                    style={{ marginLeft: "20px" }}
                    primary={
                      <Typography style={{ color: "white", fontSize: "14px" }}>
                        Hacker Group Targeting
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
              <Link to="/MDashBoard/AttackandCompromises">
                <ListItem
                  className={classes.ltext2}
                  onClick={() =>
                    dispatch({
                      type: "attacksandcompromises",
                      payload: {
                        value: "attacksandcompromises",
                        state: state.all.attacksandcompromises,
                      },
                    })
                  }
                >
                  <ListItemIcon
                    style={{
                      display: state.all.attacksandcompromises
                        ? "block"
                        : "none",
                      marginLeft: "-20px",
                    }}
                  >
                    <img src={Side} />{" "}
                  </ListItemIcon>

                  <ListItemText
                    style={{ marginLeft: "20px" }}
                    primary={
                      <Typography style={{ color: "white", fontSize: "14px" }}>
                        Attacks & Compromises
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
              <Link to="/MDashBoard/UnderAnalysis">
                <ListItem
                  className={classes.ltext2}
                  onClick={() =>
                    dispatch({
                      type: "underanalysis",
                      payload: {
                        value: "underanalysis",
                        state: state.all.underanalysis,
                      },
                    })
                  }
                >
                  <ListItemIcon
                    style={{
                      display: state.all.underanalysis ? "block" : "none",
                      marginLeft: "-20px",
                    }}
                  >
                    <img src={Side} />{" "}
                  </ListItemIcon>
                  <ListItemText
                    style={{ marginLeft: "20px" }}
                    primary={
                      <Typography style={{ color: "white", fontSize: "14px" }}>
                        Under Analysis
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
              <Link to="/MDashBoard/Remediation">
                <ListItem
                  className={classes.ltext2}
                  onClick={() =>
                    dispatch({
                      type: "remediation",
                      payload: {
                        value: "remediation",
                        state: state.all.remediation,
                      },
                    })
                  }
                >
                  <ListItemIcon
                    style={{
                      display: state.all.remediation ? "block" : "none",
                      marginLeft: "-20px",
                    }}
                  >
                    <img src={Side} />{" "}
                  </ListItemIcon>

                  <ListItemText
                    style={{ marginLeft: "20px" }}
                    primary={
                      <Typography style={{ color: "white", fontSize: "14px" }}>
                        Remediation
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            </div>
            <Link to="/MDashBoard/ExposedSystems">
              <ListItem
                className={classes.ltext1}
                style={{
                  backgroundColor: state.exposedsystems
                    ? "rgba(108, 114, 147, 0.3)"
                    : "#1E1E2D",
                }}
                className={classes.ltext1}
                onClick={() =>
                  dispatch({
                    type: "exposedsystems",
                    payload: state.exposedsystems,
                  })
                }
              >
                <ListItemIcon style={{ marginLeft: "-5px" }}>
                  <img src={Monitored} width="28px" height="28px" />{" "}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      style={{
                        fontSize: "13px",
                        marginLeft: "-14px",
                        color: "white",
                        marginTop: "0px",
                      }}
                    >
                      Exposed Systems
                    </Typography>
                  }
                />
              </ListItem>
            </Link>

            <ListItem className={classes.ltext1}>
              <ListItemIcon style={{ marginLeft: "-5px" }}>
                <img src={Network} width="28px" height="28px" />{" "}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    style={{
                      fontSize: "13px",
                      marginLeft: "-14px",
                      color: "white",
                      marginTop: "0px",
                    }}
                  >
                    Exposed People
                  </Typography>
                }
              />
            </ListItem>

            <Link to="/MDashBoard/Settings">
              <ListItem
                className={classes.ltext1}
                style={{
                  backgroundColor: state.settings
                    ? "rgba(108, 114, 147, 0.3)"
                    : "#1E1E2D",
                }}
                className={classes.ltext1}
                onClick={() =>
                  dispatch({ type: "settings", payload: state.settings })
                }
              >
                <ListItemIcon style={{ marginLeft: "-5px" }}>
                  <img src={Settings} width="28px" height="28px" />{" "}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      style={{
                        fontSize: "13px",
                        marginLeft: "-14px",
                        color: "white",
                        marginTop: "0px",
                      }}
                    >
                      Settings
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
            <Link to="/MDashBoard/Support">
              <ListItem
                className={classes.ltext1}
                style={{
                  backgroundColor: state.support
                    ? "rgba(108, 114, 147, 0.3)"
                    : "#1E1E2D",
                }}
                onClick={() =>
                  dispatch({ type: "support", payload: state.support })
                }
              >
                <ListItemIcon style={{ marginLeft: "-5px" }}>
                  <img src={Support} width="28px" height="28px" />{" "}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      style={{
                        fontSize: "13px",
                        marginLeft: "-14px",
                        color: "white",
                        marginTop: "0px",
                      }}
                    >
                      Support
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
          </List>
        </Drawer>

        <main
          className={clsx(classes.content, {
            [classes.contentShift]: props.call,
          })}
        >
          <div className={classes.drawerHeader} />

          <Route path="/MDashBoard/Home" component={HContent} exact />
          <Route path="/MDashBoard/Settings" component={Swindow} exact />
          <Route path="/MDashBoard/Support" component={ContactC} exact />
          <Route path="/MDashBoard/Email" component={ContactE} exact />
          <Route
            path="/MDashBoard/Discover"
            component={DiscoverContent}
            exact
          />
          <Route path="/MDashBoard/Notification" component={NContent} exact />
          <Route path="/MDashBoard/" component={Dcontent} exact />
          <Route path="/MDashBoard/ExposedSystems" component={MContent} exact />
          <Route
            path="/MDashBoard/ExposedInformation"
            component={EContent}
            exact
          />
          <Route path="/MDashBoard/BlackMarket" component={BMContent} exact />
          <Route path="/MDashBoard/Discussion" component={DDContent} exact />
          <Route
            path="/MDashBoard/SensitiveInformation"
            component={SIContent}
            exact
          />
          <Route path="/MDashBoard/Financial" component={FContent} exact />
          <Route
            path="/MDashBoard/ExposedCredentials"
            component={ECContent}
            exact
          />
          <Route
            path="/MDashBoard/PersonalInformation"
            component={PIContent}
            exact
          />
          <Route
            path="/MDashBoard/HackerGroupTargeting"
            component={HGTContent}
            exact
          />
          <Route
            path="/MDashBoard/AttackandCompromises"
            component={AACContent}
            exact
          />
          <Route path="/MDashBoard/UnderAnalysis" component={UAContent} exact />
          <Route path="/MDashBoard/Remediation" component={RContent} exact />
        </main>
      </div>
    </BrowserRouter>
  );
}
