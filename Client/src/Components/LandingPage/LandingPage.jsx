import React from "react";

import "./landing.scss";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function LandingPage() {


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="bg-container">
        <div className="content-wrapper">
          <div className="left">
            {/* <button className="contact">Contact</button> */}
            <div className="landing-main">
              <h1>SHARE SMILES</h1>
              <p>
                "Elevate your social experience with{" "}
                <span className="prizm">Prizm</span>, where connections come
                alive and stories find their stage. Join us today to be a part
                of a vibrant community that celebrates the beauty of human
                connections."
              </p>
              <div className="buttons">
                <button className="btn">Signin</button>
                <button className="btn" onClick={handleClickOpen}>Signup</button>
              </div>
            </div>
          </div>
          <div className="right">
            <video autoPlay muted loop className="video-bg">
              <source src="\src\assets\bg-video.mov" type="video/webm" />
            </video>

          </div>
        </div>

{/* Signup Dialog  */}
            <div >
      
      <Dialog open={open} onClose={handleClose} >

        <h1>Signup</h1>
        <DialogContent className="signup-dialog">
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="string"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Signup</Button>
        </DialogActions>
      </Dialog>
    </div>
      </div>
    </>
  );
}

export default LandingPage;
