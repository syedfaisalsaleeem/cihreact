import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from "./LatestCard.module.css";
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) => ({
    Buttons:{
        marginTop:"5px",
        fontSize:'12px !important',
        
    },
    root1: {
        marginBottom:"-50px",
        
      },
    HeaderFont:{
        fontFamily: 'Roboto', 
        
          fontSize:"21px",
          fontWeight:"600px",
          fontStyle:"normal"
      },
    paper: {
      height: 140,
      width: 100,
    },
    f1:{
        width:"100%",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        background: "#FFFFFF",
        borderRadius: "2px",
        border: "0.1px solid #000000",
        boxSizing: "border-box",
        borderRadius: "2px"
        
        
    },
    f2:{
        width:"100%",
        boxShadow: "0px 0px 0px rgba(181, 181, 195, 0.15)",
        background: "#FFFFFF",
        borderRadius: "2px",
        
        
    },
    f3:{
        width:"100%",
        background: "#FFFFFF",
        borderRadius: "2px",
        border: "0.1px solid #000000",
        boxSizing: "border-box",
        borderRadius: "2px",
        marginTop:"-16px"
        
        
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
    chipborder:{
        border:"solid",
        borderColor:"black",
        borderWidth:"0.1px",
        fontSize:"12px",
        fontColor:"black"
    },
    control: {
      padding: theme.spacing(2),
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
  }));
export default function LatestCard(){
    const [fullWidth, setFullWidth] = React.useState(true);
    const classes = useStyles();
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
    return(
    <div>
        <Grid container spacing={2}>
        <Grid item xs={12} md={12}>

            <Grid container justify="flex-start"  >
                        <Card className={classes.f1}>
                            
                            
                            
                                
                            <Grid container justify="flex-start" direction="row" maxWidth="xl" style={{background:"white"}} spacing={0} >
                                
                                <Grid item xs={12} lg={2}>
                                    <Grid container direction="row">
                                    <Grid item xs={12} style={{background:"white"}}>
                                        <div style={{display:"flex",flexDirection:"column",width:"170px",borderStyle:"solid",borderWidth:"0.1px",borderTop:"white",borderLeft:"white",borderBottom:"white"}} >
                                            
                                                <div style={{display:"flex",justifyContent:"center",padding:"30px",alignItems:"center",fontSize:"14px"}} >
                                                DD-MM-YYYY
                                                </div>
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                                <div container style={{display:"flex",fontSize:"18px",fontWeight:"600",padding:"30px",justifyContent:"center",alignItems:"center",background:"#66BB6A",color:"white"}} >
                                                Low
                                                </div>
                                            
                                            
                                            
                                            
                                        
                                        </div>

                                    </Grid>
                                </Grid>
                                </Grid>
                                <Grid item xs={12} lg={8}>
                                    <Grid container direction="column">
                                    <Grid item xs={12} lg={12}>
                                    <Grid container>
                                        <Grid item xs={12} lg={4} >
                                        <div style={{display:"flex",flexDirection:"column",paddingLeft:"20px"}} >
                                                
                                                <div className={classes.top} >
                                                Type
                                                </div>

                                                <div className={classes.bottom} >
                                                Type goes here
                                                </div>

                                        </div>
                                            

                                        </Grid>

                                        <Grid item xs={12} lg={4}>
                                            <div style={{display:"flex",flexDirection:"column"}} >
                                                
                                                <div className={classes.top} >
                                                Source
                                                </div>

                                                <div className={classes.bottom} >
                                                https://Type-Goes-Here.com
                                                </div>

                                            </div>

                                        </Grid>

                                        <Grid item xs={12} lg={4}>
                                            <Grid container justify="flex-start" >
                                                
                                            <div style={{display:"flex",flexDirection:"column"}} >
                                                
                                                <div className={classes.top} >
                                                Key Words
                                                </div>

                                                <div className={classes.bottom} >
                                                    
                                                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginRight:"5px"}}>
                                                    <Chip  size="small" label="KeyWord" variant="outlined" className={classes.chipborder}/>
                                                    </div>
                                                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginRight:"5px"}}>
                                                    <Chip  size="small" label="KeyWord" variant="outlined" className={classes.chipborder}/>
                                                    </div>
                                                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginRight:"5px"}}>
                                                    <Chip  size="small" label="KeyWord" variant="outlined" className={classes.chipborder}/>
                                                    </div>
                                                    
                                                    
                                                    
                                                    

                                            </div>
                                            </div>
                                                
                                            
                                            </Grid>

                                        </Grid>
                                    </Grid>                                        
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid Container>
                                        <Grid item xs={12} lg={12} >
                                            <Grid container justify="flex-start" >
                                                
                                            <div style={{display:"flex",flexDirection:"column",paddingLeft:"20px"}} >
                                                
                                                <div className={classes.top} >
                                                Tags
                                                </div>

                                                <div className={classes.bottom} >
                                                    
                                                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginRight:"5px"}}>
                                                    <Chip  size="small" label="Tags" variant="outlined" className={classes.chipborder}/>
                                                    </div>
                                                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginRight:"5px"}}>
                                                    <Chip  size="small" label="Tags" variant="outlined" className={classes.chipborder}/>
                                                    </div>
                                                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginRight:"5px"}}>
                                                    <Chip  size="small" label="Tags" variant="outlined" className={classes.chipborder}/>
                                                    </div>
                                                    
                                                    

                                            </div>
                                            </div>
                                                
                                            
                                            </Grid>

                                        </Grid>


                                        </Grid>

                                    </Grid>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    </Grid>

                                    


                                </Grid>
                                
                                <Grid item xs={12} lg={2}>
                                    <Grid container alignItems="flex-end" justify="flex-end" direction="column" >
                                        <Grid item xs={12} style={{paddingTop:"54px"}}>

                                        </Grid>
                                        <Grid item xs={12}>
                                        <div style={{display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
                                            <div>
                                            <Button color="primary" variant="contained" className={classes.Buttons} onClick={handleClickOpen}>
                                                View Details
                                            </Button>
                                            </div>
                                            <div>
                                            <Grid container justify="flex-end" style={{marginTop:"5px"}}>
                                                <IconButton aria-label="settings" onClick={addcount} >
                                                    <AddOutlinedIcon  style={{display:click?"none":"block",fontSize:"32px"}}/>
                                                    <RemoveRoundedIcon  style={{display:click?"block":"none",fontSize:"32px"}} />
                                                </IconButton>
                                                
                                            </Grid>
                                            </div>
                                            
                                        </div>
                                        </Grid>
                                        
                                        
                                    </Grid>
                                    
                                    
                                </Grid>
                            </Grid>
                            
                        </Card>
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
                                                    <Grid item xs={10} style={{background:"#66BB6A",height:"75px"}}>
                                                    <Grid container justify="center">
                                                        <Grid item>
                                                            <Typography component="div" style={{marginTop:"30px",color:"white"}}>
                                                                LOW
                                                    
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    
                                                    </Grid>
                                                </Grid>
                                                
                                            
                                            </Grid>
                                            <Grid item xs={4}>
                                            <div style={{display:"flex",flexDirection:"column",marginTop:"10px",minHeight:"60px",marginLeft:"1.5vw"}} >
                                            
                                            <div style={{paddingTop:'2px'}}>
                                            Type
                                            </div>

                                            <div className={classes.bottom1} >
                                            Type Goes Here
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



        <div className={styles.main4} >
        <Grid item xs={12}>
            <Grid container justify="center">
                    <Grid item xs={12}>
                        <Grid container direction="column"  style={{paddingTop:"10px",paddingLeft:"25px",paddingBottom:"10px"}} >
                            <Grid item className={classes.tag} >
                                Tagged
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