import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles,withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import InfoIcon from "@material-ui/icons/Info";
import "./Table2.css";
import Tooltip from '@material-ui/core/Tooltip';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Container,Button,Dialog,DialogContent,DialogTitle,Divider} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import LatestCard from "../ExposedCredentials/LatestCard";
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
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
  const [open,changeopen1]=React.useState(false);
  const handle=()=>{
      changeopen1(!open)
  }
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell align="left" component="th" scope="row">
          {row.remediationAction}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "80%",
              justifyContent: "space-between",
            }}
          >
            <p>10/01/2020</p>
            <p>08:09:21</p>
            <p>7 months ago</p>
          </div>
        </TableCell>
        <TableCell align="left">{row.affects}</TableCell>
        <TableCell align="left">
          {" "}
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "bold" }}
          ></Typography>{" "}
          {row.risk}
        </TableCell>
        <TableCell align="left">{row.cisControl}</TableCell>
        <TableCell align="left">{row.timeToExploit}</TableCell>
        <TableCell>
          <Button style={{textTransform:"capitalize",background:"black",color:"white"}} size="small" onClick={handle}>
            Lorem, ipsum dolor.
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
                                        <CloseIcon onClick={handle}/>
                                        </Grid>
                                        
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>                                    
                </DialogTitle>                  
                <Divider/>
                <DialogContent >
                  <LatestCard/>
                  <LatestCard/>
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
    <div>
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">
                      <div className="thDiv">Remediated action</div>
                    </TableCell>
                    <TableCell align="left">
                      <div className="thDiv">
                        Affects
                        <div className="i">
                        <LightTooltip title=" Number of alerts affected by this remediation.">
                    <InfoOutlinedIcon />
                    </LightTooltip >
                         
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <div className="thDiv">
                        Risks
                        <div className="i">
                        <LightTooltip title=" The risk level is calculated as the weighted sum of high, medium and low severity alerts.">
                    <InfoOutlinedIcon />
                    </LightTooltip >
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="left" style={{ width: "10rem" }}>
                      <div className="thDiv">
                        Remediated
                        <div className="i">
                        <LightTooltip title=" Date when the action was remediated.">
                    <InfoOutlinedIcon />
                    </LightTooltip >
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="left" style={{ width: "15rem" }}>
                      <div className="thDiv">
                        Username
                        <div className="i">
                        <LightTooltip title="Username associated with remediation.">
                    <InfoOutlinedIcon />
                    </LightTooltip >
                        </div>
                      </div>
                    </TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <Row key={row.name} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
