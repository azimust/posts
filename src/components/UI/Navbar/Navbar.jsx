import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'


const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false)
        localStorage.clear('auth');
    }

    return (
        <div className="navbar">
            <button className='navbar__btn' onClick={() => logout()}>Выйти</button>
            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    )
}

export default Navbar