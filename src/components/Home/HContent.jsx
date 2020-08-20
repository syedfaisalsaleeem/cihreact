import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import styles from "./HContent.module.css"
export default function HContent(){
    return(
        // <div className={styles.container}>
        //     <div className={styles.imgbg}></div>
        //     <h2>
        //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis enim
        //     aut rerum mollitia quas voluptas delectus facere magni cum unde?:)
        //     </h2>
        //     </div>
        <div className={styles.body}>
   
            <Grid item xs={12}>
                <Grid container alignItems="center" justify="center">
                    <Grid item>
                        <Typography variant="h3"> Home/Dashboard coming soon</Typography>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}