import React, { useContext, useState, useEffect } from "react";
import { Grid, Typography, Tooltip } from "@material-ui/core";
import Structure from "../Structure/Structure";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { SystemContext } from "../../context/systemContext";
import classes from "./Systems.module.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ListItems from "../ListItems/ListItems";
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
const Systems = () => {
  const values = useContext(SystemContext);
  const [newDomainName, setNewDomainName] = useState("");
  const [newIpAddress, setNewIpAddress] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const [submitObj, setSubmitObj] = useState({});
  const [msg, setMsg] = useState();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (e, obj, alert) => {
    e.preventDefault();
    setOpen(true);
    setSubmitObj(obj);
    setMsg(alert);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inputFields = [
    {
      label: "Domain Name",
      helperText: "add a new domain name",
      placeholder: "Add Domain Name",
      value: newDomainName,
      onChange: setNewDomainName,
      onSubmit: values.addDomainName,
      fetchItems: values.domainNames,
      setFetchItems: values.setDomainNames,
      removeItems: values.removeDomainName,
      alertMessage: "Domain",
      tooltip:
        "Add your company’s domain name(s). Our domain name is cyberintelligencehouse.com. Only add the parent domain, we automatically monitor the subdomains for you",
    },
    {
      label: "IP Address",
      helperText: "add a new ip address",
      placeholder: "Add Ip Address",
      value: newIpAddress,
      onChange: setNewIpAddress,
      onSubmit: values.addIpAddress,
      fetchItems: values.ipAddress,
      setFetchItems: values.setIpAddress,
      removeItems: values.removeIpAddress,
      alertMessage: "IP Address",
      tooltip:
        "Add your company’s IP addresses. You can add individual IP addresses or use a wildcard to monitor all IP addresses within a netblock. For example, adding 12.34.56.* as a keyword would monitor all IP addresses within 12.34.56.1-255 range.",
    },
    {
      label: "URL",
      helperText: "add a new url",
      placeholder: "Add Url",
      value: newUrl,
      onChange: setNewUrl,
      onSubmit: values.addUrl,
      fetchItems: values.url,
      setFetchItems: values.setUrl,
      removeItems: values.removeUrl,
      alertMessage: "URL",
      tooltip:
        "Add your company’s URL. Our URL is https://cyberintelligencehouse.com/",
    },
  ];

  const handleChange = (e, setNewFunction) => {
    e.preventDefault();
    setNewFunction(e.target.value);
  };

  const handleSubmit = (setFunction, newItem, setValue) => {
    setFunction(newItem);
    setValue("");
    handleClose();
  };

  const handleRemove = (removeFunction, id, setFunc) => {
    removeFunction(id);
    setFunc(false);
  };

  return (
    <Structure titleText="Systems">
      {submitObj.value && (
        <PopUp
          event="add"
          modalTitle=" Discover Updated"
          handleClose={handleClose}
          handleContinue={() =>
            handleSubmit(
              submitObj.onSubmit,
              submitObj.value,
              submitObj.onChange
            )
          }
          open={open}
          keyword={msg}
        />
      )}
      <Grid container justify="space-around" className={classes.Systems}>
        {inputFields.map((field) => {
          return (
            <>
              <Grid item xl="3" xs="10">
                <div className={classes.title}>
                  <Typography>{field.label}</Typography>
                  <LightTooltip title={field.tooltip}>
                    <InfoOutlinedIcon />
                  </LightTooltip>
                </div>
                <form
                  className={classes.input}
                  onSubmit={(e) =>
                    handleClickOpen(e, field, field.alertMessage)
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
                      padding: "0",
                      background: "none",
                    }}
                  >
                    <PlayArrowIcon />
                  </button>
                </form>
                <Grid container className={classes.ListItemsWarper}>
                  <ListItems
                    field={field}
                    handleRemove={handleRemove}
                    columns="12"
                    open={open}
                    handleClose={handleClose}
                    handleClickOpen={handleClickOpen}
                    msg={field.alertMessage}
                  />
                </Grid>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Structure>
  );
};

export default Systems;
