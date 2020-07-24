import React from 'react'
import {Card,Grid,Button,Chip,Dialog,DialogTitle,Typography,Divider,DialogContent,DialogActions,DialogContentText,IconButton, TextField,InputBase,
    FormControl,InputLabel,Select,MenuItem
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import radar from "../../Links/images/radar.png";
import { makeStyles} from '@material-ui/core/styles';
import AssetContent from './AssetContent.jsx';
import ProgressDialog from "./ProgressDialog.jsx";
import ShowAssets from "./ShowAssets.jsx";
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';

const styles = makeStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[900],
    },
    emailtextfield:{
        width:"33ch",
        marginTop:"10px",
        paddingLeft:theme.spacing(1),
        fontSize:"13px",
        borderRadius: "4px",
        background:"#F3F6F9",
        height: "41.02px",
        
      },
      logowithtextfield:{
        display:"flex",
        marginTop:"10px",
        height:"40px",
        width:"30px",
        border: "0.1px solid #F3F6F9",
        borderLeft:"white",
        alignItems:"center",
        background:"#F3F6F9"
        
      },
      logowithtextfield1:{
        display:"flex",
        marginTop:"1px",
        paddingLeft:"1px",
        height: "41.02px",
        width:"40px",
        border: "0.1px solid #F3F6F9",
        borderLeft:"white",
        alignItems:"center",
        background:"#F3F6F9"
        
      },
      logowithtextfield2:{
        display:"flex",
        marginTop:"1px",
        height: "41.02px",
        width:"80px",
        border: "0.1px solid #F3F6F9",
        borderLeft:"white",
        alignItems:"center",
        background:"#F3F6F9",
        paddingLeft:"2px",
        
      },
    textf:{
        background: "#F3F6F9",
        borderRadius: "4px",
        height: "41.02px",
        padding: theme.spacing(1),
        fontSize:"13px",
        width:"33ch",

    },
    formControl: {
        
        width:"34ch",
        border:0,
        background:"#F3F6F9",
        fontSize:"13px",
       
        '& fieldset': {
          border: "0",
        }
    }
  }));
export default function AddAsset(props){
    const classes=styles();

      const [state1,setstate1]=React.useState({
        displayColorPicker: false,
        color: {
          red: '0',
          g: '112',
          b: '19',
          a: '1',
        },
    })
    const [color,setColor]=React.useState("#ff0000")
    const styles1 = reactCSS({
        'default': {
          color: {
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            // background:`${color1}`
            // background: `rgba(${ state1.color.red }, ${ state1.color.g }, ${ state1.color.b }, ${ state1.color.a })`,
          },
          swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
          },
          popover: {
            position: 'absolute',
            zIndex: '2',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
        },
      });
    const handleClose12=()=>{
        setstate1({ displayColorPicker: false })
    }
    const handleChange12=(color)=>{
        setstate1({ color: color.rgb })
    }

    const [don,setdon]=React.useState(true);
    const [age, setAge] = React.useState('');
    const [key,addkey]=React.useState([""]);
    const [tag,addtag]=React.useState([""]);
    const [color1,setcolor1]=React.useState(["#ff0000"])
    const [open1,changeopen1]=React.useState([false])
    const [asset , setasset] = React.useState({
        addasset : "",
        assettype : "",
        ip:"",
        location:"",
        hostname:"",
        hosturl:"",
        
    })
    const addcount=()=>{
        addkey([...key,""])
        // seterror([...error,false])
        // console.log(st1)
        
      }
      const subcount=(event)=>{
        const x=event.target.id;
        console.log(x,event.MouseEvent,"target")
        const listi=Object.assign([],key);
        // const liste=Object.assign([],error);
        console.log(x,"this is deleted")
        listi.splice(x,1);
        // liste.splice(x,1);
        // seterror(liste)
        addkey(listi);
        
    }
    const addcounttag=()=>{
        addtag([...tag,""])
        setcolor1([...color1,"#ff0000"])
        changeopen1([...open1,false])
        // seterror([...error,false])
        // console.log(st1)
        
      }
      const handlecolor=(index,color)=>{
          console.log(color)
        // setcolor1(color)
          let x=index
          console.log(x,"eorking")
        //   console.log(x,color1[x])
          const listi=Object.assign([],color1)
          listi[x]=(color.hex)
          console.log(listi,color1)
        // // // //   console.log(listi,open1)
           setcolor1(listi)
      }
      const handleClick12 = (event) => {
          
        let x=event.target.id
        console.log(event.target.id,open1[x])
        const listi=Object.assign([],open1)
        listi[x]=(!open1[x])
        console.log(listi,open1)
        changeopen1(listi)
        // changeopen1([open1[x]:!open1[x]])
        // changeopen1(prevState => ([
        //     ...prevState,
        //     [x] : !prevState
        // ]))

      };
    const subcounttag=(event)=>{
        const x=event.target.id;
        console.log(x,event.MouseEvent,"target")
        const listi=Object.assign([],tag);
        const liste=Object.assign([],open1);
        console.log(x,"this is deleted")
        listi.splice(x,1);
        liste.splice(x,1);
        // seterror(liste)
        addtag(listi); 
        changeopen1(liste)     
    }
    const [addasset, setaddasset] = React.useState('');
    const changedon=()=>{
        setdon(!don)
    }
    const change=(e)=>{
        
        const {id , value} = e.target   
        setasset(prevState => ({
            ...prevState,
            [id] : value
        }))
        console.log({id,value})
    }
    const change1=(e)=>{
        
        const {name , value} = e.target   
        setasset(prevState => ({
            ...prevState,
            [name] : value
        }))
        console.log({name,value})
    }
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const control=()=>{
        props.handleClose()
        changedon()
    }
    const handletext =(event) =>{
        const {name,value}=event.target
        //console.log(name,value)
        //console.log(st1.indexOf(name))
        
          let newArr = [...key]; // copying the old datas array
          newArr[name] = value; // replace e.target.value with whatever you want to change it to
      
          addkey(newArr);
        
        
        
    }
    const changetag=(event)=>{
        
        const {name,value}=event.target;
        console.log(name,value)
        let newArr = [...tag]; // copying the old datas array
        newArr[name] = value; // replace e.target.value with whatever you want to change it to
    
        addtag(newArr);
    }
    if(don===false){
        
        return(
            <ProgressDialog changedon={changedon}/>
            // <ShowAssets changedon={changedon}/>
        )
        
    }
    return(
        <div>

            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"lg"}
                
                
            >
                
                <DialogTitle>
                    <Grid item xs={12}>
                        <Grid container justify="space-between">
                            <Grid item xs={10}>
                                <Grid container spacing={2}>
                                    <Grid item >
                                        <img src={radar}>
                                        </img>
                                    </Grid>
                                    <Grid item >
                                        Add New Asset
                                    </Grid>
                                </Grid>

                            </Grid>

                            <Grid item xs={1}>
                                <Grid container justify="center" >
                                    <Grid item>
                                        
                                        <IconButton aria-label="close" className={classes.closeButton} onClick={props.handleClose}>
                                            <CloseIcon  />
                                        </IconButton>
                                            
                                       
                                        
                                    </Grid>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </Grid>

                </DialogTitle>                  
                
                <DialogContent dividers >
                {/* <AssetContent changedon={changedon} />
                    {don ?
                        <AssetContent changedon={changedon} />:
                        <ProgressDialog/>
                    } */}
                    
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Grid item xs={11}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <Grid container spacing={5}>
                                        <Grid item >
                                            <Grid container direction="column" spacing={1}>
                                                <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                                    Add Asset Name
                                                </Grid>
                                                <Grid item>
                                                <InputBase
                                                    className={classes.textf}
                                                    size="small"
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    placeholder="Enter name of asset"
                                                    id="addasset"
                                                    value={asset.addasset}
                                                    onChange={change}
                                                />
                                                    
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item>
                                            <Grid container direction="column" spacing={1}>
                                                <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                                    Select Asset Type
                                                </Grid>
                                                <Grid item>
                                                <FormControl className={classes.formControl}  >
                                                    
                                                    <Select
                                                    
                                                   
                                                    
                                                    style={{height:"40px"}}
                                                    displayEmpty
                                                    onChange={change1}
                                                    placeholder="Select asset type"
                                                    name="assettype"
                                                    value={asset.assettype}
                                                    >
                                                    <MenuItem value="">
                                                    <em style={{fontSize:"12px",fontStyle:'normal',fontFamily:"Roboto",color:"rgba(0, 0, 0, 0.5)",paddingLeft:"3px"}}>Select asset type</em>
                                                    </MenuItem>
                                                    <MenuItem value={10} style={{fontSize:"12px",fontStyle:'normal',fontFamily:"Roboto",paddingLeft:"3px"}}>Ten</MenuItem>
                                                    <MenuItem value={20} style={{fontSize:"12px",fontStyle:'normal',fontFamily:"Roboto",paddingLeft:"3px"}}>Twenty</MenuItem>
                                                    <MenuItem value={30} style={{fontSize:"12px",fontStyle:'normal',fontFamily:"Roboto",paddingLeft:"3px"}}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item>
                                            <Grid container direction="column" spacing={1}>
                                                <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                                    Select Asset Location
                                                </Grid>
                                                <Grid item>
                                                <FormControl className={classes.formControl}  >
                                                    
                                                    <Select
                                                    
                                                    
                                                    style={{height:"40px"}}
                                                    displayEmpty
                                                    onChange={change1}
                                                    placeholder="Select Country"
                                                    name="location"
                                                    value={asset.location}
                                                    >
                                                    <MenuItem value="">
                                                    <em style={{fontSize:"12px",fontStyle:'normal',fontFamily:"Roboto",color:"rgba(0, 0, 0, 0.5)",paddingLeft:"3px"}}>Select Country</em>
                                                    </MenuItem>
                                                    <MenuItem value={10} style={{fontSize:"12px",fontStyle:'normal',fontFamily:"Roboto",paddingLeft:"3px"}}>Ten</MenuItem>
                                                    <MenuItem value={20} style={{fontSize:"12px",fontStyle:'normal',fontFamily:"Roboto",paddingLeft:"3px"}}>Twenty</MenuItem>
                                                    <MenuItem value={30} style={{fontSize:"12px",fontStyle:'normal',fontFamily:"Roboto",paddingLeft:"3px"}}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    
                                    
                                    </Grid>

                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={5}>
                                        <Grid item >
                                            <Grid container direction="column" spacing={1}>
                                                <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                                    Add IP or Range
                                                </Grid>
                                                <Grid item>
                                                <InputBase
                                                    className={classes.textf}
                                                    size="small"
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    placeholder="00.00.00.00"
                                                    id="ip"
                                                    value={asset.ip}
                                                    onChange={change}
                                                />
                                                    
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item>
                                            <Grid container direction="column" spacing={1}>
                                                <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                                Add Host Name
                                                </Grid>
                                                <Grid item>
                                                <InputBase
                                                    className={classes.textf}
                                                    size="small"
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    placeholder="www.domain.com"
                                                    id="hostname"
                                                    value={asset.hostname}
                                                    onChange={change}
                                                />
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item>
                                            <Grid container direction="column" spacing={1}>
                                                <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                                    Add Host Url
                                                </Grid>
                                                <Grid item>
                                                <InputBase
                                                    className={classes.textf}
                                                    size="small"
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    placeholder="www.domain.com/url/index.html"
                                                    id="hosturl"
                                                    value={asset.hosturl}
                                                    onChange={change}
                                                    
                                                />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    
                                    
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider/>
                                </Grid>
                                <Grid item xs={12} >
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                        Add Keyword for Tracking
                                        </Grid>
                                        <Grid item>
                                            {key.map((value,index)=>(                                         
                                            <Grid container spacing={1}>
                                                <Grid item >
                                                    {/* <InputBase
                                                            className={classes.textf}
                                                            size="small"
                                                            inputProps={{ 'aria-label': 'naked' }}
                                                            style={{width:"20ch"}}
                                                            placeholder="Enter keyword"
                                                        /> */}
                                                                        
                                                {/* <InputBase
                                                placeholder="Enter Email"
                                                name={index}
                                                value={value}
                                                onChange={handletext}
                                                className={classes.emailtextfield}
                                                size="Large"
                                                inputProps={{ 'aria-label': 'naked' }}
                                                /> */}
                                                <div style={{display:"flex"}}>
                                                <InputBase
                                                name={index}
                                                value={value}
                                                placeholder="Enter keyword"
                                                onChange={handletext}
                                                className={classes.emailtextfield}
                                                size="small"
                                                inputProps={{ 'aria-label': 'naked' }}
                                                />
                                                <i className={classes.logowithtextfield}>
                                                    {/* <CloseIcon onClick={subcount} id={index}/> */}
                                                    <CloseIcon onClick={subcount} id={index}/>
                                                    </i>
                                                    
                                                        
                                                    
                                                </div>


                                            
                                                </Grid>
                                                <Grid item>
                                                    <IconButton style={{marginTop:"8px"}} onClick={addcount} >
                                                        <AddCircleOutlineRoundedIcon fontSize="medium"/>
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                            ))}
                                        </Grid>
                                        

                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                        Select Tags
                                        </Grid>
                                        <Grid item >
                                        {tag.map((value,index)=>( 
                                            <Grid container spacing={2}>
                                                <Grid item>
                                                    <div style={{display:"flex"}}>
                                                    <FormControl className={classes.formControl} style={{width:"21ch"}} >
                                                        
                                                        <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={value}
                                                        
                                                        name={index}
                                                        style={{height:"40px"}}
                                                        displayEmpty
                                                        onChange={changetag}

                                                        >
                                                        <MenuItem value="">
                                                            <em style={{fontSize:"12px",fontStyle:'normal',fontFamily:"Roboto",color:"rgba(0, 0, 0, 0.5)",paddingLeft:"3px"}}>Select</em>
                                                        </MenuItem>
                                                        <MenuItem value={10} style={{fontSize:"12px",fontStyle:'normal',fontFamily:"Roboto",paddingLeft:"3px"}}>Ten</MenuItem>
                                                        <MenuItem value={20} style={{fontSize:"12px",fontStyle:'normal',fontFamily:"Roboto",paddingLeft:"3px"}}>Twenty</MenuItem>
                                                        <MenuItem value={30} style={{fontSize:"12px",fontStyle:'normal',fontFamily:"Roboto",paddingLeft:"3px"}}>Thirty</MenuItem>
                                                        </Select>
                                                </FormControl>
 
                                                <div className={classes.logowithtextfield2}>
                                                <div>
                                                <i  className={classes.logowithtextfield1}>
                                                    {/* <CloseIcon onClick={subcount} id={index}/> */}
                                                    <Button onClick={handleClick12}  style={{background:color1[index],width:"25px",height:"25px",borderRadius:"4px",fontSize:"6px"}} id={index}/>
                                                        
                                                </i>
                                                    {/* <IconButton style={ styles1.swatch } onClick={handleClick12} id={index}>
                                                    <div style={ styles1.color } value={value} />
                                                    </IconButton> */}
                                                { open1[index] ? <div style={ styles1.popover }>
                                                <div style={ styles.cover }   />
                                                {/* <SketchPicker color={ color } onChange={ (color)=>{setColor(color.hex)} } /> */}
                                                <SketchPicker color={ color1[index] }  onChangeComplete={ (color)=>{handlecolor(index,color)}}   />
                                                </div> : null }

                                                </div>
                                                {/* <Button variant="contained" style={{background:"#C4C4C4",width:"25px",height:"25px",borderRadius:"4px",fontSize:"7px"}}>
                                                    color
                                                </Button> */}
                                                </div>
                                                <i className={classes.logowithtextfield1}>
                                                    {/* <CloseIcon onClick={subcount} id={index}/> */}
                                                    <CloseIcon onClick={subcounttag} id={index}/>
                                                </i>
                                                </div>
                                                </Grid>
                                                <Grid item>
                                                    <IconButton onClick={addcounttag}>
                                                        <AddCircleOutlineRoundedIcon/>
                                                    </IconButton>
                                                </Grid>

                                            </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider/>
                                </Grid>
                                <Grid item xs={12} style={{marginBottom:"10px"}}>
                                    <Grid container justify="flex-end">
                                        <Grid item>
                                            <Button color="primary" variant="contained" onClick={control}>
                                                Add Asset
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>








    
        </DialogContent>

      </Dialog>
        
        </div>
    )
}