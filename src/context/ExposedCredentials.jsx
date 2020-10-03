import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ExposedCredentialContext = createContext();

const ExposedCredentials = (props) => {
  const [tableState, setTableState] = useState();
  useEffect(() => {
    let result = null;
    const fetchRemediationData = async () => {
      result = await axios.get(
        "https://if.cyberintelligencehouse.com/api/alerts/stats",
        {
          headers: {
            "X-Api-Key": "1XOBDqYMo276NMNHL6bxO4VBuAOv4Mz2",
          },
        }
      );
      const obj = result.data.exposedcredentials;
      const username = [];
      const f1 = [];
      const innerF = [];
      let count = -1;
      for (const key in obj) {
        username.push(key);
        count = count + 1;
        for (const key1 in obj[key]) {
          for (const key2 in obj[key][key1]) {
            obj[key][key1][key2].forEach((el) => innerF.push(el));
          }
        }
        f1.push({
          [username[count]]: {
            ...innerF,
          },
        });
        innerF.splice(0, innerF.length);
      }
      const loadedData = [];
      f1.forEach((el) => {
        const loadedTime = [];
        const loadedPassword = [];
        const loadedSeverity = [];
        for (const key in el) {
          for (const key1 in el[key]) {
            loadedTime.push(el[key][key1]["timestamp"]);
            loadedPassword.push(el[key][key1]["id"]);
            loadedSeverity.push(el[key][key1]["severity"]);
          }
          loadedData.push({
            username: key,
            timeStamp: [...loadedTime],
            password: [...loadedPassword],
            severity: [...loadedSeverity],
          });
          loadedTime.splice(0, loadedTime.length);
          loadedPassword.splice(0, loadedPassword.length);
          loadedSeverity.splice(0, loadedSeverity.length);
        }
      });
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
