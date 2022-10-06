
import './App.css';
import { Routes, Route,useNavigate } from 'react-router-dom'
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
import {app} from './firebase'
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewWeather from './components/NewWeather';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
   






function App() {

  const [user,setUser]=useState({email:"",password:"",firstname:"",lastname:"",dob:"",number:""})
 let navigate = useNavigate();
 const authentication = getAuth();

  function  handleChange(e){
    
    setUser({...user,[e.target.name]:e.target.value})
  }



  const handleAction = (id) => {
    console.log(user)
    if (id === 1) {
      signInWithEmailAndPassword(authentication,user.email , user.password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if(error.code === 'auth/wrong-password'){
            toast.error('Please check the Password');
          }
          if(error.code === 'auth/user-not-found'){
            toast.error('Please check the Email');
          }
        })
    }
  
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, user.email, user.password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
          }
        })
    }
  }


  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }
  }, [])




 
  return (
    <div className="App">
      <header className="App-header">
      <ToastContainer />
        
        <Routes>
          <Route path="/" element={<Landing name="Raja"></Landing>}/>
          <Route path="/exp" element={<Exp></Exp>}/>
          <Route path="/signup" element={<SignUp user={user} handleChange={handleChange} handleAction={() => handleAction(2)}/>}/>
          <Route path="/signin" element={<SignIn  user={user} handleChange={handleChange} handleAction={() => handleAction(1)}/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/form" element={<FormSample/>}/>
          <Route path="/todo" element={<ToDo/>}/>
          <Route path="/map" element={<Map/>}/>
          <Route path="/images" element={<Carouse/>}/>
          <Route path="/car" element={<PhotoCar/>}/>
          <Route path="/user" element={<User user={user} handleChange={handleChange} />}/>
          <Route path="/cardgen" element={<CardGen/>}/>
          <Route path="/photos" element={<UploadPhotos/>}/>
          <Route path="/loop" element={<Box/>}/>
          <Route path="/weather" element={<NewWeather/>}/>
         

         
        
      
          </Routes>
        
     
       
       
      </header>
    </div>
  );
}

export default App;
