import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Divider from "@material-ui/core/Divider";
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import A from './Tabs';
import Highlight from './Highlight.js'
import {Badge} from "@material-ui/core";
import Latest from "./Latest.jsx";
import { HighlightStarsContext } from "./context/highlightstars.js";
import {useHistory} from 'react-router-dom';
import { trackPromise } from "react-promise-tracker";
const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -15,
      top: 14,
      border: `4px solid ${theme.secondary}`,
      
      borderRadius:"20px",
    },
  }))(Badge);
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },

    HeaderFont:{
        fontFamily: 'Roboto',
        fontSize: "16.9411px" ,
          fontWeight:"bold",
          fontStyle:"normal"
      },


    f2:{
        width:"100%",
        boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        
     },

  }));
export default function HighlightTab(){
    const classes = useStyles();
    const history = useHistory();
    const barChartUAInfoData = React.useContext(HighlightStarsContext);
    console.log(barChartUAInfoData)
    const {addcount,changeflag,count}=barChartUAInfoData;
    const [index1,setindex]=React.useState({index:0});

    const [value, setValue] = React.useState('2');
    // const [count,setcount]=React.useState(0);
    // const [flag,setflag]=React.useState(false);
    // const addcount=()=>{

            

       
    //         setcount(count+1)
  
    // }
    // const changeflag=()=>{
    //     setcount(count-1)
    // }
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handle1=(index1)=>{
        console.log('index',index1)
        setindex({index:index1})
    }
    const loggedout=()=>{
        localStorage.removeItem("token")
        
        history.push("/");
        window.location.reload();
        
      }
      const [usestate1,setstate1]=React.useState({})
      const [usestate2,setstate2]=React.useState({})
    //   useEffect(()=>{
    //     const token=localStorage.getItem("token")
            
    //     const  x= async()=>{
            
    //         const response= await fetch("https://if.cyberdevelopment.house/api/alerts?page=1&filter=highlightedalerts&filter_op=AND", {
    //           headers: {
    //               'accept': 'application/json',
    //               'Authorization': token
    //           }
    //       });
    //       const y=await response.json()
    //       if(y.message==="Invalid access token"){
    //           console.log(y,"typefaisal")
    //           loggedout()
    //       }
    //       else{
    //           console.log(y,"typefaisal")
    //           if(y.length===0){
    //               setstate1({})
    //           }
    //           else{
    //               setstate1(y.alerts.slice(0,5))
    //           }
              
    //       }
    //       // console.log(y,"typefaisal")
    //       // setstate1(y.alerts)
    //   }
    //   x()
    //   },[usestate1])
    const [view,setview]=React.useState(false);

    const handleclick1=()=>{
        const token=localStorage.getItem("token")
            
        const  x= async()=>{
          const response= await trackPromise(fetch('https://if.cyberdevelopment.house/api/alerts?filter_op=AND', {
              headers: {
                  'accept': 'application/json',
                  'Authorization': token
              }
          }));
          const y=await trackPromise(response.json());
          if(y.message==="Invalid access token"){
              console.log(y,"typefaisal")
              loggedout()
          }
          else{
              console.log(y,"typefaisal")
              if(y.length===0){
                  setstate2({})
              }
              else{
                setstate2({})
                  setstate2(y.alerts.slice(0,5))
                  setview(false)
              }
              
          }
          // console.log(y,"typefaisal")
          // setstate1(y.alerts)
      }
      x()
    }
    const handleclick=()=>{
        const token=localStorage.getItem("token")
            
        const  x= async()=>{
            
            const response= await trackPromise(fetch("https://if.cyberdevelopment.house/api/alerts?page=1&filter=highlighted&filter_op=AND", {
              headers: {
                  'accept': 'application/json',
                  'Authorization': token
              }
          }));
          const y=await trackPromise(response.json())
          if(y.message==="Invalid access token"){
              console.log(y,"typefaisal")
              loggedout()
          }
          else{
              console.log(y,"typefaisal")
              if(y.length===0){
                  setstate1({})
              }
              else{
                setstate1({})
                  setstate1(y.alerts)
                  setview(true)
              }
              
          }
          // console.log(y,"typefaisal")
          // setstate1(y.alerts)
      }
      x()
    }
    useEffect(() => {
        let result = null;
        const token=localStorage.getItem("token")
            
        const  x= async()=>{
          const response= await trackPromise(fetch('https://if.cyberdevelopment.house/api/alerts?filter_op=AND', {
              headers: {
                  'accept': 'application/json',
                  'Authorization': token
              }
          }));
          const y=await trackPromise(response.json());
          if(y.message==="Invalid access token"){
              console.log(y,"typefaisal")
              loggedout()
          }
          else{
              console.log(y,"typefaisal")
              if(y.length===0){
                  setstate2({})
              }
              else{
                  setstate2(y.alerts.slice(0,5))
              }
              
          }
          // console.log(y,"typefaisal")
          // setstate1(y.alerts)
      }
      x()
      const  y1= async()=>{
            
        const response= await trackPromise(fetch("https://if.cyberdevelopment.house/api/alerts?page=1&filter=highlighted&filter_op=AND", {
          headers: {
              'accept': 'application/json',
              'Authorization': token
          }
      }));
      const y=await trackPromise(response.json());
      if(y.message==="Invalid access token"){
          console.log(y,"typefaisal")
          loggedout()
      }
      else{
          console.log(y,"typefaisal")
          if(y.length===0){
              setstate1({})
          }
          else{
            setstate1({})
              setstate1(y.alerts)
              setview(true)
          }
          
      }
      // console.log(y,"typefaisal")
      // setstate1(y.alerts)
  }
  y1() 
        // const fetchData = async () => {
        //   result = await axios.get(
        //     "https://if.cyberintelligencehouse.com/api/alerts?filter_op=AND",
        //     {
        //       headers: {
        //         "X-Api-Key": "1XOBDqYMo276NMNHL6bxO4VBuAOv4Mz2",
        //       },
        //     }
        //   );
        //   console.log(result.data,"faisal")
        //   setstate1(result.data.alerts.slice(0,5))
        // }
        // fetchData()
    },[])
    return(
        <Grid item xs={12} md={12}>
        <Grid container justify="center" style={{background:"transparent"}}>
            <Grid items md={11}>
            <Card className={classes.f2}>
                <CardHeader
                    className={classes.HeaderFont}>

                </CardHeader>
                <Divider/>
                <CardContent>
                    <Grid container>
                        <Grid item xs={12}>
                            <A.Tabs value={index1.index} onChange={(_,index1)=>handle1(index1)}>
                                <A.Tab title="Latest Alerts" onClick={handleclick1} />
                                <A.Tab title=
                                {
                                <StyledBadge color="secondary" badgeContent={count}>
                                            Highlighted Alerts
                                            </StyledBadge>
                                

                                    } onClick={handleclick}
                                    />
                                
                            </A.Tabs>

                            

                            <A.TabContent value={index1.index} index={0}>
                            <Grid item>
                                <Latest usestate2={usestate2}/>
                            </Grid>
                            </A.TabContent>
                            <A.TabContent value={index1.index}  index={1}>
                            <Grid item >
                                <Highlight  
                                    usestate1={usestate1}
                                />
                            </Grid>
                            </A.TabContent>
                           



                        </Grid>


                    </Grid>
                    
                </CardContent>
                
            </Card>
            </Grid>
            
        </Grid>

    </Grid>
    )
}