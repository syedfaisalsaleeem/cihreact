import React from "react";
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
function createData(name, calories, fat, carbs, protein, found) {
  return { name, calories, fat, carbs, protein, found };
}
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
const rows = [
  createData(
    "Medium",
    "abc1245abc1245",
    "Password1",
    "14/02/2020",
    "18/02/2020",
    "1 findings"
  ),
  createData(
    "Medium",
    "abc1245abc1245",
    "Password2",
    "21/03/2020",
    "11/04/2020",
    "1 findings"
  ),
  createData(
    "Medium",
    "abc1245abc1245",
    "Password3",
    "23/07/2020",
    "07/03/2020",
    "1 findings"
  ),
  createData(
    "Medium",
    "abc1245abc1245",
    "Password4",
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
              <LightTooltip title={headCell.info}>
                <InfoOutlinedIcon style={{ marginLeft: "0.5rem" }} />
              </LightTooltip>
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
  const handle = () => {
    changeopen1(!open);
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
                        style={{ border: "1px solid #aaa", width: "20%" }}
                      >
                        <Typography>
                          {show ? (
                            row.fat
                          ) : (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <MoreHorizIcon style={{ fontSize: "2rem" }} />
                              <MoreHorizIcon
                                style={{ marginLeft: "-8px", fontSize: "2rem" }}
                              />
                              <MoreHorizIcon
                                style={{ marginLeft: "-8px", fontSize: "2rem" }}
                              />
                            </div>
                          )}
                        </Typography>
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
                          onClick={handle}
                        >
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
    </div>
  );
}
