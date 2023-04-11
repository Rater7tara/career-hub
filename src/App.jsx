import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';

function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <div>
        <Home></Home>
        <Category></Category>
        <Feature></Feature>
      </div>
      <div>
        <Details></Details>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
