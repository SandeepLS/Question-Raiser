import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from './Pages/chatbot/Login'
import Home from './Pages/Home/Home'
import AdminHome from './Pages/Home/AdminHome'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import Campus from './Pages/Campus/Campus'
import UserProfile from './Pages/UserProfile/UserProfile'


const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Admin' element={<AdminHome />} />
            <Route path='/Auth' element={<Auth />}/>
            <Route path='/AskQuestion' element={<AskQuestion />}/>
            <Route path='/Questions' element={<Questions />}/>
            <Route path='/Questions/:id' element={<DisplayQuestion />}/>
            <Route path='/Tags' element={<Tags />} />
            <Route path='/Users' element={<Users />} />
            <Route path='/Users/:id' element={<UserProfile />} />
            <Route path='/Campus' element={<Campus />} />

            <Route path='/chatbot/login' element={<Login />} />
            
        </Routes>
    )
}

export default AllRoutes
