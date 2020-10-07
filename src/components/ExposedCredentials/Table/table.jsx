import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import LatestCard from "../LatestCard.jsx";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import {
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
} from "@material-ui/core";
import { ExposedCredentialContext } from "../../../context/ExposedCredentials";
import Dialogtable from "./Dialogtable.js";
import axios from "axios";
function createData(name, calories, fat, carbs, protein, found, passPin) {
  return { name, calories, fat, carbs, protein, found, passPin };
}
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "severity",
    numeric: false,
    disablePadding: true,
    label: "Severity",
    info:
      "Severity high, medium or low is based on the significance of the exposure to your organisation.",
  },
  { id: "user", numeric: true, disablePadding: false, label: "User", info: "" },
  {
    id: "password",
    numeric: true,
    disablePadding: false,
    label: "Password",
    info:
      "Passwords can be found as a readable ‘clear text’ version or as a hashed version. Hashed version is a mapped value of the original password that cannot be decoded.",
  },
  {
    id: "first-found",
    numeric: true,
    disablePadding: false,
    label: "First found",
    info: "",
  },
  {
    id: "last-found",
    numeric: true,
    disablePadding: false,
    label: "Last found",
    info: "",
  },
  {
    id: "found",
    numeric: true,
    disablePadding: false,
    label: "#Found",
    info: "",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, handleChange } = props;
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            style={{
              textAlign: "center",
              border: "1px solid #aaa",
            }}
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                margin: "auto",
              }}
            >
              <Typography align="center">{headCell.label}</Typography>
              {headCell.info === "" ? (
                <div></div>
              ) : (
                <LightTooltip title={headCell.info}>
                  <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
                </LightTooltip>
              )}

              {headCell.label === "Password" && (
                <Checkbox
                  onChange={handleChange}
                  icon={<VisibilityOffIcon />}
                  checkedIcon={<VisibilityOutlinedIcon />}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              )}
            </div>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const [tableData, setTableData] = useState();
  const value = React.useContext(ExposedCredentialContext);
  const { tableState } = value;
  console.log(tableState, "tableState");
  const rows = [];
  React.useEffect(() => {
    const preData = [];
    for (const key in tableState) {
      let severity;
      let username;
      let firstFound;
      let lastFound;
      let password;
      let passCodes;

      const obj = tableState[key];
      for (const k in obj) {
        if (k === "username") {
          username = obj[k];
        } else if (k === "severity") {
          severity = obj[k].find((el) => {
            if (el === "severityhigh") {
              return el;
            } else if ("severitymedium") {
              return el;
            } else {
              return el;
            }
          });
          switch (severity) {
            case "severityhigh":
              severity = "High";
              break;
            case "severitymedium":
              severity = "Medium";
              break;
            case "severitylow":
              severity = "Low";
              break;
            default:
              return null;
          }
        } else if (k === "timeStamp") {
          if (obj[k].length === 1) {
            firstFound = new Date(obj[k]).getFullYear();
          } else {
            firstFound = obj[k].reduce((acc, cur) => {
              return acc < cur
                ? `${new Date(acc).getFullYear()}`
                : `${new Date(cur).getFullYear()}`;
            });
          }
          if (obj[k].length === 1) {
            lastFound = new Date(obj[k]).getFullYear();
          } else {
            lastFound = obj[k].reduce((acc, cur) => {
              return acc > cur
                ? `${new Date(acc).getFullYear()}`
                : `${new Date(cur).getFullYear()}`;
            });
          }
        } else if (k === "password") {
          password = [...obj[k]];
        } else if (k === "passCodes") {
          passCodes = [...obj[k]];
        }
      }
      preData.push({
        username: username,
        severity: severity,
        firstFound: firstFound,
        lastFound: lastFound,
        password: password,
        passCodes: passCodes,
      });
    }
    setTableData(preData);
  }, [tableState]);

  for (const key in tableData) {
    const obj = tableData[key];
    rows.push(
      createData(
        obj.severity,
        obj.username,
        obj.password,
        obj.firstFound,
        obj.lastFound,
        obj.password.length,
        obj.passCodes
      )
    );
  }

  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const [open, changeopen1] = React.useState(false);
  const [alertstate, changealertstate] = React.useState([]);
  const [alertdatalist, setalertdatalist] = React.useState([]);
  const handle1 = () => {
    changeopen1(false);
  };
  const handle = (list) => {
    console.log(list, "lsit");
    let alertstate1 = [];
    let alertdata = [];
    alertstate1.push(list);
    changealertstate(alertstate1[0]);
    console.log(alertstate);
    changeopen1(true);

    const fetchRemediationData = async () => {
      const token = localStorage.getItem("token");
      for (const i in list) {
        const result = await fetch(
          "https://if.cyberdevelopment.house/api/alerts/" + list[i],
          {
            headers: {
              accept: "application/json",
              Authorization: token,
            },
          }
        );
        const y = await result.json();
        // console.log(y,"result")
        // console.log(result,"result")
        alertdata.push(y);
      }
      console.log(alertdata, "alertdata");
      setalertdatalist(alertdata);
    };
    fetchRemediationData();
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              handleChange={() => setShow((prevShow) => !prevShow)}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map(
                (row, index) => {
                  return (
                    <TableRow key={row.name}>
                      <TableCell
                        component="th"
                        scope="row"
                        padding="none"
                        style={{
                          border: "1px solid #aaa",
                          width: "20%",
                          textAlign: "center",
                        }}
                      >
                        <Typography>{row.name}</Typography>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ border: "1px solid #aaa" }}
                      >
                        <p>{row.calories}</p>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          border: "1px solid #aaa",
                          width: "10px",
                          paddingRight: "2rem",
                        }}
                      >
                        <ul
                          style={{
                            maxHeight: "100px",
                            overflow: "auto",
                            listStyleType: "none",
                            // maxWidth: "200px",
                          }}
                        >
                          {row.passPin.map((el) => {
                            return (
                              <li
                                key={el}
                                style={{
                                  marginBottom: "1rem",
                                }}
                              >
                                {show ? (
                                  <Typography
                                    style={{
                                      fontSize: "12px",
                                      textAlign: "center",
                                    }}
                                  >
                                    {el}
                                  </Typography>
                                ) : (
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      marginRight: "1rem",
                                    }}
                                  >
                                    <MoreHorizIcon
                                      style={{ fontSize: "2rem" }}
                                    />
                                    <MoreHorizIcon
                                      style={{
                                        marginLeft: "-8px",
                                        fontSize: "2rem",
                                      }}
                                    />
                                    <MoreHorizIcon
                                      style={{
                                        marginLeft: "-8px",
                                        fontSize: "2rem",
                                      }}
                                    />
                                  </div>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ border: "1px solid #aaa" }}
                      >
                        {row.carbs}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ border: "1px solid #aaa" }}
                      >
                        {row.protein}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ border: "1px solid #aaa" }}
                      >
                        <Button
                          style={{ textTransform: "lowercase" }}
                          onClick={() => handle(row.fat)}
                        >
                          {row.found === 1 ? (
                            <div>{row.found + " finding"}</div>
                          ) : (
                            <div>{row.found + " findings"}</div>
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Dialogtable
        open={open}
        alertdatalist={alertdatalist}
        alertstate={alertstate}
        handle={handle}
        handle1={handle1}
      />
    </div>
  );
}
