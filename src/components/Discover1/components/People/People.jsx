import React, { useContext, useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Structure from "../Structure/Structure";
import { PeopleContext } from "../../context/peopleContext";
import classes from "./People.module.css";
import ListItems from "../ListItems/ListItems";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import PopUp from "../UI/popUp";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
const People = () => {
  const values = useContext(PeopleContext);
  const [newBrandName, setNewBrandName] = useState("");
  const [newInternalKeyword, setNewInternalKeyword] = useState("");

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
      title: "Personal names",
      placeholder: "Add first name and last name",
      value: newBrandName,
      onChange: setNewBrandName,
      onSubmit: values.addBrandName,
      fetchItems: values.brandNames,
      setFetchItems: values.setBrandNames,
      removeItems: values.removeBrandName,
      alertMessage: "Personal name",
      tooltip:
        " The names of key personnel in your company. The people who may be interesting for outsiders, because of their position or level of access to your assets. For example your CEO, top managers and system administrators.",
    },
    {
      title: "Personal emails",
      placeholder: "Personal email",
      value: newInternalKeyword,
      onChange: setNewInternalKeyword,
      onSubmit: values.addInternalKeyword,
      fetchItems: values.internalKeyword,
      setFetchItems: values.setInternalKeyword,
      removeItems: values.removeInternalKeyword,
      alertMessage: "Personal email",
      tooltip:
        "The personal email addresses of key personnel in your company. Add only email addresses that are not owned by your company. Email addresses under your company’s domain name are monitored automatically.",
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
    <Structure titleText="People">
      <PopUp
        event="add"
        modalTitle=" Discover Updated"
        handleClose={handleClose}
        open={open}
        keyword={msg}
      />
      <Grid container justify="space-around" className={classes.People}>
        {/* <Grid item md="10" container> */}
        {inputFields.map((field) => {
          return (
            <Grid item xl="5" xs="10">
              <div className={classes.titleInput}>
                <Typography variant="subtitle1">{field.title}</Typography>
                <LightTooltip title={field.tooltip}>
                  <InfoOutlinedIcon />
                </LightTooltip>
              </div>
              <div>
                <form
                  className={classes.input}
                  onSubmit={(e) =>
                    handleSubmit(
                      e,
                      field.onSubmit,
                      field.value,
                      field.onChange,
                      field.alertMessage
                    )
                  }
                >
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) => handleChange(e, field.onChange)}
                  />
                  <button
                    type="submit"
                    style={{
                      border: "1px solid #000",
                      cursor: "pointer",
                      marginLeft: "0.2rem",
                      background: "none",
                      padding: "0",
                    }}
                  >
                    <PlayArrowIcon />
                  </button>
                </form>
              </div>
              <div className={classes.ListItemsWarper}>
                <ListItems
                  field={field}
                  handleRemove={handleRemove}
                  columns="12"
                  open={open}
                  handleClose={handleClose}
                  handleClickOpen={handleClickOpen}
                  msg={field.alertMessage}
                />
              </div>
            </Grid>
          );
        })}
      </Grid>
      {/* </Grid> */}
    </Structure>
  );
};

export default People;
