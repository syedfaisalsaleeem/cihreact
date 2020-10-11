import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiNativeSelect-root": {
      height: "1.5rem",
      paddingTop: "7px",
      border: "1px solid #000",
    },
    "& .MuiSvgIcon-root": {
      background: "none",
      color: "#aaa",
      height: "96%",
      marginTop: "-8px",
      marginRight: "1px",
      borderRadius: "2px",
      width: "1.5rem",
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 14,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

export default function CustomizedSelects(props) {
  const { selectData } = props;
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl style={{ width: "100%" }} className={classes.formControl}>
      <NativeSelect
        id="demo-customized-select-native"
        value={age}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <option>{props.placeholder}</option>
        {selectData.map((dt, i) => {
          return (
            <option key={i} value={dt}>
              {dt}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
}
