
import './App.css';
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Landing from './components/Landing';
import Exp from './components/Hooks';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home'
import FormSample from './components/Form';
import ToDo from './components/Todo';
import Map from './components/Map';
import Carouse from './components/Carouse';
import PhotoCar from './components/PhotoCar';
import User from './components/User';
import CardGen from './components/CardGen';
import UploadPhotos from './components/UploadPhotos';
import Box from './components/Box';
import { app } from './components/firebase';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
   

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'




function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          
        })
        .catch((error) => {
          console.log(error)
 })
      }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
         
        })
        .catch((error) => 
        {
          if(error.code === 'auth/wrong-password'){
            console.error('Please check the Password');
          }
          console.log(error)
 })
    }
  }



 
  return (
    <div className="App">
      <header className="App-header">
        
        <Routes>
          <Route path="/" element={<Landing name="Raja"></Landing>}/>
          <Route path="/exp" element={<Exp></Exp>}/>
          <Route path="/signup" element={<SignUp setEmail={setEmail}
                  setPassword={setPassword}  handleAction={() => handleAction(2)}></SignUp>}/>
          <Route path="/signin" element={<SignIn setEmail={setEmail}
                  setPassword={setPassword}   handleAction={() => handleAction(1)}/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/form" element={<FormSample/>}/>
          <Route path="/todo" element={<ToDo/>}/>
          <Route path="/map" element={<Map/>}/>
          <Route path="/images" element={<Carouse/>}/>
          <Route path="/car" element={<PhotoCar/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/cardgen" element={<CardGen/>}/>
          <Route path="/photos" element={<UploadPhotos/>}/>
          <Route path="/loop" element={<Box/>}/>
         

         
        
      
          </Routes>
        
     
       
       
      </header>
    </div>
  );
}

export default App;
