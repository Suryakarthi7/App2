import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDom from 'react-dom/client';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import CallIcon from '@mui/icons-material/Call';
import HailIcon from '@mui/icons-material/Hail';
import BackHandIcon from '@mui/icons-material/BackHand';
import PaletteIcon from '@mui/icons-material/Palette';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Divider from '@mui/material/Divider';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ComputerIcon from '@mui/icons-material/Computer';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';

function App() {



/*const [dataSend,setDatasend]=React.useState({
  id:'',
  name:'',
  last:'',
})

const setDatasend1 = (e) =>{
  setDatasend({...dataSend, [e.target.name]:[e.target.value]});
}




const handleSubmit1 = (event) =>{
  event.preventDefault();
  console.log(dataSend)

  Axios.post('http://localhost:3001/send',dataSend).then( (res) => alert('data sent')).
  catch( (err) => console.log(err));

 // Axios.update('http://localhost:3001/update',update1).then(res => console.log('data sent')).
 // catch(err => console.log(err));
    
}

const [update1,setUpdate1]=React.useState('');
const [update2,setUpdate2]=React.useState('');
const handleUpdate1 = () =>{
  Axios.put('http://localhost:3001/update',{update1:update1, update2:update2}).then( (res) =>
    alert('update value'))
}

//Axios.post( 'http://localhost:3001/send', dataSend ).then(res => console.log('success'))
//.catch(err => console.log(err));

const [delete1,setDelete1]=React.useState('');

const handleDelete = () =>{
  Axios.delete(`http://localhost:3001/delete/${delete1}`).then( () => alert('data deleted') )
  console.log(`http://localhost:3001/delete/${delete1}`)
}

*/

//const [display1,setDisplay1]=React.useState(true);

//const [displayForm,setDisplayform] = React.useState(true);



  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
     

    </>

  );
}

export default App;
