import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImg from '../assets/img/logo.png'
import cartImg from '../assets/img/cart3.png'

export const AppHeader = () => {
    return <header className="app-header full app-layout" >
        <div className='head full'></div>
        <section className='header-nav'>
            <nav className="flex justify-between">
                <NavLink className="header-link" to="/">Home</NavLink>
                <NavLink className="header-link" to="/toy">Shop</NavLink>
                <NavLink className="header-link" to="/about">About Us</NavLink>
            </nav>

            <Link className='logo' to="/"><img src={logoImg} /></Link>

            <nav className="flex justify-between">
                <NavLink className="header-link" to="/login">Log in</NavLink>
                <NavLink className="header-link" to="/">Settings</NavLink>
                <NavLink className="header-link" to="/"><img src={cartImg} />Cart</NavLink>
            </nav>
        </section>
    </header>
}
