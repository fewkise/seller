import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import LoginPage from './pages/LoginPage/LoginPage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/registration' element={<RegistrationPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
