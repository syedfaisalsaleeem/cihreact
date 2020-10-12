import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PopUp from "./PopUp";

const CommentsList = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleContinue = (id) => {
    props.onDeleteComment(id);
    handleClose();
  };

  return (
    <>
      {props.comments.map((comment) => {
        return (
          <Grid item xs={11} style={{ margin: "0.5rem 0" }}>
            <PopUp
              event="delete"
              open={open}
              handleClose={handleClose}
              modalTitle="Confirm delete"
              handleContinue={() => handleContinue(comment.id)}
            />
            <div
              style={{
                height: "4.5rem",
                border: "1px solid #aaa",
                borderRadius: "5px",
              }}
            >
              <ul
                style={{
                  listStyleType: "none",
                  marginLeft: "0.5rem",
                  fontWeight: "500",
                  marginTop: "0.2rem",
                }}
              >
                <li
                  style={{
                    marginBottom: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      minWidth: "13rem",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p>{comment.nick}</p>
                    <p
                      style={{ marginLeft: "1rem" }}
                    >{`${new Date().getFullYear(comment.created)}-${new Date(
                      comment.created
                    ).getMonth()}-${new Date(
                      comment.created
                    ).getDate()}:${new Date(
                      comment.created
                    ).getHours()}:${new Date(
                      comment.created
                    ).getMinutes()}:${new Date(
                      comment.created
                    ).getSeconds()}`}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "2.5rem",
                      justifyContent: "space-around",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <EditIcon
                      style={{ fontSize: "20px" }}
                      onClick={() => props.onFindComment(comment.id)}
                    />
                    <DeleteIcon
                      style={{ fontSize: "20px" }}
                      onClick={() => handleClickOpen()}
                    />
                  </div>
                </li>
                <li>
                  <p>{comment.text}</p>
                </li>
              </ul>
            </div>
          </Grid>
        );
      })}
    </>
  );
};

export default CommentsList;
