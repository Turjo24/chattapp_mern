import React from "react";
import { Link } from "../StyledComponents";
import { Box, Typography, Stack } from "@mui/material";
import { memo } from "react";

const Chatitem = ({
  avatar,
  name,
  _id,
  groupchat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  handleDeleteChatOpen,
}) => {
  return (
    <Link
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupchat)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "1rem",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          gap: "1rem",
          position: "relative",
        }}
      >
        {/* Avatar & Name */}
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )}
        </Stack>

        {/* Online Indicator */}
        {isOnline && (
          <Box
            sx={{
              width: "0.5rem",
              height: "0.5rem",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(Chatitem);
