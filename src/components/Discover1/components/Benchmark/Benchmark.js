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
  { value: "Energy", space: true },
  { value: "Materials", space: true },
  {
    value: "Industrials",
    space: true,
  },
  { value: "Capital Goods" },
  { value: "Commercial & Professional services" },
  { value: "Transportation" },
  {
    value: "Consumer Discretionary",
    space: true,
  },
  { value: "Automobiles & Components" },
  { value: "Consumer durables & Apparel" },
  { value: "Consumer services" },
  { value: "Media" },
  { value: "Retailing" },
  {
    value: "Consumer Staples",
    space: true,
  },
  { value: "Food & Staples Retailing" },
  { value: "Food" },
  { value: "Beverages & Tobacco" },
  { value: "Households & Personal products" },
  {
    value: "Health Care",
    space: true,
  },
  { value: "Health Care Equipment & Services" },
  { value: "Pharmaceuticals" },
  { value: "Biotechnology & Life Sciences" },
  {
    value: "Financial",
    space: true,
  },
  { value: "Banks" },
  { value: "Diversified Financial" },
  { value: "Insurance" },
  { value: "Information Technology", space: true },
  { value: "Software & Services" },
  { value: "Technology Hardware & Equipment" },
  { value: "Semiconductors & Semiconductor Equipment" },
  { value: "Telecommunication Services", space: true },
  { value: "Utilities", space: true },
  { value: "Real Estate", space: true },
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
      <Grid container justify="space-between" spacing={2}>
        <Grid item xl="4" xs="10">
          <div style={{ display: "flex", marginLeft: "1rem" }}>
            <Typography variant="subtitle1">Continent</Typography>
            <LightTooltip title="Benchmark your company against other companies within a continent.">
              <InfoOutlinedIcon style={{ marginLeft: "1rem" }} />
            </LightTooltip>
          </div>
          <Select selectData={continent} placeholder="Select Continent" />
        </Grid>
        <Grid item xl="4" xs="10">
          <div style={{ display: "flex", marginLeft: "1rem" }}>
            <Typography variant="subtitle1">Industry</Typography>
            <LightTooltip title="Benchmark your company against other companies in your industry.">
              <InfoOutlinedIcon style={{ marginLeft: "1rem" }} />
            </LightTooltip>
          </div>
          <GroupDropdown dropdownData={industry} />
        </Grid>
        <Grid item xl="4" xs="10">
          <div style={{ display: "flex", marginLeft: "1rem" }}>
            <Typography variant="subtitle1">Employee Count</Typography>
            <LightTooltip title="Benchmark your company against other companies of similar size. Keep the information up-to-date for accurate benchmarking.">
              <InfoOutlinedIcon style={{ marginLeft: "1rem" }} />
            </LightTooltip>
          </div>
          <Select
            selectData={employeeCount}
            placeholder="Select Employee Count"
          />
        </Grid>
      </Grid>
    </Structure>
  );
};

export default Systems;
