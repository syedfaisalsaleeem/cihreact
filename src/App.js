import React from "react";
import Login from "./Links/Login/Login.jsx";
import Home1 from "./Links/Home/index.js";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import CantLogin from "./Links/CantLogin/CantLogin.jsx";
import Home from "./Links/Dashboard/Dashboard.jsx";
import Setting from "./Links/Settings/Setting.jsx";
import Support from "./Links/Support/Support.jsx";
import Contact from "./Links/Support/Contact.jsx";
import Notification from "./Links/Notification/index.js";
import LatestAlerts from "./Links/Notification/LatestAlerts.jsx";
import ServiceUpdates from "./Links/Notification/ServiceUpdates.js";
import SupportUpdates from "./Links/Notification/SupportUpdates.js";
import Exposed from "./Links/Exposed/index.js";
import Monitor from "./Links/Monitored/index.js";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";
import BlackMarket from "./Links/Exposed/blackmarket.js";
import Discussion from "./Links/Exposed/discussions.js";
import Sensitive from "./Links/Exposed/sensitiveinformation.js";
import Financial from "./Links/Exposed/financial.js";
import ExposedCredentials from "./Links/Exposed/exposedcredentials.js";
import PersonalInformation from "./Links/Exposed/personalinformation.js";
import HackerGroupTargeting from "./Links/Exposed/hackergrouptargeting.js";
import AttacksAndCompromises from "./Links/Exposed/attacksandcompromises.js";
import UnderAnalysis from "./Links/Exposed/underanalysis.js";
import Remediation from "./Links/Exposed/remediation.js";
import Contact1 from "./Links/Contact/Contact.js";
import Discover from "./Links/Discover/index.js";
import MainDashboard from "./Links/MainDashboard/index.js";



function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
        </head>
        <BrowserRouter>
          <Route path="/" component={Login} exact />
          <Route path="/CantLogin" component={CantLogin} exact />
          <Route path="/Home" component={Home1} exact />
          <Route path="/MDashBoard" component={MainDashboard} exact />
          <Route path="/DashBoard" component={Home} exact />
          <Route path="/Discover" component={Discover} exact />
          <Route path="/Settings" component={Setting} exact />
          <Route path="/Support" component={Support} exact />
          <Route path="/Notification" component={Notification} exact />
          <Route path="/LatestAlerts" component={LatestAlerts} exact />
          <Route path="/ServiceUpdates" component={ServiceUpdates} exact />
          <Route path="/SupportUpdates" component={SupportUpdates} exact />
          <Route path="/Contact" component={Contact} exact />
          <Route path="/ExposedInformation" component={Exposed} exact />
          <Route path="/BlackMarket" component={BlackMarket} exact />
          <Route path="/Discussion" component={Discussion} exact />
          <Route path="/SensitiveInformation" component={Sensitive} exact />
          <Route path="/Financial" component={Financial} exact />
          <Route path="/Monitored" component={Monitor} exact />
          <Route
            path="/ExposedCredentials"
            component={ExposedCredentials}
            exact
          />
          <Route
            path="/PersonalInformation"
            component={PersonalInformation}
            exact
          />
          <Route
            path="/HackerGroupTargeting"
            component={HackerGroupTargeting}
            exact
          />
          <Route
            path="/AttackandCompromises"
            component={AttacksAndCompromises}
            exact
          />
          <Route path="/UnderAnalysis" component={UnderAnalysis} exact />
          <Route path="/Remediation" component={Remediation} exact />
          <Route path="/Contactus" component={Contact1} exact />
        </BrowserRouter>
        <style jsx global>{`
          html,
          body {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          a {
            text-decoration: none;
          }
          .percent-text {
            text-anchor: middle;
            font-family: "Roboto", sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
