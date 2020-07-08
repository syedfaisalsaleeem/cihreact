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
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
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
        boxShadow: "0px 0px 42px rgba(181, 181, 195, 0.15)",
        background: "#FFFFFF",
        borderRadius: "2px",
        
        
    },
    f2:{
        width:"100%",
        boxShadow: "0px 0px 0px rgba(181, 181, 195, 0.15)",
        background: "#FFFFFF",
        borderRadius: "2px",
        
        
    },
    top:{
        display:"flex",
        minWidth:"70px",
        height:"5vh",
        minHeight:"40px",
        justifyContent:"flex-start",
        alignItems:"flex-end",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "16px"
    },
    bottom:{
        display:"flex",minWidth:"70px",height:"5vh",minHeight:"40px",justifyContent:"flex-start",alignItems:"flex-start",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px"
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
export default function Latest(){
    const classes = useStyles();
    return(
        <div>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12} md={12} >
                    <Grid container justify="flex-start" maxWidth="xl" >
                        <Card className={classes.f1}>
                            
                            
                            
                                
                            <Grid container justify="flex-start" maxWidth="xl" style={{background:"white"}} spacing={0} >
                                <Grid item md={12} lg={1} style={{background:"white",minWidth:"70px",height:"10vh",minHeight:"80px"}}>
                                    <div style={{display:"flex",flexDirection:"column",minWidth:"70px",height:"10vh",minHeight:"80px",borderStyle:"solid",borderWidth:"0.1px",}} >
                                        
                                            <div style={{display:"flex",minWidth:"70px",height:"5vh",minHeight:"40px",justifyContent:"center",alignItems:"center"}} >
                                            DD-MM-YYYY
                                            </div>
                                        
                                        
                                        
                                        
                                        
                                        
                                            
                                            <div container style={{display:"flex",minWidth:"70px",height:"5vh",minHeight:"40px",justifyContent:"center",alignItems:"center",background:"green"}} >
                                            Low
                                            </div>
                                        
                                        
                                        
                                        
                                    
                                    </div>

                                </Grid>
                                <Grid item md={12} lg={2}>
                                <div style={{display:"flex",flexDirection:"column",minWidth:"70px",height:"10vh",minHeight:"80px",marginLeft:"3vw"}} >
                                        
                                        <div className={classes.top} >
                                        Type
                                        </div>

                                        <div className={classes.bottom} >
                                        Type goes here
                                        </div>

                                </div>
                                    

                                </Grid>
                                <Grid item md={12} lg={3}>
                                    <div style={{display:"flex",flexDirection:"column",minWidth:"70px",height:"10vh",minHeight:"80px",marginLeft:"3vw"}} >
                                        
                                        <div className={classes.top} >
                                        Source
                                        </div>

                                        <div className={classes.bottom} >
                                        https://Type-Goes-Here.com
                                        </div>

                                    </div>

                                </Grid>
                                <Grid item md={12} lg={3}>
                                    <Grid container justify="flex-start" >
                                        
                                    <div style={{display:"flex",flexDirection:"column",minWidth:"120px",height:"10vh",minHeight:"80px",marginLeft:"3vw"}} >
                                        
                                        <div className={classes.top} >
                                        Key Words
                                        </div>

                                        <div className={classes.bottom} >
                                            
                                            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginRight:"5px"}}>
                                            <Card style={{display:"flex",justifyContent:"center",alignItems:"center",borderStyle:"solid",borderWidth:"0.1px",padding:"4px"}}>
                                                
                                                    KeyWord
                                                
                                            </Card>
                                            </div>
                                            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginRight:"5px"}}>
                                            <Card style={{display:"flex",justifyContent:"center",alignItems:"center",borderStyle:"solid",borderWidth:"0.1px",padding:"4px"}}>
                                                
                                                    KeyWord
                                                
                                            </Card>
                                            </div>
                                            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginRight:"5px"}}>
                                            <Card style={{display:"flex",justifyContent:"center",alignItems:"center",borderStyle:"solid",borderWidth:"0.1px",padding:"4px"}}>
                                                
                                                    KeyWord
                                                
                                            </Card>
                                            </div>
                                            

                                    </div>
                                    </div>
                                        
                                    
                                    </Grid>

                                </Grid>
                                <Grid item md={12} lg={3}>
                                    <Grid container alignItems="flex-end" justify="flex-end" >
                                        <div style={{display:"flex",minWidth:"120px",height:"10vh",minHeight:"80px",marginLeft:"3vw",alignItems:"center",justifyContent:"flex-end"}}>
                                            <div>
                                            <Button color="primary" variant="contained">
                                                View Details
                                            </Button>
                                            </div>
                                            <div>
                                            <Grid container justify="flex-end" style={{marginTop:"5px"}}>
                                                <IconButton aria-label="settings">
                                                    <AddOutlinedIcon  style={{fontSize:"32px"}} />
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
                <Grid item xs={12} md={12} >
                    <Grid container justify="flex-start" maxWidth="xl" style={{background:"yellow"}}>
                        <Card className={classes.f1}>
                                
                                
                                
                                    
                                <Grid container justify="flex-start" maxWidth="xl" style={{background:"white"}} >
                                    <Grid item xs={10}>
                                        <Grid container justify="flex-start">
                                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",background:"#FFEE58"}}>
                                            <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"5vw",minWidth:"70px"}}>
                                                <h4 >Medium</h4>
                                            </div>
                                            

                                        </div>
                                        <List  style={{display:"flex"}}>
                                            
                                            
                                            <ListItem>
                                                <ListItemText primary="KeyWord" />
                                            </ListItem>
                                            <Divider orientation="vertical"/>
                                            <ListItem>
                                                <ListItemText primary="Type" />
                                            </ListItem>
                                            <Divider orientation="vertical"/>
                                            <ListItem >
                                                <ListItemText primary="Source" />
                                            </ListItem>
                                            </List>
                                        </Grid>

                                    </Grid>
                                    <Grid item xs={2}>
                                        <Grid container justify="flex-end" alignItems="flex-end" style={{marginTop:"5px"}}>
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon style={{fontSize:"28px"}} />
                                            </IconButton>
                                        </Grid>
                                        
                                    </Grid>
                                </Grid>
                                    
                                
                                
                            </Card>
                    
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} >
                    <Grid container justify="flex-start" maxWidth="xl" style={{background:"yellow"}}>
                    <Card className={classes.f1}>
                                
                                
                                
                                    
                                <Grid container justify="flex-start" maxWidth="xl" style={{background:"white"}} >
                                    <Grid item xs={10}>
                                        <Grid container justify="flex-start">
                                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",background:"#66BB6A"}}>
                                            <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"5vw",minWidth:"70px"}}>
                                                <h4 >Low</h4>
                                            </div>
                                            

                                        </div>
                                        <List  style={{display:"flex"}}>
                                            
                                            
                                            <ListItem>
                                                <ListItemText primary="KeyWord" />
                                            </ListItem>
                                            <Divider orientation="vertical"/>
                                            <ListItem>
                                                <ListItemText primary="Type" />
                                            </ListItem>
                                            <Divider orientation="vertical"/>
                                            <ListItem >
                                                <ListItemText primary="Source" />
                                            </ListItem>
                                            </List>
                                        </Grid>

                                    </Grid>
                                    <Grid item xs={2}>
                                        <Grid container justify="flex-end" alignItems="flex-end" style={{marginTop:"5px"}}>
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon style={{fontSize:"28px"}} />
                                            </IconButton>
                                        </Grid>
                                        
                                    </Grid>
                                </Grid>
                                    
                                
                                
                            </Card>
                    </Grid>
                </Grid>
            
                <Grid item xs={12} md={12} >
                    <Grid container justify="flex-start" maxWidth="xl" style={{background:"yellow"}}>
                    <Card className={classes.f1}>
                                
                                
                                
                                    
                                <Grid container justify="flex-start" maxWidth="xl" style={{background:"white"}} >
                                    <Grid item xs={10}>
                                        <Grid container justify="flex-start">
                                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",background:"#66BB6A"}}>
                                            <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"5vw",minWidth:"70px"}}>
                                                <h4 >Low</h4>
                                            </div>
                                            

                                        </div>
                                        <List  style={{display:"flex"}}>
                                            
                                            
                                            <ListItem>
                                                <ListItemText primary="KeyWord" />
                                            </ListItem>
                                            <Divider orientation="vertical"/>
                                            <ListItem>
                                                <ListItemText primary="Type" />
                                            </ListItem>
                                            <Divider orientation="vertical"/>
                                            <ListItem >
                                                <ListItemText primary="Source" />
                                            </ListItem>
                                            </List>
                                        </Grid>

                                    </Grid>
                                    <Grid item xs={2}>
                                        <Grid container justify="flex-end" alignItems="flex-end" style={{marginTop:"5px"}}>
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon style={{fontSize:"28px"}} />
                                            </IconButton>
                                        </Grid>
                                        
                                    </Grid>
                                </Grid>
                                    
                                
                                
                            </Card>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={12} >
                    <Grid container justify="flex-start" maxWidth="xl" style={{background:"yellow"}}>
                    <Card className={classes.f1}>
                                <Grid container justify="flex-start" maxWidth="xl" style={{background:"white"}} >
                                    <Grid item xs={10}>
                                        <Grid container justify="flex-start">
                                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",background:"#66BB6A"}}>
                                            <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"5vw",minWidth:"70px"}}>
                                                <h4 >Low</h4>
                                            </div>
                                            

                                        </div>
                                        <List  style={{display:"flex"}}>
                                            
                                            
                                            <ListItem>
                                                <ListItemText primary="KeyWord" />
                                            </ListItem>
                                            <Divider orientation="vertical"/>
                                            <ListItem>
                                                <ListItemText primary="Type" />
                                            </ListItem>
                                            <Divider orientation="vertical"/>
                                            <ListItem >
                                                <ListItemText primary="Source" />
                                            </ListItem>
                                            </List>
                                        </Grid>

                                    </Grid>
                                    <Grid item xs={2}>
                                        <Grid container justify="flex-end" alignItems="flex-end" style={{marginTop:"5px"}}>
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon style={{fontSize:"28px"}} />
                                            </IconButton>
                                        </Grid>
                                        
                                    </Grid>
                                </Grid>
                                    
                                
                                
                            </Card>
                    </Grid>
                </Grid>            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            </Grid>
            <Grid container className={classes.root1} spacing={2}>
                <Grid item xs={12} >
                    
                        <Card className={classes.f2} >
                            <CardContent>
                            <Grid container justify="center" maxWidth="xl"  alignContent="center" >
                                    <Grid item xs={5} xl={2} >
                                        <Container maxWidth="sm" style={{display:"flex", flexDirection:"column",justifyContent:"center",background:"white",alignItems:"center"}}>
                                        <Typography component="div" >
                                                    View More
                                        </Typography>
                                        <Typography component="div">
                                            <ExpandMoreOutlinedIcon/>
                                        </Typography>
                                        </Container>
                                        
                                    </Grid>
                            </Grid>
                            </CardContent>
                        </Card>
                    



                </Grid>



            </Grid>
        </div>
    )
}