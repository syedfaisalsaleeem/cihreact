
import React from 'react';
import Header from "../../components/Header/Header";
import CyberDrawer from "../../components/Drawer/Drawer"
import Footer from "../../components/Footer/Footer"

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
      

      <main style={{background:"#F2F3F7"}}>
      <Header call={this.handledrawer}/>
        <CyberDrawer call={this.state.drawer}/>
       
       
      </main>

      <footer style={{display:"flex",marginTop:"0vh",background:"#F2F3F7"}}>
      
      <Footer />
         
       
      </footer>


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
          a{
            text-decoration:none;
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
