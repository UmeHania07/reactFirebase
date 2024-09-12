import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../Firebase2'

const auth = getAuth(app);
//google se user ko login krne k liye ..
const googleProvider = new GoogleAuthProvider();

const Signup2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value => alert("Success")))
  }
  const signupWithgoogle = () => {
    //ye user ko automatic signin kre ga with user google account
    signInWithPopup(auth, googleProvider)
  }

  return (
    <div className='signup-page'>
      <h1>SignUp Page</h1>
      <label>Email:</label>
      <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' required placeholder='Enter Your Email Here' />
      <br /><br />
      <label>Password:</label>
      <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' required placeholder='Enter Your password Here' />

      {/* Google se signin keme k liye k user google se signIn kr skhta h */}
      <br /><br />
      <button onClick={signupWithgoogle}>SignIn With Google</button>
      <button onClick={createUser}>Signup2</button>


    </div>
  )
}

export default Signup2


