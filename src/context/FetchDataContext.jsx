import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {Redirect,useHistory, withRouter} from 'react-router-dom';

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
  const [barChartUAInfo, setBarChartUAInfo] = useState([]);

  const [pieChartAlertsInfo, setPieChartAlertsInfo] = useState([]);
  const [pieChartSensitiveInfo, setPieChartSensitiveInfo] = useState([]);
  const [pieChartDiscussionInfo, setPieChartDiscussionInfo] = useState([]);
  const [pieChartBMInfo, setPieChartBMInfo] = useState([]);
  const [pieChartFinancialInfo, setPieChartFinancialInfo] = useState([]);
  const [pieChartECInfo, setPieChartECInfo] = useState([]);
  const [pieChartPIInfo, setPieChartPIInfo] = useState([]);
  const [pieChartHGInfo, setPieChartHGInfo] = useState([]);
  const [pieChartACInfo, setPieChartACInfo] = useState([]);
  const [pieChartUAInfo, setPieChartUAInfo] = useState([]);

  const [totalAlertsInfo, setTotalAlertsInfo] = useState({
    totalAlerts: "",
    alertsToday: "",
    alertsLastMonth: "",
    alertsLast3Months: "",
  });
  const [totalSensitiveInfo, setTotalSensitiveInfo] = useState({
    totalAlerts: "",
    alertsToday: "",
    alertsLastMonth: "",
    alertsLast3Months: "",
  });
  const [totalDiscussionInfo, setTotalDiscussionInfo] = useState({
    totalAlerts: "",
    alertsToday: "",
    alertsLastMonth: "",
    alertsLast3Months: "",
  });
  const [totalBMInfo, setTotalBMInfo] = useState({
    totalAlerts: "",
    alertsToday: "",
    alertsLastMonth: "",
    alertsLast3Months: "",
  });
  const [totalFinancialInfo, setTotalFinancialInfo] = useState({
    totalAlerts: "",
    alertsToday: "",
    alertsLastMonth: "",
    alertsLast3Months: "",
  });
  const [totalECInfo, setTotalECInfo] = useState({
    totalAlerts: "",
    alertsToday: "",
    alertsLastMonth: "",
    alertsLast3Months: "",
  });
  const [totalPIInfo, setTotalPIInfo] = useState({
    totalAlerts: "",
    alertsToday: "",
    alertsLastMonth: "",
    alertsLast3Months: "",
  });
  const [totalHGInfo, setTotalHGInfo] = useState({
    totalAlerts: "",
    alertsToday: "",
    alertsLastMonth: "",
    alertsLast3Months: "",
  });
  const [totalACInfo, setTotalACInfo] = useState({
    totalAlerts: "",
    alertsToday: "",
    alertsLastMonth: "",
    alertsLast3Months: "",
  });
  const [totalUAInfo, setTotalUAInfo] = useState({
    totalAlerts: "",
    alertsToday: "",
    alertsLastMonth: "",
    alertsLast3Months: "",
  });

  const fetchedRiskAlertHandler = (object, setAlertFunc, setRiskFunc) => {
    const array1 = [];
    const array2 = [];
    for (const key in object) {
      array1.push(object[key].alerts);
      array2.push(object[key].risk);
    }
    setAlertFunc(array1);
    setRiskFunc(array2);
  };

  const fetchedBarChartDataHandler = (object, setFunc, domain) => {
    let array = [];
    switch (domain) {
      case "alerts":
        array = [];
        for (const key in object) {
          array.push(object[key].alerts);
        }
        break;
      case "sensitive":
        array = [];
        for (const key in object) {
          array.push(object[key].sensitivedisclosure);
        }
        break;
      case "discussion":
        array = [];
        for (const key in object) {
          array.push(object[key].discussions);
        }
        break;
      case "blackmarkets":
        array = [];
        for (const key in object) {
          array.push(object[key].blackmarkets);
        }
        break;
      case "financial":
        array = [];
        for (const key in object) {
          array.push(object[key].financialinformation);
        }
        break;
      case "exposedcredentials":
        array = [];
        for (const key in object) {
          array.push(object[key].exposedcredentials);
        }
        break;
      case "personalinformation":
        array = [];
        for (const key in object) {
          array.push(object[key].personalinformation);
        }
        break;
      case "hackergrouptargeting":
        array = [];
        for (const key in object) {
          array.push(object[key].hackergrouptargeting);
        }
        break;

      case "attacksandcompromises":
        array = [];
        for (const key in object) {
          array.push(object[key].attacksandcompromises);
        }
        break;
      case "unidentified":
        array = [];
        for (const key in object) {
          array.push(object[key].unidentified);
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

  const fetchedTotalFiguresHandler = (setTotalObj, domain, object) => {
    let array = [];
    switch (domain) {
      case "alerts":
        array = [];
        for (const key in object) {
          array.push(object[key].alerts);
        }
        break;
      case "sensitive":
        array = [];
        for (const key in object) {
          array.push(object[key].sensitivedisclosure);
        }
        break;
      case "discussion":
        array = [];
        for (const key in object) {
          array.push(object[key].discussions);
        }
        break;
      case "blackmarkets":
        array = [];
        for (const key in object) {
          array.push(object[key].blackmarkets);
        }
        break;
      case "financial":
        array = [];
        for (const key in object) {
          array.push(object[key].financialinformation);
        }
        break;
      case "exposedcredentials":
        array = [];
        for (const key in object) {
          array.push(object[key].exposedcredentials);
        }
        break;
      case "personalinformation":
        array = [];
        for (const key in object) {
          array.push(object[key].personalinformation);
        }
        break;
      case "hackergrouptargeting":
        array = [];
        for (const key in object) {
          array.push(object[key].hackergrouptargeting);
        }
        break;

      case "attacksandcompromises":
        array = [];
        for (const key in object) {
          array.push(object[key].attacksandcompromises);
        }
        break;
      case "unidentified":
        array = [];
        for (const key in object) {
          array.push(object[key].unidentified);
        }
        break;
      default:
        return null;
    }
    const totalAlerts = array.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    const alertsToday = array[array.length - 1];
    const alertsLastMonth = array[array.length - 2];
    const alertsLast3Months = [
      array[array.length - 2],
      array[array.length - 3],
      array[array.length - 4],
    ];
    const totalLast3MonthsAlerts = alertsLast3Months.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    setTotalObj((prevState) => ({
      ...prevState,
      totalAlerts: totalAlerts,
      alertsToday: alertsToday,
      alertsLastMonth: alertsLastMonth,
      alertsLast3Months: totalLast3MonthsAlerts,
    }));
  };
  // let history = useHistory();
  const loggedout=()=>{
    // let history = useHistory();
    // localStorage.removeItem("token")
    
    // history.push("/");
    // window.location.reload();
    
  }
  useEffect(() => {
    let result = null;
    const token=localStorage.getItem("token")
    const  x= async()=>{
      const response= await fetch('https://if.cyberdevelopment.house/api/exposure', {
          headers: {
              'accept': 'application/json',
              'Authorization': token
          }
      });
      const y=await response.json()
      if(y.message==="Invalid access token"){
          console.log(y,"typefaisal")
          loggedout()
      }
      else{
          console.log(y,"typefaisal")
          const res = y;
          // if(y.length===0){
          //     setstate1({})
          // }
          // else{
          //     setstate1(y.alerts)
          // }
          


    // const fetchSpiderData = async () => {
    //   result = await axios.get(
    //     "https://if.cyberintelligencehouse.com/api/exposure",
    //     {
    //       headers: {
    //         "X-Api-Key": "1XOBDqYMo276NMNHL6bxO4VBuAOv4Mz2",
    //       },
    //     }
    //   );
    //   const res = result.data;

      fetchedTotalFiguresHandler(setTotalAlertsInfo, "alerts", res.trend);
      fetchedTotalFiguresHandler(setTotalSensitiveInfo, "sensitive", res.trend);
      fetchedTotalFiguresHandler(
        setTotalDiscussionInfo,
        "discussion",
        res.trend
      );
      fetchedTotalFiguresHandler(setTotalBMInfo, "blackmarkets", res.trend);
      fetchedTotalFiguresHandler(setTotalFinancialInfo, "financial", res.trend);
      fetchedTotalFiguresHandler(
        setTotalECInfo,
        "exposedcredentials",
        res.trend
      );
      fetchedTotalFiguresHandler(
        setTotalPIInfo,
        "personalinformation",
        res.trend
      );
      fetchedTotalFiguresHandler(
        setTotalHGInfo,
        "hackergrouptargeting",
        res.trend
      );
      fetchedTotalFiguresHandler(
        setTotalACInfo,
        "attacksandcompromises",
        res.trend
      );
      fetchedTotalFiguresHandler(setTotalUAInfo, "unidentified", res.trend);

      fetchedRiskAlertHandler(res.by_category, setSpiderAlerts, setSpiderRisks);
      fetchedRiskAlertHandler(res.trend, setLineChartAlerts, setLineChartRisks);
      fetchedBarChartDataHandler(res.trend, setBarChartAlertsInfo, "alerts");
      fetchedBarChartDataHandler(
        res.trend,
        setBarChartSensitiveInfo,
        "sensitive"
      );
      fetchedBarChartDataHandler(
        res.trend,
        setBarChartDiscussionInfo,
        "discussion"
      );
      fetchedBarChartDataHandler(res.trend, setBarChartBMtInfo, "blackmarkets");
      fetchedBarChartDataHandler(
        res.trend,
        setBarChartFinancialInfo,
        "financial"
      );
      fetchedBarChartDataHandler(
        res.trend,
        setBarChartECInfo,
        "exposedcredentials"
      );
      fetchedBarChartDataHandler(
        res.trend,
        setBarChartPIInfo,
        "personalinformation"
      );
      fetchedBarChartDataHandler(
        res.trend,
        setBarChartHGInfo,
        "hackergrouptargeting"
      );
      fetchedBarChartDataHandler(
        res.trend,
        setBarChartACInfo,
        "attacksandcompromises"
      );
      fetchedBarChartDataHandler(res.trend, setBarChartUAInfo, "unidentified");

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
      fetchedPieChartDataHandler(
        setPieChartUAInfo,
        res.by_source.darkweb.unidentified,
        res.by_source.databreach.unidentified,
        res.by_source.deepweb.unidentified
      );
    };
  
  // console.log(y,"typefaisal")
  // setstate1(y.alerts)
}
x() 
    // fetchSpiderData();
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
        barChartUAInfo,
        pieChartAlertsInfo,
        pieChartSensitiveInfo,
        pieChartDiscussionInfo,
        pieChartBMInfo,
        pieChartFinancialInfo,
        pieChartECInfo,
        pieChartPIInfo,
        pieChartHGInfo,
        pieChartACInfo,
        pieChartUAInfo,
        totalAlertsInfo,
        totalSensitiveInfo,
        totalDiscussionInfo,
        totalBMInfo,
        totalFinancialInfo,
        totalECInfo,
        totalPIInfo,
        totalHGInfo,
        totalACInfo,
        totalUAInfo,
      }}
    >
      {props.children}
    </FetchDataContext.Provider>
  );
};

export default FetchDataContextProvider;
