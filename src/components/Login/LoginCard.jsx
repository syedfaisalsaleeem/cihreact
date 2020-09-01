import React from 'react';
import {BrowserRouter,Link,Switch,Route,Redirect,useHistory,withRouter} from 'react-router-dom';
import styles from "./LoginCard.module.css";

import IconButton from '@material-ui/core/IconButton';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import axios from 'axios';



  
 

function LoginCard(){
    const [name,changename]=React.useState('');
    const [password,changepassword]=React.useState('');
    const [showPassword,changeshowPassword]=React.useState(false);
    const [checkedA,changecheckedA]=React.useState(false);
    const [emailvalidate,changeemailvalidate]=React.useState(true);
    const [passwordvalidate,changepasswordvalidate]=React.useState(true);
    const [authenticate,changeauthenticate]=React.useState(false);
    const [store,setstore]=React.useState([]);
    let history = useHistory();
    const checkuser=()=>{
        console.log("work")
        console.log(name,password)
        let res=axios.post("/use/", {
            "email": name,
            "password": password
        }
    )
        .then((response)=>{
            console.log(response.data,"123")
            setstore(response.data)
            if(response.data.sucess==="True"){
                changeauthenticate(true)
                localStorage.setItem("token",response.data.token)
                history.push("/Dashboard");
                

            }
            else if (response.data.sucess==="false1"){
                changeemailvalidate(false)
                changepasswordvalidate(true)
            }
            else if(response.data.sucess==="True2"){
                console.log("thiscoderun")
                changeemailvalidate(true)
                changepasswordvalidate(false)
            }
        //     else if(store.sucess==="false1"){
        //     changeemailvalidate(true)
        //     changepasswordvalidate(false)
        //  }
            else{
                changeemailvalidate(false)
                changepasswordvalidate(true)
               
            }

        }
        )
        console.log(store.sucess,"print")
    }

    // const checkuser=async()=>{
    //     try{
    //         let res=axios.get("/use/")
    //         console.log(res,"print")
            

    //     }
    //     catch(err){
    //         console.log(err)
    //     }
        
    // //  let res=axios.post("http://127.0.0.1:8000/use/",{"email":this.state.name,"password":this.state.password})
       
    // }
   const handleChange =(prop)=>(event)=> {
       console.log(event.target.name,event.target.value)
       if(prop==="name"){
            changename(event.target.value)
       }
       else if(prop==="password"){
        changepassword(event.target.value)
       }
        // this.setState({
        //     [prop]:event.target.value
            
        // })
        }
    
   const handleChange1 = () => {
    // checkuser()
    changecheckedA(!checkedA)
    //   this.setState((prevState)=>{
    //       return {checkedA:!prevState.checkedA}
    //   })
        }
    const  handleClickShowPassword = () => {
        changeshowPassword(!showPassword)
        // this.setState((prevState)=>{
        //     return {showPassword:!prevState.showPassword}
        // })
      };
    
     const handleMouseDownPassword = (event) => {
         console.log("123")
        event.preventDefault();
        
      };

     const handleSubmit = (event) => {
        event.preventDefault();
        if(name===""){
            changeemailvalidate(false)
            changepasswordvalidate(true)
        }
        else if(password===""){
            changeemailvalidate(true)
            changepasswordvalidate(false)
        }
        else{
            checkuser()
        }
        
        // event.preventDefault();
        //  if(store.sucess==="False2"){
        //      changeemailvalidate(false)
        //      changepasswordvalidate(true)
        //  }
        //  else if(store.sucess==="False1"){
        //     changeemailvalidate(true)
        //     changepasswordvalidate(false)
        //  }
        //  else{
        //      console.log("pushed")
        //     history.push("/Dashboard");
        //  }
        // event.preventDefault();
        // console.log(this.state.name,this.state.password)
        // if(this.state.name!="miko"){
        //         this.setState({passwordvalidate:true,emailvalidate:false,authenticate:false})
        // }

        // else if(this.state.password!="123"){
        //     this.setState({emailvalidate:true,passwordvalidate:false,authenticate:false})
        // }


        // else{
        //     this.props.history.push("/Dashboard");
        //     // Router.push("/Dashboard")

            
        // }
      }
      const inputStyle = { WebkitBoxShadow: "0 0 0 1000px white inset" };
      const token=localStorage.getItem("token")
      console.log(token)
      if(token!==null){
          return <Redirect to="/Dashboard"></Redirect>
        // history.push("/Dashboard");
      }
      else{
    return(
    
        <div className={styles.containerlogincard}>
        <div className={styles.containerlogincardin}>

        
        <form  onSubmit={handleSubmit} noValidate>
        
            <h5> Log in to your account</h5>
            <div className={styles.email11}>
                <div className={styles.email1}>
                <OutlinedInput
                        fullWidth style={{marginTop:"2%",height:"40px"}}  
                        inputProps={{ style: inputStyle }}
                        variant="outlined"
                   
                        placeholder="Enter Username"
                        
                        InputLabelProps={{shrink: false}}
                        
                        id="name" name="name"  value={name} onChange={handleChange('name')}

                        labelWidth={0}
                    />
                 {/* <TextField multiline size="small" variant="outlined" style={{marginTop:"2%"}} fullWidth  id="name" name="name" label="Enter Username or email"  value={name} onChange={handleChange('name')}/>
                */}
                </div>
                <div className={styles.email} style={{display:emailvalidate?"none":"flex"}}>  
                    <p> Account is not registered</p>
                </div>

                <div className={styles.email1}>


                    <OutlinedInput
                        fullWidth style={{marginTop:"5%",height:"40px"}} 
                        inputProps={{ style: inputStyle }} 
                        size="small"
                        variant="outlined"
                        id="password"
                        name="password"
                        placeholder="Password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handleChange('password')}
                        InputLabelProps={{shrink: false}}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={0}
                    />
                
                    
                
                </div>   
                    <div className={styles.email} style={{display:passwordvalidate?"none":"flex"}}>
                        <p> Password is not valid</p>
                    </div>
            </div>
            <div style={{display:"flex",marginTop:"5px"}}>
            <FormControlLabel
                value="checkedA"
                control={
                <Checkbox
                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                    name="checkedA"
                    onChange={handleChange1}
                    checked={checkedA}
                />
                }
                label="Remember Me"
            />
            </div>
      
            

            
            



            

            <div className={styles.loginb} >
                
            <button className={styles.login}  type="submit"> Log In</button>
            
            </div>
            
            <hr className={styles.hrline}/>
            <div className={styles.loginfooter}>
                <div className={styles.loginfooter1}>
                    
                        <Link to="/CantLogin">
                            <a>
                                Can't log in ?
                            </a>
                        </Link>
                            
                            
                            
                            
                       
                        
                        
                     
                    
                    
                    
                </div>
                <div className={styles.loginfooter2}>
                   <Link to="/Contactus">
                   <a>Contact Support</a>
                   </Link>
                    
                    
                </div>
            </div>
            </form>
        </div>
    </div>
    )
            }
}
export default withRouter(LoginCard)
// import React from 'react';
// // import Router  from 'next/router'

// import styles from "./LoginCard.module.css";

// import IconButton from '@material-ui/core/IconButton';

// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import {BrowserRouter,Link,Switch,Route,Redirect,useHistory,withRouter} from 'react-router-dom';
// import axios from 'axios';
// const url="http://127.0.0.1:8000/users1/"

// class LoginCard extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             name:"",
//             password: '',
//             showPassword: false,
//             checkedA:false,
//             emailvalidate:true,
//             passwordvalidate:true,
//             authenticate:'',
//             errors:{
//                 name:"",
//                 email:"",
//                 password:""
//             }

//         }
//     }
//  componentDidMount() {
//     const apiUrl = 'http://127.0.0.1:8000';
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log('This is your data', data));
//   }
//     checkuser=async()=>{
//         try{
//             let res=axios.get("/use")
//             console.log(res,"print")
//             const apiUrl = 'http://127.0.0.1:8000';
//             fetch(apiUrl)
//               .then((response) => response.json())
//               .then((data) => console.log('This is your data', data));
//         }
//         catch(err){
//             console.log(err)
//         }
        
//     //  let res=axios.post("http://127.0.0.1:8000/use/",{"email":this.state.name,"password":this.state.password})
       
//     }

//     handleChange =(prop)=>(event)=> {
//         this.setState({
//             [prop]:event.target.value
            
//         })
//         }
    
//    handleChange1 = () => {
//       this.setState((prevState)=>{
//           return {checkedA:!prevState.checkedA}
//       })
//         }
//       handleClickShowPassword = () => {
//         this.setState((prevState)=>{
//             return {showPassword:!prevState.showPassword}
//         })
//       };
    
//       handleMouseDownPassword = (event) => {
//         event.preventDefault();
//       };

//       handleSubmit = (event) => {
//          this.checkuser()
//         event.preventDefault();
//         console.log(this.state.name,this.state.password)
//         if(this.state.name!="miko"){
//                 this.setState({passwordvalidate:true,emailvalidate:false,authenticate:false})
//         }

//         else if(this.state.password!="123"){
//             this.setState({emailvalidate:true,passwordvalidate:false,authenticate:false})
//         }


//         else{
//             this.props.history.push("/Dashboard");
//             // Router.push("/Dashboard")

            
//         }
//       }
    
//     render(){
//         console.log(this.state.emailvalidate)



//             return(

                // <div className={styles.containerlogincard}>
                //     <div className={styles.containerlogincardin}>
        
                    
                //     <form onSubmit={this.handleSubmit} noValidate>
                    
                //         <h5> Log in to your account</h5>
                //         <div className={styles.email11}>
                //             <div className={styles.email1}>
                //             <TextField multiline size="small" variant="outlined" style={{marginTop:"2%"}} fullWidth  id="name" name="name" label="Enter Username or email"  value={this.state.name} onChange={this.handleChange('name')}/>
                //             <div className={styles.email} style={{display:this.state.emailvalidate?"none":"flex"}}>
                //                 <p> Email is not registered</p>
                //             </div>
                //             </div>

                //             <div className={styles.email1}>
                //             <FormControl fullWidth style={{marginTop:"5%"}}  variant="outlined" size="small">
                //                 <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                //                 <OutlinedInput
                //                     id="outlined-adornment-password"
                //                     type={this.state.showPassword ? 'text' : 'password'}
                //                     value={this.state.password}
                //                     onChange={this.handleChange('password')}
                //                     endAdornment={
                //                     <InputAdornment position="end">
                //                         <IconButton
                //                         aria-label="toggle password visibility"
                //                         onClick={this.handleClickShowPassword}
                //                         onMouseDown={this.handleMouseDownPassword}
                //                         edge="end"
                //                         >
                //                         {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                //                         </IconButton>
                //                     </InputAdornment>
                //                     }
                //                     labelWidth={70}
                //                 />
                //             </FormControl>
                //                 <div className={styles.email} style={{display:this.state.passwordvalidate?"none":"flex"}}>
                //                     <p> Password is not valid</p>
                //                 </div>
                            
                //             </div>   

                //         </div>
                //         <div style={{display:"flex",marginTop:"5px"}}>
                //         <FormControlLabel
                //             value="checkedA"
                //             control={
                //             <Checkbox
                //                 icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                //                 checkedIcon={<CheckBoxIcon fontSize="small" />}
                //                 name="checkedA"
                //                 onChange={this.handleChange1}
                //                 checked={this.state.checkedA}
                //             />
                //             }
                //             label="Remember Me"
                //         />
                //         </div>
                  
                        
        
                        
                        
        
        
        
                        
        
                //         <div className={styles.loginb} >
                //         <button className={styles.login}> Log In</button>
                        
                //         </div>
                //         <hr className={styles.hrline}/>
                //         <div className={styles.loginfooter}>
                //             <div className={styles.loginfooter1}>
                                
                //                     <Link to="/CantLogin">
                //                         <a>
                //                             Can't log in ?
                //                         </a>
                //                     </Link>
                                        
                                        
                                        
                                        
                                   
                                    
                                    
                                 
                                
                                
                                
                //             </div>
                //             <div className={styles.loginfooter2}>
                //                 <Link > 
                //                 <a>Contact Support</a>
                //                 </Link>
                //             </div>
                //         </div>
                //     </form>
                //     </div>
                // </div>
//             );
        

// }
// }
// export default LoginCard;