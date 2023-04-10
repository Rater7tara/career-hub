import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <div>
        <Home></Home>
      </div>
    </div>
  )
}

export default App
