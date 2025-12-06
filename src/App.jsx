import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar'
import Projects from './pages/projects/Projects';
import Footer from './components/footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <TopBar />
        <div className='main-page'>
        <Routes>
          <Route path='/' element={<Navigate to="/home"/>}/>
          <Route path='/home' element= {<Home />}/>
          <Route path='/projects' element= {<Projects />}/>
        </Routes> 
      </div>
      <Footer />
      </>
  )
}

export default App
