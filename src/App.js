import React, { Component } from 'react';
import { HashRouter , Route , Switch} from 'react-router-dom';/*switch for remove Route component when i press in any link*/
import './App.css';
import styled from 'styled-components';


import Navbar from './component/Navbar/Navbar'

import Contact from './component/Contact/Contact'
import Index from './component/Index/index'
class App extends Component {

  render() {
   
    return (
     
        <HashRouter>
         <Navbar />
          <Route exact path='/' component={Index} />
          <Route path='/Contact' component={Contact} />
          

             
         
        
        </HashRouter>
   
    );
    
  }
}
export default App; 
