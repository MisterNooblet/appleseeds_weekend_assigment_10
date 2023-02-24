import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer'

const Header = () => {
    return (
        <>
            <main>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink>HOME</NavLink>
                            </li>
                            <li>
                                <NavLink>CATALOG</NavLink>
                            </li>
                            <li>
                                <NavLink>ADMIN</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            </main>
            <Outlet />
            <Footer />
        </>
    )
}

export default Header