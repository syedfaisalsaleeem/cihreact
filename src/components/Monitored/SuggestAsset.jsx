import React from 'react';
import {Card,Grid,Button,Chip,Dialog,DialogTitle,Typography,Divider,DialogContent,DialogActions,DialogContentText,IconButton, TextField,InputBase,
    FormControl,InputLabel,Select,MenuItem,Box,Paper
} from "@material-ui/core";
import Menu from '@material-ui/core/Menu';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';




function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Application', " 000.000.000", " https://www.domain-name.com",""),
    createData('Application', " 000.000.000", " https://www.domain-name.com",""),
    createData('Application', " 000.000.000", " https://www.domain-name.com",""),
    createData('Application', " 000.000.000", " https://www.domain-name.com",""),
    createData('Application', " 000.000.000", " https://www.domain-name.com",""),
  ];
  const styles = makeStyles((theme) => ({



  }));
export default function SuggestAsset(props){
    const classes=styles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    if(props.value==="2"){

    
    return(
        <React.Fragment>
                <Grid item xs={12} style={{width:"100%"}}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>
                                <FormControl className={classes.formControl} style={{width:"21ch"}} >
                                                        
                                                        <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        variant="outlined"
                                                        style={{height:"40px"}}
                                                        displayEmpty
                                                        placeholder="Select"
                                                        value={age}
                                                        onChange={handleChange}
                                                        >
                                                        <MenuItem value="">
                                                            <em style={{fontSize:"12px",fontStyle:'normal',fontFamily:"Roboto",color:"rgba(0, 0, 0, 0.5)",paddingLeft:"3px"}}>Select</em>
                                                        </MenuItem>
                                                        <MenuItem value={10} style={{fontSize:"12px",fontStyle:'normal',fontFamily:"Roboto",paddingLeft:"3px"}}>Ten</MenuItem>
                                                        <MenuItem value={20} style={{fontSize:"12px",fontStyle:'normal',fontFamily:"Roboto",paddingLeft:"3px"}}>Twenty</MenuItem>
                                                        <MenuItem value={30} style={{fontSize:"12px",fontStyle:'normal',fontFamily:"Roboto",paddingLeft:"3px"}}>Thirty</MenuItem>
                                                        </Select>
                                </FormControl>
                                
                                </TableCell>
                                <TableCell align="center">IP Address</TableCell>
                                <TableCell align="center">Host Name</TableCell>
                                <TableCell align="center"></TableCell>
                                
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.calories}</TableCell>
                                <TableCell align="center">{row.fat}</TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={handleMenu}>
                                        <MoreVertIcon style={{color:"black"}}/>
                                    </IconButton>
                                </TableCell>
                                
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
                <Menu
                id="simple-menu"
                getContentAnchorEl={null}
                anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
                }}
                transformOrigin={{
                vertical: "top",
                horizontal: "left"
                }}
                keepMounted
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} style={{background:"#8950FC",color:"white",borderRadius:"2px",marginTop:"1px",fontSize:"10px"}}>Accept</MenuItem>
                <MenuItem onClick={handleClose} style={{background:"#FF6A7A",color:"white",borderRadius:"2px",marginTop:"1px",fontSize:"10px"}}>Reject</MenuItem>
              </Menu>
        </React.Fragment>
    )
}
else{
    return(
        <div>

        </div>
    )
}
}