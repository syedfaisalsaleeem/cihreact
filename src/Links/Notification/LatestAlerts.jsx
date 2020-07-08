
import React from 'react';
import NHeader from "../../components/Notification/NHeader";
import LAContent from "../../components/LatestAlerts/LAContent";
class Home extends React.Component {
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
      <NHeader />
      <LAContent style={{background:"#E5E5E5"}}/>  
       
       
      </main>

      


      
    </div>
  )
      }
}
export default Home;
