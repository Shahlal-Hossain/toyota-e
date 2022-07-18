import React, { useState } from 'react';
import './Login.css'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { Typography } from '@mui/material';




initializeApp(firebaseConfig);
const auth = getAuth();

const Login = () => {
    const [newUser , setNewUser] = useState(false)
    const [user, setUser] = useState({ photoURL:"", name:"", email:"", password:"",})

    const provider = new GoogleAuthProvider();
    const HendleGoogleLogin = ()=>{
        signInWithPopup(auth, provider)
          .then((result) => {
            const newUser ={
              name:result.user.displayName,
              email:result.user.email,
              photoURL:result.user.photoURL
            }
            setUser(newUser)
          }).catch((error) => {
            console.log(error.code)
          });
        } 





        const hendelChange = (e)=>{
            let isFormValid;
            if(e.target.name === 'password'){
                  isFormValid = e.target.value.length > 8
            }
            if(e.target.name === 'email'){
                  isFormValid = true;
            }
            if(e.target.name === 'name'){
              isFormValid = true;
            }
            if(isFormValid){
              const newUser ={...user}
              newUser[e.target.name]= e.target.value;
              setUser(newUser)
            }
        
          }

        // pass
        const hendelSubmit =(event)=>{
            event.preventDefault()
            if(newUser && user.name && user.email && user.password){
              ///// Create Account
              const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            updateUserName(user.name)
           })
           .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
           });
            }
            if(!newUser && user.email && user.password){
              // sign in
              const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
            });
          }
        }


        const updateUserName =(name)=>{
            const auth = getAuth();
        updateProfile(auth.currentUser, {
          displayName: name.name,
        }).then(() => {
          // Profile updated!
          console.log('user name updated')
        }).catch((error) => {
          // An error occurred
          console.log(error)
        });
          }

    return (
        <div className='loginFrom'>
        <form onSubmitCapture={hendelSubmit}>
            
            { newUser &&
                <h2>Name : {user.name}</h2>
            }
            { newUser &&
                <input onBlur={hendelChange} type="text" name="name" placeholder='Enter your Name' id="" />
            }
            <h2>email : <span>{user.email}</span></h2>

            <input onBlur={hendelChange} type="email" name="email" placeholder='Enter your email' id="" />

            <h2>Password : <span></span></h2>

            <input onBlur={hendelChange} type="password" name="password" placeholder='Password' id="" />
             
            <div className='btnLogin'>
            <input className='submit' onBlur={hendelChange} type="submit" value={newUser ? 'Sign-UP'  : 'Sign-IN'}/>
            </div>
        </form>

        <button onClick={HendleGoogleLogin} className='google' type="submit">Sign-in with Google </button>

            <Typography sx={{marginTop:'10px'}}>{newUser? 'AllRedi have your Account? Please' : `Don't have your Account? Please`}  <strong onClick={()=>setNewUser(!newUser)} style={{borderBottom: '1.5px solid #fff',cursor: 'pointer'}}> {newUser? 'Sign-IN' : 'Create new Account'} </strong>
            </Typography>
    </div>
    );
};

export default Login;