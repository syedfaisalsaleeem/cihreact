import React from "react";
import {Button,Chip} from "@material-ui/core"
import styles from "./EContent.module.css";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    view:{
        
        
        height: "30px",
        paddingLeft:"10px",
        paddingRight:"10px",
        fontWeight:"500",
        marginTop: "10px",
        fontSize: "10px"
    }
}))
export default function CardGrid(){
    const classes=useStyles();
    return(
        <div>
            <div className={styles.main}>
                    
                    <div className={styles.rowbox1}>
                    
                    <div className={styles.medium}>
                    <p> {nseverity}</p>
                    </div>
                    
                    <div className={styles.date}>
                    <p>{date}</p>
                    </div>
                    <div className={styles.view}>
                    <Button variant="contained" color="primary" size="small" className={classes.view} onClick={handleClickOpen}>
                        View Details
                    </Button>
                    </div>
                    <div>
                    <LightTooltip title="Highlight alert">
                                                        <IconButton aria-label="settings" onClick={addcount} >
                                                            <GradeIcon style={{fontSize:'32px',color:star?"yellow":"gray"}}/>

                                                        </IconButton>   
                                                    </LightTooltip >
                    </div>

                    </div>
                    <Grid item style={{background:"red",width:"100%"}}>
                        <Grid container justify="space-evenly">
                            <Grid item style={{background:"red",width:"50%"}}>
                                <Grid container direction="column">
                                    <Grid item>
                                        Title
                                    </Grid>
                                    <Grid item>
                                        {title}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item style={{background:"red",width:"50%"}}>
                            <Grid container direction="column">
                                    <Grid item>
                                    Source
                                    </Grid>
                                    <Grid item >
                                    {source}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    {/* <div className={styles.rowbox2}>
                
                    <div className={styles.maintype}>
                    <div className={styles.type}>
                    <p>Title</p>
                    </div>
                    <div className={styles.typetext}>
                    <p>{title}</p>
                    </div>
                    </div>
                    
                    <div className={styles.mainsource}>
                    <div className={styles.source}>
                    <p>Source</p>
                    </div>
                    <div className={styles.link}>
                    <p>{source}</p>
                    </div>
                    </div>
                    </div> */}
    
                    
    
                    <div className={styles.rowbox3}>
                    <div className={styles.mainkey}>
                    <div className={styles.key}>
                    <p>Keyword</p>
                    </div>

                    
                    </div>
                    </div>
                    <div className={styles.b}>
                        <div className={styles.b1}>
                            
                       {keyword[0]['value']} 
                                                
                        
                        </div>

                    </div>
                    <div className={styles.rowbox3}>
                    <div className={styles.mainkey}>
                    <div className={styles.key}>
                    <p>Tags</p>
                    </div>

                    
                    </div>
                    </div>
                    <div className={styles.b} styles={{marginLeft:"10px"}}>
                        <Grid container justify="center">
                    {tags.map((number)=>
                        <Grid item>
                            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Chip style={{margin:"2px"}} size="small" label={number} variant="outlined" className={classes.chipborder}/>
                            </div>
                            </Grid>    
                        )}
                        </Grid>
                        {/* <div className={styles.b1}>
                            
                                Tag here
                        
                        </div>

                        <div className={styles.b2}>
                            Tag here
                        </div>
                        <div className={styles.b3}>
                            Tag here
                        </div>
                        <div className={styles.b4}>
                            Tag here
                        </div> */}
                    </div>
    
                    </div>
            <div className={styles.main}>
                    
                    <div className={styles.rowbox1}>
                    
                    <div className={styles.medium} style={{background:"#D0021B"}}>
                    <p>High</p>
                    </div>
                    
                    <div className={styles.date}>
                    <p>DD-MM-YYYY</p>
                    </div>
                    <div className={styles.view}>
                    <Button variant="contained" color="primary" size="small" className={classes.view}>
                        View Details
                    </Button>
                    </div>

                    </div>
    
                    
                    <div className={styles.rowbox2}>
                
                    <div className={styles.maintype}>
                    <div className={styles.type}>
                    <p>Type</p>
                    </div>
                    <div className={styles.typetext}>
                    <p>Type goes here</p>
                    </div>
                    </div>
                    
                    <div className={styles.mainsource}>
                    <div className={styles.source}>
                    <p>Source</p>
                    </div>
                    <div className={styles.link}>
                    <p>https://website.web.com</p>
                    </div>
                    </div>
                    </div>
    
                    
    
                    <div className={styles.rowbox3}>
                    <div className={styles.mainkey}>
                    <div className={styles.key}>
                    <p>Keyword</p>
                    </div>

                    
                    </div>
                    </div>
                    <div className={styles.b}>
                        <div className={styles.b1}>
                            
                                Tag here
                        
                        </div>
                        <div className={styles.b2}>
                            Tag here
                        </div>
                        <div className={styles.b3}>
                            Tag here
                        </div>
                        <div className={styles.b4}>
                            Tag here
                        </div>
                    </div>

    
                    </div>
        </div>
    )
}