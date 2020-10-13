import React, { createContext, useEffect, useState } from "react";

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
  const [table2State, setTable2Sate] = useState();
  useEffect(() => {
    let result = null;
    const fetchRemediationData = async () => {
      const token = localStorage.getItem("token");
      result = await fetch(
        "https://if.cyberdevelopment.house/api/remediation",
        {
          headers: {
            accept: "application/json",
            Authorization: token,
          },
        }
      );
      const y = await result.json();
      const res = y;
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
          rowid: el.id,
          title: el.title,
          description: el.description,
          affects: el.total_alerts,
          risks: el.total_risk,
          cisControls: [...el.cis_controls],
          readyToExploit: el.ready_to_exploit,
          alertsIds: [...el.alert_ids],
        });
      });
      setTable1Sate(loadedData.splice(0, 10));
    };

    fetchRemediationData();
    const fetchRemediationData1 = async () => {
      const token = localStorage.getItem("token");
      result = await fetch(
        "https://if.cyberdevelopment.house/api/remediation",
        {
          headers: {
            accept: "application/json",
            Authorization: token,
          },
        }
      );
      const y = await result.json();
      const res = y;
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
    };

    fetchRemediationData1();

    const fetchRemediationData2 = async () => {
      const token = localStorage.getItem("token");
      result = await fetch(
        "https://if.cyberdevelopment.house/api/remediation/log",
        {
          headers: {
            accept: "application/json",
            Authorization: token,
          },
        }
      );
      const res = await result.json();
      console.log("LOG Data = ", res);
      const loadedData = [];
      res.remediations.forEach((el) => {
        loadedData.push({
          username: el.username,
          title: el.title,
          risks: el.total_risk,
          remediated: el.comment,
          affects: "",
          alertsIds: el.alert_ids,
        });
      });
      setTable2Sate(loadedData.splice(0, 10));
    };

    fetchRemediationData2();
  }, []);

  return (
    <FetchRemediationContext.Provider
      value={{
        riskRemediated,
        riskResidual,
        riskRemediatedPer,
        riskResidualPer,
        table1State,
        table2State,
      }}
    >
      {props.children}
    </FetchRemediationContext.Provider>
  );
};

export default FetchRemediation;
