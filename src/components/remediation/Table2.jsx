import React, { useContext } from "react";
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
import { FetchRemediationContext } from "../../context/FetchRemidiation";
import Dialogtable from "./DialogTable.js";
import { trackPromise } from 'react-promise-tracker';
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
  timeToExploit,
  alertsIds,
) {
  return {
    remediationAction,
    affects,
    risk,
    cisControl,
    timeToExploit,
    alertsIds,
  };
}

function Row(props) {
  const { row } = props;
  const classes = useRowStyles();
  const [open, changeopen1] = React.useState(false);
  const handle = () => {
    changeopen1(!open);
  };
  const [open2, changeopen2] = React.useState(false);
  const [alertstate,changealertstate]=React.useState([]);
  const [alertdatalist,setalertdatalist]=React.useState([]);
  const handle2f=()=>{
    changeopen2(false);
  }
  const handle2 = (list) => {
    console.log(list,"lsit")
    
    list.splice(0,10)
    let alertstate1=[];
    let alertdata=[];
    alertstate1.push(list)
    changealertstate(alertstate1[0])
    console.log(alertstate)
    changeopen2(true);
   


    const fetchRemediationData = async () => {
      try{
      const token=localStorage.getItem("token")
      if(list.length>5){
        alertstate1.push(list.splice(0,5))
        changealertstate(alertstate1[0])
        for (const i in list.splice(0,5)){            



          const result= await trackPromise( fetch("https://if.cyberdevelopment.house/api/alerts/"+list[i], {
              headers: {
                  'accept': 'application/json',
                  'Authorization': token
              }
              }
            ))
            const y=await trackPromise( result.json())
            // console.log(y,"result")
            // console.log(result,"result")
            alertdata.push(y)
          }
      }
      else{
        alertstate1.push(list)
        changealertstate(alertstate1[0])
        for (const i in list){            



          const result= await trackPromise( fetch("https://if.cyberdevelopment.house/api/alerts/"+list[i], {
              headers: {
                  'accept': 'application/json',
                  'Authorization': token
              }
              }
            ))
            const y=await trackPromise( result.json())
            // console.log(y,"result")
            // console.log(result,"result")
            alertdata.push(y)
          }
      }


      console.log(alertdata,"alertdata")
      if(alertdata[0]["message"]==="Internal Server Error")
      { console.log("what is error working")   
        alertdata.length=0
        setalertdatalist(alertdata)}
        else{
          setalertdatalist(alertdata)
        }
      
  }
  catch(error){
    console.log(error,"what is error")
    // alertdata.push([])
    // setalertdatalist(alertdata)
  }
} 
    
  fetchRemediationData()
  
}
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell
          align="left"
          component="th" 
          scope="row"
          style={{ width: "30%",borderTop: "1px solid #aaa", borderBottom:"1px solid #aaa" }}
        >
          {row.remediationAction}
        </TableCell>
        <TableCell align="left" style={{ width: "10%", paddingLeft: "2rem",borderTop: "1px solid #aaa", borderBottom:"1px solid #aaa"}}>
          {row.affects}
        </TableCell>
        <TableCell align="left" style={{ width: "10%", paddingLeft: "2rem",borderTop: "1px solid #aaa", borderBottom:"1px solid #aaa"}}>
          {" "}
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "bold" }}
          ></Typography>{" "}
          {row.risk}
        </TableCell>
        <TableCell align="left" style={{ width: "10%",borderTop: "1px solid #aaa", borderBottom:"1px solid #aaa" }}>
          {row.cisControl}
        </TableCell>
        <TableCell align="left" style={{ width: "10%", paddingLeft: "2rem",borderTop: "1px solid #aaa", borderBottom:"1px solid #aaa" }}>
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
            onClick={()=>handle2(row.alertsIds)}
          >
            Show Alerts
          </Button>
        </TableCell>
      </TableRow>
      {alertdatalist.length==="0"?<div></div>:
      <Dialogtable  open={open2} alertdatalist={alertdatalist} alertstate={alertstate} handle={handle2} handle1={handle2f}/>
      }
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
  const value = useContext(FetchRemediationContext);
  const { table2State } = value;
  const rows = [];

  for (const key in table2State) {
    const obj = table2State[key];
    const date = new Date(obj.readyToExploit);
    const rte = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    rows.push(
      createData(
        obj.title,
        obj.affects,
        obj.risks,
        [...obj.cisControls].join(" , "),
        rte,
        
        
        [...obj.alertsIds]
      )
    );
  }
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left" style={{borderTop: "1px solid #aaa", borderBottom:"1px solid #aaa"}}>
              <div className={customClasses.thDiv}>Remediated action</div>
            </TableCell>
            <TableCell align="left" style={{borderTop: "1px solid #aaa", borderBottom:"1px solid #aaa"}}>
              <div className={customClasses.thDiv}>
                Affects
                <div className={customClasses.i} >
                  <LightTooltip title=" Number of alerts affected by this remediation.">
                    <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                  </LightTooltip>
                </div>
              </div>
            </TableCell>
            <TableCell align="left" style={{borderTop: "1px solid #aaa", borderBottom:"1px solid #aaa"}}>
              <div className={customClasses.thDiv} >
                Risks
                <div className={customClasses.i}>
                  <LightTooltip title=" The risk level is calculated as the weighted sum of high, medium and low severity alerts.">
                    <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                  </LightTooltip>
                </div>
              </div>
            </TableCell>
            <TableCell align="left" style={{ width: "10rem",borderTop: "1px solid #aaa", borderBottom:"1px solid #aaa" }}>
              <div className={customClasses.thDiv}>
                Remediated
                <div className={customClasses.i}>
                  <LightTooltip title=" Date when the action was remediated.">
                    <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                  </LightTooltip>
                </div>
              </div>
            </TableCell>
            <TableCell align="left" style={{ width: "15rem",borderTop: "1px solid #aaa", borderBottom:"1px solid #aaa"}}>
              <div className={customClasses.thDiv}>
                Username
                <div className={customClasses.i}>
                  <LightTooltip title="Username associated with remediation.">
                    <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                  </LightTooltip>
                </div>
              </div>
            </TableCell>
            <TableCell style={{borderTop: "1px solid #aaa", borderBottom:"1px solid #aaa"}} />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            // <div>{console.log(row)}</div>
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
