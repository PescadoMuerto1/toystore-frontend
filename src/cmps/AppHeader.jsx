import React from 'react'
import { NavLink } from 'react-router-dom'

export const AppHeader = () => {
    return <header className="app-header" >
        <nav className="header-nav container">
            <NavLink className="header-link" to="/">Home</NavLink>
            <NavLink className="header-link" to="/toy">Toys</NavLink>
        </nav>
    </header>
}
