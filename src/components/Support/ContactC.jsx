import React from 'react';
import {Grid,Typography,Divider,Card} from "@material-ui/core";
import ContactGs1 from "./ContactGs1.jsx";
import styles from "./ContactC.module.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import FlagIcon from '@material-ui/icons/Flag';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import {Link} from "react-router-dom";
export default function ContactC (props){
    return(
        <div>
            <Grid container>
                <Grid item xs={12}>
                <Grid container justify="center" style={{marginTop:"10px"}}>
                    <Typography variant="h3" gutterBottom> Hello, How can we help ?</Typography>
                </Grid>
                
                </Grid>
                
                <Grid item xs={12}>
                    <Grid container justify="center" style={{marginTop:"10px"}}>
                        <ContactGs1/>
                    </Grid>
                    
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center">
                            <p>
                            or choose a category to quickly find the help you need
                            </p>
                        
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center" >
                    <Grid item lg={6} md={10} xs={12}>
                    <Grid container justify="space-evenly">
                        <Grid item lg={3} md={3} xs={4}>
                            
                            <Card style={{paddingTop:"20px",paddingBottom:"20px",borderStyle:"solid",borderWidth:"1px",borderColor:"#8950FC",borderRadius:"6px"}}>

                            <Grid container direction="column" justify="center" spacing={1}>
                                <Grid item >
                                    <Grid container justify="center">
                                        <FlagIcon style={{fontSize:"40px",color:"#8950FC"}} />
                                    </Grid>
                                    
                                </Grid>
                                <Grid item >
                                    <Grid container justify="center">
                                        <Typography> Getting Started</Typography>
                                    </Grid>
                                
                                </Grid>
                            
                            </Grid>
                            </Card>
                            
                        </Grid>
                        <Grid item lg={3} md={3} xs={4} >
                        
                            <Card style={{paddingTop:"20px",paddingBottom:"20px"}}>
                            <Grid container direction="column" justify="center" spacing={1}>
                                <Grid item >
                                    <Grid container justify="center">
                                        <MenuBookIcon style={{fontSize:"40px"}} />
                                    </Grid>
                                    
                                </Grid>
                                <Grid item >
                                    <Grid container justify="center">
                                        <Typography>Usuage Guide</Typography>
                                    </Grid>
                                
                                </Grid>
                            
                            </Grid>
                            </Card>

                        </Grid>
                        <Grid item lg={3} md={3} xs={4}>
                        <Link 
                         to="./Contact"
                        >
                        
                            
                                
                            
                            <Card style={{paddingTop:"20px",paddingBottom:"20px"}}>
                            
                                <Grid container direction="column" justify="center" spacing={1}>
                                    <Grid item >
                                        <Grid container justify="center">
                                            <ContactMailIcon style={{fontSize:"40px"}} />
                                        </Grid>
                                        
                                    </Grid>
                                    <Grid item >
                                        <Grid container justify="center">
                                            <Typography> Contact us</Typography>
                                        </Grid>
                                    
                                    </Grid>
                                
                                </Grid>
                            </Card>
                            
                            </Link>
                        </Grid>
                        </Grid>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12} style={{marginTop:"20px"}}>
                    <Grid container justify="center">
                        <Grid item xs={10}>
                        <div className={styles.get} >
                        <Typography variant="h3" gutterBottom>Getting Started</Typography>
                        <Typography variant="p">Description tagline will go here...</Typography>
                            </div>
                            
                            <br/>
                            
                        <div className={styles.got} >
                            <Grid container alignItems="center" justify="space-around">
                                <Grid item xs={0}>
                                
                                <FiberManualRecordIcon />
                                
                                </Grid>
                                <Grid item xs={10}>
                                <h1 className={styles.first} >
                                Question heading goes here...
                                </h1>
                                </Grid>
                                <Grid item xs={1}>
                                    <Grid container justify="flex-end">
                                    <AddOutlinedIcon/>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Divider/>
                            <Grid container alignItems="center" justify="space-around">
                                <Grid item xs={0}>
                                
                                <FiberManualRecordIcon />
                                
                                </Grid>
                                <Grid item xs={10}>
                                <h1 className={styles.first} >
                                Question heading goes here...
                                </h1>
                                </Grid>
                                <Grid item xs={1}>
                                    <Grid container justify="flex-end">
                                    <RemoveRoundedIcon/>
                                    </Grid>

                                </Grid>
                                <Grid item xs={11}>
                                    <p>
                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.

                                </p>
                                </Grid>
                            </Grid>

                            <Grid container alignItems="center" justify="space-around">
                                <Grid item xs={0}>
                                
                                <FiberManualRecordIcon />
                                
                                </Grid>
                                <Grid item xs={10}>
                                <h1 className={styles.first} >
                                Question heading goes here...
                                </h1>
                                </Grid>
                                <Grid item xs={1}>
                                    <Grid container justify="flex-end">
                                    <AddOutlinedIcon/>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Divider/>
                            <Grid container alignItems="center" justify="space-around">
                                <Grid item xs={0}>
                                
                                <FiberManualRecordIcon />
                                
                                </Grid>
                                <Grid item xs={10}>
                                <h1 className={styles.first} >
                                Question heading goes here...
                                </h1>
                                </Grid>
                                <Grid item xs={1}>
                                    <Grid container justify="flex-end">
                                    <RemoveRoundedIcon/>
                                    </Grid>

                                </Grid>
                                <Grid item xs={11}>
                                    <p>
                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.

                                </p>
                                </Grid>
                            </Grid>
                            
                        </div>
                        
                        </Grid>

                    </Grid>

                </Grid>

                
            
            
            
            </Grid>
            
        </div>
    )
}