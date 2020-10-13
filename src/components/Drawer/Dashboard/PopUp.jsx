import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  // useEffect(() => {
  //   if (props.show) {
  //     handleClickOpen();
  //   }
  // }, [props.show]);

  let content = null;
  switch (props.event) {
    case "add":
      content = `You are about to add this note. Do you want to continue?`;
      break;
    case "delete":
      content = `You are about to delete this note. Deleted notes 
                 cannot be restored. Do you want to continue?`;
      break;
    default:
      return null;
  }
  return (
    <div>
      <Dialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          {props.modalTitle}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{content}</Typography>
        </DialogContent>
        <DialogActions>
          {props.event === "add" ? (
            <Button
              onClick={props.handleContinue}
              variant="contained"
              color="primary"
            >
              Continue
            </Button>
          ) : (
            <Button
              onClick={props.handleContinue}
              variant="contained"
              color="primary"
            >
              Continue
            </Button>
          )}

          <Button
            onClick={props.handleClose}
            variant="outlined"
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
