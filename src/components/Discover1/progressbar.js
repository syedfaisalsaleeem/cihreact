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
  return(
    <div className="progress">
        <div className="progress-bar" style={{width:0}}>
            
        </div>
    <style jsx>
        {`
        .progress {
            display:flex;
            background: rgba(0, 0, 0, 0.3);
            
            width: 80%;;
            height: 26px;
            
            margin-bottom: 3rem;

        }
        .progress-bar {
            display:flex;
            background: #53B53A;
            width:0%;
            height: 100%;
            
            color: #fff;
            
            opacity: 1;
            transition: width 1s ease-in-out;
            
            
            justify-content: flex-end;
            align-items: center;
        }
        
        
        
        `}
    </style>
    
    </div>
)

  // const general = useContext(ItemsListContext);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };
  // useEffect(() => {
  //   if (general.progress) {
  //     handleNext();
  //     handleNext();
  //   } else {
  //     handleBack();
  //   }
  // }, [general.progress]);

  // const classes = useStyles();
  // const theme = useTheme();
  // const [activeStep, setActiveStep] = React.useState(0);

  // return (
  //   <MobileStepper
  //     variant="progress"
  //     steps={5}
  //     position="static"
  //     activeStep={activeStep}
  //     className={classes.root}
  //   />
  // );
}
