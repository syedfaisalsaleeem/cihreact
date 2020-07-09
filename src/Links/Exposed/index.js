
import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ExDrawer from "../../components/Exposed/ExDrawer";
class Exposed extends React.Component {
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
    <div  style={{height:"100%"}}>
      <head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
        />

      </head>

      <main style={{background:"#F2F3F7"}}>
      <Header call={this.handledrawer}/>
        <ExDrawer call={this.state.drawer}/>
       
       
      </main>

      <footer style={{display:"flex",marginTop:"0vh",background:"#F2F3F7"}}>
      
      <Footer />
         
       
      </footer>


      
    </div>
  )
      }
}
export default Exposed;
