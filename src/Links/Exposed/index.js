
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
      

      <main style={{background:"#E5E5E5"}}>
      <Header call={this.handledrawer}/>
        <ExDrawer call={this.state.drawer}/>
       
       
      </main>

      <footer style={{display:"flex",marginTop:"0vh",background:"#E5E5E5"}}>
      
      <Footer />
         
       
      </footer>


      
    </div>
  )
      }
}
export default Exposed;
