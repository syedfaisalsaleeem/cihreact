import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const FetchRemediationContext = createContext();

const getBarChartData = (object, setFunc1, setFunc2, endpoint) => {
  const loadedData = [];
  let totalRemediated = 0;
  let totalResidual = 0;
  switch (endpoint) {
    case "remediated":
      for (const key in object) {
        loadedData.push(object[key].risk_remediated);
      }
      totalRemediated = loadedData.reduce((acc, curr) => {
        return acc + curr;
      }, 0);
      console.log("total Remidiated = ", totalRemediated);
      break;
    case "residual":
      for (const key in object) {
        loadedData.push(object[key].risk_residual);
      }
      totalResidual = loadedData.reduce((acc, curr) => {
        return acc + curr;
      }, 0);
      break;
    default:
      return null;
  }
  const total = totalResidual + totalRemediated;
  console.log("total", total);
  setFunc1(loadedData);
  switch (endpoint) {
    case "remediated":
      let totalRemediatedPer = (totalRemediated / total) * 100;
      totalRemediatedPer = totalRemediatedPer ? totalRemediatedPer : 0;
      setFunc2(totalRemediatedPer);
      break;
    case "residual":
      const totalResidualPer = (totalResidual / total) * 100;
      setFunc2(totalResidualPer);
      break;
    default:
      return null;
  }
};

const FetchRemediation = (props) => {
  const [riskRemediated, setRiskRemediated] = useState([]);
  const [riskResidual, setRiskResidual] = useState([]);

  const [riskRemediatedPer, setRiskRemediatedPer] = useState();
  const [riskResidualPer, setRiskResidualPer] = useState();

  const [table1State, setTable1Sate] = useState();

  useEffect(() => {
    let result = null;
    const fetchRemediationData = async () => {
      result = await axios.get(
        "https://if.cyberintelligencehouse.com/api/remediation",
        {
          headers: {
            "X-Api-Key": "1XOBDqYMo276NMNHL6bxO4VBuAOv4Mz2",
          },
        }
      );
      const res = result.data;
      console.log("Remediation = ", res);
      getBarChartData(
        res.trend_12m,
        setRiskRemediated,
        setRiskRemediatedPer,
        "remediated"
      );
      getBarChartData(
        res.trend_12m,
        setRiskResidual,
        setRiskResidualPer,
        "residual"
      );
      const loadedData = [];
      res.remediations.forEach((el) => {
        loadedData.push({
          title: el.title,
          description: el.description,
          affects: el.total_alerts,
          risks: el.total_risk,
          cisControls: [...el.cis_controls],
          readyToExploit: el.ready_to_exploit,
          alertsIds: [...el.alert_ids],
        });
      });
      setTable1Sate(loadedData);
    };

    fetchRemediationData();
  }, []);

  useEffect(() => {
    console.log("table1State", table1State);
  }, [table1State]);

  return (
    <FetchRemediationContext.Provider
      value={{
        riskRemediated,
        riskResidual,
        riskRemediatedPer,
        riskResidualPer,
        table1State,
      }}
    >
      {props.children}
    </FetchRemediationContext.Provider>
  );
};

export default FetchRemediation;
