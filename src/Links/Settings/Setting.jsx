
import React from 'react';
import Header from "../../components/Header/Header";
import CyberDrawer from "../../components/Settings/Drawer1"
import Footer from "../../components/Footer/Footer"

class Setting extends React.Component {
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
    <div className="container">
      

      <main style={{background:"#E5E5E5"}}>
        <Header call={this.handledrawer}/>
        <CyberDrawer call={this.state.drawer}/>
        
      </main>

      <footer style={{display:"flex",marginBottom:"-65vh",background:"#E5E5E5"}}>
      
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
export default Setting;
