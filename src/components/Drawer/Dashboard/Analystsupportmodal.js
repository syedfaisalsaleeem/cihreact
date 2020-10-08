import React ,{useState,useEffect} from 'react';
import {Dialog,DialogTitle,DialogContent,Grid,Divider} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import analyst from "../../../Links/images/analyst.png";
import LatestCard from "./LatestCard.jsx";
import ContactForm from "../../Support/ContactForm.jsx"
export default function Analystsupportmodal (props){
    useEffect(()=>{
        console.log("pushed")

    },[])
    // var i;
    // for(i=0; i<=props.alertstate.length;i++){
    //     console.log(props.alertstate[i],"ii")
    // }
    return(
        <Dialog
        open={props.open}
        onClose={props.handle1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xl"}
        >
        <DialogTitle style={{background:"#8950FC"}}>
        <Grid item xs={12}>
            <Grid container justify="center">
            <Grid item xs={11}>
                <Grid container>
                <Grid item xs={1} style={{paddingTop:"5px"}}>
                    <img src={analyst} />
                </Grid>
                <Grid item xs={10} style={{color:"white"}}>
                    Analyst Support
                </Grid>
                <Grid item xs={1}>
                    <Grid container justify="flex-end">
                    <CloseIcon onClick={props.handle1} style={{color:"white"}} />
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
        </DialogTitle>
        <Divider />
        <DialogContent >
            {console.log(props.alertdata,"alerts datas")}
            <Grid item xs={12}>
                <Grid container style={{paddingLeft:"20px",paddingTop:"20px",paddingBottom:"20px",fontSize:"18px",fontWeight:"600"}}>
                    Selected Alert
                </Grid>
            </Grid>
            <LatestCard
            date={props.alertdata.date}
            alertcreated={props.alertdata.alertcreated}
            severity={props.alertdata.severity} 
            title={props.alertdata.title} 
            source={props.alertdata.source}
            keyword={props.alertdata.keyword}
            tags={props.alertdata.tags}
            remediation={props.alertdata.remediation}
            id={props.alertdata.id}
            id2={props.alertdata.id2}
            comments={props.alertdata.comments}
            />
            <ContactForm/>
            {/* {props.alertstate.length} */}

                    <div>
                                {/* <LatestCard
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
                                /> */}
                    {/* {console.log(props.alertdatalist,index,"consoling")} */}
                    </div>

            {/* {props.alertdatalist} */}
        {/* <LatestCard />
        <LatestCard /> */}
        </DialogContent>
        </Dialog>
    )
}