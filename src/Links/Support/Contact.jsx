import React from 'react';
import Header from "../../components/Header/Header";
import ContactDrawer from "../../components/Support/ContactDrawere";
import Footer from "../../components/Footer/Footer";
import { createGlobalState } from 'react-hooks-global-state';
const initialState={drawer:true};
const {GlobalStateProvider,useGlobalState}=createGlobalState(initialState);

const App1=()=>{
  const [value,update]=useGlobalState('drawer');
  function handledrawer(){
    update(!value)
    
  }
  return(
    <div  style={{height:"100%"}}>
       
  
        <main style={{background:"#F2F3F7"}}>
        
        <Header call={handledrawer}/>
          <ContactDrawer call={value}/>
         
        </main>
  
        <footer style={{display:"flex",background:"#F2F3F7"}}>
        
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
  
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
  )
}
export default function Contact(props){
  
  return(
    
    <div>
      
      <App1/>
    </div>
  )
}

 