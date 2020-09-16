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

  const [pieChartAlertsInfo, setPieChartAlertsInfo] = useState([]);
  const [pieChartSensitiveInfo, setPieChartSensitiveInfo] = useState([]);
  const [pieChartDiscussionInfo, setPieChartDiscussionInfo] = useState([]);
  const [pieChartBMInfo, setPieChartBMInfo] = useState([]);
  const [pieChartFinancialInfo, setPieChartFinancialInfo] = useState([]);
  const [pieChartECInfo, setPieChartECInfo] = useState([]);
  const [pieChartPIInfo, setPieChartPIInfo] = useState([]);
  const [pieChartHGInfo, setPieChartHGInfo] = useState([]);
  const [pieChartACInfo, setPieChartACInfo] = useState([]);

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
          array.push(object[key].discussions);
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

  const fetchedPieChartDataHandler = (setFunc, obj1, obj2, obj3) => {
    const darkWeb = obj1;
    const darkBreach = obj2;
    const deepWeb = obj3;
    const totalPie = darkWeb + darkBreach + deepWeb;
    const darkWebPer = (darkWeb / totalPie) * 100;
    const darkBreachPer = (darkBreach / totalPie) * 100;
    const deepWebPer = (deepWeb / totalPie) * 100;
    const loadedPieChartsInfo = [
      darkWebPer.toFixed(2),
      darkBreachPer.toFixed(2),
      deepWebPer.toFixed(2),
    ];
    setFunc(loadedPieChartsInfo);
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
      console.log(
        res.by_source.darkweb.alerts,
        res.by_source.databreach.alerts,
        res.by_source.deepweb.alerts
      );

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

      fetchedPieChartDataHandler(
        setPieChartAlertsInfo,
        res.by_source.darkweb.alerts,
        res.by_source.databreach.alerts,
        res.by_source.deepweb.alerts
      );
      fetchedPieChartDataHandler(
        setPieChartSensitiveInfo,
        res.by_source.darkweb.sensitivedisclosure,
        res.by_source.databreach.sensitivedisclosure,
        res.by_source.deepweb.sensitivedisclosure
      );
      fetchedPieChartDataHandler(
        setPieChartDiscussionInfo,
        res.by_source.darkweb.discussions,
        res.by_source.databreach.discussions,
        res.by_source.deepweb.discussions
      );
      fetchedPieChartDataHandler(
        setPieChartBMInfo,
        res.by_source.darkweb.blackmarkets,
        res.by_source.databreach.blackmarkets,
        res.by_source.deepweb.blackmarkets
      );
      fetchedPieChartDataHandler(
        setPieChartFinancialInfo,
        res.by_source.darkweb.financialinformation,
        res.by_source.databreach.financialinformation,
        res.by_source.deepweb.financialinformation
      );
      fetchedPieChartDataHandler(
        setPieChartECInfo,
        res.by_source.darkweb.exposedcredentials,
        res.by_source.databreach.exposedcredentials,
        res.by_source.deepweb.exposedcredentials
      );
      fetchedPieChartDataHandler(
        setPieChartPIInfo,
        res.by_source.darkweb.personalinformation,
        res.by_source.databreach.personalinformation,
        res.by_source.deepweb.personalinformation
      );
      fetchedPieChartDataHandler(
        setPieChartHGInfo,
        res.by_source.darkweb.hackergrouptargeting,
        res.by_source.databreach.hackergrouptargeting,
        res.by_source.deepweb.hackergrouptargeting
      );
      fetchedPieChartDataHandler(
        setPieChartACInfo,
        res.by_source.darkweb.attacksandcompromises,
        res.by_source.databreach.attacksandcompromises,
        res.by_source.deepweb.attacksandcompromises
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
        barChartAlertsInfo,
        barChartSensitiveInfo,
        barChartDiscussionInfo,
        barChartBMtInfo,
        barChartFinancialInfo,
        barChartECInfo,
        barChartPIInfo,
        barChartHGInfo,
        barChartACInfo,
        pieChartAlertsInfo,
        pieChartSensitiveInfo,
        pieChartDiscussionInfo,
        pieChartBMInfo,
        pieChartFinancialInfo,
        pieChartECInfo,
        pieChartPIInfo,
        pieChartHGInfo,
        pieChartACInfo,
      }}
    >
      {props.children}
    </FetchDataContext.Provider>
  );
};

export default FetchDataContextProvider;
