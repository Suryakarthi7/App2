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
      
      <h1 id='title1'> mercury </h1>
 
   <img src='https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' id='image1'/>
   
    
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
<br />
 <h1 id='three'> We help you with </h1>
<br />

<div id='fourImages'> 

  <div>
    <img src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-safe-painting-offerings-texture-asian-paints.webp' id='image5'/>
  </div>

  <div>
    <img src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/wallpaper-a-sps.webp' id='image5'/>
  </div>

  <div>
    <img src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/sps-offerings-waterproofing-asian-paints-new.webp' id='image5'/>
  </div>

  <div>
    <img src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-safe-painting-offerings-wood-finishes-asian-paints.webp' id='image5'/>
  </div>


</div>

<div id='fourContent'>

  <div>
    <p> <b> Wall Textures </b> </p>
    <br />
    <p> High-quality textured designs to get a </p>
    <p> modern facelift for your homes and </p>
    <p> other spaces. </p>
  </div>

  <div>
    <p> <b> Wallpapers </b> </p>
    <br />
    <p> Designer wallpapers with attractive </p>
    <p> patterns which works wonders in </p>
    <p> elevating house walls. </p>
  </div>

  <div>
    <p> <b> Waterproofing  </b> </p>
    <br />
    <p> Devised modern waterproofing </p>
    <p> techniques to make your home water </p>
    <p> resistant for years to come. </p>
    
  </div>

  <div>
    <p> <b> Wood Finishes </b> </p>
    <br />
    <p> Preserve the beauty of your wood with </p>
    <p> a touch of style and luxury that goes </p>
    <p>  hand in hand. </p>
  </div>

</div>
<br />
<br />
<br />

<div id='books1'> 
  
<div id='book1'>
<LibraryBooksIcon id='book'/>
<h3> Schedule an appointment </h3>
<br />
<p> Fill the form online and with your details, </p>
<p> following which, you will receive a call  </p>
<p> from our customer care executive to </p>
<p> schedule an appointment for our Asian </p>
<p> Paints Safe Painting Service. </p>
</div>

<div id='book1'>
<ComputerIcon id='book'/> 
<h3> Product & site consultation </h3>
<br />
<p> Our Asian Paints Safe Painting Service </p>
<p>  Associate will get in touch with you. The </p>
<p> associate will assist with all your </p>
<p> queries, and provide a product and site </p>
<p> consultation. </p>
</div>

<div id='book1'>
<ColorLensIcon id='book'/>
<h3> Schedule an appointment </h3>
<br />
<p>  Asian Paints Safe Painting Service offers </p>
<p> a curated selection of our favourite safe </p>
<p> painting colours for you to choose from. </p>
<p>  Our expert will help you finalize the </p>
<p> colours. </p>
</div>

</div>
<br /> <br />

<h2 id='three1'> FAQs</h2>

<div id='accordion'>
  <Paper elevation={3}>
 <Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />} >
     <Typography> <h2> What is Asian Paints Safe Painting Service? </h2> </Typography>
     </AccordionSummary>
     <AccordionDetails>
      <Typography>
      We at Asian Paints are here to facilitate a professional experience and to that end, have partnered with service providers and painting professionals all over India. The </Typography>
      <Typography> Safe Painting Service connects you with a service provider/painting professional who will help deliver safe and hygienic home painting/sanitization services using </Typography>
     <Typography> genuine and quality Asian Paints products. The service also allows for free consultation with our representative to assist in the selection of paint products, shades, </Typography>
     <Typography> textures, etc. </Typography>
     
     </AccordionDetails>
</Accordion>
</Paper>

<Paper elevation={3}>
 <Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />} >
     <Typography> <h2> How will Asian Paints Safe Painting Service go about painting your home? </h2> </Typography>
     </AccordionSummary>
     <AccordionDetails>
      <Typography>As part of this service, our representative will contact you to understand your painting needs. The associate will visit your premises and do the site evaluation. Based </Typography>
      <Typography> on the site evaluation and your painting/sanitization requirements, the associate will provide the service provider’s quotation for painting your premises. All the</Typography>
      <Typography>processes are carried out while following stringent safety protocols which include temperature checks, site sanitization, enhanced supervision and 10+ safety </Typography>
      <Typography>measures to ensure a safe environment. The Supervisor will also be available to assist the site on regular intervals, or, on need basis to do quality checks and supervise </Typography>
      <Typography>the painting work. </Typography>
     
     </AccordionDetails>
</Accordion>
</Paper>



<Paper elevation={3}>
 <Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />} >
     <Typography> <h2>Who will paint my house? </h2> </Typography>
     </AccordionSummary>
     <AccordionDetails>
      <Typography> We have a panel of contractors and painters with the service providers, who are trained by us with respect to our product range. The painters are trained to ensure</Typography>
      <Typography> that the correct application procedures are followed. They are also trained in textures and specialty paint finishes.</Typography>
    
     
     </AccordionDetails>
</Accordion>
</Paper>



<Paper elevation={3}>
 <Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />} >
     <Typography> <h2> What are the features of Asian Paints Safe Painting Service? </h2> </Typography>
     </AccordionSummary>
     <AccordionDetails>
      <Typography>- Stringent safety protocols are followed </Typography>
      <Typography> - Get expert guidance for product and shade selection</Typography>
      <Typography>- Complete supervision during the execution of site </Typography>
      <Typography>- Complete site sanitization </Typography>
      <Typography> - Asian Paints product warranty</Typography>
     
     </AccordionDetails>
</Accordion>
</Paper>



<Paper elevation={3}>
 <Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />} >
     <Typography> <h2> What are the benefits of Asian Paints Safe Painting Service?</h2> </Typography>
     </AccordionSummary>
     <AccordionDetails>
      <Typography>- Peace of mind as we ensure complete safety for you and your family </Typography>
      <Typography> - A complete hassle-free experience</Typography>
      <Typography> - Visualize how your home will look like with your selected colours via our consultation</Typography>
      <Typography>- Access to some of the industry’s best products for wallpapers and textures </Typography>
      <Typography>- Expert painters who provide a superior finish </Typography>
     
     </AccordionDetails>
</Accordion>
</Paper>

</div>
<br />

<div id='footer1'>

<div id='copyright1'>
  <p> <CopyrightIcon id='copyright'/> </p>
 <p id='asian1'> asian paints - all rights reserved </p>
  </div>

<div id='socialicons'>
  <p> <FacebookIcon /> </p>
  <p> <TwitterIcon /> </p>
  <p> <InstagramIcon /> </p>
</div>

</div>

    </>

  );
}

export default App;
