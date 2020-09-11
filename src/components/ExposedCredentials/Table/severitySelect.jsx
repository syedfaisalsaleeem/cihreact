import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";

import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    width: "100%",
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const [severity, setSeverity] = React.useState("Medium");
  const handleChange = (event) => {
    setSeverity(event.target.value);
  };
  return (
    <div>
      <FormControl  style={{width: '90%'}} className={classes.margin}>
        <NativeSelect
          id="demo-customized-select-native"
          value={severity}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={"high"}>High</option>
          <option value={"medium"}>Medium</option>
          <option value={"low"}>Low</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
