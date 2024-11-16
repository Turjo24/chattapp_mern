import React, { useState } from 'react';
import { Avatar, Button, Container, IconButton, Paper, TextField, Typography, Stack } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp'; 
import { usernameValidator } from '../utils/validator';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const password = useStrongPassword("");
  const bio = useInputValidation("");
  const username = useInputValidation("",usernameValidator);

  const avatar = useFileHandler("single");
  const handlelogin = (e) => {
    e.preventDefault();
  }   
  const handleSignup = (e) => {
    e.preventDefault(); 
  }

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handlelogin}
            >
              <TextField required fullWidth label="username" margin="normal" variant="outlined" />
              <TextField
                required
                fullWidth
                label="password"
                type="password"
                margin="normal"
                variant="outlined"
              />
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
              <Typography textAlign="center" m="1rem">
                Or
              </Typography>
              <Button fullWidth variant="text" onClick={toggleLogin}>
                Sign Up
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Signup</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleSignup}
            >
              <Stack position="relative" width="10rem" margin="auto">
                <Avatar 
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src= {avatar.preview}
                />

                {avatar.error && ( 
              <Typography
              m={"1rem auto"}
              width={"fit-content"}
              display={"block"} 
              color="error" 
              variant="caption"
              >
               {avatar.error}
                </Typography>
                )}

                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    color: "blue",
                    bgcolor: "rgba(255,255,255,0.5)",
                    ":hover": {
                      bgcolor: "rgba(255,255,255,0.8)",
                    }
                  }}
                  component="label"
                >
                  <CameraAltIcon />
                  <input
                    type="file"
                    style={{
                      display: "none",
                    }}
                    onChange={avatar.changeHandler} 
                  />
                </IconButton>
              </Stack>
              <TextField required fullWidth label="Name" margin="normal" variant="outlined" value={name.value} onChange={name.changeHandler} />
              <TextField
                required
                fullWidth
                label="password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value} 
                onChange={password.changeHandler}
              />

              {password.error && ( 
              <Typography color="error" variant="caption">
               {password.error}
                </Typography>
                )}
                
              <TextField 
              required fullWidth label="username" 
              margin="normal" 
              variant="outlined" 
              value={username.value} 
              onChange={username.changeHandler}/>
              
              {username.error && (
              <Typography color="error" variant="caption">
               {username.error}
                </Typography>
                )}

              <TextField 
              required fullWidth label="Bio" 
              margin="normal" 
              variant="outlined" 
              value={bio.value} 
              onChange={bio.changeHandler}/>
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                SignUp
              </Button>
              <Typography textAlign="center" m="1rem">
                Or
              </Typography>
              <Button fullWidth variant="text" onClick={toggleLogin}>
                Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
