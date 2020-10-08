import React from "react";
import {Card,Grid,Button,Chip,Dialog,DialogTitle,IconButton,Typography,Divider,DialogContent,DialogActions, CardHeader} from "@material-ui/core";
import styles from "./EContent.module.css";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import GradeIcon from '@material-ui/icons/Grade';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import {Redirect,useHistory, withRouter} from 'react-router-dom';
import Analystsupportmodal1 from '../Drawer/Dashboard/Analystsupportmodal1';
const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }))(Tooltip);
const useStyles = makeStyles((theme) => ({
    f5:{
        
           
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        borderRadius: "6px",
        
    
},
chipborder:{
    border: "1px solid #000000",
    fontSize:"12px",
    fontColor:"black"
},
Buttons:{
    marginTop:"5px",
    fontSize:'12px !important',
    
},
f3:{
    
    background: "#FFFFFF",
    borderRadius: "2px",
    border: "0.1px solid #000000",
    boxSizing: "border-box",
    borderRadius: "2px",
    marginTop:"1px"
    
    
},
f4:{
   
    boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
    background: "black",
    color:"white",
    borderRadius: "2px",
    border: "0.1px solid #000000",
    boxSizing: "border-box",
    borderRadius: "2px"
    
    
},
top:{
    display:"flex",
    
    height:"35px",
    
    justifyContent:"flex-start",
    alignItems:"flex-end",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "17px",
    marginBottom:"4px",
    
},
bottom:{
    display:"flex",justifyContent:"flex-start",alignItems:"flex-start",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    
    height:"35px"
},
bottom1:{
    display:"flex",justifyContent:"flex-start",alignItems:"flex-start",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    
    height:"35px"
},
chip: {
    margin: theme.spacing(0.5),
    padding:theme.spacing(0.5),
    fontStyle: "normal",
     fontWeight: "normal",
      fontSize: "12px",
      background:"white",
      border: "1px solid #000000"
  },
  chip1: {
      margin: theme.spacing(0.5),
      paddingLeft:theme.spacing(0.5),
      paddingRight:theme.spacing(0.5),
      paddingTop:theme.spacing(0.3),
      paddingBottom:theme.spacing(0.3),
      fontStyle: "normal",
       fontWeight: "normal",
        fontSize: "10px",
        height:"15px",
        border: "0.4px solid #000000",
        borderRadius:"2px"

    },
  tag:{
      
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "22px",
      color: "#000000"
  },
  fontp:{
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
  },
    view:{
        
        
        height: "30px",
        paddingLeft:"10px",
        paddingRight:"10px",
        fontWeight:"500",
        marginTop: "10px",
        fontSize: "10px"
    }
}))
export default function CardGrid(props){
    const {date,
        alertcreated,severity,
        title,source,keyword,
        remediation,tags,comments}=props

    const [tags1,settags1]=React.useState(tags.some(tag=>tag==="highlighted"))
    if(severity!==""){
        // console.log(severity)
        const newStr = severity.split('');
        newStr.splice(0,8);
       var nseverity = newStr.join('');
    }
    else{
        var nseverity=severity
    }

    const [fullWidth, setFullWidth] = React.useState(true);
    const [commenting,setcommenting]=React.useState();
    const [st1,set]=React.useState([""]);
    const [click,setclick]=React.useState(true);

    const [star,selectstar]=React.useState(tags1);
    const [open, setOpen] = React.useState(false);
    const controlhighlight=(e)=>{
        selectstar(!star)
        if(star===false){
            // addcount()
            const pushcomment=async()=>{
                const token=localStorage.getItem("token")
                const response= await fetch('https://if.cyberdevelopment.house/api/alerts/'+props.id+'/tags', {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'Authorization': token,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: 'tag=highlighted'
                });
                
                const y=await response.json()
                if(y.message==="Invalid access token"){
                    console.log(y,"typefaisal")
                    loggedout()
                }
            }
            pushcomment()
        }
        else if(star===true){
            // changeflag()
    
                const pushcomment=async()=>{
                const token=localStorage.getItem("token")
                const response= await fetch('https://if.cyberdevelopment.house/api/alerts/'+props.id+'/tags/highlighted', {
                    method: 'DELETE',
                    headers: {
                        'accept': 'application/json',
                        'Authorization': token,
                    }
                });
            const y=await response.json()
            if(y.message==="Invalid access token"){
                console.log(y,"typefaisal")
                loggedout()
            }
            }
            pushcomment()
        }
    }
    // const addcount=()=>{
    //     selectstar(!star)
    //     if(star===false){
    //         props.addcount()
    //     }
    //     else if(star===true){
    //         props.changeflag()
    //     }
        
        
    //     // console.log(props.changeflag)
    // }
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const history = useHistory();
    const loggedout=()=>{
        localStorage.removeItem("token")
        
        history.push("/");
        window.location.reload();
        
      }
    const handlecomment=async(e)=>{
            const {id , value} = e.target
            console.log(id,value)   
    // props.setcommenting(prevState => ({
    //     ...prevState,
    //     [id] : value
    // }))
        if(comments.length>0){
            // console.log("faisal2",commenting,comments[0]['id'])
            const token=localStorage.getItem("token")
            const  x= async()=>{
                const response= await fetch('https://if.cyberdevelopment.house/api/alerts/'+props.id+'/comments/'+comments[0]['id'], {
                    method: 'PUT',
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': token
                    },
                    body: 'text='+commenting
                });
                const y=await response.json()

                if(y.message==="Invalid access token"){
                    console.log(y,"typefaisal")
                    loggedout()
                }

                // console.log(y,"typefaisal")
                // setstate1(y.alerts)
            }
            x() 
            // const response= await fetch('https://if.cyberintelligencehouse.com/api/alerts/'+id+'/comments/'+comments[0]['id'], {
            //     method: 'PUT',
            //     headers: {
            //         'accept': 'application/json',
            //         'X-Api-Key': '1XOBDqYMo276NMNHL6bxO4VBuAOv4Mz2',
            //         'Content-Type': 'application/x-www-form-urlencoded'
            //     },
            //     body: 'text='+commenting
            // });
            // let data = await response.json()
            // console.log(data)
        }
        else{
            const token=localStorage.getItem("token")
            const  x= async()=>{
                const response= await fetch('https://if.cyberdevelopment.house/api/alerts/'+props.id+'/comments', {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': token
                    },
                    body: 'nick=dsadasdsasd&text='+commenting
                });
                const y=await response.json()
                if(y.message==="Invalid access token"){
                    console.log(y,"typefaisal")
                    loggedout()
                }

                // console.log(y,"typefaisal")
                // setstate1(y.alerts)
            }
            x() 
            // const response=await fetch('https://if.cyberintelligencehouse.com/api/alerts/'+id+'/comments', {
            //     method: 'POST',
            //     headers: {
            //         'accept': 'application/json',
            //         'X-Api-Key': '1XOBDqYMo276NMNHL6bxO4VBuAOv4Mz2',
            //         'Content-Type': 'application/x-www-form-urlencoded'
            //     },
            //     body: 'nick=dsadasdsasd&text='+commenting
            // });
            // let data = await response.json()
            // console.log(data)
        }

}
const handlecommenting=(e)=>{
    console.log("doing work",e.target.value)
    const {id , value} = e.target   
    // props.setcommenting(prevState => ({
    //     ...prevState,
    //     [id] : value
    // }))
    setcommenting(e.target.value)
}
React.useEffect(()=>{
    selectstar(tags.some(tag=>tag==="highlighted"))
    if(comments.length>0){
        setcommenting(comments[0]['text'])
    }
    else{
        setcommenting('')
    }
    
},[tags])
// React.useEffect(()=>{
//     if( props.commenting1!==undefined){
//         console.log("worked",props.commenting1)
//         setcommenting(props.commenting1)
//     }
//     else{
//         // setcommenting('')
//     }
    
// },[props.commenting1])
    // https://if.cyberintelligencehouse.com/api/alerts/39412cec-8a69-4254-9a81-3cf21a83ba09/comments
     const classes=useStyles();
     const [open1,setopen1]=React.useState(false);
     const handle1=()=>{
         setopen1(true)
     }
     const handle2=()=>{
         setopen1(false)
     }
    return(
        <div>
            <Grid item style={{marginTop:"20px"}} >

            
            <div className={styles.main}>
                    
                    <div className={styles.rowbox1}>
                    
                    <div className={styles.medium}>
                    <p> {nseverity}</p>
                    </div>
                    
                    <div className={styles.date}>
                    <p>{date}</p>
                    </div>
                    <div className={styles.view}>
                    <Button variant="contained" color="primary" size="small" className={classes.view} onClick={handleClickOpen}>
                        View Details
                    </Button>
                    </div>
                    <div>
                    <LightTooltip title="Highlight alert">
                                                        <IconButton aria-label="settings" onClick={controlhighlight} >
                                                            <GradeIcon style={{fontSize:'32px',color:star?"yellow":"gray"}}/>

                                                        </IconButton>   
                                                    </LightTooltip >
                    </div>

                    </div>
    
                    
                    <div className={styles.rowbox2}>
                
                    <div className={styles.maintype}>
                    <div className={styles.type}>
                    <p>Title</p>
                    </div>
                    <div className={styles.typetext}>
                    <p>{title}</p>
                    </div>
                    </div>
                    
                    <div className={styles.mainsource}>
                    <div className={styles.source}>
                    <p>Source</p>
                    </div>
                    <div className={styles.link}>
                    <p>{source}</p>
                    </div>
                    </div>
                    </div>
    
                    
    
                    <div className={styles.rowbox3}>
                    <div className={styles.mainkey}>
                    <div className={styles.key}>
                    <p>Keyword</p>
                    </div>

                    
                    </div>
                    </div>
                    <div className={styles.b} style={{paddingLeft:"10px"}}>
                    <Chip style={{margin:"2px"}} size="small" label={keyword[0]['value']}  variant="outlined" className={classes.chipborder}/>
{/* 
                        <div className={styles.b1}>
                            
                       {keyword[0]['value']} 
                                                
                        
                        </div> */}

                    </div>
                    <div className={styles.rowbox3}>
                    <div className={styles.mainkey}>
                    <div className={styles.key}>
                    <p>Tags</p>
                    </div>

                    
                    </div>
                    </div>
                    <div className={styles.b} style={{marginLeft:"10px",marginBottom:"10px"}}>
                        <Grid container >
                    {tags.map((number)=>
                        <Grid item>
                            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Chip style={{margin:"2px"}} size="small" label={number} variant="outlined" className={classes.chipborder}/>
                            </div>
                            </Grid>    
                        )}
                        </Grid>
                        {/* <div className={styles.b1}>
                            
                                Tag here
                        
                        </div>

                        <div className={styles.b2}>
                            Tag here
                        </div>
                        <div className={styles.b3}>
                            Tag here
                        </div>
                        <div className={styles.b4}>
                            Tag here
                        </div> */}
                    </div>
    
                    </div>
                    <Grid  style={{display:click?"flex":"none"}}>
                    <Grid container   >
                        <Card className={styles.main1}>
                            <Grid item md={12} lg={12}>
                                <div style={{}} >
                                <Card className={classes.f4}>
                                <Grid container alignItems="center" direction="row" >
                                    
                                    <div style={{padding:"10px"}}>
                                        Alert data goes here. It is just a simple text field
                                    </div>

                                    
                                </Grid>
                                </Card>
                                </div>
                            </Grid>
                                
                        
                        </Card>
                    </Grid>
                </Grid>
                <Grid  style={{display:click?"flex":"none"}}>
                    <Grid container   >
                        <Card className={styles.main1}>
                            <Grid item md={12} lg={12}>
                            <Grid container justify="space-evenly">
                                    <Grid item xs={12}>
                                    <div  >
                                    
                                    <Grid container alignItems="center" direction="row" style={{padding:"5px"}} >
                                        
                                        <Grid item xs={12}>
                                        <TextField
                                            id="comments"
                                            // label="Add notes here"
                                            multiline
                                            variant="outlined"
                                            value={commenting}
                                            onChange={handlecommenting}
                                            onBlur={handlecomment}
                                            placeholder="Add notes here"
                                            fullWidth

                                            />
                                        </Grid>

                                    </Grid>
                                    
                                    </div>
                                    </Grid>
                                    {/* <Grid item xs={2} style={{minHeight:"70px"}}>
                                            <Grid container alignItems="center" justify="center"style={{minHeight:"70px"}} >
                                                <Grid item>
                                                        <Button size="small" color="primary" variant="contained" onClick={handlecomment}>
                                                            Add Notes
                                                        </Button>
                                                </Grid>
                                            </Grid>
                                    </Grid> */}
                                </Grid>
                            </Grid>
                                
                        
                        </Card>
                    </Grid>
                </Grid>
                <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"lg"}
                
            >
                
                <DialogTitle>
                <Grid container style={{minheight:"60px",marginTop:"-25px",marginLeft:"-24px"}} >
                                        <Grid items xs={11} >
                                            <Grid container direction="row">
                                            <Grid item xs={2} style={{backgroundColor:"white",height:"90px"}}>
                                                <Grid container direction="row">
                                                    <Grid item xs={10} style={{background:"#F5A623",height:"100px"}}>
                                                    <Grid container alignItems="center" justify="center">
                                                        <Grid item >
                                                            <Typography component="div" style={{marginTop:"45px",fontSize:"18px",color:"white"}}>
                                                                {nseverity}
                                                    
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    
                                                    </Grid>
                                                </Grid>
                                                
                                            
                                            </Grid>
                                            <Grid item xs={4}>
                                            <div style={{display:"flex",flexDirection:"column",marginTop:"10px",minHeight:"60px",marginLeft:"1.5vw"}} >
                                            
                                            <div style={{paddingTop:'2px'}}>
                                                Title
                                            </div>

                                            <div className={classes.bottom1} >
                                            {title}
                                            </div>

                                            </div>
                                            </Grid>
                                            <Grid item xs={4}>
                                            <div style={{display:"flex",flexDirection:"column",marginTop:"10px",minHeight:"60px",marginLeft:"1vw"}} >
                                            
                                            <div style={{paddingTop:'2px'}} >
                                                Source
                                            </div>

                                            <div className={classes.bottom1} >
                                            {source}
                                            </div>

                                            </div>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Grid container justify="flex-end" alignItems="center" style={{height:"70px"}}>
                                                    <Grid item>
                                                    <LightTooltip title="Highlight alert">
                                                        <IconButton aria-label="settings"  onClick={controlhighlight} >
                                                            <GradeIcon style={{fontSize:'32px',color:star?"yellow":"gray"}}/>

                                                        </IconButton>   
                                                    </LightTooltip >

                                                    </Grid>

                                                </Grid>

                                            </Grid>
                                            </Grid>
                                        
                                        </Grid>
                                        
                                        <Grid items xs={1} style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                                        
                                        <CloseIcon onClick={handleClose} />
                                        
                                            
                                        </Grid>
                                        
                                        
                                        
                                    </Grid>
                </DialogTitle>                  
                <Divider/>
                <DialogContent >
               
                    <Grid item xs={12}>
                        <Grid container style={{marginBottom:"20px"}} >
                            <Grid item xs={6}>
                                <Grid container direction="column">
                                    <Grid item style={{paddingLeft:"20px"}}>
                                     <h2>Detect</h2> 
                                    </Grid>
                                    <Grid item style={{paddingLeft:"20px"}}>
                                    {date}  
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container direction="column">
                                    <Grid item style={{paddingLeft:"20px"}}>
                                    <h2>Alert Created</h2> 
                                    </Grid>
                                    <Grid item style={{paddingLeft:"20px"}}>
                                    {alertcreated}
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                <Divider />
        

        <div className={styles.main4}>
        <Grid item xs={12}>
            <Grid container justify="center">
                <Grid item xs={6}>
                            <Grid container direction="column"  style={{paddingTop:"10px",paddingLeft:"25px",paddingBottom:"10px"}} >
                                <Grid item className={classes.tag} >
                                    KeyWord
                                </Grid>
                                <Grid item style={{paddingTop:"4px"}}>
                                    <Chip size="small" className={classes.chip} label={keyword[0]['value']} variant="outlined"/>         
                                </Grid>
                            </Grid>
                </Grid>
                <Grid item xs={6}>
                            <Grid container direction="column"  style={{paddingTop:"10px",paddingLeft:"25px",paddingBottom:"10px"}} >
                                <Grid item className={classes.tag} >
                                    Tags
                                </Grid>
                                <Grid item style={{paddingTop:"4px"}}>
                                <Grid container>
                                    {tags.map((number)=>
                                                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                       <Chip size="small" className={classes.chip} label={number}variant="outlined"/>       
                                  
                                                        
                                                        </div>
                                                          
                                                    )}
                                    </Grid>  
                                    </Grid>
                            </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>

        <div className={styles.main4} >
        <Grid item xs={12}>
            <Grid container justify="center">
                    <Grid item xs={12}>
                        <Grid container direction="column"  style={{paddingTop:"10px",paddingLeft:"25px",paddingBottom:"10px"}} >
                            <Grid item className={classes.tag} >
                                Notes
                            </Grid>
                            <Grid container>
                                    <Grid item xs={12}>
                                    <div  >
                                    
                                    <Grid container alignItems="center" direction="row" style={{padding:"5px"}} >
                                        
                                        <Grid item xs={12}>
                                        <TextField
                                            id="comments"
                                            // label="Add notes here"
                                            multiline
                                            variant="outlined"
                                            value={commenting}
                                            onChange={handlecommenting}
                                            onBlur={handlecomment}
                                            placeholder="Add notes here"
                                            fullWidth

                                            />
                                        </Grid>

                                    </Grid>
                                    
                                    </div>
                                    </Grid>
                                    {/* <Grid item xs={2} style={{minHeight:"100px"}}>
                                            <Grid container alignItems="center" justify="center" style={{minHeight:"90px"}}>
                                                <Grid item>
                                                        <Button className={classes.Buttons} color="primary" variant="contained" >
                                                            Add Notes
                                                        </Button>
                                                </Grid>
                                            </Grid>
                                    </Grid> */}
                            </Grid>
                        </Grid>
                    </Grid>

            </Grid>
        </Grid>
        </div>

        <div className={styles.main3} >

            <div className={styles.data} >
                <h2>Data</h2>
            </div>

            <div className={styles.para} >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur temporibus tenetur placeat nulla explicabo dolorum reprehenderit sint sequi. Voluptatum rerum provident perferendis nulla eius beatae repellat pariatur tenetur aliquam, maxime magni quia dolore esse. Commodi laudantium earum, explicabo perspiciatis tempora alias quod reiciendis .
                <br/>
                <br/>
                Quidem ea dolore, cupiditate 
            </div>
        </div>


        <div className={styles.main4} >
        <Grid item xs={12}>
            <Grid container justify="center">
                    <Grid item xs={12}>
                        <Grid container direction="column"  style={{paddingTop:"10px",paddingLeft:"25px",paddingBottom:"10px"}} >
                            <Grid item className={classes.tag} >
                                Remedition Suggestion
                            </Grid>
                            <Grid item className={classes.fontp}style={{paddingTop:"4px"}}>
                            {remediation}
                            </Grid>
                        </Grid>
                    </Grid>

            </Grid>
        </Grid>

        </div>



    
        </DialogContent>
        <DialogActions style={{marginRight:"15px",marginBottom:"20px"}}>
          <Button onClick={handleClose} color="primary" style={{border:"0.8px solid #000000",color:"black",padding:"12px",marginRight:"10px",fontSize:"15px"}}>
            Track Remedition
          </Button>
          <Button onClick={handle1} color="primary" variant="contained" style={{padding:"12px",fontSize:"15px"}} autoFocus>
            Analyst Support
          </Button>
        </DialogActions>
      </Dialog>

    </Grid>
    <Analystsupportmodal1 open={open1} handle1={handle2} alertdata={props} />
        </div>
    )
}