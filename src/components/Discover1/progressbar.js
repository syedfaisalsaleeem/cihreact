import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import { ItemsListContext } from "./context/itemsContext";
import { SystemContext } from "./context/systemContext";
import { PeopleContext } from "./context/peopleContext";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
    marginLeft: "20%",
    background: "none",
    "& .MuiLinearProgress-root": {
      background: "#bbb",
      height: "35px",
      width: "20rem",
      [theme.breakpoints.down("md")]: {
        width: "15rem",
      },
    },
    "& .MuiLinearProgress-barColorPrimary": {
      background: "green",
    },
  },
}));

export default function ProgressMobileStepper() {
  const general = useContext(ItemsListContext);
  const system = useContext(SystemContext);
  const people = useContext(PeopleContext);
  const [setup, setSetup] = useState(75);

  const handleNext = (setStepFunc) => {
    setStepFunc(1);
    setSetup((prevSetup) => prevSetup + 25);
  };

  const handleBack = (setStepFunc) => {
    setStepFunc(0);
    setSetup((prevSetup) => prevSetup - 25);
  };

  useEffect(() => {
    if (general.progress) {
      handleNext(setGeneralStep);
    } else {
      handleBack(setGeneralStep);
    }
  }, [general.progress]);

  useEffect(() => {
    if (system.progress) {
      handleNext(setSystemStep);
    } else {
      handleBack(setSystemStep);
    }
  }, [system.progress]);

  useEffect(() => {
    if (people.progress) {
      handleNext(setPeopleStep);
    } else {
      handleBack(setPeopleStep);
    }
  }, [people.progress]);

  const classes = useStyles();
  const [generalStep, setGeneralStep] = React.useState(0);
  const [systemStep, setSystemStep] = React.useState(0);
  const [peopleStep, setPeopleStep] = React.useState(0);

  return (
    <div>
      <Typography
        style={{ marginRight: "0.5rem" }}
        align="right"
        variant="subtitle2"
      >
        Setup {setup}% completed.
      </Typography>
      <MobileStepper
        variant="progress"
        steps={5}
        position="static"
        activeStep={generalStep + systemStep + peopleStep}
        className={classes.root}
      />
    </div>
  );
}
