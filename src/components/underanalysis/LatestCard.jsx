import React from 'react'
import {Card,Grid,Button,Chip,Dialog,DialogTitle,IconButton,Typography,Divider,DialogContent,DialogActions} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import styles from "../Drawer/Dashboard//LatestCard.module.css";
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
        width:"100%",
        background: "#FFFFFF",
        borderRadius: "2px",
        border: "0.1px solid #000000",
        boxSizing: "border-box",
        borderRadius: "2px",
        marginTop:"1px"
        
        
    },
    f4:{
        width:"100%",
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
    
}))
export default function LatestCard(){
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
            <Grid item xs={12} style={{marginBottom:"20px"}}>
            <Card className={classes.f5}>
                <Grid item xs={12}>
                    <Grid container justify="flex-start" spacing={2}>
                        <Grid item xs={2} lg={2} >
                            <div style={{display:"flex",flexDirection:"column",width:"130px",height:"140px",background:"white",borderRight:"0.2px solid #000000"}}>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"50%",fontStyle: "normal",fontWeight: "500",
                                    fontSize: "12px",color: "#000000",opacity:"0.5"}}>
                                    DD - MM - YYYY
                                </div>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"50%",fontStyle: "normal",fontWeight: "600",
                                    fontSize: "16px",color: "white",background:"#D0021B"}}>
                                                   High
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={8} lg={8} >
                            <div style={{display:"flex",height:"140px"}}>
                                <Grid container justify="space-between">
                                <Grid item>
                                    <div style={{display:"flex",width:"12vw",height:"70px",alignItems:"center"}}>
                                        <div style={{display:"flex",flexDirection:"column",width:"100%",height:"75%",borderRight:"1px solid #000000"}}>
                                            <div style={{fontStyle: "normal",fontWeight: "600",fontSize: "14px"}}>
                                                Title
                                            </div>
                                            <div style={{paddingTop:"5px",fontStyle: "normal",fontWeight: "normal",fontSize: "12px"}}>
                                                Title goes here
                                            </div>
                                        </div>

                                    </div>
                                        
                                </Grid>
                                <Grid item>
                                    <div style={{display:"flex",width:"13.5vw",height:"70px",alignItems:"center"}}>
                                        <div style={{display:"flex",flexDirection:"column",width:"100%",height:"75%",borderRight:"1px solid #000000"}}>
                                            <div style={{fontStyle: "normal",fontWeight: "600",fontSize: "14px"}}>
                                                Source
                                            </div>
                                            <div style={{paddingTop:"5px",fontStyle: "normal",fontWeight: "normal",fontSize: "12px"}}>
                                                https://Type-Goes-Here.com
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item>
                                    <div style={{display:"flex",width:"16vw",height:"70px",background:"white",alignItems:"center"}}>
                                        <div style={{display:"flex",flexDirection:"column",width:"100%",height:"75%"}}>
                                            <div style={{fontStyle: "normal",fontWeight: "600",fontSize: "14px"}}>
                                                Keywords
                                            </div>
                                            <div style={{display:"flex",paddingTop:"5px",justifyContent:"flex-start"}}>
                                                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                    <Chip  size="small" label="KeyWord" variant="outlined" className={classes.chipborder}/>
                                                    </div>
                                                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:"5px"}}>
                                                    <Chip  size="small" label="KeyWord" variant="outlined" className={classes.chipborder}/>
                                                    </div>
                                                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:"5px"}}>
                                                    <Chip  size="small" label="KeyWord" variant="outlined" className={classes.chipborder}/>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item>
                                            <div style={{display:"flex",width:"15vw",height:"70px"}}>
                                                <div style={{display:"flex",flexDirection:"column",width:"100%",height:"75%"}}>
                                                <div style={{fontStyle: "normal",fontWeight: "600",fontSize: "14px"}}>
                                                    Tags
                                                </div>
                                                <div style={{display:"flex",paddingTop:"5px",justifyContent:"flex-start"}}>
                                                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                        <Chip  size="small" label="Tag Here" variant="outlined" className={classes.chipborder}/>
                                                        </div>
                                                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:"5px"}}>
                                                        <Chip  size="small" label="Tag Here" variant="outlined" className={classes.chipborder}/>
                                                        </div>
                                                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:"5px"}}>
                                                        <Chip  size="small" label="Tag Here" variant="outlined" className={classes.chipborder}/>
                                                        </div>
                                                </div>
                                        </div>
                                            
                                            
                                            </div>
                                </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={2} lg={2} >
                                <Grid container alignItems="center" justify="flex-start" >
                                <Grid item>
                                    <div style={{display:"flex",height:"140px"}}>
                                        <div style={{display:"flex",paddingLeft:"0px",alignItems:"center",justifyContent:"flex-start"}}>
                                        <Button variant="contained" color="primary" className={classes.Buttons} onClick={handleClickOpen}>
                                            View Details
                                        </Button>
                                        </div>

                                        
                                    </div>
                                    </Grid>
                                <Grid item>
                                    <Grid container alignItems="center">
                                        <Grid item>
                                    <div>
                                        
                                        <Grid item xs={12} >
                                                <IconButton aria-label="settings" onClick={addcount} >
                                                    <AddOutlinedIcon  style={{display:click?"none":"block",fontSize:"32px"}}/>
                                                    <RemoveRoundedIcon  style={{display:click?"block":"none",fontSize:"32px"}} />
                                                </IconButton>
                                                
                                        </Grid>
                                        
                                        </div>
                                        </Grid>
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                
                            

                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} style={{display:click?"block":"none"}}>
                    <Grid container justify="flex-start" maxWidth="xl" >
                        <Card className={classes.f3}>
                            <Grid item md={12} lg={12}>
                                <div style={{display:"flex",flexDirection:"column",minWidth:"70px",height:"4vh",minHeight:"40px",margin:"0.3vw",justifyContent:"center",alignItems:"center"}} >
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
            </Card>
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
                                                    <Grid item xs={10} style={{background:"#D0021B",height:"75px"}}>
                                                    <Grid container justify="center">
                                                        <Grid item>
                                                            <Typography component="div" style={{marginTop:"30px",color:"white"}}>
                                                                High
                                                    
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
                <div className={styles.main} >
            <div className={styles.detect} >
            <h2>Detect</h2>
            
            <div className={styles.date1} >
                <p>DD-MM-YYYY</p>
            </div>

            </div>

            <div className={styles.alert} >
            <h2>Alert Created</h2>
            
            <div className={styles.date2} >
                <p>DD-MM-YYYY</p>
            </div>
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
        </div>
    )
}