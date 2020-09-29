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
  const [valid, setValid] = useState(false);

  const inputFields = [
    {
      title: "Personal names",
      placeholder: "[first name and last name]",
      value: newBrandName,
      onChange: setNewBrandName,
      onSubmit: values.addBrandName,
      fetchItems: values.brandNames,
      setFetchItems: values.setBrandNames,
      removeItems: values.removeBrandName,
      alertMessage: "Personal name Added.",
      tooltip:
        " Brand and product names owned by your company. Unique names consisting of 5 or more characters work best. Add your company’s name to your product name, that works for us: Cyber Intelligence House Exposure Monitor.",
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
      alertMessage: "Personal email Added.",
      tooltip:
        "Confidential terms only used within your company, that are impossible to know from the outside. Think of a project code name or a hash value in your internal database, servername, or embedded in office documents metadata. A hash value is a numeric code that uniquely identifies data.",
    },
  ];

  const handleChange = (e, setNewFunction) => {
    e.preventDefault();
    setNewFunction(e.target.value);
  };

  const handleSubmit = (e, setFunction, newItem, setValue,alertMessage) => {
    e.preventDefault();
    setFunction(newItem);
    setValue("");
    setTimeout(() => {
      window.alert(alertMessage);
    }, 2);
  };

  const handleRemove = (e, removeFunction, id) => {
    e.preventDefault();
    removeFunction(id);
  };

 
  return (
    <Structure titleText="People">
      <Grid container className={classes.People}>
        <Grid item md="10" container>
          {inputFields.map((field) => {
            return (
              <Grid item  md="6">
                <div className={classes.titleInput}>
                  <Typography variant="subtitle1">{field.title}</Typography>
                  <InfoOutlinedIcon />
                </div>
                <div className={classes.input}>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) => handleChange(e, field.onChange)}
                  />
                  <div
                    style={{
                      border: "1px solid #000",
                      cursor: "pointer",
                      marginLeft: "0.2rem",
                    }}
                  >
                    <PlayArrowIcon
                      onClick={(e) =>
                        handleSubmit(
                          e,
                          field.onSubmit,
                          field.value,
                          field.onChange,
                          field.alertMessage
                        )
                      }
                    />
                  </div>
                </div>
                <div className={classes.ListItemsWarper}>
                  <ListItems
                    field={field}
                    columns="12"
                    handleRemove={handleRemove}
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Structure>
  );
};

export default People;
