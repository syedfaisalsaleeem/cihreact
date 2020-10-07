import React, { createContext } from "react";
import {useHistory} from 'react-router-dom';
export const HighlightStarsContext = createContext();
const HighlightStarsContextProvider=(props)=>{
const [count,setcount]=React.useState(0);
const history = useHistory();
const addcount=()=>{   
    setcount(count+1)
}
const changeflag=()=>{
setcount(count-1)
}
const loggedout=()=>{
    localStorage.removeItem("token")
    
    history.push("/");
    window.location.reload();
    
  }
  const [usestate1,setstate1]=React.useState({})
React.useEffect(()=>{
    const token=localStorage.getItem("token")
            
    const  x= async()=>{
        
        const response= await fetch("https://if.cyberdevelopment.house/api/alerts?page=1&filter=highlightedalerts&filter_op=AND", {
          headers: {
              'accept': 'application/json',
              'Authorization': token
          }
      });
      const y=await response.json()
      if(y.message==="Invalid access token"){
          console.log(y,"typefaisal")
          loggedout()
      }
      else{
          console.log(y,"typefaisal")
          if(y.length===0){
            //   setstate1({})
          }
          else{
            //   setstate1(y.alerts.slice(0,5))
              setcount(y.alerts.length)
          }
          
      }
      // console.log(y,"typefaisal")
      // setstate1(y.alerts)
  }
  x()
},[])
return(
   <HighlightStarsContext.Provider
    value={{
        count,
        addcount,
        changeflag
    }}
   >
    {props.children}
   </HighlightStarsContext.Provider> 
)
}
export default HighlightStarsContextProvider;