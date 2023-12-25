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

const [display1,setDisplay1]=React.useState(true);

const [displayForm,setDisplayform] = React.useState(true);

  return (
    <>
      
      <h1> mercury </h1>
 
   <img src='https://static.asianpaints.com/content/dam/asian_paints/services/sps-painting-service-banner-new.webp' id='image1'/>
    
    <div id='three'>
    <p> Painting your home is exciting, but choosing the right colours, products, and house painters while ensuring your family’s safety can be a huge task. That's where we come in with our </p>
    <p> aim to make home painting a safe and great experience! With Asian Paints Safe Painting Services, re-imagine your home as a huge canvas. </p>
   <br />
    <p> Start your consultation with Asian Paints Safe Painting Services and let us guide you through all the questions you may have. </p>
    </div>
   
 <br /> <br />
<h1 id='why'> Why choose us? </h1>
<br /> <br />


<div id='icon1'>

<div> 
<HailIcon id='hail'/>
<div id='trained'>
 <h5> TRAINED </h5>   
 <h5> PROFESSIONAL </h5>
 </div>
 </div>

 <div> 
<BackHandIcon id='hand'/>
<div id='trained'>
 <h5> TECHNICAL SITE </h5>   
 <h5> EVALUATION </h5>
 </div>
 </div>

 <div> 
<PaletteIcon id='hand'/>
<div id='trained'>
 <h5> PERSONALIZED </h5>   
 <h5> COLOUR </h5>
 <h5> CONSULTATION </h5>
 </div>
 </div>

 <div> 
<HealthAndSafetyIcon id='hand'/>
<div id='trained'>
 <h5> STRINGENT SAFETY </h5>   
 <h5> PROTOCOL </h5>
</div>
 </div>

 </div>

<p> hi </p>




 







    </>

  );
}

export default App;
