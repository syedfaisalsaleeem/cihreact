import React, { useEffect, useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import { ItemsListContext } from "./context/itemsContext";

const useStyles = makeStyles({
  root: {
    maxWidth: 550,
    flexGrow: 1,
  },
});

export default function ProgressMobileStepper() {
  const general = useContext(ItemsListContext);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  useEffect(() => {
    if (general.progress) {
      handleNext();
      handleNext();
    } else {
      handleBack();
    }
  }, [general.progress]);

  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <MobileStepper
      variant="progress"
      steps={5}
      position="static"
      activeStep={activeStep}
      className={classes.root}
    />
  );
}
