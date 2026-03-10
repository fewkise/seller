import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ProfileSeller from './pages/ProfileSeller/ProfileSeller'
import CreateNewItem from './pages/CreateNewItem/CreateNewItem'
import SettingsSeller from './pages/SettingsSeller/SettingsSeller'
import SubSeller from './pages/SubSeller/SubSeller'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/registration' element={<RegistrationPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/profileSeller' element={<ProfileSeller/>}/>
          <Route path='/createNewItem' element={<CreateNewItem/>}/>
          <Route path='/settingsSeller' element={<SettingsSeller/>}/>
          <Route path='/subSeller' element={<SubSeller/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
