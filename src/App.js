// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
import React, { useState } from 'react';

// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light') // whetthe dark mode is enable or not 

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#000752'
      showAlert(" Dark mode has been enabled", "success")
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert(" Light mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <div> */}
      {/* <Navbar title = "TextUtilse" aboutText ="About Text"/>  */}
      <Router>
      <Navbar title="TextUtilse" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/About">
            <About mode = {mode}/>
          </Route>
          <Route exact path="/"> 
        <Textform showAlert = {showAlert} heading="TextUtils- Word Counter, Character Counter, Remove Extra Spaces"  mode = {mode} />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
