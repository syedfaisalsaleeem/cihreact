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
                    <p>Medium</p>
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