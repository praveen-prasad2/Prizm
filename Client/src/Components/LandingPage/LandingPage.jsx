import React, { useRef } from "react";

import "./landing.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { signIn, signUp } from "../../Api/Api";
import axios from "axios";

function LandingPage() {
  // Signup Dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Signup function

  const usernameRef = useRef();
  const emailRef = useRef();
  const phonenoRef = useRef();
  const passwordRef = useRef();

  async function doSignup() {
    if (
      usernameRef.current.value &&
      emailRef.current.value &&
      phonenoRef.current.value &&
      passwordRef.current.value
    ) {
      let newUser = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        phoneno: phonenoRef.current.value,
        password: passwordRef.current.value,
      };
      let response = await axios.post(signUp, newUser);
      setOpen(false);
      setOpenSignin(true);
    } else {
      alert("error");
    }
  }

  // Signin Dialog

  const [openSignin, setOpenSignin] = React.useState(false);

  const handleClickOpenSignin = () => {
    setOpenSignin(true);
  };

  const handlecloseSignin = () => {
    setOpenSignin(false);
  };

  //Signin function

  const userRef = useRef();
  const passRef = useRef();

  async function doSignin() {
    if (userRef.current.value && passRef.current.value) {
      let user = {
        username: userRef.current.value,
        password: passRef.current.value,
      };
      let responsesign = await axios.post(signIn, user);
      alert("Success");
      setOpenSignin(false);
    } else {
      alert("sorry");
    }
  }

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
                <button className="btn" onClick={handleClickOpenSignin}>
                  Signin
                </button>
                <button className="btn" onClick={handleClickOpen}>
                  Signup
                </button>
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
        <div>
          <Dialog open={open} onClose={handleClose}>
            <h1>Signup</h1>
            <DialogContent className="signup-dialog">
              <TextField
                autoFocus
                margin="dense"
                id="username"
                label="Username"
                type="string"
                variant="standard"
                inputRef={usernameRef}
              />
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                variant="standard"
                inputRef={emailRef}
              />
              <TextField
                autoFocus
                margin="dense"
                id="phone"
                label="Phone No"
                type="string"
                variant="standard"
                inputRef={phonenoRef}
              />
              <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                variant="standard"
                inputRef={passwordRef}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={doSignup}>Signup</Button>
            </DialogActions>
          </Dialog>
        </div>

        {/* Signin Dialog  */}

        <div>
          <Dialog open={openSignin} onClose={handlecloseSignin}>
            <h1>Signup</h1>
            <DialogContent className="signup-dialog">
              <TextField
                autoFocus
                margin="dense"
                id="username"
                label="Username"
                type="string"
                variant="standard"
                inputRef={userRef}
              />

              <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                variant="standard"
                inputRef={passRef}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handlecloseSignin}>Cancel</Button>
              <Button onClick={doSignin}>Signin</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
