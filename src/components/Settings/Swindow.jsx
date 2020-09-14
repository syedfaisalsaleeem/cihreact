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
import PhoneInput from 'react-phone-input-2'
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import 'react-phone-input-2/lib/material.css'
import axios from 'axios';
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
  email1:{
    
    
    display:"flex",
    width:"160px",
    height:"40px",
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
    fontSize: "11px",
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
  emailtextfield1:{
    width:"41ch",
    marginTop:"10px",
    padding:"5px"
   
    
    
    
   
    
    
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
    const [data,setdata]=React.useState([]);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD:false,
        checkedE:false,
        
      });
      const [account , setaccount] = React.useState({
        companyname: "",
        contactpersonphone : "",
        companyaddress:"",
        contactperson:"",
        contactpersonposition:"",
        contactpersonemail:"",
        contactpersonnumber:""
        
    })
    const [notification , setnotification] = React.useState({
      primaryemail: "",
      highseverityalerts : "",
      mediumseverityalerts:"",
      lowseverityalerts:"",
      newlysuggestedassets:"",
      newvulnerabilities:"",
      
      
  })
      const [error,seterror]=React.useState([""]);
    const [st1,set]=React.useState([""]);
    const [primaryemail,primaryemailfunction]=React.useState([""]);
    const [primaryemailcount,inc_count]=React.useState(true);
    const [primaryemailauthenticate,setprimaryemailauthenticate]=React.useState(false);
      const[authenticate,setauthenticate]=React.useState(true);
      const[finalauthenticate,setfinalauthenticate]=React.useState(false);
      const [age, setAge] = React.useState('');
      const [fullWidth, setFullWidth] = React.useState(true);
      const [maxWidth, setMaxWidth] = React.useState('sm');
      const [checking,setchecking]=React.useState(false)
      const [checkingcompanyname,setcheckingcompanyname]=React.useState(false)
      const [checkingcontactpersonposition,setcontactpersonposition]=React.useState(false)
      const [accountauthenticate,setaccountauthenticate]=React.useState(false)
      const [security , setsecurity] = React.useState({
        correctpassword: "",
        newpassword : "",
        reenternewpassword:"",
    })
    const [checksecurity , setchecksecurity] = React.useState(false)
    const [checknewpassword , setchecknewpassword] = React.useState(false)
    const [checknewpassword1 , setchecknewpassword1] = React.useState(false)
    const [securityauthenticate,setsecurityauthenticate]=React.useState(false)

    const [showPassword1,setshowPassword1]=React.useState(false)
    const [showPassword2,setshowPassword2]=React.useState(false)
    const [showPassword3,setshowPassword3]=React.useState(false)
    
    const handleClickShowPassword1=()=>{
      setshowPassword1(!showPassword1)
    }
    const handleClickShowPassword2=()=>{
      setshowPassword2(!showPassword2)
    }
    const handleClickShowPassword3=()=>{
      setshowPassword3(!showPassword3)
    }
    const submitsecuritydialog=()=>{
      
        console.log(security)
        const fetchData=async() => {
          const token=localStorage.getItem("token")
          const result=await axios.put('/changepassword/',{security,"email":token,"password":security.correctpassword})
          console.log(result)
          console.log(result.data)
          if(result.data.sucess==="false"){
            setchecksecurity(true)
            setsecurityauthenticate(false)
          }
          else{
            setsecurityauthenticate(false)
            setOpen1(false)
          }
          // console.log(result.data[0])
          // let y=result.data[0].fields
          // console.log(y)
          // setdata(y)
        
        }
          // console.log(result.data)
          // console.log(result.data[0])
          // let y=result.data[0].fields
          // console.log(y)
          // setdata(y)}
          fetchData();
          // setchecksecurity(true)
          // // setOpen(false);
          // setsecurityauthenticate(false);
       
    }
    const submitsecurity=()=>{
      if(security.correctpassword===""){
        console.log("working")
        setchecksecurity(true)
        setsecurityauthenticate(false)
        setchecknewpassword(false)
      }
      else if(security.correctpassword.length!==0){
        console.log("working")
        async function asyncFunc() {
          try {
            // fetch data from a url endpoint
            const token=localStorage.getItem("token")
            const data = await axios.post('/changepassword/',{security,"email":token,"password":security.correctpassword})
            console.log("working",data)
            if(data.data.sucess==="false"){
              setchecksecurity(true)
              setsecurityauthenticate(false)
              setchecknewpassword(false)
              setchecknewpassword1(false)
            }
            else if(security.newpassword.length<=8){
              setchecknewpassword1(true)
              setchecksecurity(false)
              setsecurityauthenticate(false)
            }
            else if(security.reenternewpassword==="" || security.newpassword==="" || security.newpassword!==security.reenternewpassword)
            { console.log("working2")
              setchecknewpassword(true)
              setchecksecurity(false)
              setsecurityauthenticate(false)
              setchecknewpassword1(false)
            }
            else{
              setsecurityauthenticate(true)
              setchecknewpassword(false)
              setchecksecurity(false)
              setchecknewpassword1(false)
            }
          } catch(error) {
            console.log("error", error);
            // appropriately handle the error
          }
        }
        asyncFunc()
      }
      else if(security.reenternewpassword==="" || security.newpassword==="" || security.newpassword!==security.reenternewpassword)
      { console.log("working2")
        setchecknewpassword(true)
        setchecksecurity(false)
        setsecurityauthenticate(false)
      }
      else{
        setsecurityauthenticate(true)
        setchecknewpassword(false)
        setchecksecurity(false)
      }
      
    }
  const handlesecurity=(e)=>{
        
        
    const {id , value} = e.target   
    setsecurity(prevState => ({
        ...prevState,
        [id] : value
    }))
    
     console.log({id,value})

}
const closesecuritydialog=()=>{
  setsecurityauthenticate(false)
}
    // const addprimaryemail=(event)=>{
      
    // };
    const checkaccount=()=>{
      console.log("working",account.companyname,account.contactpersonemail)
        if(account.companyname==="" ){
          setcheckingcompanyname(true)
          setaccountauthenticate(false)
        }
        else if(account.contactpersonemail===""){
          setcontactpersonposition(true)
          setcheckingcompanyname(false)
          setaccountauthenticate(false)
        }
        else if (account.contactpersonemail!==""){
          console.log("working",account.companyname,account.contactpersonemail)
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          // let x=account.contactpersonemail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          let x=pattern.test(account.contactpersonemail)
          console.log(x)
          if(x===false){
            console.log(x)
            setcontactpersonposition(true)
            setcheckingcompanyname(false)
            setaccountauthenticate(false)
          }
          else{
            console.log(accountauthenticate)
            setaccountauthenticate(true)
            setcontactpersonposition(false)
            setcheckingcompanyname(false)
          }
          
          // var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          // if (!pattern.test(input["email"])) {
          //   isValid = false;
          //   errors["email"] = "Please enter valid email address.";
          // }
        }
        else{
          console.log(accountauthenticate)
          setaccountauthenticate(true)
          setcontactpersonposition(false)
          setcheckingcompanyname(false)
        }
    }
    const handleaccountform=()=>{
      setaccountauthenticate(false)
      setOpen(false);
    }
    const handleaccountsubmitform=()=>{
      console.log(account,"submitdata")
      const fetchData=async() => {
        const token=localStorage.getItem("token")
        const result=await axios.put('/settingsdata/',{account,"email":token})
        console.log(result.data)
        console.log(result.data[0])
        let y=result.data[0].fields
        console.log(y,"showd")
        setdata(y)
        setaccount({["companyname"]:y.company_name,
        ["companyaddress"]:y.company_address,
        ["contactperson"]:y.contact_person,
        ["contactpersonposition"]:y.contact_person_position,
        ["contactpersonemail"]:y.contact_person_email,
        ["contactpersonphone"]:y.contact_person_phonenumber
      })}
        // console.log(result.data)
        // console.log(result.data[0])
        // let y=result.data[0].fields
        // console.log(y)
        // setdata(y)}
        fetchData();
        setOpen(false);
        setaccountauthenticate(false);
    }
    function addprimaryemail(event){
      console.log("working")
      if(primaryemail.length===1){
        primaryemailfunction([...primaryemail,""])
        inc_count(false)

      }
      
      
      

    };
    const finalSubmit=()=>{
      const fetchData=async() => {
        const token=localStorage.getItem("token")
        const result=await axios.put('/changenotification/',{notification,"email":token})
        console.log(result.data)
        console.log(result.data[0])
        let y=result.data[0].fields
        // console.log(y,"showd")
        // setdata(y)
        setnotification({
          ["primaryemail"]:y.primay_email,
        ["highseverityalerts"]:y.highseverityalerts,
        ["mediumseverityalerts"]:y.mediumseverityalerts,
        ["lowseverityalerts"]:y.lowseverityalerts,
        ["newlysuggestedassets"]:y.newlysuggestedassets,
        ["newvulnerabilities"]:y.newvulnerabilities
        })
    }
        // console.log(result.data)
        // console.log(result.data[0])
        // let y=result.data[0].fields
        // console.log(y)
        // setdata(y)}
        fetchData();
        setOpen2(false);
        setfinalauthenticate(false)
    }
    function handleformsubmit(){
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      // let x=account.contactpersonemail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      let x=pattern.test(primaryemail[0])
      if(x===false){
        console.log(x)
        setfinalauthenticate(false)
        setprimaryemailauthenticate(true)
      }
      else{
        setprimaryemailauthenticate(false)
        setfinalauthenticate(true)
        setnotification(prevState => ({
          ...prevState,
          'primaryemail' : primaryemail[0]
      }))
      }
      // function handletrue(){
      //   setauthenticate(true)
      //   setfinalauthenticate(true)
      // }
      // function handlefalse(){
      //   setauthenticate(false)
      //   setfinalauthenticate(false)
      // }
      // console.log("working")
      // setauthenticate(false)
      // st1.map((st1)=>
      
      // setauthenticate(st1.length>0?handletrue():handlefalse())
      
      // )
      
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
      const handleChange4 = (e) => {
        const {name , value,checked} = e.target
        console.log(name,value,checked)   
        setnotification(prevState => ({
            ...prevState,
            [name] : checked
        }))
        // setnotification({ ...state, [event.target.name]: event.target.checked });
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
        setnotification(prevState => ({
          ...prevState,
          'primaryemail' : value
      }))
      }
      // useEffect(() => {
      //   const fetchData = async () => {
      //     const result = await axios(
      //       'https://hn.algolia.com/api/v1/search?query=redux',
      //     );
     
      //     setData(result.data);
      //   };
     
      //   fetchData();
      // }, []);

     
      const handleaccount=(e)=>{
        
        
          const {id , value} = e.target   
          setaccount(prevState => ({
              ...prevState,
              [id] : value
          }))
          // console.log({name,value})
      
      }
      React.useEffect( ()=>{
        const fetchData=async() => {
        const token=localStorage.getItem("token")
        const result=await axios.post('/settingsdata/',{"email":token})
        console.log(result.data)
        console.log(result.data[0])
        let y=result.data[0].fields
        console.log(y)
        setdata(y)
        setaccount({["companyname"]:y.company_name,
        ["companyaddress"]:y.company_address,
        ["contactperson"]:y.contact_person,
        ["contactpersonposition"]:y.contact_person_position,
        ["contactpersonemail"]:y.contact_person_email,
        ["contactpersonphone"]:y.contact_person_phonenumber
      })

        setnotification({
          ["primaryemail"]:y.primay_email,
        ["highseverityalerts"]:y.highseverityalerts,
        ["mediumseverityalerts"]:y.mediumseverityalerts,
        ["lowseverityalerts"]:y.lowseverityalerts,
        ["newlysuggestedassets"]:y.newlysuggestedassets,
        ["newvulnerabilities"]:y.newvulnerabilities
        })
        // setaccount({["companyindustry"]:y.company_industry})
        // setaccount({["companyaddress"]:y.company_address1})
      }
        // setaccount({["companyname"]:y.company_name})}
        // setaccount({["companyname"]:y.company_name})}
        // setaccount({["companyname"]:y.company_name})}
        // setaccount({["companyname"]:y.company_name})}
        const token=localStorage.getItem("token")
        console.log(token,"token")
        fetchData();
          // .then(res => {
          //     console.log(res.data,"response")
          // })
          // .catch(err => {
          //     setError(err.message);
          //     setLoad(true)
          // })
  }, []);
      
      
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
              
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Company Name</Typography>} secondary={<Typography className={classes.TypoSecondFont}>{data.company_name}</Typography>} />
                </ListItem>

                <ListItem style={{display:"flex",flexDirection:"column" ,alignItems:"flex-start"}} >
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Company Address</Typography>} secondary={<Typography className={classes.TypoSecondFont}>{data.company_address}</Typography>} />
                <ListItemText secondary={<Typography className={classes.TypoSecondFont}></Typography>} />
                </ListItem> 
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid items md={5}>
                <ListItem>
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Contact Person</Typography>} secondary={<Typography className={classes.TypoSecondFont}>{data.contact_person}</Typography>} />
                
                
                </ListItem>
                <ListItem>
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Contact Person's Position</Typography>} secondary={<Typography className={classes.TypoSecondFont}>{data.contact_person_position}</Typography>} />
                </ListItem>
                <ListItem style={{display:"flex",flexDirection:"column" ,alignItems:"flex-start"}} >
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Contact Person's Email</Typography>} secondary={<Typography className={classes.TypoSecondFont}>{data.contact_person_email}</Typography>} />
                </ListItem>
                <ListItem style={{display:"flex",flexDirection:"column" ,alignItems:"flex-start"}} >
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Contact Person's Phone Number</Typography>} secondary={<Typography className={classes.TypoSecondFont}>{data.contact_person_phonenumber}</Typography>} />
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
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Account User Name</Typography>} secondary={<Typography className={classes.TypoSecondFont}>{data.user_name}</Typography>} />
                
                
                </ListItem>
                <ListItem>
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Account Password</Typography>} secondary={<Typography className={classes.TypoSecondFont}>******</Typography>} />
                
                
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

                
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Notification Email Adress(es)</Typography>} secondary={<Typography className={classes.TypoSecondFont}>{notification.primaryemail}</Typography>} />
               
                </ListItem>
                


                <ListItem style={{display:"flex",flexDirection:"column" ,alignItems:"flex-start"}} >
                <ListItemText primary={<Typography type="body2" className={classes.Typofont}>Alert Types</Typography>} />
                
                <div style={{display:"flex",flexDirection:"row" ,alignItems:"flex-start" ,justifyContent:"space-evenly"}}>
                <ListItemText secondary={<Typography type="body2" style={{width:"200px"}} className={classes.TypoSecondFont}>High severity Alerts</Typography>} />
                
                {notification.highseverityalerts?
                  <CheckCircleIcon style={{color:"#1BC5BD",fontSize:"28px"}} />:
                  <CancelIcon style={{color:"#1BC5BD",fontSize:"28px"}} />
                }
                
                </div>
                <div style={{display:"flex",flexDirection:"row" ,alignItems:"flex-start" ,justifyContent:"space-evenly"}}>
                <ListItemText secondary={<Typography type="body2" style={{width:"200px"}} className={classes.TypoSecondFont}>Medium severity Alerts</Typography>} />
                
                                
                {notification.mediumseverityalerts?
                  <CheckCircleIcon style={{color:"#1BC5BD",fontSize:"28px"}} />:
                  <CancelIcon style={{color:"#1BC5BD",fontSize:"28px"}} />
                }
                </div>
                <div style={{display:"flex",flexDirection:"row" ,alignItems:"flex-start" ,justifyContent:"space-evenly"}}>
                <ListItemText secondary={<Typography type="body2" style={{width:"200px"}} className={classes.TypoSecondFont}>Low severity Alerts </Typography>} />
                
                {notification.lowseverityalerts?
                  <CheckCircleIcon style={{color:"#1BC5BD",fontSize:"28px"}} />:
                  <CancelIcon style={{color:"#1BC5BD",fontSize:"28px"}} />
                }
                </div>
                <div style={{display:"flex",flexDirection:"row" ,alignItems:"flex-start" ,justifyContent:"space-evenly"}}>
                <ListItemText secondary={<Typography type="body2" style={{width:"200px"}} className={classes.TypoSecondFont}>Newly suggested Assets </Typography>} />
                
                {notification.newlysuggestedassets?
                  <CheckCircleIcon style={{color:"#1BC5BD",fontSize:"28px"}} />:
                  <CancelIcon style={{color:"#1BC5BD",fontSize:"28px"}} />
                }
                </div>
                <div style={{display:"flex",flexDirection:"row" ,alignItems:"flex-start" ,justifyContent:"space-evenly"}}>
                <ListItemText secondary={<Typography type="body2" style={{width:"200px"}} className={classes.TypoSecondFont}>New Vulnerabilities</Typography>} />
                
                {notification.newvulnerabilities?
                  <CheckCircleIcon style={{color:"#1BC5BD",fontSize:"28px"}} />:
                  <CancelIcon style={{color:"#1BC5BD",fontSize:"28px"}} />
                }
                </div>
                
                
                </ListItem>
                

                
 

                            


                        
                      
                    
                
            </Typography>
            </Card>
  

            
            
            
            
            
            
            
            
            
            
            
            
            
            
        </Container>
        <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={fullWidth}
        maxWidth={"sm"} style={{paddingBottom:"10px"}}>
                                    
                                    
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
                                    <Grid item >
                                      <Grid container alignItems="center" >
                                        <Grid item >
                                        <TextField
                                          placeholder="Company Name"
                                          id="companyname"
                                          value={account.companyname}
                                          onChange={handleaccount}
                                          className={classes.emailtextfield1}
                                          size="Large"
                                          variant="outlined"
                                          inputProps={{ 'aria-label': 'naked' }}
                                          
                                          />
                                        </Grid>
                                        <Grid item>
                                        <div className={classes.email1} style={{display:checkingcompanyname?"flex":"none"}}>
                                          
                                          <p> Required Field</p>
                                                         
                                        </div>
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                   
                                    

                                    <Typography style={{marginTop:"15px"}}>
                                        Company Address
                                    </Typography>
                                    <Grid item >
                                      <Grid container alignItems="center" spacing={1}>
                                        <Grid item xs={8}>
                                        <TextField
                                          placeholder="Company Address"
                                          id="companyaddress"
                                          value={account.companyaddress}
                                          onChange={handleaccount}
                                          style={{    width:"41ch",
                                          marginTop:"10px",
                                          padding:"5px"}}
                                          multiline
                                          variant="outlined"
                                          fullWidth
                                          inputProps={{ 'aria-label': 'naked' }}
                                          />
                                        </Grid>
                                        <Grid item>
                                        
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                    
                                    <Typography style={{marginTop:"15px"}}>
                                        Contact Person
                                    </Typography>
                                    <TextField
                                          placeholder="Contact Person"
                                          id="contactperson"
                                          value={account.contactperson}
                                          onChange={handleaccount}
                                          className={classes.emailtextfield1}
                                          size="Large"
                                          variant="outlined"
                                          inputProps={{ 'aria-label': 'naked' }}
                                          />
                                    <Typography style={{marginTop:"15px"}}>
                                        Contact Person's Position
                                    </Typography>
                                    <TextField
                                          placeholder="Contact Person Position"
                                          id="contactpersonposition"
                                          value={account.contactpersonposition}
                                          onChange={handleaccount}
                                          className={classes.emailtextfield1}
                                          size="Large"
                                          variant="outlined"
                                          inputProps={{ 'aria-label': 'naked' }}
                                          />
                                    <Typography style={{marginTop:"15px"}}>
                                        Contact Person's Email
                                    </Typography>
                                      <Grid item >
                                        <Grid container alignItems="center" spacing={1}>
                                          <Grid item>
                                          <TextField
                                            placeholder="Contact Person Email"
                                            id="contactpersonemail"
                                            value={account.contactpersonemail}
                                            onChange={handleaccount}
                                            className={classes.emailtextfield1}
                                            size="Large"
                                            variant="outlined"
                                            inputProps={{ 'aria-label': 'naked' }}
                                            
                                            />
                                          </Grid>
                                          <Grid item>
            
                                          <div className={classes.email1} style={{display:checkingcontactpersonposition?"flex":"none"}}>
                                            
                                            <p> Invalid Email</p>
                                                          
                                          </div>
                                          </Grid>
                                        </Grid>
                                      </Grid>

                                    <Typography style={{marginTop:"15px"}}>
                                        Contact Person's Phone Number
                                    </Typography>
                                      <PhoneInput
                                      value={account.contactpersonphone}
                                      name="contactpersonphone"
                                      onChange={(name,value,phone)=>{
                                        console.log(name,value,phone) 
                                        setaccount(prevState => ({
                                            ...prevState,
                                            ["contactpersonphone"] : name
                                        }))
                                      }} 
                                      defaultCountry={'us'}
                                      style={{
                                      marginTop:"10px",
                                      padding:"5px"}} 
                                      />
                                    <div style={{display:"flex",justifyContent:"center",marginTop:"25px"}}>
                                    <Button color="primary" variant="contained" onClick={checkaccount}> Update Information</Button>
                                    </div>
                                    <Divider style={{marginTop:"15px"}}/>
                                    </DialogContent>

                                </Dialog>
                                <Dialog
                                        open={accountauthenticate}
                                        onClose={handleaccountform}
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
                                                    <Typography style={{display:"flex",height:"6vh",justifyContent:"flex-start",alignItems:"center",marginLeft:"-5px"}}>Confirm Changes </Typography>
                                                
                                                </Grid>
                                                </Grid>
                                            
                                            </Grid>
                                            
                                            <Grid items xs={1} style={{height:"6vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            
                                            <CloseIcon onClick={handleaccountform} />
                                            
                                                
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
                                        <Button onClick={handleaccountsubmitform} color="primary" variant="contained">
                                            Continue
                                        </Button>
                                        <Button onClick={handleaccountform} color="primary" variant="outlined" autoFocus>
                                            Cancel
                                        </Button>
                                        </Typography>
  
                                        
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
                                        <Grid container>
                                        <Grid item>
                                        <OutlinedInput
                                          style={{height:"50px"}} 
                                          placeholder="Enter Current Password"
                                          type="password"
                                          id="correctpassword"
                                          value={security.correctpassword}
                                          type={showPassword1 ? 'text' : 'password'}
                                          onChange={handlesecurity}
                                          className={classes.emailtextfield1}
                                          size="Large"
                                          variant="outlined"
                                          inputProps={{ 'aria-label': 'naked' }}
                                          endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword1}
                                                // onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                
                                                >
                                                {showPassword1 ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                        
                                      />
                                        </Grid>
                                        <Grid item>
                                        <div className={classes.email1} style={{display:checksecurity?"flex":"none"}}>
                                          
                                          <p> Incorrect Password</p>
                                                         
                                        </div>
                                        </Grid>
                                        </Grid>
                                        <Typography style={{marginTop:"15px"}}>
                                        Enter New Password
                                        </Typography>
                                        <Grid conatiner direction="row"  style={{ display:"flex"}}>
                                        <Grid item >
                                        <OutlinedInput
                                          style={{height:"50px"}} 
                                          placeholder="Enter New Password"
                                          type="password"
                                          id="newpassword"
                                          value={security.newpassword}
                                          onChange={handlesecurity}
                                          className={classes.emailtextfield1}
                                         
                                          inputProps={{ 'aria-label': 'naked' }}
                                          type={showPassword2 ? 'text' : 'password'}
                                          variant="outlined"
                                          endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword2}
                                                // onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                
                                                >
                                                {showPassword2 ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                      />
                                      </Grid>
                                      <Grid item  className={classes.email1} style={{display:checknewpassword1?"flex":"none"}}>
                                  
                                          
                                          <p>Enter more than 7 values</p>
                                      </Grid>
                                      </Grid>
                                        <Typography style={{marginTop:"15px"}}>
                                        Re-enter New Password
                                        </Typography>
                                        <Grid container>
                                          <Grid item>
                                        <OutlinedInput
                                          style={{height:"50px"}}
                                          placeholder="Re-enter New Password"
                                          type="password"
                                          id="reenternewpassword"
                                          value={security.reenternewpassword}
                                          onChange={handlesecurity}
                                          className={classes.emailtextfield1}
                                          size="Large"
                                          inputProps={{ 'aria-label': 'naked' }}
                                          type={showPassword3 ? 'text' : 'password'}
                                          variant="outlined"
                                          endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword3}
                                                // onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                
                                                >
                                                {showPassword3 ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                          
                                      />
                                      </Grid>
                                      <Grid item>
                                        <div className={classes.email1} style={{display:checknewpassword?"flex":"none"}}>
                                          
                                          <p>Password does not match</p>
                                                         
                                        </div>
                                        </Grid>
                                        </Grid>
                                        <div style={{display:"flex",justifyContent:"center",marginTop:"25px"}}>
                                        <Button color="primary" variant="contained" onClick={submitsecurity}> Update Password</Button>
                                        </div>
                                        <Divider style={{marginTop:"15px"}}/>
                                        </DialogContent>
                                    </Dialog>
                                    <Dialog
                                        open={securityauthenticate}
                                        onClose={closesecuritydialog}
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
                                                    <Typography style={{display:"flex",height:"6vh",justifyContent:"flex-start",alignItems:"center",marginLeft:"-5px"}}>Confirm Changes </Typography>
                                                
                                                </Grid>
                                                </Grid>
                                            
                                            </Grid>
                                            
                                            <Grid items xs={1} style={{height:"6vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            
                                            <CloseIcon onClick={closesecuritydialog} />
                                            
                                                
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
                                        <Button onClick={submitsecuritydialog} color="primary" variant="contained">
                                            Continue
                                        </Button>
                                        <Button onClick={closesecuritydialog} color="primary" variant="outlined" autoFocus>
                                           Cancel
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
                                          Notification Email Address(es)
                                        </Typography>
                                        {primaryemailcount
                                        ?
                                        <div>
                                        <Grid container>
                                          <Grid item>
                                          <InputBase
                                          placeholder="Enter Email"
                                          name={0}
                                          value={primaryemail[0]}
                                          onChange={handletextprimary}
                                          className={classes.emailtextfield}
                                          size="Large"
                                          inputProps={{ 'aria-label': 'naked' }}
                                          />
                                          </Grid>
                                          <Grid item>
                                            <div className={classes.email1} style={{display:primaryemailauthenticate?"flex":"none"}}>
                                              <p> Invalid Email</p>
                                            </div>
                                          </Grid>
                                        </Grid>
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
                                          <i className={classes.logowithtextfield}><CloseIcon type="button"   /></i>
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
                                          Email address
                                        </Typography>
                                        </Typography>
                                        <Divider style={{marginTop:"15px"}}/>

                                        <Typography style={{marginTop:"15px"}}>
                                          Alert Types
                                        </Typography>
                                        <Typography component="div" style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"}}>
                                            <Typography component="div" style={{display:"flex",marginTop:"10px",alignItems:"center"}}>
                                                <Typography style={{marginRight:"38px"}}> High severity Alerts</Typography>
                                                <IOSSwitch checked={notification.highseverityalerts} onChange={handleChange4} name="highseverityalerts" />
                                            </Typography>
                                            <Typography component="div" style={{display:"flex",marginTop:"10px",alignItems:"center"}}>
                                                <Typography style={{marginRight:"40px"}}>Medium severity Alerts</Typography>
                                                <IOSSwitch checked={notification.mediumseverityalerts} onChange={handleChange4} name="mediumseverityalerts" />
                                            </Typography>
                                            <Typography component="div" style={{display:"flex",marginTop:"10px",alignItems:"center"}}>
                                                <Typography style={{marginRight:"20px"}}>Low severity Alerts</Typography>
                                                <IOSSwitch checked={notification.lowseverityalerts} onChange={handleChange4} name="lowseverityalerts" />
                                            </Typography>
                                            <Typography component="div" style={{display:"flex",marginTop:"10px",alignItems:"center"}}>
                                                <Typography style={{marginRight:"20px"}}>Newly suggested Assets</Typography>
                                                <IOSSwitch checked={notification.newlysuggestedassets} onChange={handleChange4} name="newlysuggestedassets" />
                                            </Typography>
                                            <Typography component="div" style={{display:"flex",marginTop:"10px",alignItems:"center"}}>
                                                <Typography style={{marginRight:"5px"}}>New Vulnerabilities</Typography>
                                                <IOSSwitch checked={notification.newvulnerabilities} onChange={handleChange4} name="newvulnerabilities" />
                                            </Typography>                                                                        
                                        
                                        </Typography>
                                        <Divider style={{marginTop:"15px"}}/>
                                        <div style={{display:"flex",justifyContent:"center",marginTop:"15px"}}>
                                        <Button color="primary" variant="contained"  onClick={handleformsubmit}> Update Settings</Button>
                                        </div>
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
                                                    <Typography style={{display:"flex",height:"6vh",justifyContent:"flex-start",alignItems:"center",marginLeft:"-5px"}}>
                                                    Confirm Changes </Typography>
                                                
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
                                        <Button onClick={finalSubmit} type="submit"color="primary" variant="contained">
                                            Continue
                                        </Button>
                                        <Button onClick={handlecloselastdialog} color="primary" variant="outlined" autoFocus>
                                            Cancel
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