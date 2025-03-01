// import logo from './logo.svg';
import React from 'react'
import { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router";
import About from './components/About';
import FormText from './components/FormText';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Footer from './components/Footer';

function App() {
  const [mode,setmode] = useState('light')
  const [myAlert,setMyAlert]= useState("hell","hii");
  const showAlert=(message,type)=>{
     setMyAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      showAlert(null)
    }, 5000); 

  }

 const toggleMode=()=>{
    if(mode==='light'){
          setmode("dark")
          document.body.style.backgroundColor="#021227"
           showAlert("Dark Mode Enabled","success")

    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light Mode Enabled","success")

    }
  }
 
  return (
    <> 
      
        <Navbar title="TextManip" about="About" mode={mode} toggleMode={toggleMode}/>
        <Alert myAlert={myAlert}/>
          <div className="container my-5">
          <Routes>
            <Route exact path="/" element={<FormText mode={mode} showAlert={showAlert}></FormText>} />
            <Route exact path="/About" element={<About mode={mode} />} />
          </Routes>
          </div>
        <Footer mode={mode} className="position-absolute"/>
      
    </>
  );
}

export default App;
