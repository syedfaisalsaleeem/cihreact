import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { usePromiseTracker } from 'react-promise-tracker';
// import Loader from 'react-promise-loader';
import Loader from 'react-loader-spinner';
import {Dialog,Modal,Backdrop} from "@material-ui/core";
import Fade from '@material-ui/core/Fade';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();

  return (
  <div>
    {
    (promiseInProgress===true) ?
    <Modal       style={{
      width: "100%",
      height: "100",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }} BackdropComponent={Backdrop} onClose={promiseInProgress===true?false:true} open={promiseInProgress===true?true:false}>
    

    
      <Fade in={promiseInProgress===true?true:false}>
     {/* <Loader type="Rings"color="#2BAD60" style={{background:"transparent"}} height="100" width="100" /> */}
     <Loader type="Oval" color="#00FF65" height={80} width={80}/>
     </Fade>
    
  </Modal>
:
      null
    }
    </div>
    
  )

};
ReactDOM.render(

  <React.StrictMode>
    
      <App />
      {/* <Loader promiseTracker={usePromiseTracker} /> */}
      <LoadingIndicator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
