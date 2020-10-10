import React , { useState } from "react";
import { Grid } from "@material-ui/core";
import classes from "./ListItems.module.css";
import PopUp from "../UI/popUp";

const ListItems = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { field, handleRemove, columns, msg } = props;
  const [items, setItems] = useState([]);

  React.useEffect(() => {
    var ret = [];
    for (var i = field.fetchItems.length - 1; i >= 0; i--) {
      ret.push(field.fetchItems[i]);
    }
    setItems(ret);
  }, [field.fetchItems]);
  return (
    <Grid item xs={columns} className={classes.list}>
      <ul>
        {items.map((value) => {
          return (
            <>
              <PopUp
                event="delete"
                modalTitle="Confirm Deletion"
                handleClose={handleClose}
                handleContinue={() =>
                  handleRemove(field.removeItems, value.id, setOpen)
                }
                open={open}
                keyword={msg}
              />
              <li>
                {value.title}
                {value.title && (
                  <div>
                    <i
                      class="fas fa-times-circle"
                      onClick={(e) => handleClickOpen()}
                    ></i>
                  </div>
                )}
              </li>
            </>
          );
        })}
      </ul>
    </Grid>
  );
};

export default ListItems;
