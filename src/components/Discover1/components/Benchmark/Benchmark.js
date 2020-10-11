import { Grid, Typography, withStyles } from "@material-ui/core";
import React from "react";
import Structure from "../Structure/Structure";
import GroupDropdown from "../UI/GroupDropdown";
import Select from "../UI/Select";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Tooltip from "@material-ui/core/Tooltip";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const industry = [
  { label: "Energy", array: ["Energy"] },
  { label: "Materials", array: ["Materials"] },
  {
    label: "Industrials",
    array: [
      "Capital Goods",
      "Commercial & Professional services",
      "Transportation",
    ],
  },
  {
    label: "Consumer Discretionary",
    array: [
      "Automobiles & Components",
      "Consumer durables & Apparel",
      "Consumer services",
      "Media",
      "Retailing",
    ],
  },
  {
    label: "Consumer Staples",
    array: [
      "Food & Staples Retailing",
      "Food",
      "Beverages & Tobacco",
      "Households & Personal products",
    ],
  },
  {
    label: "Health Care",
    array: [
      "Health Care Equipment & Services",
      "Pharmaceuticals",
      "Biotechnology & Life Sciences",
    ],
  },
  {
    label: "Financial",
    array: ["Banks", "Diversified Financial", "Insurance"],
  },
  { label: "Telecommunication Services", array: [] },
  { label: "Utilities", array: [] },
  { label: "Real Estate", array: [] },
];
const continent = [
  "Africa",
  "Asia",
  "Australia",
  "Europe",
  "North America",
  "South America",
];
const employeeCount = [
  "0-50",
  "50+",
  "100+",
  "500+",
  "1000+",
  "5000+",
  "10000+",
];

const Systems = () => {
  return (
    <Structure titleText="Benchmark">
      <Grid container justify="space-evenly">
        <Grid item xl="3" xs="10">
          <div style={{ display: "flex", marginLeft: "1rem" }}>
            <Typography variant="subtitle1">Continent</Typography>
            <LightTooltip title="Benchmark your company against other companies within a continent.">
              <InfoOutlinedIcon style={{ marginLeft: "1rem" }} />
            </LightTooltip>
          </div>
          <Select selectData={continent} placeholder="Select Continent" />
        </Grid>
        <Grid item xl="3" xs="10">
          <div style={{ display: "flex", marginLeft: "1rem" }}>
            <Typography variant="subtitle1">Industry</Typography>
            <LightTooltip title="Benchmark your company against other companies in your industry.">
              <InfoOutlinedIcon style={{ marginLeft: "1rem" }} />
            </LightTooltip>
          </div>
          <GroupDropdown dropdownData={industry} />
        </Grid>
        <Grid item xl="3" xs="10">
          <div style={{ display: "flex", marginLeft: "1rem" }}>
            <Typography variant="subtitle1">Employee Count</Typography>
            <LightTooltip title="Benchmark your company against other companies of similar size. Keep the information up-to-date for accurate benchmarking.">
              <InfoOutlinedIcon style={{ marginLeft: "1rem" }} />
            </LightTooltip>
          </div>
          <Select selectData={employeeCount} placeholder="Select Employee Count" />
        </Grid>
      </Grid>
    </Structure>
  );
};

export default Systems;
