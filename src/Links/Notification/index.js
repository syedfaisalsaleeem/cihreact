
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
     

      <main style={{background:"#F2F3F7"}}>
      <NHeader />
      <NContent style={{background:"#F2F3F7"}}/>  
       
       
      </main>

      


      
    </div>
  )
      }
}
export default Notification;
