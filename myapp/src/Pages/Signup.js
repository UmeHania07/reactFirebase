import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from "../Firebase";

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then((value =>
            alert("Success"))
        ).catch((err => alert("Something is error")))
    }
    const signupWithgoogle = () => {
        //ye user ko automatic signin kre ga with user google account
        signInWithPopup(auth, googleProvider)
    }

    return (
        <div className="signup">
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder='Enter Your Email' />


            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                required
                placeholder='Enter Your Password' />

            <button onClick={signupWithgoogle}>SignIn With Google</button>
            <button onClick={createUser}>Signup</button>



        </div>
    )
}

export default Signup;
