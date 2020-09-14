
import React from 'react';
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import FDrawer from "../../components/underanalysis/FDrawer.jsx";
export default class UnderAnalysis extends React.Component {
  constructor(props){
    super(props)
    this.state={
      drawer:true
    }
    this.handledrawer=this.handledrawer.bind(this)
  }
  
    
  
  handledrawer(){
    console.log("handledrawer",this.state.drawer)
    this.setState((prevState)=>{
      return{drawer:!prevState.drawer}
    }
    )
  }
render(){  
  return (
    <div  className="container">
      <head>
      {/* <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
        /> */}

      </head>

      <main style={{background:"#F2F3F7"}}>
      <Header call={this.handledrawer}/>
        <FDrawer call={this.state.drawer}/>
       
       
      </main>

      <footer style={{display:"flex",marginTop:"0vh",background:"#F2F3F7"}}>
      
      <Footer />
         
       
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
   
      
    </div>
  )
      }
}

