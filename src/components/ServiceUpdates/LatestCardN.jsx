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
        minWidth:"70px",
        height:"5vh",
        minHeight:"40px",
        justifyContent:"flex-start",
        alignItems:"flex-end",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "17px",
        marginBottom:"5px"
    },
    bottom:{
        display:"flex",minWidth:"70px",height:"5vh",minHeight:"40px",justifyContent:"flex-start",alignItems:"flex-start",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px"
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
  }));
export default function LatestCardN(){
    const classes = useStyles();
    const [st1,set]=React.useState([""]);
    const [click,setclick]=React.useState(false);
    const addcount=()=>{
        setclick(!click)
    }
    return(
    <div>
        <Grid container spacing={2}>
        <Grid item xs={12} md={12}>

            <Grid container justify="flex-start"  >
                        <Card className={classes.f1}>
                            
                            
                            
                                
                            <Grid container justify="flex-start" direction="row" maxWidth="xl" style={{background:"white"}} spacing={0} >
                                <Grid item xs={12} lg={9}>
                                    <Grid container direction="row">
                                    <Grid item  style={{background:"white",minWidth:"150px",minHeight:"110px",marginRight:"30px"}}>
                                        <div style={{display:"flex",flexDirection:"column",minWidth:"70px",minHeight:"110px",borderStyle:"solid",borderWidth:"0.1px",borderTop:"white",borderLeft:"white",borderBottom:"white"}} >
                                            
                                                <div style={{display:"flex",minWidth:"70px",minHeight:"55px",justifyContent:"center",alignItems:"center",fontSize:"14px"}} >
                                                DD-MM-YYYY
                                                </div>
                                            
                                            
                                            
                                            
                                            
                                            
                                                
                                                <div container style={{display:"flex",fontSize:"18px",fontWeight:"600",minWidth:"70px",minHeight:"55px",justifyContent:"center",alignItems:"center",background:"#66BB6A",color:"white"}} >
                                                Low
                                                </div>
                                            
                                            
                                            
                                            
                                        
                                        </div>

                                    </Grid>
                                    <Grid item >
                                    <div style={{display:"flex",flexDirection:"column",minWidth:"70px",height:"10vh",minHeight:"80px",marginLeft:"3vw"}} >
                                            
                                            <div className={classes.top} >
                                            Type
                                            </div>

                                            <div className={classes.bottom} >
                                            Type goes here
                                            </div>

                                    </div>
                                        

                                    </Grid>
                                    <Grid item >
                                        <div style={{display:"flex",flexDirection:"column",minWidth:"70px",height:"10vh",minHeight:"80px",marginLeft:"3vw"}} >
                                            
                                            <div className={classes.top} >
                                            Source
                                            </div>

                                            <div className={classes.bottom} >
                                            https://Type-Goes-Here.com
                                            </div>

                                        </div>

                                    </Grid>
                                    <Grid item >
                                        <Grid container justify="flex-start" >
                                            
                                        <div style={{display:"flex",flexDirection:"column",minWidth:"120px",height:"10vh",minHeight:"80px",marginLeft:"3vw"}} >
                                            
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
                                <Grid item xs={12} lg={3}>
                                    <Grid container alignItems="flex-end" justify="flex-end" >
                                        <div style={{display:"flex",minWidth:"120px",height:"10vh",minHeight:"80px",marginLeft:"3vw",alignItems:"center",justifyContent:"flex-end"}}>
                                            <div>
                                            <Button color="primary" variant="contained" className={classes.Buttons}>
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
    </div>
    
    )
    
}