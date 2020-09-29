import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import classes from "./App.module.css";
import General from "./components/general/general";
import Benchmark from "./components/Benchmark/Benchmark";
import Systems from "./components/Systems/Systems";
import People from "./components/People/People";
import ItemsContextProvider from "./context/itemsContext";
import SystemContextProvider from "./context/systemContext";
import PeopleContextProvider from "./context/peopleContext";
import { withStyles } from "@material-ui/core/styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import Progressbar from "./progressbar";
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

export default function DiscoverContent() {
  const [count, setcount] = useState();

  const calculate = () => {
    let char, calculate, x;
    char = (70 / 300) * 100;
    console.log(char, "char");
    x = Math.round(char);
    calculate = String(x).concat("%");

    setcount(calculate);
  };

  useEffect(() => {
    calculate();
  });
  return (
    <section>
      <ItemsContextProvider>
        <SystemContextProvider>
          <PeopleContextProvider>
            <Grid container direction="column" className={classes.warper}>
              <Grid container style={{ marginBottom: "20px" }}>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="h4">Discover</Typography>
                          <Grid item style={{ marginLeft: "10px" }}>
                            <LightTooltip
                              title="Cyber Exposure is discovered based on your company’s 
                                details. Add information relevant to your company to start discovering"
                            >
                              <InfoOutlinedIcon />
                            </LightTooltip>
                          </Grid>
                        </div>
                        <Progressbar />
                      </div>
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container spacing="2">
                <Grid item xs="12" md="6">
                  <General />
                </Grid>
                <Grid item xs="12" md="6">
                  <Benchmark />
                </Grid>
              </Grid>
              <br />
              <Grid item container spacing="2">
                <Grid item xs="12" md="6">
                  <Systems />
                </Grid>
                <Grid item xs="12" md="6">
                  <People />
                </Grid>
              </Grid>
            </Grid>
          </PeopleContextProvider>
        </SystemContextProvider>
      </ItemsContextProvider>
    </section>
  );
}
