import React from 'react';
import Login from "./Links/Login/Login"

import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';
import CantLogin from './Links/CantLogin/CantLogin';
import Home from './Links/Dashboard/Dashboard';
import Setting from './Links/Settings/Setting';
import Support from './Links/Support/Support';
import Contact from "./Links/Support/Contact";
import Notification from "./Links/Notification/index";
import LatestAlerts from "./Links/Notification/LatestAlerts";
import ServiceUpdates from "./Links/Notification/ServiceUpdates";
import SupportUpdates from "./Links/Notification/SupportUpdates";
import Exposed from "./Links/Exposed/";
import Monitor from "./Links/Monitored/";
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <head>
      <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
       <BrowserRouter>
        
        
        
        <Route path="/" component={Login} exact />
        <Route path="/CantLogin" component={CantLogin} exact/>
        <Route path="/DashBoard" component={Home} exact/>
        <Route path="/Settings" component={Setting} exact/>
        <Route path="/Support" component={Support} exact/>
        <Route path="/Notification" component={Notification} exact/>
        <Route path="/LatestAlerts" component={LatestAlerts} exact/>
        <Route path="/ServiceUpdates" component={ServiceUpdates} exact/>
        <Route path="/SupportUpdates" component={SupportUpdates} exact/>
        <Route path="/Contact" component={Contact} exact/>
        <Route path="/ExposedInformation" component={Exposed} exact/>
        <Route path="/Monitored" component={Monitor} exact/>
      
      </BrowserRouter>
      <style jsx global>{`
          html,
          body {
            width:100%;
            height:100%;
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          a{
              text-decoration:none
          }
          .percent-text{
            text-anchor: middle;
            font-family: 'Roboto', sans-serif;
            
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
