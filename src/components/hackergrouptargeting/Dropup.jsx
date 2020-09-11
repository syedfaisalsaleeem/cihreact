
import ContactGs1 from "./ContactGs1.jsx";
import list from "../../Links/images/list.png";
import grid from "../../Links/images/grid.png";
import filter from "../../Links/images/filter.png";
import LatestCard from "./LatestCard.jsx";
import LatestCardH from "./LatestCardhigh.jsx";
import CardGrid from "./CardGrid.jsx";
import React,{useEffect, useState,useReducer} from 'react';
import {Grid,Typography,Card,Paper,CardHeader,Divider,Button, IconButton,Chip} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import DatePicker from "react-datepicker";
import Time from "./Time.jsx"; 
import "react-datepicker/dist/react-datepicker.css";
import Menu from '@material-ui/core/Menu';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    formControl: {
        
        minWidth: 200,
        
        background:"white",

        
        '& fieldset': {
          border: "0.3px solid #000000",
        }
        
      },
      formControl1: {
        
        minWidth: 150,
        
        background:"white",
        
        '& fieldset': {
          border: "0.3px solid #000000",
        }
        
      },
    button:{
        display:"flex",alignItems:"center",width:"100%",height:"90%",border: "0.6px solid #000000",borderRadius: "2px",fontStyle: "normal",
        fontSize:"10px",                                            
                                                    
        minWidth:"100px",
        color: "rgba(0, 0, 0, 0.6)"
    },
    h:{
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "27.9411px"
    },
    HeaderFont:{
        fontFamily: 'Roboto',
        fontSize: "16px" ,
          fontWeight:"500",
          fontStyle:"normal",
          color: "#B5B5C3"
      },
      progressfont:{
        
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",

        letterSpacing: "-0.0864285px",
        
        color: "#506883"
      },
      paper: {
          
         
        background: "#FFFFFF",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        borderRadius: "6px", 
        padding: theme.spacing(2),
        height: "auto",
        
        width:"12vw",
        minWidth:"190px",
        display:"flex",flexDirection:"column",alignItems:"center"

      },
    but:{
        display:"flex",
        
        width: "159px",
        height: "34px",
        marginTop:"14px",
        background: "#464E5F",
        border: "1px solid #000000",
        boxSizing: "border-box",
        borderRadius: "4px"

    },
    dot:{
        marginTop:"10px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height: "60px",
        width: "60px",
        background:"black",
        borderRadius: "50%",
        
    },
    fontin:{
        paddingTop:'20px',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "18px",
        /* identical to box height, or 112% */
        
        
        color: "#B5B5C3"
    },
    f1:{
       width:"100%",
       boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        
        height: "422.11px"
    },
    f4:{
        width:"28vw",
        minWidth:"300px",
        boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        height: "380px"
        
    },
    f5:{
        width:"1093px",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        borderRadius: "6px",
        height:"140px"
    },
    f2:{
        background: "#FFFFFF",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        borderRadius: "6px", 
        paddingBottom:"40px"
        
        
     },
     f3:{
        width:"33.3vw",
        minWidth:"400px",
        boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        height: "380px"
     },
    control: {
      padding: theme.spacing(2),
    },
    chip: {
        padding:theme.spacing(0.5),
        fontStyle: "normal",
         fontWeight: "normal",
          fontSize: "12px",
          background:"white",
          border: "1px solid #000000"
      },
  }));

  const initialState = {
      severitylevel:{
          low:false,
          medium:false,
          high:false
        },
        source:{
            darkweb:false,
            deepweb:false,
            databreach:false
        },
        exposurecategory:{
            sensitiveinformation:{
                control:{
                    all:false,
                    button:false,
                },
                value:{
                    sourcecode:false
                }
            },
            discussion:{
                control:{
                    all:false,
                    button:false,
                },
                value:{
                discussionforum:false,
                discussion:false}
            },
            blackmarket:{
                control:{
                    all:false,
                    button:false,
                },
                value:{
                sales:false, 
                marketplace:false, 
                drugsales:false, 
                weaponsales:false, 
                credentialsales:false, 
                hackingsales:false, 
                malwaresales:false 
            }
            },
            financial:{
                control:{
                    all:false,
                    button:false,
                },
                value:{
                creditcards:false, 
                ibannumbers:false,
                cryptoaddresses:false, 
                bitcoinaddresses:false, 
                ethereumaddresses:false, 
                zcashtaddresses:false, 
                zcashzaddresses:false, 
                rippleaddresses:false, 
                litecoinaddresses:false, 
                moneroaddresses:false, 
                bitcoincashaddresses:false, 
                dashaddresses:false, 
                dogecoinaddresses:false, 
                neoaddresses:false 
            }},
            exposedcredentials:{
                control:{
                    all:false,
                    button:false,
                },
                value:{
                password:false, 
                cleartextpassword:false, 
                encryptedpassword:false, 
                username:false 
            }},
            personalinformation:{
                control:{
                    all:false,
                    button:false,
                },
                value:{
                phonenumbers:false, 
                passportnumbers:false, 
                passportinformation:false, 
                email:false, 
                address:false, 
                lastname:false, 
                firstname:false, 
                phonenumber:false 
            }  
            },
            hackergrouptargeting:{
                control:{
                    all:true,
                    button:false,
                },
                value:{
                iptargetlist:false, 
                emailtargetlist:false, 
                domaintargetlist:false, 
                attackcampaign:false, 
                targetedcompany:false, 
                targetedindividual:false, 
                informationleakingplatform:false, 
                iplist:false, 
                emaillist:false, 
                domainlist:false, 
                wordlist:false}
            },
            attacksandcompromises:{
                control:{
                    all:false,
                    button:false,
                },
                value:{
                sql:false,
                reconnaissance:false,
                exploitationtool:false,
                nmap:false,
                sqlmap:false,
                wireshark:false,
                traceroute:false, 
                metasploit:false, 
                johntheripper:false, 
                md5hashes:false, 
                sha1hashes:false, 
                sha256hashes:false, 
                sha512hashes:false, 
                specialhashes:false, 
                pgpkeys:false, 
                pgpsignatures:false, 
                ssh:false, 
                telnet:false, 
                ftp:false, 
                sftp:false  } 
            },
            underanalysis:{
                control:{
                    all:false,
                },
            },
        },
            languages:{
                control:{
                    all:false,
                    button:false,
                },
                value:{
                afrikaans:false, 
                arabic:false, 
                bulgarian:false, 
                bengali:false, 
                catalan:false, 
                czech:false, 
                welsh:false, 
                danish:false, 
                german:false, 
                greek:false, 
                english:false, 
                spanish:false, 
                estonian:false, 
                persian:false, 
                finnish:false, 
                french:false, 
                gujarati:false, 
                hebrew:false, 
                hindi:false, 
                croatian:false, 
                hungarian:false, 
                indonesian:false, 
                italian:false, 
                japanese:false, 
                kannada:false, 
                korean:false, 
                lithuanian:false, 
                latvian:false, 
                macedonian:false, 
                malayalam:false, 
                marathi:false, 
                nepali:false, 
                dutch:false, 
                norwegian:false, 
                punjabi:false, 
                polish:false, 
                portuguese:false, 
                romanian:false, russian:false, slovak:false, slovenian:false, somali:false, albanian:false, swedish:false, swahili:false, 
                tamil:false, telugu:false, thai:false, tagalog:false, turkish:false, ukrainian:false, urdu:false, vietnamese:false, chinese:false 
                }
            },
            socialsecuritynumber:{
                control:{
                    all:false,
                    button:false
                },
                value:{
                spainsocialsecuritynumbers:false, latviasocialsecuritynumbers:false, lithuaniasocialsecuritynumbers:false, malaysiasocialsecuritynumbers:false, 
                indonesiasocialsecuritynumbers:false, Hongkongsocialsecuritynumbers:false, arabemiratessocialsecuritynumbers:false, southafricasocialsecuritynumbers:false, 
                chinasocialsecuritynumbers:false, belgiumsocialsecuritynumbers:false, bulgariasocialsecuritynumbers:false, croatiasocialsecuritynumbers:false, 
                czechrepublicsocialsecuritynumbers:false, denmarksocialsecuritynumbers:false, francesocialsecuritynumbers:false, greecesocialsecuritynumbers:false, 
                irelandsocialsecuritynumbers:false, estoniasocialsecuritynumbers:false, italysocialsecuritynumbers:false, netherlandssocialsecuritynumbers:false, 
                norwaysocialsecuritynumbers:false, polandsocialsecuritynumbers:false, romaniasocialsecuritynumbers:false, swedensocialsecuritynumbers:false, 
                sloveniasocialsecuritynumbers:false, slovakiasocialsecuritynumbers:false, singaporesocialsecuritynumbers:false, finlandsocialsecuritynumbers:false, 
                unitedstatessocialsecuritynumbers:false
                }
            },

            
        other:{
            control:{
                all:false,
                button:false
            },
            value:{
                directory:false, news:false, advertisement:false, ipv4:false 
            }
        },
        alertgroup:{
            control:{
                all:false
            },
            value:{
                highlightedalerts:false
            }
        }

  
};

// function reducer(state, action) {
//     switch (action.type) {
//         case 'language':
//             console.log(state)
//         default:
//             throw new Error();
//     }
//   }
// function change1(value){
//        return {
//               ...state,
//               languages:{...state.languages,
//                     control:{...state.languages.control,value:false}
//                     }
//             }
// }
function reducer(state, action) {
    switch (action.type) {
        case 'low':
            
            return{
                ...state,
                severitylevel:{...state.severitylevel,low:!action.payload}
                    
                    
            }
        case 'medium':
            
            return{
                ...state,
                severitylevel:{...state.severitylevel,medium:!action.payload}
                    
                    
            }
        case 'high':
            
            return{
                ...state,
                severitylevel:{...state.severitylevel,high:!action.payload}
                    
                    
            }
        case 'deepweb':
            
            return{
                ...state,
                source:{...state.source,deepweb:!action.payload}
                    
                    
            }
        case 'darkweb':
            
            return{
                ...state,
                source:{...state.source,darkweb:!action.payload}
                    
                    
            }
        case 'databreach':
            
            return{
                ...state,
                source:{...state.source,databreach:!action.payload}
                    
                    
            }
      case 'language':
        console.log(state.languages.control.button)
        return{
            ...state,
            languages:{...state.languages,
                control:{...state.languages.control,button:!action.payload}
                }
        }
        case 'languagein':
            // return change1(action.payload);
            const x=action.payload.value2
            // const y=action.payload
            
            return(
                
                {
                ...state,
                languages:{...state.languages,
                    value:{...state.languages.value,[x]:!action.payload.value1}
                    }
            })
        case 'socialsecuritynumber':
            
             return {
                ...state,
                socialsecuritynumber:{...state.socialsecuritynumber,
                    control:{...state.socialsecuritynumber.control,button:!action.payload}
                    }
            }
        case 'socialsecurityin':
                // return change1(action.payload);
                const y=action.payload.value2
                // const y=action.payload
                
                return(
                    
                    {
                    ...state,
                    socialsecuritynumber:{...state.socialsecuritynumber,
                        value:{...state.socialsecuritynumber.value,[action.payload.value2]:!action.payload.value1}
                        }
                })
        case 'other':
            
             return {
                ...state,
                other:{...state.other,
                    control:{...state.other.control,button:!action.payload}
                    }
            }
        case 'otherin':
                // return change1(action.payload);
               
                // const y=action.payload
                
                return(
                    
                    {
                    ...state,
                    other:{...state.other,
                        value:{...state.other.value,[action.payload.value2]:!action.payload.value1}
                        }
                })
        case 'alertgroup':
            
             return {
                ...state,
                alertgroup:{...state.alertgroup,
                    value:{...state.other.value,highlightedalerts:!action.payload}
                    }
            }
        case 'sensitiveinformation':
            
            return {
                ...state,
                exposurecategory:{...state.exposurecategory,
                    sensitiveinformation:{...state.exposurecategory.sensitiveinformation,
                        control:{...state.exposurecategory.sensitiveinformation.control,all:!action.payload}
                        
                    }
                }
            }
        case 'sensitiveinformation1':
                
                return {
                    ...state,
                    exposurecategory:{...state.exposurecategory,
                        sensitiveinformation:{...state.exposurecategory.sensitiveinformation,
                            control:{...state.exposurecategory.sensitiveinformation.control,button:!action.payload}
                            
                        }
                    }
                }
        case 'sensitiveinformationin':
                
                return {
                    ...state,
                    exposurecategory:{...state.exposurecategory,
                        sensitiveinformation:{...state.exposurecategory.sensitiveinformation,
                            value:{...state.exposurecategory.sensitiveinformation.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
        case 'discussion':
            
            return {
                ...state,
                exposurecategory:{...state.exposurecategory,
                    discussion:{...state.exposurecategory.discussion,
                        control:{...state.exposurecategory.discussion.control,all:!action.payload}
                        
                    }
                }
            }
        case 'discussion1':
                
                return {
                    ...state,
                    exposurecategory:{...state.exposurecategory,
                        discussion:{...state.exposurecategory.discussion,
                            control:{...state.exposurecategory.discussion.control,button:!action.payload}
                            
                        }
                    }
                }
        case 'discussionin':
                
                return {
                    ...state,
                    exposurecategory:{...state.exposurecategory,
                        discussion:{...state.exposurecategory.discussion,
                            value:{...state.exposurecategory.discussion.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
        case 'blackmarket':
    
            return {
                ...state,
                exposurecategory:{...state.exposurecategory,
                    blackmarket:{...state.exposurecategory.blackmarket,
                        control:{...state.exposurecategory.blackmarket.control,all:!action.payload}
                        
                    }
                }
            }
        case 'blackmarket1':
                
                return {
                    ...state,
                    exposurecategory:{...state.exposurecategory,
                        blackmarket:{...state.exposurecategory.blackmarket,
                            control:{...state.exposurecategory.blackmarket.control,button:!action.payload}
                            
                        }
                    }
                }
        case 'blackmarketin':
                
                return {
                    ...state,
                    exposurecategory:{...state.exposurecategory,
                        blackmarket:{...state.exposurecategory.blackmarket,
                            value:{...state.exposurecategory.blackmarket.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
        case 'financial':

            return {
                ...state,
                exposurecategory:{...state.exposurecategory,
                    financial:{...state.exposurecategory.financial,
                        control:{...state.exposurecategory.financial.control,all:!action.payload}
                        
                    }
                }
            }
        case 'financial1':
                
                return {
                    ...state,
                    exposurecategory:{...state.exposurecategory,
                        financial:{...state.exposurecategory.financial,
                            control:{...state.exposurecategory.financial.control,button:!action.payload}
                            
                        }
                    }
                }
        case 'financialin':
                
                return {
                    ...state,
                    exposurecategory:{...state.exposurecategory,
                        financial:{...state.exposurecategory.financial,
                            value:{...state.exposurecategory.financial.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
        case 'exposedcredentials':

            return {
                ...state,
                exposurecategory:{...state.exposurecategory,
                    exposedcredentials:{...state.exposurecategory.exposedcredentials,
                        control:{...state.exposurecategory.exposedcredentials.control,all:!action.payload}
                        
                    }
                }
            }
        case 'exposedcredentials1':
                
                return {
                    ...state,
                    exposurecategory:{...state.exposurecategory,
                        exposedcredentials:{...state.exposurecategory.exposedcredentials,
                            control:{...state.exposurecategory.exposedcredentials.control,button:!action.payload}
                            
                        }
                    }
                }
        case 'exposedcredentialsin':
                
                return {
                    ...state,
                    exposurecategory:{...state.exposurecategory,
                        exposedcredentials:{...state.exposurecategory.exposedcredentials,
                            value:{...state.exposurecategory.exposedcredentials.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
        case 'personalinformation':

            return {
                ...state,
                exposurecategory:{...state.exposurecategory,
                    personalinformation:{...state.exposurecategory.personalinformation,
                        control:{...state.exposurecategory.personalinformation.control,all:!action.payload}
                        
                    }
                }
            }
        case 'personalinformation1':
                
                return {
                    ...state,
                    exposurecategory:{...state.exposurecategory,
                        personalinformation:{...state.exposurecategory.personalinformation,
                            control:{...state.exposurecategory.personalinformation.control,button:!action.payload}
                            
                        }
                    }
                }
        case 'personalinformationin':
                
                return {
                    ...state,
                    exposurecategory:{...state.exposurecategory,
                        personalinformation:{...state.exposurecategory.personalinformation,
                            value:{...state.exposurecategory.personalinformation.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
        case 'hackergrouptargeting':

            return {
                ...state,
                exposurecategory:{...state.exposurecategory,
                    hackergrouptargeting:{...state.exposurecategory.hackergrouptargeting,
                        control:{...state.exposurecategory.hackergrouptargeting.control,all:!action.payload}
                        
                    }
                }
            }
        case 'hackergrouptargeting1':
                
                return {
                    ...state,
                    exposurecategory:{...state.exposurecategory,
                        hackergrouptargeting:{...state.exposurecategory.hackergrouptargeting,
                            control:{...state.exposurecategory.hackergrouptargeting.control,button:!action.payload}
                            
                        }
                    }
                }
        case 'hackergrouptargetingin':
                
                return {
                    ...state,
                    exposurecategory:{...state.exposurecategory,
                        hackergrouptargeting:{...state.exposurecategory.hackergrouptargeting,
                            value:{...state.exposurecategory.hackergrouptargeting.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
        case 'attacksandcompromises':

            return {
                ...state,
                exposurecategory:{...state.exposurecategory,
                    attacksandcompromises:{...state.exposurecategory.attacksandcompromises,
                        control:{...state.exposurecategory.attacksandcompromises.control,all:!action.payload}
                        
                    }
                }
            }
        case 'attacksandcompromises1':
                
                return {
                    ...state,
                    exposurecategory:{...state.exposurecategory,
                        attacksandcompromises:{...state.exposurecategory.attacksandcompromises,
                            control:{...state.exposurecategory.attacksandcompromises.control,button:!action.payload}
                            
                        }
                    }
                }
        case 'attacksandcompromisesin':
                
                return {
                    ...state,
                    exposurecategory:{...state.exposurecategory,
                        attacksandcompromises:{...state.exposurecategory.attacksandcompromises,
                            value:{...state.exposurecategory.attacksandcompromises.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
        case 'underanalysis':

            return {
                ...state,
                exposurecategory:{...state.exposurecategory,
                    underanalysis:{...state.exposurecategory.underanalysis,
                        control:{...state.exposurecategory.underanalysis.control,all:!action.payload}
                        
                    }
                }
            }
        // this.setState(prevState => ({
        //     ...prevState,
        //     someProperty: {
        //         ...prevState.someProperty,
        //         someOtherProperty: {
        //             ...prevState.someProperty.someOtherProperty, 
        //             anotherProperty: {
        //                ...prevState.someProperty.someOtherProperty.anotherProperty,
        //                flag: false
        //             }
        //         }
        //     }
        // })
       
            // ((state) => {
            //     state.languages.control.button = true
                
            //     return state
            //   })
        
        //  return {...state.languages.control,button:true}

      default:
        throw new Error();
    }
  }
export default function Dropup(props){
    const classes=useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open1 = Boolean(anchorEl);
    const [view,setview]=useState(true);
    const [dropc,setdrop]=useState(true);
    const handleview=()=>{
            setview(true)
    }
    const handleview1=()=>{
        setview(false)
}
    const handledrop=()=>{
            setdrop(true)
    }
    const handledrop1=()=>{
        setdrop(false)
    }
    const [age1, setAge1] = React.useState('');
    const [open,handleopen]=React.useState(false)
    const funcopen=()=>{
      handleopen(true)
    }
    const funcclose=()=>{
      handleopen(false)
    }
    const handleChange = (event) => {
        setAge1(event.target.value);
    };
    const [startDate,setDate]=React.useState( new Date())
    const handleChange3 = date => {
        setDate(date)

      };
      const [startDate1,setDate1]=React.useState( new Date())
      const handleChange4 = date => {
          setDate1(date)
  
        };
     return(
        <div style={{marginBottom:"30px"}}>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Grid item xs={11} lg={9} >
                        <Card className={classes.f2}>
                            <CardHeader
                                className={classes.HeaderFont}
                            
                                disableTypography="true" 
                                
                                
                                title="Filter Results "      
                                />
                                <Divider />
                                <Grid item xs={12} style={{marginTop:"26px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={11}>
                                            <Grid container spacing={0}>
                                                <Grid item xs={8}>
                                                    <ContactGs1/>
                                                </Grid>
                                                <Grid item xs={2} >
                                                    <Grid container style={{width:"100%"}} spacing={1} >
                                                        <Grid item>
                                                            <Button
                                                            variant="outlined"
                                                            
                                                            className={classes.button}
                                                            startIcon={<img src={grid} />}
                                                            onClick={handleview1}
                                                            style={{border:view?"0.6px solid #000000":"1px solid #8950FC"}}
                                                            >
                                                            Grid View
                                                        </Button>
                                                        </Grid>
                                                        <Grid item>

                                                            <Button
                                                            variant="outlined"
                                                            
                                                            className={classes.button}
                                                            startIcon={<img src={list} />}
                                                            onClick={handleview}
                                                            
                                                            style={{border:view?"1px solid #8950FC":"0.6px solid #000000"}}
                                                        >
                                                            List View
                                                        </Button>
                                                        </Grid>
                                                    </Grid>

                                                    
                                                </Grid>
                                                <Grid item >


                                                </Grid> 
                                                <Grid item xs={1}>
                                                    <Button style={{width:"60%",height:"100%",minWidth:"45px",borderRadius: "2px",border:props.filtervalue?"0.6px solid #000000":"0.6px solid #8950FC"}} variant="outlined" 
                                                    onClick={props.filter}>
                                                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"60%",height:"100%",fontStyle: "normal",
                                                    fontWeight: "normal",
                                                    fontSize: "13px",
                                                    minWidth:"45px",
                                                    color: "rgba(0, 0, 0, 0.6)"}}>
                                                        <img src={filter}>
                                                        </img>
                                                        <div>
                                                            Filter
                                                        </div>
                                                            
                                                    </div>
                                                    </Button>
                                                </Grid> 
                                                <Grid item xs={1}>
                                                    <Button onClick={handleMenu} style={{width:"50%",height:"100%",minWidth:"45px",borderRadius: "2px",border:props.filtervalue?"0.6px solid #000000":"0.6px solid #8950FC"}} variant="outlined" >
                                                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"60%",height:"100%",fontStyle: "normal",
                                                    fontWeight: "normal",
                                                    fontSize: "13px",
                                                    minWidth:"45px",
                                                    color: "rgba(0, 0, 0, 0.6)"}}>
                                                        <img src={filter}>
                                                        </img>
                                                        <div>
                                                            Sort 
                                                        </div>
                                                            
                                                    </div>
                                                    </Button>
                                                    <Menu
                                                        id="simple-menu"
                                                        getContentAnchorEl={null}
                                                        anchorOrigin={{
                                                        vertical: "bottom",
                                                        horizontal: "left"
                                                        }}
                                                        transformOrigin={{
                                                        vertical: "top",
                                                        horizontal: "left"
                                                        }}
                                                        keepMounted
                                                        anchorEl={anchorEl}
                                                        open={Boolean(anchorEl)}
                                                        onClose={handleClose}
                                                    >
                                                        <MenuItem onClick={handleClose}>Newest to oldest</MenuItem>
                                                        
                                                        <MenuItem >Oldest to newest</MenuItem>
                                                        <MenuItem >Severity: high to low</MenuItem>
                                                        <MenuItem >Severity: low to high</MenuItem>
                                                        <MenuItem >Keywords: most to least alerts</MenuItem>
                                                        <MenuItem >Keywords: least to most alerts</MenuItem>
                                                        <MenuItem >Keywords: A to Z</MenuItem>
                                                        <MenuItem >Keywords: Z to A</MenuItem>
                                                    </Menu>
                                                </Grid> 
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                                {props.filtervalue?
                                    <div>
                                        <Grid container justify="center">
                                            <Grid item xs={11}>
                                                <Grid container spacing={2}>
                                                    <Grid item style={{display:state.severitylevel.low?"flex":"none"}}>
                                                        <Chip  size="small" className={classes.chip} style={{background:state.severitylevel.low?"#B7E9F7":'white'}} label="Low" variant="outlined" onClick={() => dispatch({type: 'low',payload:state.severitylevel.low})} /> 
                                                    </Grid>
                                                    <Grid item style={{display:state.severitylevel.medium?"flex":"none"}}>
                                                        <Chip  size="small" className={classes.chip} style={{background:state.severitylevel.medium?"#B7E9F7":'white'}} label="Medium" variant="outlined" onClick={() => dispatch({type: 'medium',payload:state.severitylevel.medium})} /> 
                                                    </Grid>
                                                    <Grid item style={{display:state.severitylevel.high?"flex":"none"}}>
                                                        <Chip  size="small" className={classes.chip} style={{background:state.severitylevel.high?"#B7E9F7":'white'}} label="High" variant="outlined" onClick={() => dispatch({type: 'high',payload:state.severitylevel.high})} /> 
                                                    </Grid>
                                                    <Grid item style={{display:state.source.deepweb?"flex":"none"}}>
                                                    <Chip  size="small" className={classes.chip} style={{background:state.source.deepweb?"#B7E9F7":'white'}} label="DeepWeb" variant="outlined" onClick={() => dispatch({type: 'deepweb',payload:state.source.deepweb})} /> 
                                                </Grid>
                                                <Grid item style={{display:state.source.darkweb?"flex":"none"}}>
                                                    <Chip  size="small" className={classes.chip} style={{background:state.source.darkweb?"#B7E9F7":'white'}} label="DarkWeb" variant="outlined" onClick={() => dispatch({type: 'darkweb',payload:state.source.darkweb})} /> 
                                                </Grid>
                                                <Grid item style={{display:state.source.databreach?"flex":"none"}}>
                                                    <Chip  size="small" className={classes.chip} style={{background:state.source.databreach?"#B7E9F7":'white'}} label="DataBreach" variant="outlined" onClick={() => dispatch({type: 'databreach',payload:state.source.databreach})} /> 
                                                </Grid>
                                                    <Grid item style={{display:state.exposurecategory.sensitiveinformation.control.all?"flex":"none"}}>

                                                    <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.sensitiveinformation.control.all?"#B7E9F7":'white'}} label="Sensitive Information" variant="outlined" onClick={() => dispatch({type: 'sensitiveinformation',payload:state.exposurecategory.sensitiveinformation.control.all})} /> 

                                                    </Grid>
                                                    <Grid item style={{display:state.exposurecategory.discussion.control.all?"flex":"none"}}>

                                                    <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.discussion.control.all?"#B7E9F7":'white'}} label="Discussion" variant="outlined" onClick={() => dispatch({type: 'discussion',payload:state.exposurecategory.discussion.control.all})} /> 

                                                    </Grid>
                                                    <Grid item style={{display:state.exposurecategory.blackmarket.control.all?"flex":"none"}}>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.blackmarket.control.all?"#B7E9F7":'white'}} label="Black Market" variant="outlined" onClick={() => dispatch({type: 'blackmarket',payload:state.exposurecategory.blackmarket.control.all})} /> 

                                                        </Grid>
                                                        <Grid item style={{display:state.exposurecategory.financial.control.all?"flex":"none"}}>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.financial.control.all?"#B7E9F7":'white'}} label="Financial" variant="outlined" onClick={() => dispatch({type: 'financial',payload:state.exposurecategory.financial.control.all})} /> 

                                                        </Grid>
                                                        <Grid item style={{display:state.exposurecategory.exposedcredentials.control.all?"flex":"none"}}>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.exposedcredentials.control.all?"#B7E9F7":'white'}} label="Exposed Credentials" variant="outlined" onClick={() => dispatch({type: 'exposedcredentials',payload:state.exposurecategory.exposedcredentials.control.all})} /> 

                                                        </Grid>
                                                        <Grid item style={{display:state.exposurecategory.personalinformation.control.all?"flex":"none"}}> 

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.personalinformation.control.all?"#B7E9F7":'white'}} label="Personal information" variant="outlined" onClick={() => dispatch({type: 'personalinformation',payload:state.exposurecategory.personalinformation.control.all})} /> 

                                                        </Grid>
                                                        <Grid item style={{display:state.exposurecategory.hackergrouptargeting.control.all?"flex":"none"}}>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.hackergrouptargeting.control.all?"#B7E9F7":'white'}} label="Hacker Group Targeting" variant="outlined" onClick={() => dispatch({type: 'hackergrouptargeting',payload:state.exposurecategory.hackergrouptargeting.control.all})} /> 

                                                        </Grid>
                                                        <Grid item style={{display:state.exposurecategory.attacksandcompromises.control.all?"flex":"none"}}>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.attacksandcompromises.control.all?"#B7E9F7":'white'}} label="Attacks and Compromises" variant="outlined" onClick={() => dispatch({type: 'attacksandcompromises',payload:state.exposurecategory.attacksandcompromises.control.all})} /> 

                                                        </Grid>
                                                        <Grid item style={{display:state.exposurecategory.underanalysis.control.all?"flex":"none"}}>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.underanalysis.control.all?"#B7E9F7":'white'}} label="Under Analysis" variant="outlined" onClick={() => dispatch({type: 'underanalysis',payload:state.exposurecategory.underanalysis.control.all})} /> 

                                                        </Grid>

                                                    {Object.keys(state.exposurecategory.sensitiveinformation.value).map((value1,index) => (
                                                        state.exposurecategory.sensitiveinformation.value[value1]?
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.sensitiveinformation.value[value1]?"#B7E9F7":'white'}} label={value1} onClick={() => dispatch({type: 'sensitiveinformationin',payload:{value1:state.exposurecategory.sensitiveinformation.value[value1],value2:value1}})} variant="outlined"/> 
                                                        
                                                        </Grid>:<div></div>))}
                                                    {Object.keys(state.exposurecategory.discussion.value).map((value1,index) => (
                                                        state.exposurecategory.discussion.value[value1]?
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.discussion.value[value1]?"#B7E9F7":'white'}} label={value1} onClick={() => dispatch({type: 'discussionin',payload:{value1:state.exposurecategory.discussion.value[value1],value2:value1}})} variant="outlined"/> 
                                                        
                                                        </Grid>:<div></div>))}
                                                    {Object.keys(state.exposurecategory.hackergrouptargeting.value).map((value1,index) => (
                                                        state.exposurecategory.hackergrouptargeting.value[value1]?
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.hackergrouptargeting.value[value1]?"#B7E9F7":'white'}} label={value1} onClick={() => dispatch({type: 'hackergrouptargetingin',payload:{value1:state.exposurecategory.hackergrouptargeting.value[value1],value2:value1}})} variant="outlined"/> 
                                                        
                                                        </Grid>:<div></div>))}
                                                    



                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </div>
                                    :
                                    <div>
                                    <Grid item xs={12} style={{marginTop:"26px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={11}>
                                            <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                Severity Level 
                                            </div>

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{marginTop:"10px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={11}>
                                            <Grid container spacing={2}>
                                                <Grid item>
                                                    <Chip  size="small" className={classes.chip} style={{background:state.severitylevel.low?"#B7E9F7":'white'}} label="Low" variant="outlined" onClick={() => dispatch({type: 'low',payload:state.severitylevel.low})} /> 
                                                </Grid>
                                                <Grid item>
                                                    <Chip  size="small" className={classes.chip} style={{background:state.severitylevel.medium?"#B7E9F7":'white'}} label="Medium" variant="outlined" onClick={() => dispatch({type: 'medium',payload:state.severitylevel.medium})} /> 
                                                </Grid>
                                                <Grid item>
                                                    <Chip  size="small" className={classes.chip} style={{background:state.severitylevel.high?"#B7E9F7":'white'}} label="High" variant="outlined" onClick={() => dispatch({type: 'high',payload:state.severitylevel.high})} /> 
                                                </Grid>
                                            </Grid>
                                            

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{marginTop:"26px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={11}>
                                            <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                Source
                                            </div>

                                        </Grid>
                                    </Grid>
                                </Grid>
                                
                                <Grid item xs={12} style={{marginTop:"20px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={11}>
                                        <Grid container spacing={2}>
                                                <Grid item>
                                                    <Chip  size="small" className={classes.chip} style={{background:state.source.deepweb?"#B7E9F7":'white'}} label="DeepWeb" variant="outlined" onClick={() => dispatch({type: 'deepweb',payload:state.source.deepweb})} /> 
                                                </Grid>
                                                <Grid item>
                                                    <Chip  size="small" className={classes.chip} style={{background:state.source.darkweb?"#B7E9F7":'white'}} label="DarkWeb" variant="outlined" onClick={() => dispatch({type: 'darkweb',payload:state.source.darkweb})} /> 
                                                </Grid>
                                                <Grid item>
                                                    <Chip  size="small" className={classes.chip} style={{background:state.source.databreach?"#B7E9F7":'white'}} label="DataBreach" variant="outlined" onClick={() => dispatch({type: 'databreach',payload:state.source.databreach})} /> 
                                                </Grid>
                                            
                                        </Grid>

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{marginTop:"26px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={11}>
                                            <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                Exposure Category
                                            </div>

                                        </Grid>
                                    </Grid>
                                </Grid>


                                <Grid item xs={12} style={{marginTop:"20px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={11}>
                                            <Grid container >
                                                <Grid item xs={12}>
                                                <Grid container spacing={1}>
                                                
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>

                                                            <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.sensitiveinformation.control.all?"#B7E9F7":'white'}} label="Sensitive Information" variant="outlined" onClick={() => dispatch({type: 'sensitiveinformation',payload:state.exposurecategory.sensitiveinformation.control.all})} /> 
                                       
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton onClick={() => dispatch({type: 'sensitiveinformation1',payload:state.exposurecategory.sensitiveinformation.control.button})}>
                                                                <ArrowRightIcon style={{display:state.exposurecategory.sensitiveinformation.control.button?"none":"flex"}} />
                                                                <ArrowDropDownIcon style={{display:state.exposurecategory.sensitiveinformation.control.button?"flex":"none"}} />
                                                            </IconButton>
                                                            </Grid>
                                                            </Grid>
                                                         <Grid container spacing={1} style={{display:state.exposurecategory.sensitiveinformation.control.button?"flex":"none"}}>

                                                            {Object.keys(state.exposurecategory.sensitiveinformation.value).map((value1,index) => ( 
                                                            <Grid item>
                                                            
                                                            <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.sensitiveinformation.value[value1]?"#B7E9F7":'white'}} label={value1} onClick={() => dispatch({type: 'sensitiveinformationin',payload:{value1:state.exposurecategory.sensitiveinformation.value[value1],value2:value1}})} variant="outlined"/> 

                                                            </Grid>

                                                            ))}


                                                        </Grid>   
                                                        
                                                    
                                                </Grid>
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.discussion.control.all?"#B7E9F7":'white'}} label="Discussion" variant="outlined" onClick={() => dispatch({type: 'discussion',payload:state.exposurecategory.discussion.control.all})} /> 

                                                        </Grid>
                                                        <Grid item>

                                                        <IconButton onClick={() => dispatch({type: 'discussion1',payload:state.exposurecategory.discussion.control.button})}>
                                                            <ArrowRightIcon style={{display:state.exposurecategory.discussion.control.button?"none":"flex"}} />
                                                            <ArrowDropDownIcon style={{display:state.exposurecategory.discussion.control.button?"flex":"none"}} />
                                                        </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={1} style={{display:state.exposurecategory.discussion.control.button?"flex":"none"}}>

                                                        {Object.keys(state.exposurecategory.discussion.value).map((value1,index) => ( 
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.discussion.value[value1]?"#B7E9F7":'white'}} label={value1} onClick={() => dispatch({type: 'discussionin',payload:{value1:state.exposurecategory.discussion.value[value1],value2:value1}})} variant="outlined"/> 

                                                        </Grid>

                                                        ))}


                                                    </Grid> 
                                                </Grid>
                                                
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.blackmarket.control.all?"#B7E9F7":'white'}} label="Black Market" variant="outlined" onClick={() => dispatch({type: 'blackmarket',payload:state.exposurecategory.blackmarket.control.all})} /> 

                                                        </Grid>
                                                        <Grid item>

                                                        <IconButton onClick={() => dispatch({type: 'blackmarket1',payload:state.exposurecategory.blackmarket.control.button})}>
                                                            <ArrowRightIcon style={{display:state.exposurecategory.blackmarket.control.button?"none":"flex"}} />
                                                            <ArrowDropDownIcon style={{display:state.exposurecategory.blackmarket.control.button?"flex":"none"}} />
                                                        </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={1} style={{display:state.exposurecategory.blackmarket.control.button?"flex":"none"}}>

                                                        {Object.keys(state.exposurecategory.blackmarket.value).map((value1,index) => ( 
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.blackmarket.value[value1]?"#B7E9F7":'white'}} label={value1} onClick={() => dispatch({type: 'blackmarketin',payload:{value1:state.exposurecategory.blackmarket.value[value1],value2:value1}})} variant="outlined"/> 

                                                        </Grid>

                                                        ))}


                                                    </Grid> 
                                                </Grid>
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.financial.control.all?"#B7E9F7":'white'}} label="Financial" variant="outlined" onClick={() => dispatch({type: 'financial',payload:state.exposurecategory.financial.control.all})} /> 

                                                        </Grid>
                                                        <Grid item>

                                                        <IconButton onClick={() => dispatch({type: 'financial1',payload:state.exposurecategory.financial.control.button})}>
                                                            <ArrowRightIcon style={{display:state.exposurecategory.financial.control.button?"none":"flex"}} />
                                                            <ArrowDropDownIcon style={{display:state.exposurecategory.financial.control.button?"flex":"none"}} />
                                                        </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={1} style={{display:state.exposurecategory.financial.control.button?"flex":"none"}}>

                                                        {Object.keys(state.exposurecategory.financial.value).map((value1,index) => ( 
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.financial.value[value1]?"#B7E9F7":'white'}} label={value1} onClick={() => dispatch({type: 'financialin',payload:{value1:state.exposurecategory.financial.value[value1],value2:value1}})} variant="outlined"/> 

                                                        </Grid>

                                                        ))}


                                                    </Grid> 
                                                </Grid>
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.exposedcredentials.control.all?"#B7E9F7":'white'}} label="Exposed Credentials" variant="outlined" onClick={() => dispatch({type: 'exposedcredentials',payload:state.exposurecategory.exposedcredentials.control.all})} /> 

                                                        </Grid>
                                                        <Grid item>

                                                        <IconButton onClick={() => dispatch({type: 'exposedcredentials1',payload:state.exposurecategory.exposedcredentials.control.button})}>
                                                            <ArrowRightIcon style={{display:state.exposurecategory.exposedcredentials.control.button?"none":"flex"}} />
                                                            <ArrowDropDownIcon style={{display:state.exposurecategory.exposedcredentials.control.button?"flex":"none"}} />
                                                        </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={1} style={{display:state.exposurecategory.exposedcredentials.control.button?"flex":"none"}}>

                                                        {Object.keys(state.exposurecategory.exposedcredentials.value).map((value1,index) => ( 
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.exposedcredentials.value[value1]?"#B7E9F7":'white'}} label={value1} onClick={() => dispatch({type: 'exposedcredentialsin',payload:{value1:state.exposurecategory.exposedcredentials.value[value1],value2:value1}})} variant="outlined"/> 

                                                        </Grid>

                                                        ))}


                                                    </Grid> 
                                                </Grid>
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.personalinformation.control.all?"#B7E9F7":'white'}} label="Personal information" variant="outlined" onClick={() => dispatch({type: 'personalinformation',payload:state.exposurecategory.personalinformation.control.all})} /> 

                                                        </Grid>
                                                        <Grid item>

                                                        <IconButton onClick={() => dispatch({type: 'personalinformation1',payload:state.exposurecategory.personalinformation.control.button})}>
                                                            <ArrowRightIcon style={{display:state.exposurecategory.personalinformation.control.button?"none":"flex"}} />
                                                            <ArrowDropDownIcon style={{display:state.exposurecategory.personalinformation.control.button?"flex":"none"}} />
                                                        </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={1} style={{display:state.exposurecategory.personalinformation.control.button?"flex":"none"}}>

                                                        {Object.keys(state.exposurecategory.personalinformation.value).map((value1,index) => ( 
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.personalinformation.value[value1]?"#B7E9F7":'white'}} label={value1} onClick={() => dispatch({type: 'personalinformationin',payload:{value1:state.exposurecategory.personalinformation.value[value1],value2:value1}})} variant="outlined"/> 

                                                        </Grid>

                                                        ))}


                                                    </Grid> 
                                                </Grid>
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.hackergrouptargeting.control.all?"#B7E9F7":'white'}} label="Hacker Group Targeting" variant="outlined" onClick={() => dispatch({type: 'hackergrouptargeting',payload:state.exposurecategory.hackergrouptargeting.control.all})} /> 

                                                        </Grid>
                                                        <Grid item>

                                                        <IconButton onClick={() => dispatch({type: 'hackergrouptargeting1',payload:state.exposurecategory.hackergrouptargeting.control.button})}>
                                                            <ArrowRightIcon style={{display:state.exposurecategory.hackergrouptargeting.control.button?"none":"flex"}} />
                                                            <ArrowDropDownIcon style={{display:state.exposurecategory.hackergrouptargeting.control.button?"flex":"none"}} />
                                                        </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={1} style={{display:state.exposurecategory.hackergrouptargeting.control.button?"flex":"none"}}>

                                                        {Object.keys(state.exposurecategory.hackergrouptargeting.value).map((value1,index) => ( 
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.hackergrouptargeting.value[value1]?"#B7E9F7":'white'}} label={value1} onClick={() => dispatch({type: 'hackergrouptargetingin',payload:{value1:state.exposurecategory.hackergrouptargeting.value[value1],value2:value1}})} variant="outlined"/> 

                                                        </Grid>

                                                        ))}


                                                    </Grid> 
                                                </Grid>
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.attacksandcompromises.control.all?"#B7E9F7":'white'}} label="Attacks and Compromises" variant="outlined" onClick={() => dispatch({type: 'attacksandcompromises',payload:state.exposurecategory.attacksandcompromises.control.all})} /> 

                                                        </Grid>
                                                        <Grid item>

                                                        <IconButton onClick={() => dispatch({type: 'attacksandcompromises1',payload:state.exposurecategory.attacksandcompromises.control.button})}>
                                                            <ArrowRightIcon style={{display:state.exposurecategory.attacksandcompromises.control.button?"none":"flex"}} />
                                                            <ArrowDropDownIcon style={{display:state.exposurecategory.attacksandcompromises.control.button?"flex":"none"}} />
                                                        </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={1} style={{display:state.exposurecategory.attacksandcompromises.control.button?"flex":"none"}}>

                                                        {Object.keys(state.exposurecategory.attacksandcompromises.value).map((value1,index) => ( 
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.attacksandcompromises.value[value1]?"#B7E9F7":'white'}} label={value1} onClick={() => dispatch({type: 'attacksandcompromisesin',payload:{value1:state.exposurecategory.attacksandcompromises.value[value1],value2:value1}})} variant="outlined"/> 

                                                        </Grid>

                                                        ))}


                                                    </Grid> 
                                                </Grid>
                                                <Grid item>
                                                    <Grid container alignItems="center" style={{height:"45px"}}>
                                                        <Grid item>

                                                        <Chip  size="small" className={classes.chip} style={{background:state.exposurecategory.underanalysis.control.all?"#B7E9F7":'white'}} label="Under Analysis" variant="outlined" onClick={() => dispatch({type: 'underanalysis',payload:state.exposurecategory.underanalysis.control.all})} /> 

                                                        </Grid>
                                                    </Grid>

                                                </Grid>


                                                </Grid>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{marginTop:"0px"}}>
                                        <Grid container justify="center">
                                            <Grid item xs={11}>
                                                <Grid container alignItems="center">
                                                    <Grid item>
                                                        <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                        Language
                                                        </div>
                                                    </Grid>
                                                    <Grid item>

                                                            <IconButton onClick={() => dispatch({type: 'language',payload:state.languages.control.button})}>
                                                                <ArrowRightIcon style={{display:state.languages.control.button?"none":"flex"}} />
                                                                <ArrowDropDownIcon style={{display:state.languages.control.button?"flex":"none"}} />
                                                            </IconButton>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={1} style={{display:state.languages.control.button?"flex":"none"}}>

                                                    {Object.keys(state.languages.value).map((value1,index) => ( 
                                                        <Grid item>
                                                            {console.log(state.languages.value[value1])}
                                                            <Chip  size="small" className={classes.chip} style={{background:state.languages.value[value1]?"#B7E9F7":'white'}} label={value1} onClick={() => dispatch({type: 'languagein',payload:{value1:state.languages.value[value1],value2:value1}})} variant="outlined"/> 
                                                        
                                                            </Grid>
                                                       
                                                            ))}
                                                
                                             
                                            </Grid>


                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{marginTop:"0px"}}>
                                        <Grid container justify="center">
                                            <Grid item xs={11}>
                                                <Grid container alignItems="center">
                                                    <Grid item>
                                                        <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                        Social Security Number
                                                        </div>
                                                    </Grid>
                                                    <Grid item>

                                                            <IconButton onClick={() => dispatch({type: 'socialsecuritynumber',payload:state.socialsecuritynumber.control.button})}>
                                                                <ArrowRightIcon style={{display:state.socialsecuritynumber.control.button?"none":"flex"}} />
                                                                <ArrowDropDownIcon style={{display:state.socialsecuritynumber.control.button?"flex":"none"}} />
                                                            </IconButton>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={1} style={{display:state.socialsecuritynumber.control.button?"flex":"none"}}>

                                                    {Object.keys(state.socialsecuritynumber.value).map((value1,index) => ( 
                                                        <Grid item>
                                                            {/* {console.log(value)} */}
                                                            
                                                            <Chip  size="small" className={classes.chip} style={{background:state.socialsecuritynumber.value[value1]?"#B7E9F7":'white'}} label={value1} onClick={() => dispatch({type: 'socialsecurityin',payload:{value1:state.socialsecuritynumber.value[value1],value2:value1}})} variant="outlined"/> 
                                                        
                                                            </Grid>
                                                    
                                                            ))}


                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{marginTop:"0px"}}>
                                        <Grid container justify="center">
                                            <Grid item xs={11}>
                                                <Grid container alignItems="center">
                                                    <Grid item>
                                                        <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                        Other
                                                        </div>
                                                    </Grid>
                                                    <Grid item>

                                                            <IconButton onClick={() => dispatch({type: 'other',payload:state.other.control.button})}>
                                                                <ArrowRightIcon style={{display:state.other.control.button?"none":"flex"}} />
                                                                <ArrowDropDownIcon style={{display:state.other.control.button?"flex":"none"}} />
                                                            </IconButton>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={1} style={{display:state.other.control.button?"flex":"none"}}>
                                                    
                                                        {/* {console.log(state.languages)} */}
                                                                
                                                        
                                                        {Object.keys(state.other.value).map((value1,index) => ( 
                                                        <Grid item>
                                                            {/* {console.log(value)} */}
                                                            
                                                            <Chip  size="small" className={classes.chip} style={{background:state.other.value[value1]?"#B7E9F7":'white'}} label={value1} onClick={() => dispatch({type: 'otherin',payload:{value1:state.other.value[value1],value2:value1}})} variant="outlined"/> 
                                                        
                                                            </Grid>
                                                    
                                                            ))}
                                                    

                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid>
                                        <Time/>
                                    </Grid>
                                    <Grid item xs={12} style={{marginTop:"20px"}}>
                                        <Grid container justify="center">
                                            <Grid item xs={11}>
                                                <Grid container alignItems="center">
                                                    <Grid item>
                                                        <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                        Alert group
                                                        </div>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{marginTop:"20px"}}>
                                        <Grid container justify="center">
                                            <Grid item xs={11}>

                                                        
                                                <Chip  size="small" className={classes.chip} style={{background:state.alertgroup.value.highlightedalerts?"#B7E9F7":'white'}} label="Highlighted Alerts" variant="outlined" onClick={() => dispatch({type: 'alertgroup',payload:state.alertgroup.value.highlightedalerts})} /> 
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    </div>


                                }
                                
                                
                        
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            
            {view ?
            <Grid item xs={12} style={{marginTop:"35px"}}>
                <Grid container justify="center" >
                    <Grid item xs={11} lg={11}>
                        <Grid container justify="space-evenly" spacing={2}>
                            <Grid item>
                                <LatestCard/>
                            </Grid>
                            <Grid item>
                                <LatestCardH/>
                            </Grid>
                            <Grid item>
                                <LatestCard/>
                            </Grid>
                        </Grid>
                        
                        
                        
                        
                        
                    
                    </Grid>
                    
                </Grid>
            </Grid>:
            <Grid item xs={12} style={{marginTop:"35px"}}>
                <Grid container justify="center">
                    <Grid item xs={11} lg={11}>
                        
                           <Grid container justify="space-around">
                               
                               <CardGrid/>
                                <CardGrid/>
                                <CardGrid/>
                                <CardGrid/>
                               

                           </Grid>

                            
                            {/* <Grid item >
                                <CardGrid/>
                            </Grid>
                            <Grid item >
                                <CardGrid/>
                            </Grid>
                            <Grid item >
                                <CardGrid/>
                            </Grid>
                            <Grid item >
                                <CardGrid/>
                            </Grid> */}
                            
                       
                        

                    </Grid>
                </Grid>
            </Grid>
            }
        </div>
     )
 }