import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
function App() {
  const [botton, setBotton] = useState('darkMode')
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const set = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 500)
  }
  const togglemode = () => {
    console.log("it is wiking")
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#332f2f'
      setBotton("Lightmode")
      set("Dark mode Enable", "success")
      document.title='my-app-DarkMode'
      setInterval(()=>{
        document.title='my-app-AmazingMode'
      },2000)

      setInterval(()=>{
        document.title='my-app-Install now'
      },3000)
    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      setBotton("Darkmode")
      set("Light mode Enable", "success")
      document.title='my-app-LightMode'
    }

  }
  return (
    //this is called as reacts framents
    // we are going to start promts in react
    <>

      <Navbar tiltle="Myapp" mode={mode} togglemode={togglemode} botton={botton} />
      <Alert alert={alert} />
      <Router>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Form headline="Write text for analiyse below" set={set}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
