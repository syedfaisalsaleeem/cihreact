import React,{Component} from 'react';
import {Bar,Line,Pie,Doughnut} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Grid} from "@material-ui/core";
import axios from 'axios';
import useDeepCompareEffect from 'use-deep-compare-effect'
export default function Piechart() {
    const [piedata,setpiedata]=React.useState({});
    const [by_category,setby_category]=React.useState({
        "sensitivedisclosure":0,
        "discussions":0,
        "blackmarkets":0,
        "financialinformation":0,
        "exposedcredentials":0,
        "personalinformation":0,
        "hackergrouptargeting":0,
        "attacksandcompromises":0,
        "unidentified":0

    })
    const calculate=()=>{
       let by={
        "sensitivedisclosure":0,
        "discussions":0,
        "blackmarkets":0,
        "financialinformation":0,
        "exposedcredentials":0,
        "personalinformation":0,
        "hackergrouptargeting":0,
        "attacksandcompromises":0,
        "unidentified":0
       }
       for(var key in piedata) {
        var value = piedata[key];
        var count=0;
        for(var key1 in value){
                var value1=value[key1]
                count=count+value1
            }
        // console.log(value,count,key,by)
        by[key]=count
        // setby_category(prevState => ({
        //     ...prevState,
        //     [key] : count
        // }))
         
    }

    // let promise=new Promise(function(resolve,reject){
        
        let total=0;
        // console.log(by,"val2");
        for (var i in by){
            var val=by[i];
            // console.log(val,"val");
            total=total+val
        }
    // });
    // callback("Food is ready")
    //   let total=0;
    //   console.log(by_category,"val");
    //   for (var i in by_category){
    //       var val=by_category[i];
    //       console.log(val,"val");
    //       total=total+val
    //   }
      for (var y in by){
        var val=by[y];
        // console.log(y,"y",total,"total",((val/total)*100),"val3",by_category);
        setby_category(prevState => ({
            ...prevState,
            [y] : Math.round(((val/total)*100))
        }))
      }
    
    
      //   setby_category(prevState => ({
    //     ...prevState,
    //     ["unidentified"] : 5
    // }))
    //    setby_category({...by_category},{["Sensitive disclosure"]:1,
    //    ["discussions"]:0,
    //    ["black markets"]:0,
    //    ["financial information"]:0,
    //    ["exposed credentials"]:0,
    //    ["personal information"]:0,
    //    ["hacker group targeting"]:0,
    //    ["attacks and compromises"]:0,
    //    ["unidentified"]:0,
    // })
    // setby_category({...by_category,["Sensitivedisclosure"]:1})
    // setby_category(prevState => ({
    //     ...prevState,
    //     ["blackmarkets"] : 2
    // }))
    
    }
    // function calculation(){
    //     let promise=new Promise(function(resolve,reject){
    //         setTimeout(()=>{
    //             calculate();
    //         },10)
    //         resolve("x")
    // })
    // return promise;
    // }
    useDeepCompareEffect( ()=>{
        const fetchData=async() => {
            
            const result= await axios.get("https://if.cyberintelligencehouse.com/api/exposure",{
                headers: {
                    'X-Api-Key': '1XOBDqYMo276NMNHL6bxO4VBuAOv4Mz2'
                  }
            }).then((response)=>{
            
                // console.log(response,"result")
                setpiedata(response.data.by_category)
                calculate()
                // async function startProcess(){
                //     let x= await calculation();
                //     if(x=="x"){
                //         console.log(by_category,"bb")
                //     }
                // }
                // startProcess()

                

                // calculate();
                // setpiedata(result.data.by_category)
            })
            .then(
                console.log(by_category)
            )
            .catch((error)=>{
                console.log(error)
            })
        
            
            
            
        // const token=localStorage.getItem("token")
        // const result=await axios.post('//',{"email":token})
        // console.log(result.data)
        // console.log(result.data[0])
        // let y=result.data[0].fields
        // console.log(y)

        // setaccount({["companyindustry"]:y.company_industry})
        // setaccount({["companyaddress"]:y.company_address1})
      }
        // setaccount({["companyname"]:y.company_name})}
        // setaccount({["companyname"]:y.company_name})}
        // setaccount({["companyname"]:y.company_name})}
        // setaccount({["companyname"]:y.company_name})}
        // const token=localStorage.getItem("token")
        // console.log(token,"token")
        fetchData()
        
        
        
          // .then(res => {
          //     console.log(res.data,"response")
          // })
          // .catch(err => {
          //     setError(err.message);
          //     setLoad(true)
          // })
  }, [piedata]);
    // React.useEffect(()=>{
    //     const fetchData=async() => {
    //         const result=await axios.get("https://if.cyberintelligencehouse.com/api/exposure")
    //         console.log(result)
    //     }
    //     fetchData()
    // },[])

    return(
        
        <div className="chart" style={{height:"280px",margin:"20px",marginTop:"30px",width:"90%"}}>
            
            
                <Doughnut
            data= {{
                labels:['Sensitive disclosure '.concat(String(by_category["sensitivedisclosure"]).concat(" %")),
                "discussions ".concat(String(by_category["discussions"]).concat(" %")),
                "black markets ".concat(String(by_category["blackmarkets"]).concat(" %")),
                "financial information ".concat(String(by_category["financialinformation"]).concat(" %")),
                "exposed credentials ".concat(String(by_category["exposedcredentials"]).concat(" %")),
                "personal information ".concat(String(by_category["personalinformation"]).concat(" %")),
                "hacker group targeting ".concat(String(by_category["hackergrouptargeting"]).concat(" %")),
                 "attacks and compromises ".concat(String(by_category["attacksandcompromises"]).concat(" %")), 
                 "unidentified ".concat(String(by_category["unidentified"]).concat(" %"))],
        datasets: [{
            data: [by_category["sensitivedisclosure"],by_category["discussions"] ,by_category["blackmarkets"],by_category["financialinformation"],by_category["exposedcredentials"],by_category["personalinformation"],by_category["hackergrouptargeting"],by_category["attacksandcompromises"],by_category["unidentified"]],
            backgroundColor:  ['#1F77B4','#AEC7E8','#FF7F0E',"#FFBB78","#2CA02C","#98DF8A","#D62728","#FF9896","#9467BD"],
            
            borderColor: 'white'
        }]
    }}
    options= {{
        maintainAspectRatio: false,
        cutoutPercentage: 30,
        legend: {
            display: true,
            position: 'right',
              align:'start',
              
            labels: {
                boxWidth: 15,
                fontColor: '#506883',
                padding: 15,
                fontSize: 13,
                usePointStyle: true ,
                
            }
        },
        tooltips: {
            enabled: true
        },
        plugins: {
            datalabels: {
                enabled: true,
                color: 'white',
                textAlign: 'center',
                render: 'percentage',
                
                
                font: {
                    family:"Roboto",
                    lineHeight: 0,
                    weight: 'bold',
                    size: 12,
                    
                },
                
                formatter: function(value) {
                    return value + '%';
              }
            }
        }
    }}
            
            />
             
            
            
        </div>
    )

}
