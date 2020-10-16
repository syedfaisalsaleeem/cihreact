import React, { useContext, useState } from "react";
import { Grid, Tooltip } from "@material-ui/core";
import Structure from "../Structure/Structure";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { SystemContext } from "../../context/systemContext";
import classes from "./Systems.module.css";
import ListItems from "../ListItems/ListItems";
import { withStyles } from "@material-ui/core/styles";
import enterImg from "../assets/images/enter.png";

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

  return (
    <Structure titleText="Systems">
      <PopUp
        event="add"
        modalTitle=" Discover Updated"
        handleClose={handleClose}
        open={open}
        keyword={msg}
      />

      <Grid container justify="space-around" className={classes.Systems}>
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
      </Grid>
    </Structure>
  );
};

export default Systems;
