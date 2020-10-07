import React, { useContext, useState, useEffect } from "react";
import { ItemsListContext } from "../../context/itemsContext";
import classes from "./general.module.css";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Grid, Tooltip } from "@material-ui/core";
import Structure from "../Structure/Structure";
import ListItems from "../ListItems/ListItems";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { withStyles } from "@material-ui/core/styles";
import PopUp from "../UI/popUp";
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
export default function General() {
  const values = useContext(ItemsListContext);
  const [newBrandName, setNewBrandName] = useState("");
  const [newInternalKeyword, setNewInternalKeyword] = useState("");
  const [newOtherKeyword, setNewOtherKeyword] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [msg, setMsg] = useState();

  const inputFields = [
    {
      label: "Brand Name",
      helperText: "add a brand name",
      value: newBrandName,
      onChange: setNewBrandName,
      onSubmit: values.addBrandName,
      fetchItems: values.brandNames,
      setFetchItems: values.setBrandNames,
      removeItems: values.removeBrandName,
      tooltip:
        " Brand and product names owned by your company. Unique names consisting of 5 or more characters work best. Add your company’s name to your product name, that works for us: Cyber Intelligence House Exposure Monitor.",
      alertMessage: "Brand Name",
    },
    {
      label: "Internal keywords",
      helperText: "add an internal keyword",
      value: newInternalKeyword,
      onChange: setNewInternalKeyword,
      onSubmit: values.addInternalKeyword,
      fetchItems: values.internalKeyword,
      setFetchItems: values.setInternalKeyword,
      removeItems: values.removeInternalKeyword,
      tooltip:
        "Confidential terms only used within your company, that are impossible to know from the outside. Think of a project code name or a hash value in your internal database, servername, or embedded in office documents metadata. A hash value is a numeric code that uniquely identifies data.",
      alertMessage: "Internal Keyword",
    },
    {
      label: "Other keywords",
      helperText: "add an other keyword",
      value: newOtherKeyword,
      onChange: setNewOtherKeyword,
      onSubmit: values.addOtherKeyword,
      fetchItems: values.otherKeyword,
      setFetchItems: values.setOtherKeyword,
      removeItems: values.removeOtherKeyword,
      tooltip:
        "Other keywords you want to monitor. Looking for malware? Add the malware hash, not the malware name. Want to monitor a Hacker group? Add group member names, instead of their group name. A hash value is numeric code that uniquely identifies data.",
      alertMessage: "Other Keyword",
    },
  ];

  const handleChange = (e, setNewFunction) => {
    e.preventDefault();
    setNewFunction(e.target.value);
  };

  const handleSubmit = (e, setFunction, newItem, setValue, alert) => {
    e.preventDefault();
    setFunction(newItem);
    setValue("");
    handleClickOpen();
    setMsg(alert);
  };

  const handleRemove = (removeFunction, id, setFunc) => {
    removeFunction(id);
    setFunc(false);
  };

  return (
    <Structure titleText="General">
      <PopUp
        event="add"
        modalTitle=" Discover Updated"
        handleClose={handleClose}
        open={open}
        keyword={msg}
      />
      <Grid
        container
        justify="space-between"
        style={{ marginBottom: "1.5rem" }}
      >
        <Grid item xs="6" style={{ marginLeft: "0.5rem" }}>
          <label htmlFor="">Company Name</label>
        </Grid>
        <Grid item xs="5">
          <input type="text" style={{ width: "90%" }} />
        </Grid>
      </Grid>
      {inputFields.map((field) => {
        return (
          <>
            <Grid container className={classes.formControl} key={field.label}>
              <Grid item container xs="6" className={classes.labelWarper}>
                <label htmlFor="">{field.label}</label>
                <LightTooltip title={field.tooltip}>
                  <InfoOutlinedIcon style={{ marginLeft: "1rem" }} />
                </LightTooltip>
              </Grid>
              <Grid item container xs="6">
                <form
                  onSubmit={(e) =>
                    handleSubmit(
                      e,
                      field.onSubmit,
                      field.value,
                      field.onChange,
                      field.alertMessage
                    )
                  }
                  className={classes.inputWarper}
                >
                  <input
                    type="text"
                    value={field.value}
                    onChange={(e) => handleChange(e, field.onChange)}
                  />
                  <button
                    type="submit"
                    style={{
                      border: "1px solid #000",
                      cursor: "pointer",
                      padding: 0,
                      background: "none",
                    }}
                  >
                    <PlayArrowIcon />
                  </button>
                </form>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs="7"></Grid>
              <ListItems
                field={field}
                handleRemove={handleRemove}
                columns="5"
                open={open}
                handleClose={handleClose}
                handleClickOpen={handleClickOpen}
                msg={field.alertMessage}
              />
            </Grid>
          </>
        );
      })}
    </Structure>
  );
}
