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

  const handleNext = (setStepFunc) => {
    setStepFunc(1);
  };

  const handleBack = (setStepFunc) => {
    setStepFunc(0);
  };

  useEffect(() => {
    if (general.progress) {
      handleNext(setGeneralStep);
    } 
    else {
      handleBack(setGeneralStep);
    }
  }, [general.progress]);

  useEffect(() => {
    if (system.progress) {
      handleNext(setSystemStep);
    } 
    else {
      handleBack(setSystemStep);
    }
  }, [system.progress]);

  useEffect(() => {
    if (people.progress) {
      handleNext(setPeopleStep);
    } 
    else {
      handleBack(setPeopleStep);
    }
  }, [people.progress]);

  const classes = useStyles();
  const theme = useTheme();
  const [generalStep, setGeneralStep] = React.useState(0);
  const [systemStep, setSystemStep] = React.useState(0);
  const [peopleStep, setPeopleStep] = React.useState(0);

  return (
    <MobileStepper
      variant="progress"
      steps={4}
      position="static"
      activeStep={generalStep + systemStep + peopleStep}
      className={classes.root}
    />
  );
}
