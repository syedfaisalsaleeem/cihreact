import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Structure from "../Structure/Structure";
import GroupDropdown from "../UI/GroupDropdown";
import Select from "../UI/Select";

const industry = [
  { label: "Energy", array: [] },
  { label: "Materials", array: [] },
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
        <Grid item md="3">
          <Typography style={{ marginLeft: "1rem" }}>Continent</Typography>
          <Select selectData={continent} />
        </Grid>
        <Grid item md="3">
          <Typography style={{ marginLeft: "1rem" }}>Industry</Typography>
          <GroupDropdown dropdownData={industry} />
        </Grid>
        <Grid item md="3">
          <Typography style={{ marginLeft: "1rem" }}>Employee Count</Typography>
          <Select selectData={employeeCount} />
        </Grid>
      </Grid>
    </Structure>
  );
};

export default Systems;
