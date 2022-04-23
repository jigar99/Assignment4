
import React from "react";
import Main from './Main';
import Child from './Child';
import { BrowserRouter as Router, Route, Routes, Link }  from "react-router-dom";
import './App.css'
import Nav from "./Nav";

function App() {
  
    return (
      <div className="App">
        <Router>
          <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/home" element={<Nav/>}/>
          <Route path="/child" element={<Child/>}/>
          </Routes>
          </Router>
      </div>
    )
  
}

export default App;
