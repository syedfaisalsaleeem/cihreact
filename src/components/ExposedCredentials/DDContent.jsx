import React, { useEffect, useState , useContext } from "react";
import {
  Grid,
  Typography,
  Card,
  Paper,
  CardHeader,
  Divider,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import refresh from "../../Links/images/refresh.png";
import warning from "../../Links/images/warning.png";
import active from "../../Links/images/active.png";
import new1 from "../../Links/images/new.png";
import activesource from "../../Links/images/activesource.png";
import Progressbar from "./progressbar";
import BarGroup from "./BarGroup.jsx";
import Piechart from "./Piechart.jsx";
import drop from "../../Links/images/drop.png";
import Dropup from "./Dropup.jsx";
import Dropdown from "./Dropdown.jsx";
import GetAppIcon from "@material-ui/icons/GetApp";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import { FetchDataContext } from '../../context/FetchDataContext';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "44%",
    border: "0.6px solid #000000",
    borderRadius: "2px",
    fontStyle: "normal",
    fontSize: "10px",

    minWidth: "100px",
    color: "rgba(0, 0, 0, 0.6)",
  },
  h: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "27.9411px",
  },
  HeaderFont: {
    fontFamily: "Roboto",
    fontSize: "16.9411px",
    fontWeight: "bold",
    fontStyle: "normal",
  },
  progressfont: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",

    letterSpacing: "-0.0864285px",

    color: "#506883",
  },
  paper: {
    background: "#FFFFFF",
    boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
    borderRadius: "6px",
    padding: theme.spacing(2),
    height: "auto",

    width: "12vw",
    minWidth: "190px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  but: {
    display: "flex",

    width: "159px",
    height: "34px",
    marginTop: "14px",
    background: "#464E5F",
    border: "1px solid #000000",
    boxSizing: "border-box",
    borderRadius: "4px",
  },
  dot: {
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "60px",
    width: "60px",
    background: "black",
    borderRadius: "50%",
  },
  fontin: {
    paddingTop: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "18px",
    /* identical to box height, or 112% */

    color: "#B5B5C3",
  },
  f1: {
    width: "100%",
    boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
    borderRadius: "11.9747px",

    height: "422.11px",
  },
  f4: {
    width: "28vw",
    minWidth: "300px",
    boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
    borderRadius: "11.9747px",
    height: "380px",
  },
  f5: {
    width: "100%",
    boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
    borderRadius: "11.9747px",

    paddingBottom: "18px",
    height: "447px",
  },
  f2: {
    background: "#FFFFFF",
    boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
    borderRadius: "6px",

    height: "405px",
  },
  f3: {
    width: "33.3vw",
    minWidth: "400px",
    boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
    borderRadius: "11.9747px",
    height: "380px",
  },
  control: {
    padding: theme.spacing(2),
  },
}));
export default function SIContent() {



  const classes = useStyles();
  const [count, setcount] = useState();
  const [view, setview] = useState(true);
  const [dropc, setdrop] = useState(true);
  const [filter, setfilter] = useState(true);
  const handleview = () => {
    setview(true);
  };
  const handleview1 = () => {
    setview(false);
  };
  const handledrop = () => {
    setdrop(true);
  };
  const handledrop1 = () => {
    setdrop(false);
  };
  const calculate = () => {
    let char, calculate, x;
    char = (70 / 300) * 100;
    console.log(char, "char");
    x = Math.round(char);
    calculate = String(x).concat("%");

    setcount(calculate);
  };
  const changefilter = () => {
    setfilter(!filter);
  };
  useEffect(() => {
    calculate();
  });
  return (
    <div style={{ marginTop: "36px" }}>
      {dropc ? (
        <div>
          <Grid container className={classes.root} spacing={3}>
            <Grid item xs={12} md={12}>
              <Grid container justify="center">
                <Grid item xs={11} lg={10}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Typography variant="h5">Discussions</Typography>
                        </Grid>
                        <Grid item>
                          <LightTooltip title="See hackers discussing your organisation or tools to enable hacking. It also includes any disgruntled employees or ex-employees spreading rumours.">
                            <InfoOutlinedIcon />
                          </LightTooltip>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container justify="flex-end">
                        <Grid item xs={6}>
                          <Grid container justify="flex-end">
                            <IconButton>
                              <GetAppIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center" style={{ marginTop: "20px" }}>
                <Grid item xs={12} md={12} lg={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} lg={6}>
                      <Card className={classes.f5}>
                        <CardHeader
                          className={classes.HeaderFont}
                          disableTypography="true"
                          action={<IconButton color="primary"></IconButton>}
                          title={
                            <div style={{ display: "flex" }}>
                              <Typography>Discussions Trend </Typography>
                              <Grid item style={{ marginLeft: "10px" }}>
                                <LightTooltip title="This bar chart depicts the number of alerts found per month over the past two years.">
                                  <InfoOutlinedIcon />
                                </LightTooltip>
                              </Grid>
                            </div>
                          }
                        />
                        <Divider />
                        <BarGroup />
                      </Card>
                    </Grid>
                    <Grid item xs={4} lg={4}>
                      <Card className={classes.f5}>
                        <CardHeader
                          className={classes.HeaderFont}
                          disableTypography="true"
                          action={<IconButton color="primary"></IconButton>}
                          title={
                            <div style={{ display: "flex" }}>
                              <Typography>Location</Typography>
                              <Grid item style={{ marginLeft: "10px" }}>
                                <LightTooltip title="This pie chart depicts the percentage of alerts found on the dark web, deep web and data breaches. Adjust the chart by selecting one or more sources.">
                                  <InfoOutlinedIcon />
                                </LightTooltip>
                              </Grid>
                            </div>
                          }
                        />
                        <Divider />
                        <Piechart />
                      </Card>
                    </Grid>
                    <Grid item xs={2}>
                      <Card className={classes.f5}>
                        <Grid
                          container
                          direction="column"
                          style={{ height: "447px" }}
                          spacing={3}
                          justify="space-evenly"
                          alignItems="center"
                        >
                          <Grid item>
                            <Grid
                              container
                              direction="column"
                              alignItems="center"
                            >
                              <Grid
                                item
                                style={{
                                  color: "#464E5F",
                                  fontWeight: "bold",
                                  fontSize: "40px",
                                }}
                              >
                                158
                              </Grid>
                              <Grid
                                item
                                style={{
                                  color: "#B5B5C3",
                                  fontWeight: "500",
                                  fontSize: "12px;",
                                }}
                              >
                                Total Alerts Found
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Grid
                              container
                              direction="column"
                              alignItems="center"
                            >
                              <Grid
                                item
                                style={{
                                  color: "#464E5F",
                                  fontWeight: "bold",
                                  fontSize: "40px",
                                }}
                              >
                                3
                              </Grid>
                              <Grid
                                item
                                style={{
                                  color: "#B5B5C3",
                                  fontWeight: "500",
                                  fontSize: "12px;",
                                }}
                              >
                                Alert Found Today
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Grid
                              container
                              direction="column"
                              alignItems="center"
                            >
                              <Grid
                                item
                                style={{
                                  color: "#464E5F",
                                  fontWeight: "bold",
                                  fontSize: "40px",
                                }}
                              >
                                17
                              </Grid>
                              <Grid
                                item
                                style={{
                                  color: "#B5B5C3",
                                  fontWeight: "500",
                                  fontSize: "12px;",
                                }}
                              >
                                Alert Found Last month
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Grid
                              container
                              direction="column"
                              alignItems="center"
                            >
                              <Grid
                                item
                                style={{
                                  color: "#464E5F",
                                  fontWeight: "bold",
                                  fontSize: "40px",
                                }}
                              >
                                35
                              </Grid>
                              <Grid
                                item
                                style={{
                                  color: "#B5B5C3",
                                  fontWeight: "500",
                                  fontSize: "12px;",
                                }}
                              >
                                Alert Found Last 3 months
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* Charts  */}

            {/* Vertical Divider  */}
            <Grid item xs={12} style={{ display: dropc ? "block" : "none" }}>
              <Grid container justify="flex-end" alignItems="center">
                <Grid item xs={10} lg={10}>
                  <Divider style={{ height: "3px" }} />
                </Grid>
                <Grid item xs={1} lg={1} style={{ paddingLeft: "8px" }}>
                  <IconButton onClick={handledrop1}>
                    <img src={drop} />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>

            {/* Search  */}
            {/* {dropc?
<Dropup/>:

<Dropdown call={handledrop}/>

} */}
          </Grid>
          <Dropup filter={changefilter} filtervalue={filter} />
        </div>
      ) : (
        <div>
          <Dropdown
            call={handledrop}
            filter={changefilter}
            filtervalue={filter}
          />
        </div>
      )}
    </div>
  );
}
