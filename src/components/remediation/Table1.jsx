import React, { useContext } from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import styles from "./Table1.module.css";
import Tooltip from "@material-ui/core/Tooltip";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Dialog, DialogContent, DialogTitle, Divider } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import controlImg from "../../Links/images/CIS-controls.png";
import { FetchRemediationContext } from "../../context/FetchRemidiation";
import Dialogtable from "./DialogTable";
import { trackPromise } from "react-promise-tracker";
import ASR from "./AnalystSupportRemediation.js"
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
    "& > *": {},
  },
  b: {
    textDecoration: "underline",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

function createData(
  remediationAction,
  affects,
  risk,
  cisControl,
  timeToExploit,
  description,
  alertsIds,
  rowId
) {
  return {
    remediationAction,
    affects,
    risk,
    cisControl,
    timeToExploit,
    alertsIds,
    history: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
    rowId,
  };
}

function Row(props) {
  const { row } = props;
  console.log(props,"are row id")
  const [open, setOpen] = React.useState(false);
  const [open2, changeopen2] = React.useState(false);
  const [alertstate, changealertstate] = React.useState([]);
  const [alertdatalist, setalertdatalist] = React.useState([]);

  const handle2f = () => {
    changeopen2(false);
  };
  const handle2 = (list) => {
    console.log(list, "lsit");

    console.log(alertstate);
    

    const fetchRemediationData = async () => {
      let alertstate1 = [];
      let alertdata = [];
      try {
        const token = localStorage.getItem("token");
        if (list.length > 5) {
          alertstate1.push(list.splice(0, 5));
          changealertstate(alertstate1[0]);
          for (const i in list.splice(0, 5)) {
            const result = await trackPromise(
              fetch("https://if.cyberdevelopment.house/api/alerts/" + list[i], {
                headers: {
                  accept: "application/json",
                  Authorization: token,
                },
              })
            );
            const y = await trackPromise(result.json());
            alertdata.push(y);
          }
        } else {
          alertstate1.push(list);
          changealertstate(alertstate1[0]);
          for (const i in list) {
            const result = await trackPromise(
              fetch("https://if.cyberdevelopment.house/api/alerts/" + list[i], {
                headers: {
                  accept: "application/json",
                  Authorization: token,
                },
              })
            );
            const y = await trackPromise(result.json());
            alertdata.push(y);
          }
        }
        changeopen2(true);
        console.log(alertdata, "alertdata");
        if (alertdata[0]["message"] === "Internal Server Error") {
          console.log("what is error working");
          alertdata.length = 0;
          setalertdatalist(alertdata);
        } else {
          setalertdatalist(alertdata);
        }
      } catch (error) {
        console.log(error, "what is error");
      }
    };

    fetchRemediationData();
  };
  const classes = useRowStyles();

  React.useEffect(() => {
    console.log("alertData = ", alertdatalist);
  }, [alertdatalist]);
  const markRemidiatedPost = async (e, list) => {
    e.preventDefault();
    const mark = (list) => {
      list.forEach(async (alert) => {
        const result = await fetch(
          "https://if.cyberdevelopment.house/api/alerts/" +
            alert.id +
            "/remediation",
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: token,
            },
            body: `username=${alert.value}&comment=Mark as Remidiated`,
          }
        );
        console.log("POST-RES = ", await result.json());
      });
    };

    const token = localStorage.getItem("token");
    let alertstate1 = [];
    let alertdata = [];
    if (list.length > 5) {
      alertstate1.push(list.splice(0, 5));
      changealertstate(alertstate1[0]);
      for (const i in list.splice(0, 5)) {
        const result = await trackPromise(
          fetch("https://if.cyberdevelopment.house/api/alerts/" + list[i], {
            headers: {
              accept: "application/json",
              Authorization: token,
            },
          })
        );
        const y = await trackPromise(result.json());
        alertdata.push(y);
      }
    } else {
      alertstate1.push(list);
      changealertstate(alertstate1[0]);
      for (const i in list) {
        const result = await trackPromise(
          fetch("https://if.cyberdevelopment.house/api/alerts/" + list[i], {
            headers: {
              accept: "application/json",
              Authorization: token,
            },
          })
        );
        const y = await trackPromise(result.json());
        alertdata.push(y);
      }
    }

    console.log(alertdata, "alertdata");
    if (alertdata[0]["message"] === "Internal Server Error") {
      console.log("what is error working");
      alertdata.length = 0;
      setalertdatalist(alertdata);
      mark(alertdata);
    } else {
      setalertdatalist(alertdata);
      mark(alertdata);
    }
  };
const [open3,setopen3]=React.useState(false);
const handle3=()=>{
  setopen3(true)
}
const handle3f=()=>{
  setopen3(false)
}
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell
          align="left"
          
          component="th"
          scope="row"
         
          style={{
            borderTop: "1px solid #aaa",
            borderBottom: "1px solid #aaa",
          }}
        >
          {row.remediationAction}
        </TableCell>
        <TableCell
           align="left"
          style={{
            borderTop: "1px solid #aaa",
            borderBottom: "1px solid #aaa",

            
          }}
        >
          {row.affects}
        </TableCell>
        <TableCell
          align="left"
          style={{
            borderTop: "1px solid #aaa",
            borderBottom: "1px solid #aaa",
            
          }}
        >
          {row.risk}
        </TableCell>
        <TableCell
          align="left"
          style={{
            borderTop: "1px solid #aaa",
            borderBottom: "1px solid #aaa",
           
          }}
        >
          {row.cisControl}
        </TableCell>
        <TableCell
          style={{
            borderTop: "1px solid #aaa",
            borderBottom: "1px solid #aaa",
          }}
          align="left"
        >
          {" "}
          <div className={styles.foldable}>
            <p style={{ color: "red" }}>{row.timeToExploit}</p>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </div>{" "}
        </TableCell>
        <TableCell
          style={{ borderBottom: "1px solid #aaa" }}
          align="center"
          width="20%"
        >
          <Button
            onClick={(e) => {
              markRemidiatedPost(e, row.alertsIds);
            }}
            style={{
              textTransform: "capitalize",
              background: "black",
              color: "white",
              width: "100%",
              padding: "0.5rem",
            }}
            size="small"
          >
            Mark as Remediated
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
          width="20%"
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              style={{
                marginBottom: "2rem",
                border: "1px solid green",
                padding: "1rem",
                width: "90%",
              }}
            >
              <Grid container justify="space-between">
                <Grid item xs="8">
                  <Typography
                    variant="subtitle1"
                    style={{ fontWeight: "bold" }}
                  >
                    {row.remediationAction}
                  </Typography>
                  <br />
                  <div>{row.description}</div>
                </Grid>

                <Grid item xs="2" className={styles.downloadBtns}>
                  <button style={{ width: "150px" }}>Download as PDF</button>
                  <button style={{ width: "150px" }}>Download as CSV</button>
                </Grid>
                <Grid item xs="2" className={styles.downloadBtns}>
                  <button style={{ width: "150px" }} onClick={handle3}>Analyst Support</button>
                  <button
                    style={{ width: "150px" }}
                    onClick={() => handle2(row.alertsIds)}
                  >
                    Show Alerts
                  </button>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      {alertdatalist.length === "0" ? (
        <div></div>
      ) : (
        <Dialogtable
          open={open2}
          alertdatalist={alertdatalist}
          alertstate={alertstate}
          handle={handle2}
          handle1={handle2f}
        />
      )}
      <ASR
        open={open3}
        handle={handle3}
        handle1={handle3f}
        remediationid={row.rowId}
      />
    </React.Fragment>
  );
}

export default function FContent() {
  const [open1, setopen1] = React.useState(false);
  const [open3, setopen3] = React.useState(false);
  const handle1 = () => {
    setopen1(false);
  };
  const handle3 = () => {
    setopen1(true);
    setopen3(false);
  };
  const handleClose = () => {
    setopen3(false);
  };

  const handleOpen = () => {
    setopen3(true);
  };
  const value = useContext(FetchRemediationContext);
  const { table1State } = value;
  const rowid1=[];
  const rows = [];
  React.useEffect(() => {
    console.log(table1State, "table1State");
    
  }, [table1State]);
  for (const key in table1State) {
    const obj = table1State[key];
    const date = new Date(obj.readyToExploit);
    let rte = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    if (rte === "0 : 0 : 0") {
      rte = "Ready To Exploit";
    }
    rowid1.push(obj.rowid)
    rows.push(
      createData(
        obj.title,
        obj.affects,
        obj.risks,
        [...obj.cisControls].join(" , "),
        rte,
        obj.alertsIds,
        [...obj.alertsIds],
        obj.rowid
      )
    );
  }

  const classes = useRowStyles();
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead >
            <TableRow>
              <TableCell
                align="right"
                style={{
                  borderBottom: "1px solid #aaa",
                  
                }}
              >
                <div className={styles.thDiv}>
                  Remediated action
                  <div className={styles.i}>
                    <LightTooltip title="Unfold a remediation action to review the source of the exposure and how to mitigate the risk.">
                      <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                    </LightTooltip>
                  </div>
                </div>
              </TableCell>
              <TableCell
                align="right"
                style={{
                 marginRight:"2.5rem",
                  borderBottom: "1px solid #aaa",
                }}
              >
                <div className={styles.thDiv}>
                  Affects
                  <div className={styles.i}>
                    <LightTooltip title="Number of alerts affected by this remediation.">
                      <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                    </LightTooltip>
                  </div>
                </div>
              </TableCell>
              <TableCell
               align="right"
                style={{
                  
                  borderBottom: "1px solid #aaa",
                }}
              >
                <div className={styles.thDiv}>
                  Risk
                  <div className={styles.i}>
                    <LightTooltip title="The risk level is calculated as the weighted sum of high, medium and low severity alerts.">
                      <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                    </LightTooltip>
                  </div>
                </div>
              </TableCell>
              <TableCell
                align="right"
                style={{
                  width: "10rem",
                  
                  borderBottom: "1px solid #aaa",
                }}
              >
                <div className={styles.thDiv}>
                  CIS Control
                  <div className={styles.i}>
                    <LightTooltip
                      open={open3}
                      // onMouseEnter={()=>setopen3(true)}
                      onMouseEnter={() => setopen3(true)}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      onMouseLeave={() => handleClose}
                      interactive
                      title={
                        <div style={{ display: "flex" }}>
                          <p>
                            A set of 20 best practises making up the critical
                            security controls, published by the Center for
                            Internet Security (CIS).
                            <p className={classes.b} onClick={handle3}>
                              Show more
                            </p>
                          </p>
                        </div>
                      }
                    >
                      <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                    </LightTooltip>
                  </div>
                </div>
              </TableCell>
              <TableCell
                align="right"
                style={{
                  width: "15rem",
                  
                  borderBottom: "1px solid #aaa",
                }}
              >
                <div className={styles.thDiv}>
                  Time to Exploit
                  <div className={styles.i}>
                    <LightTooltip title="Estimated time needed for cybercriminals to exploit exposure ">
                      <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                    </LightTooltip>
                  </div>
                </div>
              </TableCell>
              <TableCell
                style={{
                 
                  borderBottom: "1px solid #aaa",
                }}
              />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              //  <div>{console.log(row)}</div>
              <Row key={row.name} row={row} id={row.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open1}
        onClose={handle1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xl"}
      >
        <DialogTitle>
          <Grid container style={{ height: "6vh", display: "flex" }}>
            <Grid items xs={11} style={{ height: "6vh", display: "flex" }}>
              <Grid container spacing={2}>
                <Grid item></Grid>
                <Grid item>
                  <Typography
                    component="div"
                    style={{
                      display: "flex",
                      height: "6vh",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  ></Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography
                    style={{
                      display: "flex",
                      height: "6vh",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginLeft: "-15px",
                    }}
                  ></Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              items
              xs={1}
              style={{
                height: "6vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CloseIcon onClick={handle1} />
            </Grid>
          </Grid>
        </DialogTitle>

        <DialogContent>
          <Grid item xs="12" className={styles.downImg}>
            <img src={controlImg} alt="" />
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
