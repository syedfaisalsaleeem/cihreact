import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const FetchDataContext = createContext();

const FetchDataContextProvider = (props) => {
  const [spiderAlerts, setSpiderAlerts] = useState([]);
  const [spiderRisks, setSpiderRisks] = useState([]);
  const [lineChartAlerts, setLineChartAlerts] = useState([]);
  const [lineChartRisks, setLineChartRisks] = useState([]);
  const [barChartAlertsInfo, setBarChartAlertsInfo] = useState([]);
  const [barChartSensitiveInfo, setBarChartSensitiveInfo] = useState([]);
  const [barChartDiscussionInfo, setBarChartDiscussionInfo] = useState([]);
  const [barChartBMtInfo, setBarChartBMtInfo] = useState([]);
  const [barChartFinancialInfo, setBarChartFinancialInfo] = useState([]);
  const [barChartECInfo, setBarChartECInfo] = useState([]);
  const [barChartPIInfo, setBarChartPIInfo] = useState([]);
  const [barChartHGInfo, setBarChartHGInfo] = useState([]);
  const [barChartACInfo, setBarChartACInfo] = useState([]);

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
      case "alerts":
        for (const key in object) {
          array.push(object[key].alerts);
        }
        break;
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
      case "blackmarkets":
        for (const key in object) {
          array.push(object[key].blackmarkets);
        }
        break;
      case "financial":
        for (const key in object) {
          array.push(object[key].financialinformation);
        }
        break;
      case "exposedcredentials":
        for (const key in object) {
          array.push(object[key].exposedcredentials);
        }
        break;
      case "personalinformation":
        for (const key in object) {
          array.push(object[key].personalinformation);
        }
        break;
      case "hackergrouptargeting":
        for (const key in object) {
          array.push(object[key].hackergrouptargeting);
        }
        break;

      case "attacksandcompromises":
        for (const key in object) {
          array.push(object[key].attacksandcompromises);
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
      const loadedSpiderAlertsData = [];
      const loadedSpiderRisksData = [];
      const loadedLineChartAlerts = [];
      const loadedLineChartRisks = [];
      const loadedBarChartAlertsInfo = [];
      const loadedBarChartSensitiveInfo = [];
      const loadedBarChartDiscussionInfo = [];
      const loadedBarChartBMInfo = [];
      const loadedBarChartFinancialInfo = [];
      const loadedBarChartECInfo = [];
      const loadedBarChartPIInfo = [];
      const loadedBarChartHGInfo = [];
      const loadedBarChartACInfo = [];

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
      fetchedBarChartDataHandler(
        res.trend,
        loadedBarChartBMInfo,
        setBarChartBMtInfo,
        "blackmarkets"
      );
      fetchedBarChartDataHandler(
        res.trend,
        loadedBarChartFinancialInfo,
        setBarChartFinancialInfo,
        "financial"
      );
      fetchedBarChartDataHandler(
        res.trend,
        loadedBarChartECInfo,
        setBarChartECInfo,
        "exposedcredentials"
      );
      fetchedBarChartDataHandler(
        res.trend,
        loadedBarChartPIInfo,
        setBarChartPIInfo,
        "personalinformation"
      );
      fetchedBarChartDataHandler(
        res.trend,
        loadedBarChartHGInfo,
        setBarChartHGInfo,
        "hackergrouptargeting"
      );
      fetchedBarChartDataHandler(
        res.trend,
        loadedBarChartACInfo,
        setBarChartACInfo,
        "attacksandcompromises"
      );

      fetchedBarChartDataHandler(
        res.trend,
        loadedBarChartAlertsInfo,
        setBarChartAlertsInfo,
        "alerts"
      );
    };
    fetchSpiderData();
  }, []);
  return (
    <FetchDataContext.Provider
      value={{
        barChartAlertsInfo,
        spiderAlerts,
        spiderRisks,
        lineChartAlerts,
        lineChartRisks,
        barChartSensitiveInfo,
        barChartDiscussionInfo,
        barChartBMtInfo,
        barChartFinancialInfo,
        barChartECInfo,
        barChartPIInfo,
        barChartHGInfo,
        barChartACInfo,
      }}
    >
      {props.children}
    </FetchDataContext.Provider>
  );
};

export default FetchDataContextProvider;
