import React from "react";
import {Card,Grid,Button,Chip,Dialog,DialogTitle,IconButton,Typography,Divider,DialogContent,DialogActions, CardHeader} from "@material-ui/core";
import styles from "./EContent.module.css";
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
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
export default function CardGrid(){
    const [fullWidth, setFullWidth] = React.useState(true);
    
    const [st1,set]=React.useState([""]);
    const [click,setclick]=React.useState(false);
    const addcount=()=>{
        setclick(!click)
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const classes=useStyles()
    return(
        <div>
            <Grid item style={{marginTop:"20px"}} >

            
            <div className={styles.main}>
                    
                    <div className={styles.rowbox1}>
                    
                    <div className={styles.medium}>
                    <p>Medium</p>
                    </div>
                    
                    <div className={styles.date}>
                    <p>DD-MM-YYYY</p>
                    </div>
                    <div className={styles.view}>
                    <Button variant="contained" color="primary" size="small" className={classes.view} onClick={handleClickOpen}>
                        View Details
                    </Button>
                    </div>
                    <div>
                    <IconButton aria-label="settings" onClick={addcount} >
                                                    <AddOutlinedIcon  style={{display:click?"none":"block",fontSize:"32px"}}/>
                                                    <RemoveRoundedIcon  style={{display:click?"block":"none",fontSize:"32px"}} />
                    </IconButton>
                    </div>

                    </div>
    
                    
                    <div className={styles.rowbox2}>
                
                    <div className={styles.maintype}>
                    <div className={styles.type}>
                    <p>Title</p>
                    </div>
                    <div className={styles.typetext}>
                    <p>Title goes here</p>
                    </div>
                    </div>
                    
                    <div className={styles.mainsource}>
                    <div className={styles.source}>
                    <p>Source</p>
                    </div>
                    <div className={styles.link}>
                    <p>https://website.web.com</p>
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
                    <div className={styles.b}>
                        <div className={styles.b1}>
                            
                                Keyword
                        
                        </div>

                    </div>
                    <div className={styles.rowbox3}>
                    <div className={styles.mainkey}>
                    <div className={styles.key}>
                    <p>Tags</p>
                    </div>

                    
                    </div>
                    </div>
                    <div className={styles.b}>
                        <div className={styles.b1}>
                            
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
                        </div>
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
                                        8 :
                                    </div>
                                    <Divider orientation="vertical" flexItem />
                                    <div style={{padding:"10px",color:"white"}}>
                                    Woody
                                    </div>
                                    <Divider orientation="vertical" style={{background:"white"}} flexItem />
                                    <div style={{padding:"10px"}}>
                                    McGibbon
                                    </div>
                                    <Divider orientation="vertical" style={{background:"white"}} flexItem />
                                    <div style={{padding:"10px"}}>
                                    woodymcgibbon@dempcompany.com
                                    </div>
                                    <Divider orientation="vertical" style={{background:"white"}} flexItem />
                                    <div style={{padding:"10px"}}>
                                    woodymcgibbon@dempcompany.com
                                    </div>
                                    <Divider orientation="vertical" style={{background:"white"}} flexItem />
                                    <div style={{padding:"10px"}}>
                                    1963-04-12
                                    </div>
                                    <Divider orientation="vertical" style={{background:"white"}} flexItem />
                                    <div style={{padding:"10px"}}>
                                    2017-04-08 23:25:41
                                    </div>
                                    
                                </Grid>
                                </Card>
                                </div>
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
                                    <Grid container style={{height:"60px",marginTop:"-25px",marginLeft:"-24px"}} >
                                        <Grid items xs={11}>
                                            <Grid container direction="row">
                                            <Grid item xs={2} style={{backgroundColor:"white"}}>
                                                <Grid container direction="row">
                                                    <Grid item xs={10} style={{background:"#F5A623",height:"75px"}}>
                                                    <Grid container justify="center">
                                                        <Grid item>
                                                            <Typography component="div" style={{marginTop:"30px",color:"white"}}>
                                                                Medium
                                                    
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    
                                                    </Grid>
                                                </Grid>
                                                
                                            
                                            </Grid>
                                            <Grid item xs={4}>
                                            <div style={{display:"flex",flexDirection:"column",marginTop:"10px",minHeight:"60px",marginLeft:"1vw"}} >
                                            
                                            <div style={{paddingTop:'2px'}}>
                                            Title
                                            </div>

                                            <div className={classes.bottom1} >
                                            Title Goes Here
                                            </div>

                                            </div>
                                            </Grid>
                                            <Grid item xs={5}>
                                            <div style={{display:"flex",flexDirection:"column",marginTop:"10px",minHeight:"60px",marginLeft:"1vw"}} >
                                            
                                            <div style={{paddingTop:'2px'}} >
                                            Source
                                            </div>

                                            <div className={classes.bottom1} >
                                            https://Type-Goes-Here.com
                                            </div>

                                            </div>
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
                <div  >
            <div className={styles.detect} >
            <h2>Detect</h2>
            
            <div className={styles.date1} >
                <p>DD-MM-YYYY</p>
            </div>

            </div>
            <div className={styles.main4}>
        <Grid item xs={12}>
            <Grid container justify="center">
                <Grid item xs={12}>
                            <Grid container direction="column"  style={{paddingTop:"10px",paddingLeft:"25px",paddingBottom:"10px"}} >
                                <Grid item className={classes.tag} >
                                Alert Created
                                </Grid>
                                <Grid item style={{paddingTop:"4px"}}>
                                <p>DD-MM-YYYY</p>
                                    </Grid>
                            </Grid>
                        </Grid>
            </Grid>
        </Grid>
    </div>

        </div>

        <div className={styles.main4}>
        <Grid item xs={12}>
            <Grid container justify="center">
                <Grid item xs={12}>
                            <Grid container direction="column"  style={{paddingTop:"10px",paddingLeft:"25px",paddingBottom:"10px"}} >
                                <Grid item className={classes.tag} >
                                    KeyWord
                                </Grid>
                                <Grid item style={{paddingTop:"4px"}}>
                                    <Chip size="small" className={classes.chip} label="KeyWord" variant="outlined"/>         
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
                                Tags
                            </Grid>
                            <Grid item style={{paddingTop:"4px"}}>
                            <Chip size="small" className={classes.chip} label="Key Word" variant="outlined"/>       
                            <Chip  size="small" className={classes.chip}   label="Key Word" variant="outlined"/> 
                            <Chip  size="small" className={classes.chip} label="Key Word" variant="outlined"/>   
                            <Chip  size="small" className={classes.chip}   label="Key Word" variant="outlined"/>   
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
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, possimus delectus, 
                            veritatis, saepe minus excepturi tempore cupiditate aperiam vitae sequi inventore pariatur numquam 
                            accusantium neque necessitatibus deserunt exercitationem unde? Odio iste hic iusto id veniam provident a 
                            laboriosam non? Laudantium quos nisi excepturi corrupti natus tempora commodi, optio ad culpa eius hic sint ipsa 
                            maxime nemo magni architecto tenetur facere praesentium eligendi molestiae aspernatur. Deleniti nemo dicta, 
                            similique totam corporis facilis sint ipsa autem est distinctio minima tempore id placeat, nostrum iusto neque ratione ad. 
                            Voluptatem libero numquam saepe, quas, fuga placeat, minus amet officiis dolores possimus eum? Exercitationem, in
            
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
        <Button onClick={handleClose} color="primary" variant="contained" style={{padding:"12px",fontSize:"15px"}} autoFocus>
            Analyst Support
        </Button>
        </DialogActions>
    </Dialog>
    </Grid>
        </div>
    )
}