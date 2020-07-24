import React from 'react'
import {Card,Grid,Button,Chip,Dialog,DialogTitle,Typography,Divider,DialogContent,DialogActions,DialogContentText,IconButton, TextField,InputBase,
    FormControl,InputLabel,Select,MenuItem
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import radar from "../../Links/images/radar.png";
import { makeStyles} from '@material-ui/core/styles';
const styles = makeStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[900],
    },
    textf:{
        background: "#F3F6F9",
        borderRadius: "4px",
        height: "41.02px",
        padding: theme.spacing(1),
        fontSize:"13px",
        width:"33ch",

    },
    formControl: {
        
        width:"34ch",
        border:0,
        background:"#F3F6F9",
        fontSize:"13px",
       
        '& fieldset': {
          border: "0",
        }
    }
  }));
export default function AssetContent(props){
    const classes=styles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return(
    <div>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Grid item xs={11}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <Grid container spacing={5}>
                                        <Grid item >
                                            <Grid container direction="column" spacing={1}>
                                                <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                                    Add Asset Name
                                                </Grid>
                                                <Grid item>
                                                <InputBase
                                                    className={classes.textf}
                                                    size="small"
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    placeholder="Enter name of asset"
                                                    
                                                />
                                                    
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item>
                                            <Grid container direction="column" spacing={1}>
                                                <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                                    Select Asset Type
                                                </Grid>
                                                <Grid item>
                                                <FormControl className={classes.formControl}  >
                                                    
                                                    <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    style={{height:"40px"}}
                                                    displayEmpty
                                                    onChange={handleChange}
                                                    placeholder="Select asset type"
                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item>
                                            <Grid container direction="column" spacing={1}>
                                                <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                                    Select Asset Location
                                                </Grid>
                                                <Grid item>
                                                <FormControl className={classes.formControl}  >
                                                    
                                                    <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    style={{height:"40px"}}
                                                    displayEmpty
                                                    onChange={handleChange}
                                                    placeholder="Select Country"
                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    
                                    
                                    </Grid>

                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={5}>
                                        <Grid item >
                                            <Grid container direction="column" spacing={1}>
                                                <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                                    Add Asset Name
                                                </Grid>
                                                <Grid item>
                                                <InputBase
                                                    className={classes.textf}
                                                    size="small"
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    
                                                />
                                                    
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item>
                                            <Grid container direction="column" spacing={1}>
                                                <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                                    Select Asset Type
                                                </Grid>
                                                <Grid item>
                                                <InputBase
                                                    className={classes.textf}
                                                    size="small"
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    
                                                />
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item>
                                            <Grid container direction="column" spacing={1}>
                                                <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                                    Select Asset Type
                                                </Grid>
                                                <Grid item>
                                                <InputBase
                                                    className={classes.textf}
                                                    size="small"
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    
                                                />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    
                                    
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider/>
                                </Grid>
                                <Grid item xs={12} >
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                        Add Keyword for Tracking
                                        </Grid>
                                        <Grid item >
                                            <InputBase
                                                    className={classes.textf}
                                                    size="small"
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    style={{width:"20ch"}}
                                                    
                                                />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                        Select Tags
                                        </Grid>
                                        <Grid item >
                                            <Grid container spacing={2}>
                                                <Grid item>
                                                    <FormControl className={classes.formControl} style={{width:"21ch"}} >
                                                        
                                                        <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={age}
                                                        style={{height:"40px"}}
                                                        displayEmpty
                                                        onChange={handleChange}
                                                        >
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                </FormControl>
                                                </Grid>
                                                <Grid item>
                                                    <IconButton >
                                                        <CloseIcon/>
                                                    </IconButton>
                                                </Grid>

                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider/>
                                </Grid>
                                <Grid item xs={12} style={{marginBottom:"10px"}}>
                                    <Grid container justify="flex-end">
                                        <Grid item>
                                            <Button color="primary" variant="contained" onClick={props.changedon}>
                                                Add Asset
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>

    </div>
    )
}