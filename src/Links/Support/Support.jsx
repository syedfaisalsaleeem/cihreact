
import React from 'react';
import Header from "../../components/Header/Header";
import ContactDrawer from "../../components/Support/Drawer"
import Footer from "../../components/Footer/Footer"
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
  
  

      </div>
    
  )
}

export default function Support(){
  return(
    <div>
    
      <App1/>
    
    </div>
  )
}

  