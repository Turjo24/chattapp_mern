import React from 'react'
import Header from './Header';
import Title from '../shared/Title';
import { Grid } from '@mui/material';
import { Chat } from '@mui/icons-material';
import Chatlist from '../specific/Chatlist';
import { Samplechats } from '../constants/sampleData';

const Applayout = () => (WrappedComponent) => {
  return (props) => {
  return (
    <div>
    <Title />
    <Header />  
    <Grid container height = {"calc(100vh-4rem)"}>
      <Grid item
      lg={3} 
      sm={3}
      md={4} 
      sx={{
        display: { xs: 'none', sm: 'block' },
      }} 
      height={"100%"} 
      >
        <Chatlist chats={Samplechats} chatId={1} />
       

      
      </Grid>
     
      
      
      <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} >
      <WrappedComponent {...props} />
        </Grid>

      <Grid item 
      md={3}
      lg={3}
      sx={{
        display: { xs: "none", md: "block" },
        padding: "2rem",
        bgcolor: "rgba(0,0,0,0.85)",
      }}
       >
          Third
        </Grid>
    </Grid>
    
    <div>Footer</div>  
    </div>
  );
  };
};
console.log("Chats being passed:", Samplechats);
export default Applayout
