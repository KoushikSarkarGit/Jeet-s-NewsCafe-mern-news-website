import './App.css';

import React, { Component } from 'react'
import Newscontainer from './components/Newscontainer';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  
  Routes,
  Route,
  
  
} from "react-router-dom";
import Spinner from './components/Spinner';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div >
        
        <Navbar/>
       {/* <Spinner/> */}
      <div className="container" >
      
      <Routes>

      
      <Route  path="/" element={<Newscontainer key="home" category=''/>} />
      <Route  path="/business" element={ <Newscontainer key="business" category='business'/> } />
      <Route  path="/entertainment" element={ <Newscontainer key="entertainment" category='entertainment'/> } />
      <Route  path="/general" element={ <Newscontainer key="general" category='general'/> } />
      <Route  path="/health" element={ <Newscontainer key="health" category='health'/> } />
      <Route  path="/science" element={ <Newscontainer key="science" category='science'/> } />
      <Route  path="/sports" element={ <Newscontainer key="sports" category='sports'/> } />
      <Route  path="/technologyexact" element={ <Newscontainer key="technology" category='technology'/> } />
      
        

     
       
      </Routes>
        
      </div>

      
      </div>
      </Router>
    )
  }
}

