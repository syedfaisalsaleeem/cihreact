import React from 'react'
import {Grid} from "@material-ui/core"
export default function FContent(){
    return(
        <div>
            <Grid item xs={12}>
                <Grid container style={{height:"100vh"}} justify="center" alignItems="center">
                    <Grid item>
                        Exposed Credentials coming soon
                    </Grid>

                </Grid>
            </Grid>
            
        </div>
    )
}