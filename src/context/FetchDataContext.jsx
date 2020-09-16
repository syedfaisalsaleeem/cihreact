import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const FetchDataContext = createContext();

const FetchDataContextProvider = (props) => {
  const [spiderAlerts, setSpiderAlerts] = useState([]);
  const [spiderRisks, setSpiderRisks] = useState([]);
  const [lineChartAlerts, setLineChartAlerts] = useState([]);
  const [lineChartRisks, setLineChartRisks] = useState([]);
  const [barChartSensitiveInfo, setBarChartSensitiveInfo] = useState([]);
  const [barChartDiscussionInfo, setBarChartDiscussionInfo] = useState([]);

  const fetchedRiskAlertHandler = (
    object,
    array1,
    array2,
    setAlertFunc,
    setRiskFunc
  ) => {
    for (const key in object) {
      array1.push(object[key].alerts);
      array2.push(object[key].risk);
    }
    setAlertFunc(array1);
    setRiskFunc(array2);
  };

  const fetchedBarChartDataHandler = (object, array, setFunc, domain) => {
    switch (domain) {
      case "sensitive":
        for (const key in object) {
          array.push(object[key].sensitivedisclosure);
        }
        break;
      case "discussion":
        for (const key in object) {
          array.push(object[key].discussion);
        }
        break;
      default:
        return null;
    }

    setFunc(array);
  };

  useEffect(() => {
    let result = null;
    const fetchSpiderData = async () => {
      result = await axios.get(
        "https://if.cyberintelligencehouse.com/api/exposure",
        {
          headers: {
            "X-Api-Key": "1XOBDqYMo276NMNHL6bxO4VBuAOv4Mz2",
          },
        }
      );
      const res = result.data;
      console.log("result = ", result.data);
      const loadedSpiderAlertsData = [];
      const loadedSpiderRisksData = [];
      const loadedLineChartAlerts = [];
      const loadedLineChartRisks = [];
      const loadedBarChartSensitiveInfo = [];
      const loadedBarChartDiscussionInfo = [];
      fetchedRiskAlertHandler(
        res.by_category,
        loadedSpiderAlertsData,
        loadedSpiderRisksData,
        setSpiderAlerts,
        setSpiderRisks
      );
      fetchedRiskAlertHandler(
        res.trend,
        loadedLineChartAlerts,
        loadedLineChartRisks,
        setLineChartAlerts,
        setLineChartRisks
      );
      fetchedBarChartDataHandler(
        res.trend,
        loadedBarChartSensitiveInfo,
        setBarChartSensitiveInfo,
        "sensitive"
      );
      fetchedBarChartDataHandler(
        res.trend,
        loadedBarChartDiscussionInfo,
        setBarChartDiscussionInfo,
        "discussion"
      );
    };
    fetchSpiderData();
  }, []);
  return (
    <FetchDataContext.Provider
      value={{
        spiderAlerts,
        spiderRisks,
        lineChartAlerts,
        lineChartRisks,
        barChartSensitiveInfo,
        barChartDiscussionInfo
      }}
    >
      {props.children}
    </FetchDataContext.Provider>
  );
};

export default FetchDataContextProvider;
