
import './App.css';
// import About from './components/About';
import './components/Navbar'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [Mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const [BtColor,setBtColor] = useState('info');


  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0c355e';
      showAlert("Dark mode has been enabled","success")
      setBtColor('dark')
      document.title = 'TextUtil-Dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
      setBtColor('info')
      document.title = 'TextUtil-Light mode';
    }
  }
  const toggleDef = ()=>{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success")
    setBtColor('info')
  }
  const toggleR = ()=>{
    document.body.style.backgroundColor = '#e907078f';
    showAlert("Red mode has been enabled","success")
    setBtColor('danger')
  }
  const toggleG = ()=>{
    document.body.style.backgroundColor = '#07e91a8f';
    showAlert("Green mode has been enabled","success")
    setBtColor('success')
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title='TextUtils' mode={Mode} toggleMode={toggleMode} toggleDef={toggleDef} toggleR={toggleR} toggleG={toggleG}  />
    <Alert alert={alert}/>
    <div className="container my-3" >
    {/* <Routes>
          <Route exact path="/about" element={ <About/>} />
          <Route exact path="/"element={ <TextForm showAlert ={showAlert} 
          heading='Enter the text to analyze below' mode={Mode} btColor={BtColor} />} />
    </Routes> */}
    {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
          <TextForm showAlert ={showAlert} 
          heading='Enter the text to analyze below' mode={Mode} btColor={BtColor} />
          {/* </Route>
    </Switch> */}
    </div>
    {/* </Router> */}
    </>
  
  );
}

export default App;
