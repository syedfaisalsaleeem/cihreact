import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles,withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import InfoIcon from "@material-ui/icons/Info";
import SeveritySelect from "./severitySelect.jsx";
import PasswoedField from "./passowrd.jsx";
import LatestCard from "../LatestCard.jsx";
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import { Container,Grid,Dialog,DialogContent,DialogTitle,Divider} from '@material-ui/core';
function createData(name, calories, fat, carbs, protein, found) {
  return { name, calories, fat, carbs, protein, found };
}
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
const rows = [
  createData(
    "",
    "abc1245abc1245",
    "",
    "14/02/2020",
    "18/02/2020",
    "1 findings"
  ),
  createData(
    "",
    "abc1245abc1245",
    "",
    "21/03/2020",
    "11/04/2020",
    "1 findings"
  ),
  createData(
    "",
    "abc1245abc1245",
    "",
    "23/07/2020",
    "07/03/2020",
    "1 findings"
  ),
  createData(
    "",
    "abc1245abc1245",
    "",
    "04/05/2020",
    "12/06/2020",
    "1 findings"
  ),
];

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
    info:"Severity high, medium or low is based on the significance of the exposure to your organisation."
  },
  { id: "user", numeric: true, disablePadding: false, label: "User",
    info:""
},
  { id: "password", numeric: true, disablePadding: false, label: "Password",
  info:"Passwords can be found as a readable ‘clear text’ version or as a hashed version. Hashed version is a mapped value of the original password that cannot be decoded."

},
  {
    id: "first-found",
    numeric: true,
    disablePadding: false,
    label: "First found",
    info:""
  },
  {
    id: "last-found",
    numeric: true,
    disablePadding: false,
    label: "Last found",
    info:""
  },
  { id: "found", numeric: true, disablePadding: false, label: "#Found",info:"" },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            style={{
              textAlign: "center",
              border: "1px solid #aaa",
              width: "100%",
            }}
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "90%",
                }}
              >
                <Typography align="center">{headCell.label}</Typography>
                  <LightTooltip title={headCell.info}>
                  <InfoIcon style={{ marginLeft: "0.5rem" }} />
                    </LightTooltip >
                
              </div>

              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
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
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);

  };
  const [open,changeopen1]=React.useState(false);
  const handle=()=>{
      changeopen1(!open)
  }

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
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map(
                (row, index) => {
                  return (
                    <TableRow hover key={row.name}>
                      <TableCell
                        component="th"
                        scope="row"
                        padding="none"
                        style={{ border: "1px solid #aaa" }}
                      >
                        <SeveritySelect />
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ border: "1px solid #aaa" }}
                      >
                        <p>{row.calories}</p>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ border: "1px solid #aaa" }}
                      >
                        <PasswoedField />
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
                        <Button style={{ textTransform: "lowercase" }} onClick={handle}>
                          {row.found}
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
                                     Alert(s) 
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
    </div>
  );
}
