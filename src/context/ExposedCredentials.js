import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ExposedCredentialContext = createContext();

const ExposedCredentials = (props) => {
  const [tableState, setTableState] = useState();
  useEffect(() => {
    let result = null;
    const fetchRemediationData = async () => {
      const token = localStorage.getItem("token");

      const result = await fetch(
        "https://if.cyberdevelopment.house/api/alerts/stats",
        {
          headers: {
            accept: "application/json",
            Authorization: token,
          },
        }
      );
      const y = await result.json();
      console.log("result = ", y);
      const obj = await y.exposedcredentials;
      // const obj=[]
      const username = [];
      const passCode = [];
      const f1 = [];
      const innerF = [];
      let count = -1;
      for (const key in obj) {
        username.push(key);
        count = count + 1;
        for (const key1 in obj[key]) {
          for (const key2 in obj[key][key1]) {
            passCode.push(key2);
            obj[key][key1][key2].forEach((el) => {
              innerF.push(el);
            });
          }
        }
        f1.push({
          [username[count]]: {
            passCode: [...passCode],
            ...innerF,
          },
        });
        innerF.splice(0, innerF.length);
        passCode.splice(0, passCode.length);
      }
      console.log("f1 = ", f1);
      const loadedData = [];
      f1.forEach((el) => {
        const loadedTime = [];
        const loadedPassword = [];
        const loadedSeverity = [];
        const loadedalertsid = [];
        for (const key in el) {
          for (const key1 in el[key]) {
            if (
              el[key][key1]["timestamp"] &&
              el[key][key1]["id"] &&
              el[key][key1]["severity"]
            ) {
              loadedTime.push(el[key][key1]["timestamp"]);
              loadedPassword.push(el[key][key1]["id"]);
              loadedSeverity.push(el[key][key1]["severity"]);
            }
          }

          loadedData.push({
            username: key,
            timeStamp: [...loadedTime],
            password: [...loadedPassword],
            severity: [...loadedSeverity],
            passCodes: [...el[key].passCode],
          });
          loadedTime.splice(0, loadedTime.length);
          loadedPassword.splice(0, loadedPassword.length);
          loadedSeverity.splice(0, loadedSeverity.length);
        }
      });
      console.log("loadedData = ", loadedData);
      setTableState(loadedData);
    };
    fetchRemediationData();
  }, [setTableState]);

  return (
    <ExposedCredentialContext.Provider
      value={{
        tableState,
      }}
    >
      {props.children}
    </ExposedCredentialContext.Provider>
  );
};

export default ExposedCredentials;
