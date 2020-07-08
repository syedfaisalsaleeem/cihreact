import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Divider from "@material-ui/core/Divider"
import { Button, FormControl,Card,Avatar } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import InputBase from '@material-ui/core/InputBase';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    email:{
    
      position: "absolute",
      marginLeft: "20.2vw",
      width:"170px",
      height:"38px",
      marginTop: "10px",
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      border: "10px solid #FFFFFF",
      boxSizing: "border-box",
      boxShadow: "0px 0px 20px rgba(92, 111, 139, 0.12)",
      borderRadius: "9px",
      
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "13px",
  },
  emailtextfield:{
    width:"18vw",
    marginTop:"10px",
    paddingLeft:theme.spacing(1),
    border: "0.1px solid #F3F6F9",
    borderRight:"white",
    background:"#F3F6F9",
    height:"40px"
    
  },
  logowithtextfield:{
    display:"flex",
    marginTop:"10px",
    height:"40px",
    width:"30px",
    border: "0.1px solid #F3F6F9",
    borderLeft:"white",
    alignItems:"center",
    background:"#F3F6F9"
    
  },
    f1: {
        background: 'white',
        borderRadius: 3,
        border: 0,
        color: 'black',
        marginTop:"20px",
        boxShadow: '1 0px 0px 0px rgba(255, 105, 135, .3)',
        padding: theme.spacing(2),
    },
    f2:{
      background: 'white',
        borderRadius: 3,
        border: 0,
        color: 'black',
        marginTop:"10px",
        boxShadow: '1 0px 0px 0px rgba(255, 105, 135, .3)',
        
      padding: theme.spacing(2),

    },
    Typofont:{
        fontSize:"17px",
        fontStyle:"normal",
        fontWeight:"800px",
        fontFamily:"Roboto"
    },
    TypoSecondFont:{
        fontSize:"15px",
        fontStyle:"normal",
        fontWeight:"800px",
        fontFamily:"Roboto",
        color:"#80808F"
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    formControl: {
        
        minWidth: "100%",
        
      },
      selectEmpty: {
        marginTop: theme.spacing(0),
      },
      HeaderFont:{
        fontFamily: 'Roboto', 
        
          fontSize:"21px",
          fontWeight:"600px",
          fontStyle:"normal"
      }
  }));
  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#6993FF',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });
export default function Swindow(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [opens, setOpens] = React.useState(false);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD:false,
        checkedE:false,
        
      });
      const [error,seterror]=React.useState([""]);
    const [st1,set]=React.useState([""]);
    const [primaryemail,primaryemailfunction]=React.useState([""]);
    const [primaryemailcount,inc_count]=React.useState(true);

      const[authenticate,setauthenticate]=React.useState(true);
      const[finalauthenticate,setfinalauthenticate]=React.useState(false);
      const [age, setAge] = React.useState('');
      const [fullWidth, setFullWidth] = React.useState(true);
      const [maxWidth, setMaxWidth] = React.useState('sm');
    // const addprimaryemail=(event)=>{
      
    // };
    function addprimaryemail(event){
      console.log("working")
      if(primaryemail.length===1){
        primaryemailfunction([...primaryemail,""])
        inc_count(false)

      }
      
      
      

    };

    function handleformsubmit(){
      function handletrue(){
        setauthenticate(true)
        setfinalauthenticate(true)
      }
      function handlefalse(){
        setauthenticate(false)
        setfinalauthenticate(false)
      }
      console.log("working")
      setauthenticate(false)
      st1.map((st1)=>
      
      setauthenticate(st1.length>0?handletrue():handlefalse())
      
      )
      
    }
    const handlecloselastdialog= ()=>{
      setfinalauthenticate(false)
    }
    
      const handleMaxWidthChange = (event) => {
        setMaxWidth(event.target.value);
      };
    
      const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
      };
    
      const handleChange = (event) => {
        setAge(event.target.value);
      };
      const addcount=()=>{
        set([...st1,""])
        seterror([...error,false])
        console.log(st1)
        
      }
      
    
    const subcount=(event)=>{
        const x=event.target.id;
        console.log(x,event.MouseEvent,"target")
        const listi=Object.assign([],st1);
        const liste=Object.assign([],error);
        console.log(x,"this is deleted")
        listi.splice(x,1);
        liste.splice(x,1);
        seterror(liste)
        set(listi);
        
    }
    const subcount1=(event)=>{
        
        const x=event.target.id
        
        const {listi}=st1
        console.log(listi)
        const listi1=listi.filter(function(listi){
            var i;
            console.log(listi,x)
            if(x===x){
                return false
            }
            else{
                return true
            }
            
        })
        //console.log(listi1)
        listi.length=0
        set({...st1,listi:listi1})
        //console.log(listi)
    
        
        
       
        
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleSubmission = () => {
        setOpens(true);
      };
    const handleSubmissionClose = () => {
        setOpens(false);
      };
    const handleClose = () => {
      setOpen(false);
    };
    const handleClickOpen1 = () => {
        setOpen1(true);
      };
    
      const handleClose1 = () => {
        setOpen1(false);
      };
      const handleClickOpen2 = () => {
        setOpen2(true);
      };
    
      const handleClose2 = () => {
        setOpen2(false);
      };
      const handleChange4 = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
      const handletext =(event) =>{
          const {name,value}=event.target
          //console.log(name,value)
          //console.log(st1.indexOf(name))
          
            let newArr = [...st1]; // copying the old datas array
            newArr[name] = value; // replace e.target.value with whatever you want to change it to
        
            set(newArr);
          
          
          
      }
      const handletextprimary=(event)=>{
        const {name,value}=event.target
        console.log(name,value)
        //console.log(st1.indexOf(name))
        let newArr = [...primaryemail]; // copying the old datas array
        newArr[name] = value; // replace e.target.value with whatever you want to change it to
    
        primaryemailfunction(newArr);
      }
      
      
    return(

        <React.Fragment>
        
        <CssBaseline />
        <Container maxWidth="xl" style={{marginBottom:"20px"}}>
            <Card className={classes.f2}>
            <Typography component="div" style={{ backgroundColor: 'white'  }} >
               

                <CardHeader
                className={classes.HeaderFont}
                avatar={
                    <Avatar aria-label="recipe" style={{background:"white",color:"black"}}>
                      <AccountCircleOutlinedIcon style={{fontSize:"28px"}}/>
                    </Avatar>
                  } 
                  disableTypography="true" 
                 action={
                    
                    <Button variant="contained" color="primary" onClick={handleClickOpen} style={{position:"static",marginTop:"10px"}}>Update</Button>
                    
                  }
                
                title="Account Information"      
                />
                <Divider/>
                <Typography component="div" style={{display:"flex"}}>

                <Grid container spacing={0}>
                <Grid items md={5}>
                <ListItem className={classes.Typofont}  >
              
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Company Name</Typography>} secondary={<Typography className={classes.TypoSecondFont}>Name goes Here</Typography>} />
                </ListItem>
                <ListItem>

                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Industry Name</Typography>} secondary={<Typography className={classes.TypoSecondFont}>Name goes Here</Typography>} />
                </ListItem>
                <ListItem style={{display:"flex",flexDirection:"column" ,alignItems:"flex-start"}} >
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Company Address</Typography>} secondary={<Typography className={classes.TypoSecondFont}>Address goes Here(line1)</Typography>} />
                <ListItemText secondary={<Typography className={classes.TypoSecondFont}>Address goes Here (line2)</Typography>} />
                </ListItem> 
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid items md={5}>
                <ListItem>
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Company Person</Typography>} secondary={<Typography className={classes.TypoSecondFont}>Name goes Here</Typography>} />
                
                
                </ListItem>
                <ListItem>
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Contact Person Position</Typography>} secondary={<Typography className={classes.TypoSecondFont}>Industry goes here</Typography>} />
                </ListItem>
                <ListItem style={{display:"flex",flexDirection:"column" ,alignItems:"flex-start"}} >
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Contact Person Email</Typography>} secondary={<Typography className={classes.TypoSecondFont}>Email Address Goes Here</Typography>} />
                
                
                
                </ListItem> 
                </Grid>
                </Grid>
                </Typography>
                
 

                            


                        
                      
                    
                
            </Typography>
            </Card>
            <Card className={classes.f1}>
            <Typography component="div" style={{ backgroundColor: 'white'  }} >
               

                <CardHeader
                className={classes.HeaderFont}
                avatar={
                    <Avatar aria-label="recipe" style={{background:"white",color:"black"}}>
                      <SecurityOutlinedIcon style={{fontSize:"28px"}}/>
                    </Avatar>
                  } 
                  disableTypography="true" 
                 action={
                    
                    <Button variant="contained" color="primary" onClick={handleClickOpen1} style={{position:"static",marginTop:"10px"}}>Update</Button>
                    
                  }
                
                title="Security Information"      
                />
                <Divider/>
                
               
                                    
                <ListItem>
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Account User Name</Typography>} secondary={<Typography className={classes.TypoSecondFont}>User Name goes here</Typography>} />
                
                
                </ListItem>
                <ListItem>
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Account Password</Typography>} secondary={<Typography className={classes.TypoSecondFont}>******Password</Typography>} />
                
                
                </ListItem>
 
                

                
 

                            


                        
                      
                    
                
            </Typography>
            </Card>
            
            <Card className={classes.f1}>
            <Typography component="div" style={{ backgroundColor: 'white' ,position:"static" }} >
               

                <CardHeader
                className={classes.HeaderFont}
                avatar={
                    <Avatar aria-label="recipe" style={{background:"white",color:"black"}}>
                      <NotificationsNoneOutlinedIcon style={{fontSize:"28px"}}/>
                    </Avatar>
                  } 
                  disableTypography="true" 
                 action={
                    
                    <Button variant="contained" color="primary" onClick={handleClickOpen2} style={{position:"static",marginTop:"10px"}}>Update</Button>
                    
                  }
                
                title="Notification Settings "      
                />
                <Divider/>
                
               
                                    
                <ListItem>

                
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Primary Email</Typography>} secondary={<Typography className={classes.TypoSecondFont}>Email goes here</Typography>} />
               
                </ListItem>
                <ListItem>
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Secondary Email</Typography>} secondary={<Typography className={classes.TypoSecondFont}>Email@email.com</Typography>} />
               
                
                </ListItem>
                <ListItem style={{display:"flex",flexDirection:"column" ,alignItems:"flex-start"}} >
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Secondary Email</Typography>} secondary={<Typography className={classes.TypoSecondFont}>Email@email.com</Typography>} />
                <ListItemText secondary={<Typography className={classes.TypoSecondFont}>Email@email.com</Typography>} />
                <ListItemText secondary={<Typography className={classes.TypoSecondFont}>Email@email.com</Typography>} />
                <ListItemText secondary={<Typography className={classes.TypoSecondFont}>Email@email.com</Typography>} />
               
                
                </ListItem>
                <ListItem style={{display:"flex",flexDirection:"column" ,alignItems:"flex-start"}} >
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Alert Types</Typography>} />
                
                
                
                
                
                
                    
                
                
                <div style={{display:"flex",flexDirection:"row" ,alignItems:"flex-start" ,justifyContent:"space-evenly"}}>
                <ListItemText secondary={<Typography type="body2" style={{width:"200px"}} className={classes.TypoSecondFont}>High Risk </Typography>} />
                
                
                <CheckCircleIcon style={{color:"#1BC5BD",fontSize:"28px"}} />
                </div>
                <div style={{display:"flex",flexDirection:"row" ,alignItems:"flex-start" ,justifyContent:"space-evenly"}}>
                <ListItemText secondary={<Typography type="body2" style={{width:"200px"}} className={classes.TypoSecondFont}>Low Risk </Typography>} />
                
                <CancelIcon style={{color:"#1BC5BD",fontSize:"28px"}} />
                </div>
                <div style={{display:"flex",flexDirection:"row" ,alignItems:"flex-start" ,justifyContent:"space-evenly"}}>
                <ListItemText secondary={<Typography type="body2" style={{width:"200px"}} className={classes.TypoSecondFont}>New Assets </Typography>} />
                
                <CheckCircleIcon style={{color:"#1BC5BD",fontSize:"28px"}} />
                </div>
                <div style={{display:"flex",flexDirection:"row" ,alignItems:"flex-start" ,justifyContent:"space-evenly"}}>
                <ListItemText secondary={<Typography type="body2" style={{width:"200px"}} className={classes.TypoSecondFont}>Vulnerabilities </Typography>} />
                
                <CheckCircleIcon style={{color:"#1BC5BD",fontSize:"28px"}} />
                </div>
                
                
                </ListItem>
                

                
 

                            


                        
                      
                    
                
            </Typography>
            </Card>
  

            
            
            
            
            
            
            
            
            
            
            
            
            
            
        </Container>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={fullWidth}
        maxWidth={maxWidth}>
                                    
                                    
                                    <DialogTitle>
                                    <Grid container style={{display:"flex"}} >
                                        <Grid items xs={11} style={{display:"flex"}}>
                                            <Grid container spacing={2}>
                                            <Grid item>
                                            </Grid>
                                            <Grid item>
                                                <Typography component="div" style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                                <AccountCircleOutlinedIcon />
                                                
                                                </Typography>
                                            
                                            </Grid>
                                            <Grid item xs={5}>
                                                <Typography style={{display:"flex",justifyContent:"flex-start",alignItems:"center",marginLeft:"-5px"}}>Account Information </Typography>
                                            
                                            </Grid>
                                            </Grid>
                                        
                                        </Grid>
                                        
                                        <Grid items xs={1} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                        
                                        <CloseIcon onClick={handleClose} />
                                        
                                            
                                        </Grid>
                                        
                                        
                                        
                                    </Grid>
                                    </DialogTitle>

                                    
                                    
                                    <Divider/>
                                    <DialogContent style={{height:"100vh"}}>
                                    <DialogContentText>

                                    </DialogContentText>
                                    <Typography >
                                        Company Name
                                    </Typography>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Company Name"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        
                                    />
                                    
                                    <Typography style={{marginTop:"15px"}} gutterBottom>
                                        Company Industry
                                    </Typography>
                                    <FormControl className={classes.formControl}>
                                    
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    style={{height:"40px"}}
                                    displayEmpty
                                    
          
                                    
                                    >
                                    <MenuItem value="">
                                        <em>Select Industry</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    </FormControl>
                                    <Typography style={{marginTop:"15px"}}>
                                        Company Address
                                    </Typography>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Company Address"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                    />
                                    <Typography style={{marginTop:"15px"}}>
                                        Contact Person
                                    </Typography>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Contact Person"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                    />
                                    <Typography style={{marginTop:"15px"}}>
                                        Contact Person Position
                                    </Typography>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Contact Person Position"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                    />
                                    <Typography style={{marginTop:"15px"}}>
                                        Contact Person Email
                                    </Typography>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Contact Person Email"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                    />
                                    <Typography style={{marginTop:"15px"}}>
                                        Contact Person Number
                                    </Typography>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Contact Person Number"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                    />
                                    <Typography component="div" style={{display:"flex",width:"100",justifyContent:"center",marginTop:"15px"}}>
                                    <Button color="primary" variant="contained" onClick={handleSubmission}> Update Information</Button>
                                    </Typography>
                                    
                                    </DialogContent>

                                </Dialog>
                                <Dialog open={open1} onClose={handleClose1} aria-labelledby="form-dialog-title" fullWidth={fullWidth} maxWidth={maxWidth} >
                                        <DialogTitle>
                                        <Grid container style={{height:"6vh",display:"flex"}} >
                                            <Grid items xs={11} style={{height:"6vh",display:"flex"}}>
                                                <Grid container spacing={2}>
                                                <Grid item>
                                                </Grid>
                                                <Grid item>
                                                    <Typography component="div" style={{display:"flex",height:"6vh",justifyContent:"flex-start",alignItems:"center"}}>
                                                    <SecurityOutlinedIcon />
                                                    
                                                    </Typography>
                                                
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography style={{display:"flex",height:"6vh",justifyContent:"flex-start",alignItems:"center",marginLeft:"-5px"}}>Security Information </Typography>
                                                
                                                </Grid>
                                                </Grid>
                                            
                                            </Grid>
                                            
                                            <Grid items xs={1} style={{height:"6vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            
                                            <CloseIcon onClick={handleClose1} />
                                            
                                                
                                            </Grid>
                                            
                                            
                                            
                                        </Grid>
                                        </DialogTitle>

                                        <Divider/>
                                        <DialogContent style={{height:"100vh"}}>
                                        <DialogContentText>

                                        </DialogContentText>
                                        <Typography >
                                            Enter Current Password
                                        </Typography>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label="Enter Password"
                                            type="email"
                                            variant="outlined"
                                            fullWidth
                                            
                                        />
                                        <Typography style={{marginTop:"15px"}}>
                                        Enter New Password
                                        </Typography>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label="Enter Password"
                                            type="email"
                                            variant="outlined"
                                            fullWidth
                                        />
                                        <Typography style={{marginTop:"15px"}}>
                                        Renter New Password
                                        </Typography>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label="Enter Password"
                                            type="email"
                                            variant="outlined"
                                            fullWidth
                                        />
                                        <Typography component="div" style={{display:"flex",width:"100",justifyContent:"center",marginTop:"15px"}}>
                                        <Button color="primary" variant="contained" onClick={handleSubmission}> Update Password</Button>
                                        </Typography>
                                        <Divider style={{marginTop:"15px"}}/>
                                        </DialogContent>
                                    </Dialog>
                                    <Dialog
                                        open={opens}
                                        onClose={handleSubmissionClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                        
                                        
                                    >
                                        <DialogTitle>
                                        <Grid container style={{height:"6vh",display:"flex"}} >
                                            <Grid items xs={11} style={{height:"6vh",display:"flex"}}>
                                                <Grid container spacing={2}>
                                                <Grid item>
                                                </Grid>
                                                <Grid item>
                                                    <Typography component="div" style={{display:"flex",height:"6vh",justifyContent:"flex-start",alignItems:"center"}}>
                                                    
                                                    
                                                    </Typography>
                                                
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography style={{display:"flex",height:"6vh",justifyContent:"flex-start",alignItems:"center",marginLeft:"-5px"}}>Authorize Change </Typography>
                                                
                                                </Grid>
                                                </Grid>
                                            
                                            </Grid>
                                            
                                            <Grid items xs={1} style={{height:"6vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            
                                            <CloseIcon onClick={handleSubmissionClose} />
                                            
                                                
                                            </Grid>
                                            
                                            
                                            
                                        </Grid>
                                        </DialogTitle>
                                        <Divider/>
                                        <DialogContent style={{width:"22vw"}}>
                                        <DialogContentText id="alert-dialog-description">
                                        You are about to make permanent changes to your account settings. Do you want to continue?
                                        </DialogContentText>
                                        </DialogContent>
                                        <Divider/>
                                        <Typography style={{marginTop:"15px", display:"flex",justifyContent:"space-evenly",alignItems:"center" ,marginBottom:"20px"}}>
                                        <Button onClick={handleSubmissionClose} color="primary" variant="contained">
                                            Continue
                                        </Button>
                                        <Button onClick={handleSubmissionClose} color="primary" variant="outlined" autoFocus>
                                            Close
                                        </Button>
                                        </Typography>
  
                                        
                                    </Dialog>
                                    <Dialog open={open2} onClose={handleClose2} aria-labelledby="form-dialog-title" fullWidth={fullWidth} maxWidth={maxWidth}  >
                                        <DialogTitle>
                                        <Grid container style={{display:"flex"}} >
                                            <Grid items xs={11} style={{display:"flex"}}>
                                                <Grid container spacing={2}>
                                                <Grid item>
                                                </Grid>
                                                <Grid item>
                                                    <Typography component="div" style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                                    <NotificationsNoneOutlinedIcon />
                                                    
                                                    </Typography>
                                                
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography style={{display:"flex",justifyContent:"flex-start",alignItems:"center",marginLeft:"-5px"}}>Notification Settings </Typography>
                                                
                                                </Grid>
                                                </Grid>
                                            
                                            </Grid>
                                            
                                            <Grid items xs={1} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            
                                            <CloseIcon onClick={handleClose2} />
                                            
                                                
                                            </Grid>
                                            
                                            
                                            
                                        </Grid>
                                        </DialogTitle>

                                        <Divider/>
                                        <form onSubmit={handleformsubmit}>
                                        <DialogContent style={{height:"100vh"}}>
                                        <DialogContentText>

                                        </DialogContentText>
                                        
                                        <Typography >
                                            Primary Email
                                        </Typography>
                                        {primaryemailcount
                                        ?
                                        <div style={{display:"flex"}}>                                
                                          <InputBase
                                          placeholder="Enter Email"
                                          name={0}
                                          value={primaryemail[0]}
                                          onChange={handletextprimary}
                                          className={classes.emailtextfield}
                                          size="Large"
                                          inputProps={{ 'aria-label': 'naked' }}
                                          />
                                          
                                          </div>
                                        
                                      
                                        :
                                        <div >
                                          <div style={{display:"flex"}}>                                
                                          <InputBase
                                          placeholder="Enter Email"
                                          name={0}
                                          value={primaryemail[0]}
                                          onChange={handletextprimary}
                                          className={classes.emailtextfield}
                                          size="Large"
                                          inputProps={{ 'aria-label': 'naked' }}
                                          
                                          />
                                          <i className={classes.logowithtextfield}><img type="button" width="24px" height="24px"  src="fav.png"></img></i>
                                          <IOSSwitch checked={state.checkedE} onChange={handleChange4} name="checkedE" />
                                          </div>
                                       
                                        
                                        
                                        
                                        <InputBase
                                          placeholder="Enter Email"
                                          name={1}
                                          value={primaryemail[1]}
                                          onChange={handletextprimary}
                                          className={classes.emailtextfield}
                                          size="Large"
                                          inputProps={{ 'aria-label': 'naked' }}
                                          />
                                          
                                        </div>
                                        

                                        }
                                        {state.checkedE
                                        ?
                                        <Typography component="p">Please verify email before you can make it the primary notificaiton method </Typography>
                                        :
                                        <Typography component="p"> </Typography>
                                        }
                                        
                                        <Typography component="div" style={{display:"flex",width:"100%",marginTop:"10px"}}>
                                        <Fab aria-label="add" size="small" style={{background:"#6993FF",color:"white"}}>
                                        <AddIcon onClick={addprimaryemail}/>
                                        
                                        </Fab>
                                        <Typography style={{display:"flex",marginLeft:"15px",alignItems:"center"}}>
                                            Primary Email
                                        </Typography>
                                        </Typography>
                                        <Divider style={{marginTop:"15px"}}/>

                                        <Typography style={{marginTop:"15px"}}>
                                            Secondary Email List
                                        </Typography>
                                        <Grid container justify="flex-start" spacing={1}>
                                        {authenticate?
                                        <div >
                                        {st1.map((value,index) => (        
                                             
                                             
                                        <div style={{display:"flex"}}>                                
                                          <InputBase
                                          placeholder="Enter Email"
                                          name={index}
                                          value={value}
                                          onChange={handletext}
                                          className={classes.emailtextfield}
                                          size="Large"
                                          inputProps={{ 'aria-label': 'naked' }}
                                          />
                                          <i className={classes.logowithtextfield}>
                                              <CloseIcon onClick={subcount} id={index}/>
                                              </i>
                                          </div>
                                            
                                            
                                        
                                                                        
                                                                         
                                                                      
                                                                        
                                                                                      
                                                                      


                                                                    
                                        
                                            
                                        ))}</div>
                                        :<div>
                                        {st1.map((value,index) => (        
                                                                        

                                                                        
                                          <div style={{display:"flex"}}>                                
                                          <InputBase
                                          placeholder="Enter Email"
                                          name={index}
                                          value={value}
                                          onChange={handletext}
                                          className={classes.emailtextfield}
                                          size="Large"
                                          inputProps={{ 'aria-label': 'naked' }}
                                          />
                                          <i className={classes.logowithtextfield}><img type="button" onClick={subcount} id={index} width="24px" height="24px"  src="fav.png"></img></i>
                                                                    
                                          
                                           
                                        <div style={{display:value.length===0?"flex":"none"}} className={classes.email}>
                                          {//console.log({value}.length)
                                          }
                                          <p> Email is not valid</p>
                                                         
                                        </div>
                                        </div> 


                                      
          
              
                                        ))}
                                        </div>
                                        }
                                        </Grid>
 
              
                                        
                                        <Typography componen="div" style={{display:"flex",width:"100%",marginTop:"10px"}}>
                                        <Button onClick={addcount}>
                                        <Fab aria-label="add" size="small" style={{background:"#6993FF",color:"white"}} >
                                        <AddIcon />
                                        
                                        </Fab>
                                        </Button>

                                        <Typography style={{display:"flex",marginLeft:"15px",alignItems:"center"}}>
                                            Add Secondary Email
                                        </Typography>
                                        </Typography>
                                        <Divider style={{marginTop:"15px"}}/>
                                        <Typography style={{marginTop:"15px"}}>
                                            Alert Settings
                                        </Typography>
                                        <Typography component="div" style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"}}>
                                            <Typography component="div" style={{display:"flex",marginTop:"10px",alignItems:"center"}}>
                                                <Typography style={{marginRight:"38px"}}> High Risk</Typography>
                                                <IOSSwitch checked={state.checkedA} onChange={handleChange4} name="checkedA" />
                                            </Typography>
                                            <Typography component="div" style={{display:"flex",marginTop:"10px",alignItems:"center"}}>
                                                <Typography style={{marginRight:"40px"}}> Low Risk</Typography>
                                                <IOSSwitch checked={state.checkedB} onChange={handleChange4} name="checkedB" />
                                            </Typography>
                                            <Typography component="div" style={{display:"flex",marginTop:"10px",alignItems:"center"}}>
                                                <Typography style={{marginRight:"20px"}}> New Assets</Typography>
                                                <IOSSwitch checked={state.checkedC} onChange={handleChange4} name="checkedC" />
                                            </Typography>
                                            <Typography component="div" style={{display:"flex",marginTop:"10px",alignItems:"center"}}>
                                                <Typography style={{marginRight:"5px"}}> Vulnerabilities</Typography>
                                                <IOSSwitch checked={state.checkedD} onChange={handleChange4} name="checkedD" />
                                            </Typography>                                                                        
                                        
                                        </Typography>
                                        <Divider style={{marginTop:"15px"}}/>
                                        <Typography component="div" style={{display:"flex",width:"100",justifyContent:"center",marginTop:"15px"}}>
                                        <Button color="primary" variant="contained"  onClick={handleformsubmit}> Update Settings</Button>
                                        </Typography>
                                        </DialogContent>
                                        </form>
                                </Dialog>
                                {finalauthenticate?
                                  
                                    
                                  <form>
                                  <Dialog
                                        open={finalauthenticate}
                                        onClose={handleSubmissionClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                        
                                        
                                    >
                                     
                                        <DialogTitle>
                                        <Grid container style={{height:"6vh",display:"flex"}} >
                                            <Grid items xs={11} style={{height:"6vh",display:"flex"}}>
                                                <Grid container spacing={2}>
                                                <Grid item>
                                                </Grid>
                                                <Grid item>
                                                    <Typography component="div" style={{display:"flex",height:"6vh",justifyContent:"flex-start",alignItems:"center"}}>
                                                    
                                                    
                                                    </Typography>
                                                
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography style={{display:"flex",height:"6vh",justifyContent:"flex-start",alignItems:"center",marginLeft:"-5px"}}>Authorize Change </Typography>
                                                
                                                </Grid>
                                                </Grid>
                                            
                                            </Grid>
                                            
                                            <Grid items xs={1} style={{height:"6vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            
                                            <CloseIcon onClick={handlecloselastdialog} />
                                            
                                                
                                            </Grid>
                                            
                                            
                                            
                                        </Grid>
                                        </DialogTitle>
                                        <Divider/>
                                        <DialogContent style={{width:"22vw"}}>
                                        <DialogContentText id="alert-dialog-description">
                                        You are about to make permanent changes to your account settings. Do you want to continue?
                                        </DialogContentText>
                                        </DialogContent>
                                        <Divider/>
                                        <Typography style={{marginTop:"15px", display:"flex",justifyContent:"space-evenly",alignItems:"center" ,marginBottom:"20px"}}>
                                        <Button  type="submit"color="primary" variant="contained">
                                            Continue
                                        </Button>
                                        <Button onClick={handlecloselastdialog} color="primary" variant="outlined" autoFocus>
                                            Close
                                        </Button>
                                        </Typography>
  
                                        
                                    </Dialog>
                                    </form>
                                :
                                  <div>
                                    
                                    
                                  </div>
                                }
                                

      </React.Fragment>
    )
}