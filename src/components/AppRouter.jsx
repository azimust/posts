import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router'
import { AuthContext } from '../context'

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={<route.element />}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="/*" element={<Navigate to="/posts" />} />
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={<route.element />}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>
    )
}

export default AppRouter