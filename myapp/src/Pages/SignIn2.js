import React, { useState } from 'react'
import { getAuth , signInWithEmailAndPassword} from 'firebase/auth';
import { app } from '../Firebase2'

//pehly hum user ka account banae gy agr wo access krta h humre firebase k authentication k sath 
// to he signin hoga ya agr sahi password hoga to signIn ho

const auth = getAuth(app)

const SignIn2 = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth , email , password)
    .then((val) => console.log("SignIn Success")
     ).catch((err) => console.log(err,"Something is Error"))
  }
  return (
    <div className='signin'>
      <h1>SignIn Page</h1>
      <label>Enter Email</label>
      <input onChange={(e) => setEmail(e.target.value)}  value={email} type='email' placeholder='Enter Your Email Here' />
      
      <br /><br />

      <label>Enter Password</label>
      <input onChange={(e) => setPassword(e.target.value)}  value={password}  type='password' placeholder='Enter Your Password Here' />

      <button onClick={signinUser}>Sign In</button>
    </div>
  )
}

export default SignIn2

