import React from 'react';
import { InstantSearch,Hits,Highlight} from 'react-instantsearch/dom';

import styles from "./ContactGs1.module.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import {Button} from "@material-ui/core";
import { connectSearchBox } from 'react-instantsearch-dom';
const algoliasearch =require("algoliasearch")
const searchClient = algoliasearch(
    'EIBX1WTLJD',
    '3177db902196a1ed63816828758da5d3'
  );


  const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: "95%",
      height:"50.61px",
      border: "1px solid #000000",
      borderRadius: "4px"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      paddingTop: 5,
      paddingBottom:5,
      paddingLeft:15,
      paddingRight:2,
      marginRight:10
    },
    iconButton1: {
      
      paddingLeft:"20px",
      paddingRight:"20px",
      marginRight:10
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));
 
export default function ContactGs1(){
    const [search,changesearch]=React.useState("")
    const classes = useStyles();
    
    const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
      <div>
                <Paper  className={classes.root}>
                    <IconButton className={classes.iconButton} aria-label="menu">
                      <SearchIcon  />
                    </IconButton>
                    <InputBase
                      className={classes.input}
                      type="search"
                      value={currentRefinement}
                      placeholder="Enter Query"
                      inputProps={{ 'aria-label': 'search google maps' }}
                      onChange={event => refine(event.currentTarget.value)}
                    />
                    
                      <Button variant="contained" color="primary" onClick={hits} className={classes.iconButton1}> Search</Button>
                    
                    
                    
                  </Paper>
    
      </div>
    );


const CustomSearchBox = connectSearchBox(SearchBox);
    const hit=({hit})=>{
        return(
        <div>
          <img src={hit.image}/>
          {hit.t}
          <div>
          
          </div>
          
        </div>
        )}
      const handlechange=(event)=>{
        changesearch(event.target.value)
      }
      const hits=()=>{
        console.log("Hits")
        return(
          <div>
            <SearchBox value={"1"}/>
            <Hits hitComponent={hit}/>
          </div>
        )
      }
    return(
       <>
            
            <main>
                <div>
                <InstantSearch
                
                indexName="CIH"
                searchClient={searchClient}
                
                >
                  
                 
                  <CustomSearchBox/>
            
                <div style={{display:"none"}}>
                <Hits hitComponent={hit}/>
                </div>
                
            </InstantSearch>
            </div>
            </main>
    

       </>
    )
}