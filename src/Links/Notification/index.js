
import React from 'react';
import NHeader from "../../components/Notification/NHeader";

import NContent from "../../components/Notification/NContent";
class Notification extends React.Component {
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
      <NContent style={{background:"#E5E5E5"}}/>  
       
       
      </main>

      


      
    </div>
  )
      }
}
export default Notification;
