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
                                <NavLink to={''}>HOME</NavLink>
                            </li>
                            <li>
                                <NavLink to={'catalog'}>CATALOG</NavLink>
                            </li>
                            <li>
                                <NavLink to={'admin'}>ADMIN</NavLink>
                            </li>
                            <li>
                                <NavLink to={'login'}>LOGIN</NavLink>
                            </li>
                            <li>
                                <NavLink to={'register'}>REGISTER</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <section>
                    <Outlet />
                </section>
                <Footer />
            </main>
        </>
    )
}

export default Header