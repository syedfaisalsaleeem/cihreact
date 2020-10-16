import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import classes from "./ListItems.module.css";
import PopUp from "../UI/popUp";

const ListItems = (props) => {
  const [open, setOpen] = React.useState(false);
  const [valueId, setValueId] = React.useState();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { field, handleRemove, columns, msg } = props;
  const [items, setItems] = useState([]);

  const handleValue = (id) => {
    handleClickOpen();
    setValueId(id);
  };

  React.useEffect(() => {
    var ret = [];
    for (var i = field.fetchItems.length - 1; i >= 0; i--) {
      ret.push(field.fetchItems[i]);
    }
    setItems(ret);
  }, [field.fetchItems]);
  return (
    <Grid container justify="flex-end" spacing={2}>
      <PopUp
        event="delete"
        modalTitle="Confirm Deletion"
        handleClose={handleClose}
        handleContinue={() => {
          handleRemove(field.removeItems, valueId, setOpen);
        }}
        open={open}
        keyword={msg}
      />
    <Grid item xs="7" className={classes.list}>
      <Grid container justify="center" >
      
        {items.map((value) => {
          return (
         
              
                <Grid container spacing={1} justify="space-around" alignItems="center" style={{paddingBottom:"10px"}}>
                <Grid item xs="8" style={{width:"300px"}}  className={classes.listText}>{value.title}</Grid>
                <Grid item xs="1" md="1">
                {value.title && (
                  
                    <Grid container justify="flex-start" alignItems="center">
                      <Grid item>

                      <i
                        class="fas fa-times-circle"
                        onClick={() => handleValue(value.id)}
                      ></i>
                      </Grid>
                    </Grid>

                  
                )}
                </Grid>
                </Grid>
              
            
          );
        })}
      
      </Grid>
    </Grid>
    </Grid>
  );
};

export default ListItems;