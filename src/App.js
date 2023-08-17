import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Component/Nav';
import { Component } from 'react';
import Home from './Component/Home';
import Service from './Component/Service';
import Gallery from './Component/Gallery';
import Contact from './Component/Contact';
import Signin from './Component/Signin'
import Signup from './Component/ٍSignup'

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div className='App'>
          <Nav/>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
