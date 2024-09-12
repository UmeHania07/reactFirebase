//database se mai interact krwane k liye mai database likh rahi hu
import { getDatabase, ref, set } from 'firebase/database'

import './App.css'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
// import { app } from './Firebase'
import { app } from './Firebase2'
import Signup2 from './Pages/Signup2';
import { useEffect, useState } from 'react';
import SignIn2 from './Pages/SignIn2';
// import SignIn from './Pages/SignIn';
// import Signup from './Pages/Signup';

// const db = getDatabase(app)

//ye auth apki ek he hogi agr authentication kro gi
//ye google k through logIn krne k liye h or ye apko ek logOut krne k liye h
const auth = getAuth(app)

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    //ye onAuthStateChanged jab run hoa h jab koi user in ya out hota h 
    onAuthStateChanged(auth, user => {
      if (user) {
        //Yes , you are Logged
        setUser(user);
        // console.log("Hello" , user)
      } else {
        //User is logged Out
        console.log("Your Logged Out")
        setUser(null);
      }
    })
  }, []);

  if (user === null) {
    return (
      <div className="App">
        <h1>FireBase React App</h1>

        <Signup2 />
        <SignIn2 />

      </div>
    )
  }





  //Authentication ka function h

  // const singupUser = () => {
  //   createUserWithEmailAndPassword(
  //     auth,
  //     'umeaiman@gmail.com',
  //     "Aimankhan9090",
  //   ).then((value) => console.log(value))
  // }


  //ye realtime database ka function h

  // const putData = () =>{

  //ye users/hani ek root 

  //   set(ref(db , 'users/hani') , {
  //     id: 1,
  //     name: "Ume Hania",
  //     age: 18,
  //   })
  // }

  // const putData2 = () =>{

  //ye users/hani ek root 

  //     set(ref(db , 'users/aiman') , {
  //       id: 2,
  //       name: "Ume Aiman",
  //       age: 25,
  //     })
  //   }
  return (
    <div className="App">
      <h1>FireBase React App</h1>
      {/* <button onClick={putData}>Put Data</button>
      <button onClick={putData2}>Put Data2</button> */}

      {/* <button onClick={singupUser}>Create User</button> */}


      {/* <Signup/> */}
      {/* <SignIn/> */}
       
      {/* <Signup2 /> */}
       {/* <SignIn2/>  */}
      
      <h1>Hello {user.email} </h1>
      <button onClick={() => signOut(auth)}>Sign Out</button> 

    </div>
  );
}

export default App;
