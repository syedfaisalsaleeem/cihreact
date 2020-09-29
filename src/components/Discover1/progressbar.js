import React, { useEffect, useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import { ItemsListContext } from "./context/itemsContext";
import { SystemContext } from "./context/systemContext";
import { PeopleContext } from "./context/peopleContext";

const useStyles = makeStyles({
  root: {
    maxWidth: 550,
    flexGrow: 1,
    background: "none",
    "& .MuiLinearProgress-root": {
      background: "#bbb",
      height: "35px",
      width: "60rem",
    },
    "& .MuiLinearProgress-barColorPrimary": {
      background: "green",
    },
  },
});

export default function ProgressMobileStepper() {
  const general = useContext(ItemsListContext);
  const system = useContext(SystemContext);
  const people = useContext(PeopleContext);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    if (general.progress) {
      handleNext();
    }
  }, [general.progress]);

  useEffect(() => {
    if (system.progress) {
      handleNext();
    }
  }, [system.progress]);

  useEffect(() => {
    if (people.progress) {
      handleNext();
    }
  }, [people.progress]);

  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <MobileStepper
      variant="progress"
      steps={4}
      position="static"
      activeStep={activeStep}
      className={classes.root}
    />
  );
}
