import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import customClasses from "./Table2.module.css";
import Tooltip from "@material-ui/core/Tooltip";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import LatestCard from "../ExposedCredentials/LatestCard.jsx";
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      
    },
  },
});

function createData(
  remediationAction,
  affects,
  risk,
  cisControl,
  timeToExploit
) {
  return {
    remediationAction,
    affects,
    risk,
    cisControl,
    timeToExploit,
  };
}

function Row(props) {
  const { row } = props;
  const classes = useRowStyles();
  const [open, changeopen1] = React.useState(false);
  const handle = () => {
    changeopen1(!open);
  };
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell
          align="left"
          component="th" 
          scope="row"
          style={{ width: "30%",border: "1px solid #aaa" }}
        >
          {row.remediationAction}
        </TableCell>
        <TableCell align="left" style={{ width: "10%", paddingLeft: "2rem",border: "1px solid #aaa" }}>
          {row.affects}
        </TableCell>
        <TableCell align="left" style={{ width: "10%", paddingLeft: "2rem",border: "1px solid #aaa" }}>
          {" "}
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "bold" }}
          ></Typography>{" "}
          {row.risk}
        </TableCell>
        <TableCell align="left" style={{ width: "10%",border: "1px solid #aaa" }}>
          {row.cisControl}
        </TableCell>
        <TableCell align="left" style={{ width: "10%", paddingLeft: "2rem",border: "1px solid #aaa" }}>
          {row.timeToExploit}
        </TableCell>
        <TableCell align="center" style={{ width: "20%",borderBottom: "1px solid #aaa" }}>
          <Button
            style={{
              textTransform: "capitalize",
              background: "black",
              color: "white",
            }}
            size="small"
            onClick={handle}
          >
            Show Alerts
          </Button>
        </TableCell>
      </TableRow>
      <Dialog
        open={open}
        onClose={handle}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xl"}
      >
        <DialogTitle>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item xs={11}>
                <Grid container>
                  <Grid item xs={11}>
                    Remediated Alert(s)
                  </Grid>
                  <Grid item xs={1}>
                    <Grid container justify="flex-end">
                      <CloseIcon onClick={handle} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <LatestCard />
          <LatestCard />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

const rows = [
  createData("Change password of a user", 159, 6.0, "21/06/2020", "Rose"),
  createData(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque!",
    237,
    9.0,
    "21/06/2020",
    "Rose"
  ),
  createData(
    "Lorem ipsum dolor sit amet consectetur",
    262,
    15,
    "21/06/2020",
    "Rose"
  ),
  createData(
    "Lorem ipsum dolor sit amet consectetur",
    262,
    15,
    "21/06/2020",
    "Rose"
  ),
  createData(
    "Lorem ipsum dolor sit amet consectetur",
    262,
    15,
    "21/06/2020",
    "Rose"
  ),
  createData(
    "Lorem ipsum dolor sit amet consectetur",
    262,
    15,
    "21/06/2020",
    "Rose"
  ),
];

export default function FContent() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left" style={{border: "1px solid #aaa"}}>
              <div className={customClasses.thDiv}>Remediated action</div>
            </TableCell>
            <TableCell align="left" style={{border: "1px solid #aaa"}}>
              <div className={customClasses.thDiv}>
                Affects
                <div className={customClasses.i} >
                  <LightTooltip title=" Number of alerts affected by this remediation.">
                    <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                  </LightTooltip>
                </div>
              </div>
            </TableCell>
            <TableCell align="left" style={{border: "1px solid #aaa"}}>
              <div className={customClasses.thDiv} >
                Risks
                <div className={customClasses.i}>
                  <LightTooltip title=" The risk level is calculated as the weighted sum of high, medium and low severity alerts.">
                    <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                  </LightTooltip>
                </div>
              </div>
            </TableCell>
            <TableCell align="left" style={{ width: "10rem",border: "1px solid #aaa" }}>
              <div className={customClasses.thDiv}>
                Remediated
                <div className={customClasses.i}>
                  <LightTooltip title=" Date when the action was remediated.">
                    <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                  </LightTooltip>
                </div>
              </div>
            </TableCell>
            <TableCell align="left" style={{ width: "15rem",border: "1px solid #aaa" }}>
              <div className={customClasses.thDiv}>
                Username
                <div className={customClasses.i}>
                  <LightTooltip title="Username associated with remediation.">
                    <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                  </LightTooltip>
                </div>
              </div>
            </TableCell>
            <TableCell style={{border: "1px solid #aaa"}} />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
