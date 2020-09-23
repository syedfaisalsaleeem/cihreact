
import React from 'react';
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import MainDrawer from "../../components/Discover/Drawer.js";
import {BrowserRouter,Link,Switch,Route,Redirect,useHistory,withRouter} from 'react-router-dom';
import FetchDataProvider from "../../context/FetchDataContext";
export default function MainDashboard(){
  let history = useHistory();
const [drawer,setdrawer]=React.useState(true)
function handledrawer(){
  setdrawer(!drawer)
}
const token=localStorage.getItem("token")
if(token===null){
  return <Redirect to="/"></Redirect>
// history.push("/Dashboard");
}
else{
  return(
    <FetchDataProvider>
    <React.Fragment >
      <div >
      <Header call={handledrawer}/>
        <MainDrawer call={drawer}/>
       
       
      </div>
      <footer style={{display:"flex",marginTop:"2vh",marginBottom:"0vh"}}>
      
      <Footer />
         
       
      </footer>
      <style jsx global>{`
          html,
          body {
            width:100%;
            height:100%;
            padding: 0;
            margin: 0;
            background:#F2F3F7;
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
    </React.Fragment>
    </FetchDataProvider>
  )
}
}
// class Discover extends React.Component {
//   constructor(props){
//     super(props)
//     this.state={
//       drawer:true
//     }
//     this.handledrawer=this.handledrawer.bind(this)
//   }
  
    
  
//   handledrawer(){
//     console.log("handledrawer",this.state.drawer)
//     this.setState((prevState)=>{
//       return{drawer:!prevState.drawer}
//     }
//     )
//   }
// render(){  
//   return (
//     <div  className="container">
//       <head>
//       {/* <meta
//         name="viewport"
//         content="minimum-scale=1, initial-scale=1, width=device-width"
//         /> */}

//       </head>

//       <main style={{background:"#F2F3F7"}}>
//       <Header call={this.handledrawer}/>
//         <ExDrawer call={this.state.drawer}/>
       
       
//       </main>

//       <footer style={{display:"flex",marginTop:"0vh",background:"#F2F3F7"}}>
      
//       <Footer />
         
       
//       </footer>

//       <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//             Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//             sans-serif;
//         }

//         * {
//           box-sizing: border-box;
//         }
//       `}</style>
   
      
//     </div>
//   )
//       }
// }

