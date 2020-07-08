import React from 'react';
import styles from "./CantLoginCard.module.css";
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
class CantLoginCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            password: '',
            emailvalidate:true,
            authenticate:'',
            errors:{
                name:"",
                email:"",
                password:""
            }

        }
    }

    handleChange =(prop)=>(event)=> {
        this.setState({
            [prop]:event.target.value
            
        })
        }
    

      handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name,this.state.password)
        if(this.state.name!="miko"){
                this.setState({passwordvalidate:true,emailvalidate:false,authenticate:false})
        }



        else{
            this.setState({authenticate:true})
            

            
        }
      }
    render(){
        
        
        if(this.state.authenticate===true){
            return(
                <div className={styles.containerlogincard}>
                    <div className={styles.containerlogincardin}>
                        <h5 > Cant Log in ?</h5>
                        <p className={styles.slink}> Recovery Link Has been sent to your registered email please follow instructions to reset your password.</p>
                        <hr className={styles.hrline}/>
                        <Divider  />
                        
                            <div className={styles.loginfooterauthenticate}>
                                <div className={styles.loginfooter1}>
                                    <Link to="/">
                                    <a> Return to login</a>
                                    </Link>
                                    
                                </div>
                                <div className={styles.loginfooter2}>
                                <Link>
                                <a> Contact Support</a>
                                </Link>
                                </div>
                            </div>
                    </div>
                </div>
            )
        }
        else{
            return(

                <div className={styles.containerlogincard}>
                    <div className={styles.containerlogincardin}>
        
                    
                    <form onSubmit={this.handleSubmit} noValidate>
                    
                        <h5 > Cant Log in ?</h5>
                        <p className={styles.slink}> We'll send a recovery link to</p>
                        <div className={styles.email1}>
                        <TextField multiline size="small" variant="outlined"  fullWidth  id="name" name="name" label="Enter registered email"  value={this.state.name} onChange={this.handleChange('name')}/>
                        <div className={styles.email} style={{display:this.state.emailvalidate?"none":"flex"}}>
                            <p> Email is not registered</p>
                        </div>
                        </div>


                        
            
        
                        <div className={styles.loginb} >
                        <button className={styles.login}> Send Recovery Link</button>
                        
                        </div>
                        <hr className={styles.hrline}/>
                        <div className={styles.loginfooter}>
                            <div className={styles.loginfooter1}>
                                <Link to="/">
                                <a> Return to login</a>
                                </Link>
                                
                            </div>
                            <div className={styles.loginfooter2}>
                                <Link>
                                <a> Contact Support</a>
                                </Link>
                                
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            );
        }



            
        

}
}
export default CantLoginCard