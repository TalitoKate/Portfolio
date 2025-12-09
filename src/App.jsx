import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar'
import Projects from './pages/projects/Projects';
import Project1 from './pages/projects/WCPS';
import Project2 from './pages/projects/HWRAS';
import Project3 from './pages/projects/DT';
import Project4 from './pages/projects/GQ';
import Project5 from './pages/projects/EC';
import Project6 from './pages/projects/MWBA';
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
          <Route path='/projects/wcps' element= {<Project1 />}/>
          <Route path='/projects/hwras' element= {<Project2 />}/>
          <Route path='/projects/dt' element= {<Project3 />}/>
          <Route path='/projects/gq' element= {<Project4 />}/>
          <Route path='/projects/ec' element= {<Project5 />}/>
          <Route path='/projects/mwba' element= {<Project6 />}/>
        </Routes> 
      </div>
      <Footer />
      </>
  )
}

export default App
