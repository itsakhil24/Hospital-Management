import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './SignUp.css';
import {} from "react-router-dom"

import config from '../config';

const {BASE_API_URL} = config

function SignUp({userInfo, setUserInfo}) {

  const navigation = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // Add your sign-in logic here

    const ENDPOINT = `${BASE_API_URL}/auth/signin`

    const payload = {
      email : email,
      password : password
    }

    const OPTION = {
      method : "POST",
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(payload)
    }

    let res = await fetch(ENDPOINT, OPTION)

    res = await res.json()

    // console.log(res)
    // TODO : using setUserInfo of App.js that we recieved through the props, we have to update the userInfo state of App.js

    if(res.success){

      const {userId, token, email, profileImage, name} = res;

      setUserInfo({
        isSignin : true,
        userId : userId,
        token : token,
        email : email,
        name : name,
        profileImage : profileImage
      })

      // Redirect to home screen
      navigation(-1)

    }

  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="name"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Signup;
