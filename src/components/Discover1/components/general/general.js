import React, { useContext, useState } from "react";
import { ItemsListContext } from "../../context/itemsContext";
import classes from "./general.module.css";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Grid, Tooltip } from "@material-ui/core";
import Structure from "../Structure/Structure";
import ListItems from "../ListItems/ListItems";
import { withStyles } from "@material-ui/core/styles";
import PopUp from "../UI/popUp";
import enterImg from "../assets/images/enter.png";

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

  const [newCompanyName, setNewCompanyName] = useState("");
  const [newBrandName, setNewBrandName] = useState("");
  const [newInternalKeyword, setNewInternalKeyword] = useState("");
  const [newOtherKeyword, setNewOtherKeyword] = useState("");

  const [msg, setMsg] = useState();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inputFields = [
    {
      label: "Company Names",
      placeholder: "Add company name",
      value: newCompanyName,
      onChange: setNewCompanyName,
      onSubmit: values.addCompanyName,
      fetchItems: values.companyNames,
      setFetchItems: values.setCompanyNames,
      removeItems: values.removeCompanyName,
      tooltip: "",
      alertMessage: "Company Name",
    },
    {
      label: "Brand Names",
      placeholder: "Add brand name",
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
      placeholder: "Add internal keyword",
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
      placeholder: "Add other keyword",
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
    if (newItem) {
      setFunction(newItem);
      setValue("");
      handleClickOpen();
      setMsg(alert);
    }
  };

  const handleRemove = (removeFunction, id, setFunc) => {
    removeFunction(id);
    setFunc(false);
  };

  React.useEffect(() => {
    console.log("company name = ", newCompanyName);
  },[newCompanyName]);

  return (
    <Structure titleText="General">
      <PopUp
        event="add"
        modalTitle=" Discover Updated"
        handleClose={handleClose}
        open={open}
        keyword={msg}
      />
      {inputFields.map((field) => {
        return (
          <>
            <Grid container className={classes.formControl} key={field.label}>
              <Grid item container xs="5" className={classes.labelWarper}>
                <label htmlFor="">{field.label}</label>
                {field.tooltip === "" ? (
                  <div></div>
                ) : (
                  <LightTooltip title={field.tooltip}>
                    <InfoOutlinedIcon style={{ marginLeft: "1rem" }} />
                  </LightTooltip>
                )}
              </Grid>
              <Grid item container xs="7">
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
                    placeholder={field.placeholder}
                    type="text"
                    value={field.value}
                    onChange={(e) => handleChange(e, field.onChange)}
                  />
                  <button type="submit">
                    <img src={enterImg} alt="" />
                  </button>
                </form>
              </Grid>
            </Grid>
            <Grid
              container 
            >
              <ListItems
                field={field}
                handleRemove={handleRemove}
                columns="7"
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
