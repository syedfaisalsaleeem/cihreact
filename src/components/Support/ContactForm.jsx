import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import {Grid,Card, Button,Typography,Dialog,DialogContent,DialogContentText,DialogTitle,Divider} from "@material-ui/core";
import styles from "./ContactForm.module.css";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) => ({
  formControl: {
    
    minWidth: 200,
    width:"35vw",
    background:"white",
    marginTop:"20px",
    
    '& fieldset': {
      border: "1px solid #000000",
    }
    
  },
  email:{
    
    position: "absolute",
    marginLeft: "35.5vw",
    width:"170px",
    height:"38px",
    marginTop: "20px",
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
    
  position: "absolute",
  marginLeft: "35.5vw",
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
  input: {
    display: 'none',
  },
  selectEmpty: {
    
  },
}));
export default function ContactForm(){
    const classes = useStyles();
    const [age1, setAge1] = React.useState('');
    const [open,handleopen]=React.useState(false)
    const [check,checkemail]=React.useState();
    const [inquirytype,changeinquiry]=React.useState();
    const [subject,checksubject]=React.useState("");
    const [inquiry,checkinquiry]=React.useState("");
    const [authenticate,changeauthenticate]=React.useState();;
    const funcopen=()=>{
      handleopen(true)
      console.log(subject,"event1")
      if(inquiry===""){
          checkemail(false)
          changeinquiry(true)
          changeauthenticate(false)
      }
      else if(subject===""){
          checkemail(true)
          changeauthenticate(false)
          changeinquiry(false)
        }
        else{
          checkemail(false)
          changeauthenticate(true)
        }
    }
    const funcclose=()=>{
      handleopen(false)
    }
    const emailcheck=(event)=>{
        const event1=event.target.value;
        checksubject(event1)


    };
    const inquirycheck=(event)=>{
      const event1=event.target.value
      checkinquiry(event1)
      console.log(event1)
    }
    const handleChange = (event) => {
        setAge1(event.target.value);
    };
    return(

        <div >
           <form>
          <Grid container direction="column" justify="center" alignItems="center">
         
            <FormControl className={classes.formControl} >
            <div className={classes.email1} style={{display:inquirytype?"flex":"none"}}>
                                <p> Field is  required</p>
                            </div> 
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={inquiry}
                onChange={inquirycheck}
                
                
                variant="outlined"
                displayEmpty
                >
                <MenuItem value="" >
              <em >Select Inquiry Type</em>
              </MenuItem> 
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <div>

            
            <div className={classes.email} style={{display:check?"flex":"none"}}>
                                <p> Field is  required</p>
                            </div>
              <TextField
              className={classes.formControl}
                  
                  margin="dense"
                  id="name"
                  label="Subject"
                  type="email"
                  variant="outlined"
                  onChange={emailcheck}
                  fullWidth
              />
                  </div>            
          <TextField
          className={classes.formControl}
          id="outlined-multiline-static"
          label="Message..."
          multiline
          rows={15}
          
          variant="outlined"
          fullWidth
        />
        <Card className={classes.formControl} style={{border: "1px solid #000000",}}>
          <Grid container  justify="space-evenly">
            <Grid item xs={0} md={0} style={{marginTop:"15px",marginBottom:"10px"}}>
            <CloudUploadIcon style={{fontSize:"38px"}}/>
            </Grid>
            <Grid item xs={8} md={8} style={{display:"flex",justify:"flex-start",alignItems:"center"}}>
              <Typography variant="p" style={{fontSize:"120%"}}> Select File From Computer</Typography>
            </Grid>
            <Grid item  style={{display:"flex",justify:"flex-start",alignItems:"center"}}>
                    <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Select
                </Button>
              </label>
            </Grid>
          </Grid>
        </Card>
        <Button color="primary" variant="contained" style={{marginTop:"20px",width:"150px"}} onClick={funcopen}>
          Send
        </Button>
        
            </Grid>
            </form>

      {authenticate?
      <>
      <Dialog
      open={open}
      
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
                  <Typography style={{display:"flex",height:"6vh",justifyContent:"flex-start",alignItems:"center",marginLeft:"-5px"}}>Message Sent </Typography>
              
              </Grid>
              </Grid>
          
          </Grid>
          
          <Grid items xs={1} style={{height:"6vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
          
          <CloseIcon onClick={funcclose} />
          
              
          </Grid>
          
          
          
      </Grid>
      </DialogTitle>
      <Divider/>
      <DialogContent style={{width:"22vw"}}>
      <DialogContentText id="alert-dialog-description">
      Your message has been received, our team will respond to you within 24 hours.
      </DialogContentText>
      </DialogContent>
      <Divider/>
      <Typography style={{marginTop:"15px", display:"flex",justifyContent:"space-evenly",alignItems:"center" ,marginBottom:"20px"}}>
      <Button  type="submit"color="primary" variant="contained" onClick={funcclose}>
          Continue
      </Button>
      </Typography>

      
  </Dialog>
  </>
  :
  <div>

  </div>

      }
            





        </div>
    )

}