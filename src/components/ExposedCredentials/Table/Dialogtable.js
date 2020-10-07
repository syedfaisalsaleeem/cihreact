import React ,{useState,useEffect} from 'react';
import {Dialog,DialogTitle,DialogContent,Grid,Divider} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import LatestCard from "../../Drawer/Dashboard/LatestCard1.jsx"
export default function Dialogtable(props){
    useEffect(()=>{
        console.log("pushed")

    },[])
    var i;
    for(i=0; i<=props.alertstate.length;i++){
        console.log(props.alertstate[i],"ii")
    }
    return(
        <Dialog
        open={props.open}
        onClose={props.handle1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xl"}
        >
        <DialogTitle>
        <Grid item xs={12}>
            <Grid container justify="center">
            <Grid item xs={11}>
                <Grid container>
                <Grid item xs={11}>
                    Alert(s)
                </Grid>
                <Grid item xs={1}>
                    <Grid container justify="flex-end">
                    <CloseIcon onClick={props.handle1} />
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
        </DialogTitle>
        <Divider />
        <DialogContent>
            {/* {props.alertstate.length} */}
            {props.alertdatalist.map((index)=>{
                return(
                    <div>
                                <LatestCard
                                date={index['timestamp']}
                                alertcreated={index['created']}
                                severity={index['severity']} 
                                title={index['source_title']} 
                                source={index['source_url']}
                                keyword={index['keywords']}
                                tags={index['tags']}
                                remediation={index['remediation']}
                                id={index['id']}
                                id2={index}
                                comments={index['comments']}
                                // changeflag={props.changeflag} 
                                // commenting1={commenting[index]}
                                // setcommenting={setcommenting}
                                // addcount={props.addcount}
                                />
                    {/* {console.log(props.alertdatalist,index,"consoling")} */}
                    </div>
                )

            }

            )}
            {/* {props.alertdatalist} */}
        {/* <LatestCard />
        <LatestCard /> */}
        </DialogContent>
        </Dialog>
    )
}