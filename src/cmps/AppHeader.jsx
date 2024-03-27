import React from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from '../assets/img/logo.png'

export const AppHeader = () => {
    return <header className="app-header full app-layout" >
        <div className='head full'></div>
        <section className='header-nav'>
            <nav className="flex justify-between">
                <NavLink className="header-link" to="/">Home</NavLink>
                <NavLink className="header-link" to="/toy">Shop</NavLink>
                <NavLink className="header-link" to="/about">About Us</NavLink>
            </nav>
            <div className='logo'>  <img src={logoImg} /></div>
        </section>
    </header>
}
