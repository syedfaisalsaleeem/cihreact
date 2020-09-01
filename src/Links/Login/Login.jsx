
import styles from "./Login.module.css";
import LoginCard from '../../components/Login/LoginCard';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import cyber from "../images/cyber.png";
import BigData from "../images/BigData.png"

import { Container,Typography,Grid,Paper,Button,Dialog,DialogContent,DialogTitle,Divider} from '@material-ui/core';
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledCard = withStyles({
  root1: {
    background: 'white',
    borderRadius: 3,
    border: 0,
    color: 'black',
    width:"200rem",
    minWidth: 275,
    
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Card);
const useStyles = makeStyles((theme)=>({
    f1: {
        background: 'white',
        borderRadius: 3,
        border: 0,
        color: 'black',
        
        
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    b:{
        color:'blue !important',
        
        '&:hover': {
            background: "none",
         },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
      },
  }))
export default function Login(){
    const classes = useStyles();
    const [open,changeopen1]=React.useState(false);
    const handle=()=>{
        changeopen1(!open)
    }
    return(
        <div style={{display:"flex",flexDirection:"column",background:"white"}}>
        
        <main style={{display: "flex", flexDirection:"column"}}>
            
            <Grid container  >
                <Grid item  style={{justifyContent:"center",alignItems:"flex-end",height:"24vh"}}>
                
                <div className={styles.logod}>
                <div className={styles.logod1}>
                <img src={cyber} />
                </div>
                
                </div>
                
                </Grid>
                
                <Grid item xs={12} style={{height:"60vh"}} >
                    <Grid container justify="center" >
                        <Grid item xs={9} sm={6} md={5} lg={4}>
                        <Card style={{minheight:"380px"}} className={classes.f1}>
                        <CardContent>
                        <Container >
                        <LoginCard/>
                        </Container>
                        </CardContent>
                        </Card>
                        </Grid>

                    </Grid>
                    
                </Grid>
                

            </Grid>
            

            
            
        </main>
        <footer style={{height:"200px",display:"flex",background:"transparent"}}>
                    <div className={styles.footercardh}>
                            <div className={styles.footercardc}>

                            </div>
                            
                            <div className={styles.footercardc1}>
                            
                                <div className={styles.footercardc11}>
                                
                                </div>
                                <div className={styles.footercardc12}>
                                    <div className={styles.footercardc121}>
                                        <div>
                                            <Button className={classes.b}>
                                                Privacy Policy
                                            </Button>
                                            
                                            
                                            
                                        </div>
                                        <div>
                                            <Button className={classes.b} onClick={handle}>
                                                Terms And Conditions
                                            </Button>
                                            
                                            
                                            
                                        </div>

                                    </div>
                                    <div className={styles.footercardc122}>
                                        <p>Copyright Cyber Intelligence House 2020.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.footercardh1}>
                        <img src={BigData} width="400px" height="369.96px"/>
                        </div>
        


        </footer>
     
        <Dialog
                open={open}
                onClose={handle}
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
                                        
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Grid container justify="flex-end">
                                        <CloseIcon onClick={handle}/>
                                        </Grid>
                                        
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>                                    
                </DialogTitle>                  
                <Divider/>
                <DialogContent >
                    <Grid container justify="center">
                        <Typography style={{fontSize:"18px",fontWeight:"800"}}>
                            CYBER INTELLIGENCE HOUSE PTE LTD TERMS AND CONDITIONS FOR DELIVERY SERVICES
                        </Typography>
                    </Grid>

                
<Typography style={{fontWeight:"800"}}> 1. Scope of application</Typography><br/>
<Typography>
These terms and conditions of delivery are applicable to all products and services
("Services") delivered by Cyber Intelligence House Pte. Ltd. ("Supplier") to a Customer unless
the Customer and the Supplier have specifically agreed otherwise in writing.<br/><br/>
The Supplier reserves the right to amend and update these Terms at any time at its sole and
absolute discretion.
</Typography><br/>
<Typography style={{fontWeight:"800"}}>
    2. Performance of the Services and general obligations of the parties   
</Typography><br/>
<Typography>
2.1 The contents and scope of the Services are determined in accordance with the service
agreement entered into between the Customer and the Supplier. Unless otherwise
specifically agreed in writing, the Services are fully provided in accordance with the best
specialists as well as best suitable methods, premises, tools, connections and working
methods determined by the Supplier. The Supplier shall provide the Services in accordance
with the service agreement and with due care and professional skills required by the task.<br/><br/>
2.2 The Customer shall, in good time before the estimated starting date, provide sufficient
and correct information in order for the Supplier to perform the Services.<br/><br/>
2.3 The Customer undertakes to find out and be responsible for approvals of third parties,
e.g. co-operation partners, its clients and authorities, as well as be responsible for prior
notifications to such third parties. The Customer has also the above-mentioned responsibility
in relation to its own organization and employees finding out and obtaining the approvals and
notifying the third parties as mentioned in this section 2.3.<br/><br/>
2.4 The Customer represents, warrants and undertakes that it has the legal capacity, powers
and right to implement the Services and that the use of Services has been arranged in
accordance with the law and that the Services are used only for purposes allowed by the law.<br/><br/>
2.5 The Customer authorises the Supplier to perform the services and the Supplier is
responsible for the delivery of the Services agreed in accordance with section 2.1.<br/><br/>
2.6 The Services shall be made available by Supplier to the Customer, subject to any
unavailability caused by circumstances beyond Suppliers reasonable control, including any
force majeure events as contemplated in Section 9 and any computer, communications,
Internet service or hosting facility failures or delays involving hardware, software, power or
other systems not within Suppliers possession or reasonable control, and denial of service
attacks.<br/><br/>
2.7 It is acknowledged that the Services may be temporarily limited, interrupted or curtailed
due to maintenance, repair, modifications, upgrades or relocation, or for Supplier to rectify
any situation that Supplier considers that immediate rectification is required (collectively, the
“Downtime”). In the circumstances, Supplier shall use its best endeavours to provide
Customer with timely updates on the resumption of the Services.<br/><br/>
</Typography>
<Typography style={{fontWeight:"800"}}>
3. Deliverables of the Services and their acceptance
</Typography><br/>
<Typography>
3.1 The deliverable of the Services is the performance of the agreed Services / final report /
presentation of the contents to the Customer in accordance with the service agreement.<br/><br/>
3.2 The Customer decides and is responsible for the implementation, application and use in
its own activities of the Services and the deliverables of the Services, including information
given about data exposure and correction recommendations of the Supplier. Due to the
changing interpretations and practices in relation to data security, data protection and
processing of personal data in legislation and regulations and in particular in relation to the
decisions of governmental authorities, the Supplier strives to act in the best possible way and
in accordance with the best practices and interpretations known to it at the time. The
Supplier does not, however, represent, warrant nor undertake that its interpretations and
practices concerning data security and data protection as well as legislation regulating these
comply with the interpretation or practices of the authorities and courts of law, either now or
in the future, and thus the Supplier is not liable for any damage caused by this.<br/><br/>
</Typography>
<Typography style={{fontWeight:"800"}}>
4. Prices and invoices
</Typography><br/>
<Typography>
4.1 The pricing of the Services is agreed in the service agreement. The Supplier invoices for
the Services agreed in the service agreement with payment term of 30 days net. If the
Customer fails to pay the invoice by the due date, the Customer shall pay the Supplier
interest at the rate of 15% per annum from the due date until the date of full payment.
</Typography><br/>
<Typography style={{fontWeight:"800"}}>
5. Use of the Service
</Typography><br/>
<Typography>
5.1 The Customer is granted a non-exclusive, non-transferable licence, during the Term, to
use and access the Service, solely in its own internal business (including internal business of
the companies belonging to the same group of companies or that of its affiliates) in order to
correct the observed errors or defects. The Customer has no right to utilize the Services or
final report in other ways, nor perform corresponding Services to third parties.<br/><br/>
5.2 The Customer understands that the methods used to perform the Services and methods
used to describe the final results are business secrets of the Supplier, the disclosure of which
to third parties may cause the Supplier considerable damage, disadvantage, costs and loss
of business.<br/><br/>
5.3 The Customer agrees that the Service, all software, hardware, algorithms, all Exposure
Data as defined below, methodologies, and other technology used by the Supplier to provide
the Service, and all intellectual property and proprietary rights in all of the foregoing, is the 
exclusive property of the Supplier. All rights not expressly granted to the Customer are
reserved to the Supplier.
"Exposure Data" means all information that is generated, collected, developed, produced, or
created through the functions of the Service.
Subject to the terms and conditions of the Agreement, the Supplier hereby grants to the
Customer a non-exclusive, non-transferable license to access and download the Exposure
Data using the Service, during the term of the Agreement solely for its internal business
purposes.<br/><br/>
5.4 The Customer shall supervise and control use of the Service and ensure that the Service
is used by the Customer's employees and representatives in accordance with the terms of
this Agreement;
not provide or otherwise make available the Service in whole or in part in any form to any
person other than the Customer's employees and representatives without prior written
consent from Supplier;<br/><br/>
5.5 The Customer shall ensure that its access credentials for the Service are stored securely
at all times and only used by those employees of the Customer that are expressly authorised
by the Customer to access the Service and are not shared with any other person. The
Customer shall take all reasonable steps to prevent any unauthorised access to the Service
and will immediately notify Supplier if it becomes aware of any such access.<br/><br/>
5.6 Where the Service involves the provision of any form of weakness, threat or vulnerability
identification against defined Assets, the Customer shall only direct the Service against
Assets owned by the Customer or a third party where the Customer has explicit authorisation
from such third party to do so.<br/><br/>
</Typography>
<Typography style={{fontWeight:"800"}}>
6. Confidentiality
</Typography><br/>
<Typography>
6.1 The parties undertake to keep confidential all materials and information received from
each other which have been marked as confidential or which has to be understood
confidential due to their nature.
The parties undertake to use such information received from each other only for the purpose
agreed in the service agreement.<br/><br/>
6.2 The professional skills and experience acquired in connection with the delivery do not
belong to the scope of confidentiality. The confidentiality obligation does not cover materials
and information which are publicly available or belong otherwise to public domain, or which a
party has in a verifiable way received from a third party without breach of any confidentiality
obligation, or which in a verifiable way was in the possession of the recipient party without
breach of any confidentiality obligation before receipt of the materials or information from
the other party, or which a party has wholly and independently developed without utilizing the
materials and information received from the other party.<br/><br/>
</Typography>

<Typography style={{fontWeight:"800"}}>
7 Technical data security test
</Typography><br/>
<Typography>
7.1 Where the scope of service involves the burdening of the network connections, data
systems, hardware, software and components of the Customer as well as penetration
attacks carried out by the Supplier, the objects described may as a consequence of these
measures be damaged. The Supplier is not responsible in any way for damage caused this
way or for other consequences for any part.<br/><br/>
7.2 In addition to what has been stated in section 7.1 above, the Customer understands and
accepts that<br/>
a) no network, hardware, system, software or component is completely free from defects or
safe;<br/>
b) the Service and its final report as well as possible correction suggestions are based on the
information available to the Supplier and on its best judgment at the time of performance;<br/>
c) due to the nature of the Service, the Service or the reports handed over to the Customer
accordingly, as well as other deliverables such as correction suggestions do not include any
warranty over the safety of the object of the Service or the accuracy of the information; and<br/>
d) the Customer is alone responsible for the protection and secrecy of all the received testing
information, such as information about vulnerability of its systems, received through final
report, correction suggestions or in any other possible manner, and of consequences of data
leaks belonging to its scope of liability.
<br/><br/>
7.3 The Customer is alone responsible for all parts, both during the performance of the
Service and thereafter, for its own data and other systems, including used cloud and other
services, network services and all hardware and software products and components
(“System”), the rights connected to the System and their permanence, the availability and
usability of the System and the correctness, accuracy and durability of the information
contained by the System.<br/><br/>
</Typography>
<Typography style={{fontWeight:"800"}}>
8. Limitations of liability
</Typography><br/>
<Typography>
8.1 The maximum liability of the Supplier for direct costs and damages caused to the
Customer is 50% of the price for the Services agreed in the service agreement exclusive
value added tax, and in all cases 25,000 USD at maximum irrespective of the value of the
Customer's service agreement. Neither party shall be liable for any indirect or consequential
damage. Indirect or consequential damage shall mean loss of profits, economic loss or
damage caused due to decrease or interruption in turnover or production.<br/><br/>
8.2 The limitations of liability shall not apply to damage which has been caused by willful
conduct or gross negligence. In addition, the limitations of liability shall not cover damages
caused by the breach of provisions in section 5 (Use of the Service) or section 6
(Confidentiality).<br/><br/>
8.3 For the avoidance of any doubt, it is noted that the Supplier is not responsible for any
damage caused to a contracting party of a Customer or to a third party, but that such
damage remains the sole responsibility of a Customer.<br/><br/>
</Typography>
<Typography style={{fontWeight:"800"}}>
9. Force majeure
</Typography><br/>
<Typography>
9.1 A party is released from those contractual obligations, the fulfilment of which becomes
impossible due to reason of an impediment beyond its reasonable control ("force majeure").
Such force majeure event shall include occurrences independent from the parties, which are
surprising and unusual, preventing the fulfillment of contractual obligations according to the
service agreement, which a party could not have reasonably taken into account at the time of
the execution of the service agreement and which consequences a party could not
reasonably have avoided or overcome.<br/><br/>
9.2 The provisions in section 9.1 are also applicable to the Supplier when its subcontractor or
co-operation partner used in performing the Services meets an impediment beyond
reasonable control.<br/><br/>
9.3 A party invoking force majeure under this section 9 shall notify the other party of such
occurrence and the consequential termination of the service agreement without undue delay.<br/><br/>
</Typography>
<Typography style={{fontWeight:"800"}}>
10. Term of the service agreement and other provisions
</Typography><br/>
<Typography>
10.1 The service agreement shall be entered into in writing between the Supplier and the
Customer. The service agreement becomes effective when executed by both parties. The
parties may communicate with each other, by email or other comparable way in writing,
regarding the execution of the service agreement or any amendments to the service
agreement.<br/><br/>
10.2 Neither party may assign or transfer its rights or obligations in the service agreement or
any part thereof to a third party without the prior written approval of the other party. Nothing
in this section 10.2 shall prohibit the Supplier from engaging or appointing any subcontractor
or co-operation partner to perform the Services.<br/><br/>
10.3 A party may terminate the service agreement with immediate effect by a written
notification, if the other party has materially breached the contract terms and has not
rectified the relevant breach within 30 days from the date of a written notification concerning
the same.<br/><br/>
10.4 The obligations in sections 2.3, 2.4, 3.2, 5, 6, 7, 8 and 11 shall remain in force
notwithstanding the termination of the service agreement.<br/><br/>
</Typography>
<Typography style={{fontWeight:"800"}}>
11. Governing law and dispute resolution
</Typography><br/>
<Typography>
11.1 The service agreement and these terms and conditions between the parties shall be
construed in accordance with and governed by the laws of Singapore without reference to 
any conflict of laws provision thereof that directs the application of the laws of another
jurisdiction.<br/><br/>
11.2 Any dispute, controversy or claim arising out of or relating to the service agreement and
these terms and conditions between the parties, or the breach, termination or validity thereof,
shall be referred to and finally settled by arbitration administered by the Singapore
International Arbitration Centre ("SIAC") in accordance with the Arbitration Rules of the
Singapore International Arbitration Centre for the time being in force, which rules are deemed
to be incorporated by reference in this clause. The arbitration shall consist of one (1)
arbitrator to be appointed by the Chairman of the SIAC. The seat of arbitration shall be
Singapore. The language of the arbitration shall be English.<br/><br/>
</Typography>
                </DialogContent>
      </Dialog>
        </div>
    )

}