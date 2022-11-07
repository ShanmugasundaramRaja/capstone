
import './App.css';
import { Routes, Route,useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Landing from './components/Landing';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home'

import ToDo from './components/Todo';
import Map from './components/Map';
import Carouse from './components/Carouse';

import User from './components/User';


import { useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,updatePassword,updateEmail,deleteUser } from 'firebase/auth'

import NavBar from './components/NavBar';
import Header from './components/Header';


import Trial from './components/Trial'










function App() {

  const [user,setUser]=useState({email:"",password:"",firstname:"",lastname:"",dob:"",number:""})
 let navigate = useNavigate();
 const authentication = getAuth();
 const customer=authentication.currentUser;
 
 let newpass;
 let newmail;



 const deleteMe=()=>{
  deleteUser(customer).then(()=>{
    console.log("User deleted ")
  }).catch((error)=>{console.log(error)})
 }

 const handleMail=(e)=>{
newmail=e.target.value
 }
 const handlePass=(e)=>{
  newpass=e.target.value
   }

 const changePass=()=>{
  updatePassword(customer,newpass).then(()=>{
    console.log("Password changed")
  }).catch((error)=>{console.log(error)})
 }
 const changeMail=()=>{
  updateEmail(customer,newmail).then(()=>{
    console.log("Email changed")
  }).catch((error)=>{console.log(error)})
 }

  function  handleChange(e){
    
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/signin");
  };



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
      createUserWithEmailAndPassword(authentication, user.email, user.password,user.firstname,user.lastname,user.number,user.dob)
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
  






 
  return (
    <div className="App">
      <header className="App-header">
      <ToastContainer />
        
        <Routes>
          <Route path="/" element={<Landing name="Raja"></Landing>}/>
         
          <Route path="/signup" element={<SignUp user={user} handleChange={handleChange} handleAction={() => handleAction(2)}/>}/>
          <Route path="/signin" element={<SignIn  user={user} handleChange={handleChange} handleAction={() => handleAction(1)}/>}/>
          <Route path="/home" element={<Home handleLogout={handleLogout}/>}/>
    
          <Route path="/todo" element={<ToDo handleLogout={handleLogout}/>}/>
          <Route path="/map" element={<Map/>}/>
          <Route path="/images" element={<Carouse handleLogout={handleLogout}/>}/>
      
          <Route path="/user" element={<User user={user} changeMail={changeMail} changePass={changePass} handleMail={handleMail} handlePass={handlePass} handleChange={handleChange} deleteMe={deleteMe}handleLogout={handleLogout}  />}/>
         
       
          
    
          <Route path="/navbar" element={<NavBar />}/>
          <Route path="/todoform" element={<Header/>}/>
        
          
          <Route path="/dum" element={<Trial/>}/>
        
        
     

         
         

         
        
      
          </Routes>
        
     
       
       
      </header>
    </div>
  );
}

export default App;
