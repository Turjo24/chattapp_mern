import { AppBar, Backdrop, Box, IconButton, Menu, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, useState } from 'react'
import {Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon} from '@mui/icons-material';  
import { useNavigate } from 'react-router-dom';


const SearchDialog = React.lazy(() => import("../specific/Search"));
const NewGroup = React.lazy(() => import("../dialog/NewGroup"));  
const Notifications = React.lazy(() => import("../specific/Notifications"));  

const Header = () => {
  
  const[mobile,setmobile] =useState(false);
  const[isSearch,setIsSearch] =useState(false);
  const[isNewGroup,setIsNewGroup] =useState(false); 
  const[isNotification,setIsNotification] =useState(false);

  const navigate = useNavigate();

  const handleMobile = () => {
    setmobile((prev) => !prev); 
   }

    const opensearchDialog = () => { 
       setIsSearch((prev) => !prev);
    }      

    const opennewGroup = () => {
       setIsNewGroup((prev) => !prev); 
    }

    const navigateToGroup = () => { 
      navigate("/groups");
    } 

    const openNotification = () => {  
      setIsNotification((prev) => !prev); 
    };

    const Logouthandler = () =>{
      console.log("Logout")
    }
  return( <>
      <Box sx={{flexGrow: 1}} height={"4rem"}>
         <AppBar position="static" sx={{
        bgcolor: "deepskyblue",
      }} >
        
        <Toolbar>
        <Typography variant="h6" sx={{
          display: {xs: "none", sm: "block"}, 
        }}>
          Chatting Putting
          </Typography>

         <Box sx={{display: { xs: "block",sm: "none"}}}>
         <IconButton color='inherit' onClick={handleMobile}>
         <MenuIcon/>
         </IconButton>
         </Box>


           <Box
              sx={{
             flexGrow: 1,
           }}
          />

     <Box>
            <IconBtn 
            title={"Search"}
            icon={<SearchIcon/>}
            onClick={opensearchDialog}
            />

            <IconBtn 
            title={"Create new Group"}
            icon={<AddIcon />}
            onClick={opennewGroup}
            />

            <IconBtn 
            title={"Manage Group"}
            icon={<GroupIcon/>}
            onClick={navigateToGroup}
            />

            <IconBtn
            title={"Notifications"}
            icon={<NotificationsIcon />}
            onClick={openNotification}
            />  

           <IconBtn
            title={"Logout"}
            icon={<LogoutIcon/>}
            onClick={Logouthandler}
            />  



         </Box>
          </Toolbar>  
      </AppBar> 
   </Box>

  {
    isSearch && (
    <Suspense fallback={<Backdrop open />}>
    <SearchDialog />
    </Suspense>
    )

  }
  {
    isNewGroup && (
    <Suspense fallback={<Backdrop open />}>
    <NewGroup />
    </Suspense>
    ) 

  }

  {
    isNotification && (
    <Suspense fallback={<Backdrop open />}>
    <Notifications />
    </Suspense>
    )         
  } 

   </>
);
};


const IconBtn = ({title, icon, onClick}) => { 
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
}
export default Header;
