import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Posts from '../pages/Posts'
import About from '../pages/About'
import PostIdPage from '../pages/PostIdPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/:id" element={<PostIdPage />} />
            <Route path="/*" element={<Navigate to="/posts"/>} />
        </Routes>
    )
}

export default AppRouter