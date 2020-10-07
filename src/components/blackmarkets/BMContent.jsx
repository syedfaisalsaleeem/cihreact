import React,{useEffect, useState,useContext,useReducer} from 'react';
import {Grid,Typography,Card,Paper,CardHeader,Divider,Button, IconButton} from "@material-ui/core";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import refresh from "../../Links/images/refresh.png";
import warning from "../../Links/images/warning.png";
import active from "../../Links/images/active.png";
import new1 from "../../Links/images/new.png";
import activesource from "../../Links/images/activesource.png"
import BarGroup from "./BarGroup.jsx";
import Piechart from "./Piechart.jsx";
import drop from "../../Links/images/drop.png";
import Dropup from "../sensitiveinformation/Dropup.jsx";
import Dropdown from "../sensitiveinformation/Dropdown.jsx";
import GetAppIcon from '@material-ui/icons/GetApp';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import { FetchDataContext } from "../../context/FetchDataContext.jsx";
const initialState = {
    query:["blackmarkets"],
    operations:{
      and:true,
      or:false,
      not:false
  },
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
                  all:true,
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
                  all:false,
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
function reducer(state, action) {

    switch (action.type) {
        case 'low':
            // console.log(state.query)
            if(action.payload===true){
                // let x=state['query']
                const listi=Object.assign([],state.query);
                // listi.splice("low");
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === "severitylow") { listi.splice(i, 1); }}
                // var PATTERN ='low' ,
                // filtered = state.query .filter(function (str) { return str.includes(PATTERN); });
                return{
                    ...state,query:listi,
                    severitylevel:{...state.severitylevel,low:!action.payload}
                        
                        
                }

            }else{
                return{
                    ...state,query:[...state.query,'severitylow'],
                    severitylevel:{...state.severitylevel,low:!action.payload}
                        
                        
                }

            }

        case 'medium':
            // console.log(state.query)
            if(action.payload===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === "severitymedium") { listi.splice(i, 1); }}
                // var PATTERN ='low' ,
                // filtered = state.query .filter(function (str) { return str.includes(PATTERN); });
                return{
                    ...state,query:listi,
                    severitylevel:{...state.severitylevel,medium:!action.payload}
                        
                        
                }
        }
        else{
            return{
                ...state,query:[...state.query,'severitymedium'],
                severitylevel:{...state.severitylevel,medium:!action.payload}
                    
                    
            }

        }
        case 'high':
            // console.log(state.query)
            if(action.payload===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === "severityhigh") { listi.splice(i, 1); }}
                return{
                    ...state,query:listi,
                    severitylevel:{...state.severitylevel,high:!action.payload}
                }  
                    
            }
            else{
                return{
                    ...state,query:[...state.query,'severityhigh'],
                    severitylevel:{...state.severitylevel,high:!action.payload}
                        
                        
                }
    
            } 
        case 'deepweb':
            if(action.payload===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === "deepweb") { listi.splice(i, 1); }}

                return{
                    ...state,query:listi,
                    source:{...state.source,deepweb:!action.payload}
                        
                        
                } 
                    
            }
            else{
                return{
                    ...state,query:[...state.query,'deepweb'],
                    source:{...state.source,deepweb:!action.payload}
                        
                        
                } 
    
            }

        case 'darkweb':
            if(action.payload===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === "darkweb") { listi.splice(i, 1); }}

                return{
                    ...state,query:listi,
                    source:{...state.source,darkweb:!action.payload}
                        
                        
                }
                    
            }
            else{
                return{
                    ...state,query:[...state.query,'darkweb'],
                    source:{...state.source,darkweb:!action.payload}
                        
                        
                }
    
            }

        case 'databreach':
            if(action.payload===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === "databreach") { listi.splice(i, 1); }}

                return{
                    ...state,query:listi,
                    source:{...state.source,databreach:!action.payload}
                        
                        
                }
                    
            }
            else{
                return{
                    ...state,query:[...state.query,'databreach'],
                    source:{...state.source,databreach:!action.payload}
                        
                        
                }
    
            }

      case 'language':
        // console.log(state.languages.control.button)
        return{
            ...state,
            languages:{...state.languages,
                control:{...state.languages.control,button:!action.payload}
                }
        }
        case 'languagein':
            // return change1(action.payload);
            const x=action.payload.value2
            if(action.payload.value1===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === x) { listi.splice(i, 1); }}

                return(
                
                    {
                    ...state,query:listi,
                    languages:{...state.languages,
                        value:{...state.languages.value,[x]:!action.payload.value1}
                        }
                })
                    
            }
            else{
                return(
                
                    {
                    ...state,query:[...state.query,x],
                    languages:{...state.languages,
                        value:{...state.languages.value,[x]:!action.payload.value1}
                        }
                })
    
            }

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
                if(action.payload.value1===true){
                    const listi=Object.assign([],state.query);
                    for( var i = 0; i < listi.length; i++){ if ( listi[i] === y) { listi.splice(i, 1); }}
    
                    return(
                    
                        {
                        ...state,query:listi,
                        socialsecuritynumber:{...state.socialsecuritynumber,
                            value:{...state.socialsecuritynumber.value,[action.payload.value2]:!action.payload.value1}
                            }
                    })
                        
                }
                else{
                    return(
                    
                        {
                        ...state,query:[...state.query,y],
                        socialsecuritynumber:{...state.socialsecuritynumber,
                            value:{...state.socialsecuritynumber.value,[action.payload.value2]:!action.payload.value1}
                            }
                    })
        
                }

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
                if(action.payload.value1===true){
                    const listi=Object.assign([],state.query);
                    for( var i = 0; i < listi.length; i++){ if ( listi[i] === action.payload.value2) { listi.splice(i, 1); }}
    
                    return(
                    
                        {
                        ...state,query:listi,
                        other:{...state.other,
                            value:{...state.other.value,[action.payload.value2]:!action.payload.value1}
                            }
                    })
                        
                }
                else{
                    return(
                    
                        {
                        ...state,query:[...state.query,action.payload.value2],
                        other:{...state.other,
                            value:{...state.other.value,[action.payload.value2]:!action.payload.value1}
                            }
                    })
        
                }

                case 'alertgroup':
                    if(action.payload===true){
                        const listi=Object.assign([],state.query);
                        for( var i = 0; i < listi.length; i++){ if ( listi[i] === "highlightedalerts") { listi.splice(i, 1); }}          
                     return {
                        ...state,query:listi,
                        alertgroup:{...state.alertgroup,
                            value:{...state.other.value,highlightedalerts:!action.payload}
                            }
                    }
                }
                else{
                    return {
                        ...state,query:[...state.query,"highlightedalerts"],
                        alertgroup:{...state.alertgroup,
                            value:{...state.other.value,highlightedalerts:!action.payload}
                            }
                        }
                    
                }
        case 'sensitiveinformation':
            if(action.payload===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === "sensitivedisclosure") { listi.splice(i, 1); }}
                // var PATTERN ='low' ,
                // filtered = state.query .filter(function (str) { return str.includes(PATTERN); });

                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        sensitiveinformation:{...state.exposurecategory.sensitiveinformation,
                            control:{...state.exposurecategory.sensitiveinformation.control,all:!action.payload}
                            
                        }
                    }
                }
        }
        else{
            return {
                ...state,query:[...state.query,'sensitivedisclosure'],
                exposurecategory:{...state.exposurecategory,
                    sensitiveinformation:{...state.exposurecategory.sensitiveinformation,
                        control:{...state.exposurecategory.sensitiveinformation.control,all:!action.payload}
                        
                    }
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
            if(action.payload.value1===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === action.payload.value2) { listi.splice(i, 1); }}
                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        sensitiveinformation:{...state.exposurecategory.sensitiveinformation,
                            value:{...state.exposurecategory.sensitiveinformation.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
                    
            }
            else{
                return {
                    ...state,query:[...state.query,action.payload.value2],
                    exposurecategory:{...state.exposurecategory,
                        sensitiveinformation:{...state.exposurecategory.sensitiveinformation,
                            value:{...state.exposurecategory.sensitiveinformation.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
    
            }

        case 'discussion':
            // console.log(state.query)
            if(action.payload===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === "discussions") { listi.splice(i, 1); }}
                // var PATTERN ='low' ,
                // filtered = state.query .filter(function (str) { return str.includes(PATTERN); });

                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        discussion:{...state.exposurecategory.discussion,
                            control:{...state.exposurecategory.discussion.control,all:!action.payload}
                            
                        }
                    }
                }
        }
        else{
            return {
                ...state,query:[...state.query,'discussions'],
                exposurecategory:{...state.exposurecategory,
                    discussion:{...state.exposurecategory.discussion,
                        control:{...state.exposurecategory.discussion.control,all:!action.payload}
                        
                    }
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
            if(action.payload.value1===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === action.payload.value2) { listi.splice(i, 1); }}
                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        discussion:{...state.exposurecategory.discussion,
                            value:{...state.exposurecategory.discussion.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
                    
            }
            else{
                return {
                    ...state,query:[...state.query,action.payload.value2],
                    exposurecategory:{...state.exposurecategory,
                        discussion:{...state.exposurecategory.discussion,
                            value:{...state.exposurecategory.discussion.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
    
            }

        case 'blackmarket':
            if(action.payload===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === "blackmarkets") { listi.splice(i, 1); }}
                // var PATTERN ='low' ,
                // filtered = state.query .filter(function (str) { return str.includes(PATTERN); });

                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        blackmarket:{...state.exposurecategory.blackmarket,
                            control:{...state.exposurecategory.blackmarket.control,all:!action.payload}
                            
                        }
                    }
                }
        }
        else{
            return {
                ...state,query:[...state.query,'blackmarkets'],
                exposurecategory:{...state.exposurecategory,
                    blackmarket:{...state.exposurecategory.blackmarket,
                        control:{...state.exposurecategory.blackmarket.control,all:!action.payload}
                        
                    }
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
            if(action.payload.value1===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === action.payload.value2) { listi.splice(i, 1); }}
                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        blackmarket:{...state.exposurecategory.blackmarket,
                            value:{...state.exposurecategory.blackmarket.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
                    
            }
            else{
                return {
                    ...state,query:[...state.query,action.payload.value2],
                    exposurecategory:{...state.exposurecategory,
                        blackmarket:{...state.exposurecategory.blackmarket,
                            value:{...state.exposurecategory.blackmarket.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
    
            }

        case 'financial':
            if(action.payload===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === "financial") { listi.splice(i, 1); }}
                // var PATTERN ='low' ,
                // filtered = state.query .filter(function (str) { return str.includes(PATTERN); });
                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        financial:{...state.exposurecategory.financial,
                            control:{...state.exposurecategory.financial.control,all:!action.payload}
                            
                        }
                    }
                }
        }
        else{
            return {
                ...state,query:[...state.query,'financial'],
                exposurecategory:{...state.exposurecategory,
                    financial:{...state.exposurecategory.financial,
                        control:{...state.exposurecategory.financial.control,all:!action.payload}
                        
                    }
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
            if(action.payload.value1===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === action.payload.value2) { listi.splice(i, 1); }}
                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        financial:{...state.exposurecategory.financial,
                            value:{...state.exposurecategory.financial.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
                    
            }
            else{
                return {
                    ...state,query:[...state.query,action.payload.value2],
                    exposurecategory:{...state.exposurecategory,
                        financial:{...state.exposurecategory.financial,
                            value:{...state.exposurecategory.financial.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
    
            }

        case 'exposedcredentials':
            if(action.payload===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === "exposedcredentials") { listi.splice(i, 1); }}
                // var PATTERN ='low' ,
                // filtered = state.query .filter(function (str) { return str.includes(PATTERN); });
                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        exposedcredentials:{...state.exposurecategory.exposedcredentials,
                            control:{...state.exposurecategory.exposedcredentials.control,all:!action.payload}
                            
                        }
                    }
                }
        }
        else{
            return {
                ...state,query:[...state.query,'exposedcredentials'],
                exposurecategory:{...state.exposurecategory,
                    exposedcredentials:{...state.exposurecategory.exposedcredentials,
                        control:{...state.exposurecategory.exposedcredentials.control,all:!action.payload}
                        
                    }
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
            if(action.payload.value1===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === action.payload.value2) { listi.splice(i, 1); }}
                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        exposedcredentials:{...state.exposurecategory.exposedcredentials,
                            value:{...state.exposurecategory.exposedcredentials.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
                    
            }
            else{
                return {
                    ...state,query:[...state.query,action.payload.value2],
                    exposurecategory:{...state.exposurecategory,
                        exposedcredentials:{...state.exposurecategory.exposedcredentials,
                            value:{...state.exposurecategory.exposedcredentials.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
    
            }

        case 'personalinformation':
            if(action.payload===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === "personalinformation") { listi.splice(i, 1); }}
                // var PATTERN ='low' ,
                // filtered = state.query .filter(function (str) { return str.includes(PATTERN); });
                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        personalinformation:{...state.exposurecategory.personalinformation,
                            control:{...state.exposurecategory.personalinformation.control,all:!action.payload}
                            
                        }
                    }
                }
        }
        else{
            return {
                ...state,query:[...state.query,'personalinformation'],
                exposurecategory:{...state.exposurecategory,
                    personalinformation:{...state.exposurecategory.personalinformation,
                        control:{...state.exposurecategory.personalinformation.control,all:!action.payload}
                        
                    }
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
            if(action.payload.value1===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === action.payload.value2) { listi.splice(i, 1); }}
                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        personalinformation:{...state.exposurecategory.personalinformation,
                            value:{...state.exposurecategory.personalinformation.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
                    
            }
            else{
                return {
                    ...state,query:[...state.query,action.payload.value2],
                    exposurecategory:{...state.exposurecategory,
                        personalinformation:{...state.exposurecategory.personalinformation,
                            value:{...state.exposurecategory.personalinformation.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
    
            }

        case 'hackergrouptargeting':
            if(action.payload===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === "hackergrouptargeting") { listi.splice(i, 1); }}
                // var PATTERN ='low' ,
                // filtered = state.query .filter(function (str) { return str.includes(PATTERN); });
                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        hackergrouptargeting:{...state.exposurecategory.hackergrouptargeting,
                            control:{...state.exposurecategory.hackergrouptargeting.control,all:!action.payload}
                            
                        }
                    }
                }
        }
        else{
            return {
                ...state,query:[...state.query,'hackergrouptargeting'],
                exposurecategory:{...state.exposurecategory,
                    hackergrouptargeting:{...state.exposurecategory.hackergrouptargeting,
                        control:{...state.exposurecategory.hackergrouptargeting.control,all:!action.payload}
                        
                    }
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
            if(action.payload.value1===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === action.payload.value2) { listi.splice(i, 1); }}
                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        hackergrouptargeting:{...state.exposurecategory.hackergrouptargeting,
                            value:{...state.exposurecategory.hackergrouptargeting.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
                    
            }
            else{
                return {
                    ...state,query:[...state.query,action.payload.value2],
                    exposurecategory:{...state.exposurecategory,
                        hackergrouptargeting:{...state.exposurecategory.hackergrouptargeting,
                            value:{...state.exposurecategory.hackergrouptargeting.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
    
            } 

        case 'attacksandcompromises':
            if(action.payload===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === "attacksandcompromises") { listi.splice(i, 1); }}
                // var PATTERN ='low' ,
                // filtered = state.query .filter(function (str) { return str.includes(PATTERN); });
                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        attacksandcompromises:{...state.exposurecategory.attacksandcompromises,
                            control:{...state.exposurecategory.attacksandcompromises.control,all:!action.payload}
                            
                        }
                    }
                }
        }
        else{
            return {
                ...state,query:[...state.query,'attacksandcompromises'],
                exposurecategory:{...state.exposurecategory,
                    attacksandcompromises:{...state.exposurecategory.attacksandcompromises,
                        control:{...state.exposurecategory.attacksandcompromises.control,all:!action.payload}
                        
                    }
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
            if(action.payload.value1===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === action.payload.value2) { listi.splice(i, 1); }}
                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        attacksandcompromises:{...state.exposurecategory.attacksandcompromises,
                            value:{...state.exposurecategory.attacksandcompromises.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
                    
            }
            else{
                return {
                    ...state,query:[...state.query,action.payload.value2],
                    exposurecategory:{...state.exposurecategory,
                        attacksandcompromises:{...state.exposurecategory.attacksandcompromises,
                            value:{...state.exposurecategory.attacksandcompromises.value,[action.payload.value2]:!action.payload.value1}
                            
                        }
                    }
                }
    
            } 

        case 'underanalysis':
            if(action.payload===true){
                const listi=Object.assign([],state.query);
                for( var i = 0; i < listi.length; i++){ if ( listi[i] === "undefined") { listi.splice(i, 1); }}
                // var PATTERN ='low' ,
                // filtered = state.query .filter(function (str) { return str.includes(PATTERN); });
                return {
                    ...state,query:listi,
                    exposurecategory:{...state.exposurecategory,
                        underanalysis:{...state.exposurecategory.underanalysis,
                            control:{...state.exposurecategory.underanalysis.control,all:!action.payload}
                            
                        }
                    }
                }
        }
        else{
            return {
                ...state,query:[...state.query,'undefined'],
                exposurecategory:{...state.exposurecategory,
                    underanalysis:{...state.exposurecategory.underanalysis,
                        control:{...state.exposurecategory.underanalysis.control,all:!action.payload}
                        
                    }
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
const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }))(Tooltip);
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    button:{
        display:"flex",alignItems:"center",width:"100%",height:"44%",border: "0.6px solid #000000",borderRadius: "2px",fontStyle: "normal",
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
        fontSize: "16.9411px" ,
          fontWeight:"bold",
          fontStyle:"normal"
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
        width:"100%",
        boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
         borderRadius: "11.9747px",
         
         paddingBottom:"18px",
         height:"447px"
    },
    f2:{
        background: "#FFFFFF",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        borderRadius: "6px", 
        
        height: "405px",
        
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
  }));
export default function BMContent(){
    const totalAllBMData = useContext(FetchDataContext);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { totalBMInfo } = totalAllBMData;
    const classes = useStyles();
    const [count,setcount]=useState();
    const [view,setview]=useState(true);
    const [dropc,setdrop]=useState(true);
    const [filter,setfilter]=useState(true);
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
    const calculate = ()=>{
        let char,calculate,x;
        char=(70/300)*100;
        console.log(char,"char")
        x=Math.round(char)
        calculate=String(x).concat("%")
        
        setcount(calculate)
        

    }
    const changefilter=()=>{
        setfilter(!filter)
    }
    useEffect(() => {
        calculate();
      });
    return(
        <div style={{marginTop:"36px"}}>
                {dropc?
                <div>
<Grid container className={classes.root} spacing={3}>

<Grid item xs={12} md={12}>
    <Grid container justify="center">
        <Grid item xs={11} lg={10}>
        <Grid container>
            <Grid item xs={6}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Typography variant="h5">
                        Black markets
                        </Typography>
                    </Grid>
                    <Grid item>
                    <LightTooltip title="See if someone is selling your data or assets on the dark web or if people are bidding on, or offering to leak, confidential information relating to your organisation?">
                    <InfoOutlinedIcon />
                    </LightTooltip >
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container justify="flex-end" >
                    <Grid item xs={6}>
                    <Grid container justify="flex-end">
                    <IconButton>
                        <GetAppIcon/>
                    </IconButton>
                    </Grid>

                    </Grid>

                    
                </Grid>

            </Grid>
        </Grid>
        
        </Grid>                    
    </Grid>

</Grid>
<Grid item xs={12}>
<Grid container justify="center" style={{marginTop:"20px"}}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Grid container spacing={2} >
                            <Grid item xs={6} lg={6}>
                            <Card className={classes.f5}>
                                <CardHeader
                                className={classes.HeaderFont}
                            
                                disableTypography="true" 
                                action={
                                    
                                    <IconButton color="primary"  >
                                        
                                        </IconButton>
                                    
                                }
                                
                                title={<div style={{display:"flex"}}><Typography>Black Markets Trend </Typography>
                                <Grid item style={{marginLeft:"10px"}}>
                                <LightTooltip title="This bar chart depicts the number of alerts found per month over the past two years.">

<InfoOutlinedIcon />
</LightTooltip >
                                </Grid>
                        </div>}      
                                />
                                <Divider/>
                                <BarGroup/>
                                
                                    
                                
                            
                            </Card>
                                
                            </Grid>
                            <Grid item xs={4} lg={4}>
                            <Card className={classes.f5}>
                                <CardHeader
                                className={classes.HeaderFont}
                            
                                disableTypography="true" 
                                action={
                                    
                                    <IconButton color="primary"  >
                                        
                                        </IconButton>
                                    
                                }
                                
                                title={<div style={{display:"flex"}}><Typography>Location</Typography>
                                <Grid item style={{marginLeft:"10px"}}>
                                <LightTooltip title="This pie chart depicts the percentage of alerts found on the dark web, deep web and data breaches. Adjust the chart by selecting one or more sources.">

<InfoOutlinedIcon />
</LightTooltip >
                                </Grid>
                        </div>}      
                                />
                                <Divider/>
                                <Piechart/>
                                
                                    
                                
                            
                            </Card>
                            </Grid>
                            <Grid item xs={2}>
                                <Card className={classes.f5}>
                                    <Grid container direction="column" style={{height:"447px"}}spacing={3} justify="space-evenly" alignItems="center">
                                        <Grid item>
                                            <Grid container direction="column" alignItems="center">
                                                <Grid item style={{color:"#464E5F",fontWeight:"bold",fontSize:"40px"}}>
                                                {totalBMInfo.totalAlerts}
                                                </Grid>
                                                <Grid item style={{color:"#B5B5C3",fontWeight:"500",fontSize:"12px;"}}>
                                                    Total Alerts Found
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="column" alignItems="center">
                                                <Grid item style={{color:"#464E5F",fontWeight:"bold",fontSize:"40px"}}>
                                                {totalBMInfo.alertsToday}
                                                </Grid>
                                                <Grid item style={{color:"#B5B5C3",fontWeight:"500",fontSize:"12px;"}}>
                                                    Alert Found Today
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="column" alignItems="center">
                                                <Grid item style={{color:"#464E5F",fontWeight:"bold",fontSize:"40px"}}>
                                                {totalBMInfo.alertsLastMonth}
                                                </Grid>
                                                <Grid item style={{color:"#B5B5C3",fontWeight:"500",fontSize:"12px;"}}>
                                                    Alert Found Last month
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="column" alignItems="center">
                                                <Grid item style={{color:"#464E5F",fontWeight:"bold",fontSize:"40px"}}>
                                                {totalBMInfo.alertsLast3Months}
                                                </Grid>
                                                <Grid item style={{color:"#B5B5C3",fontWeight:"500",fontSize:"12px;"}}>
                                                    Alert Found Last 3 months
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
</Grid>

{/* Charts  */}

    
{/* Vertical Divider  */}
<Grid item xs={12} style={{display:dropc?"block":"none"}}>
<Grid container justify="flex-end" alignItems="center">
    <Grid item xs={10} lg={10}>
        <Divider style={{height:"3px"}}/>
    </Grid>
    <Grid item xs={1} lg={1} style={{paddingLeft:"8px"}}>
        <IconButton onClick={handledrop1}>
            <img src={drop}  />
        </IconButton>
            
        
        
    </Grid>


</Grid>

</Grid>

{/* Search  */}
{/* {dropc?
<Dropup/>:

<Dropdown call={handledrop}/>

} */}





</Grid>
                <Dropup state={state} dispatch={dispatch} filter={changefilter} filtervalue={filter}/>
                </div>
                :
                <div>
                    <Dropdown state={state} dispatch={dispatch} call={handledrop} filter={changefilter} filtervalue={filter}/>
                </div>
                
                
            }
            
            
        </div>
    )
}