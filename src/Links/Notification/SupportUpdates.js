
import React from 'react';
import NHeader from "../../components/Notification/NHeader";
import SupportUContent from "../../components/SupportUpdates/SupportUContent";
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
      <SupportUContent style={{background:"#E5E5E5"}}/>  
       
       
      </main>

      


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

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
      }
}
export default Home;
