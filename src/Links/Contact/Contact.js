import React from 'react';
import {Grid, Typography} from "@material-ui/core"
import ContactForm from '../../components/Support/ContactForm';
import NHeader from "./NHeader.js"
export default function Contact1(props){
  
  return(
    
    <div  style={{height:"100vh",background:"white"}}>
       
  
        <main >
            <Grid item>
                <Grid container  justify="center" style={{height:"20vh"}}>
                    <Grid item>
                        <NHeader/>
                    </Grid>
                    <Grid item>
                        <Grid container >
                            <Typography style={{fontSize:"30px",fontWeight:"800", paddingTop:"150px"}}>
                            Contact Us
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        <Grid item >
            <Grid container justify="center" alignItems="flex-start" style={{height:'80vh'}}>

                    <ContactForm/>

            
            
            </Grid>
           
        </Grid>
        
        </main>
  

  
  
        <style jsx global>{`
          html,
          body {
            width:100%;
            height:100%;
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
  
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
  )
}

 