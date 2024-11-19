import { Chat } from '@mui/icons-material'
import React from 'react'
import Chatitem from '../shared/Chatitem';
import { Stack } from '@mui/material';


const Chatlist = ({ w="100%",
    chats =[] ,
    chatId, 
    onlineusers=[],

    newMessagesAlert=[{
   chatId  : " ",
   count : 0,    
}],

handleDeleteChat,
}) => {
 return (
  <Stack width={w} direction={"column"}>

   {
       chats?.map((data,index)=>{
        const {avatar, name, _id,groupchat,members } = data;

        const newMessageAlert = 
        newMessagesAlert.find(({chatId}) => chatId ===_id
     );        
        
        const isOnline = members?.some((member)=> onlineusers.includes(_id));


           return (<Chatitem
            index= {index}
            newMessageAlert={newMessageAlert} 
            isOnline={isOnline} 
            avatar={avatar}
            name={name}
            _id={_id}
            key={_id}
            groupchat={groupchat}
            sameSender={chatId ===  _id}
            handleDeleteChatopen={handleDeleteChat}   
           />); 
       }
       )
   }
  </Stack>
 )
}

export default Chatlist;
