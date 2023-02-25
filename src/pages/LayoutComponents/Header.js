import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer'

const Header = ({ user, setUser }) => {

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
                            {user && <li><NavLink to={'admin'}>ADMIN</NavLink></li>}
                            {!user && <li><NavLink to={'login'}>LOGIN</NavLink></li>}
                            {!user && <li><NavLink to={'register'}>REGISTER</NavLink></li>}
                            {user && <li><NavLink to={'/'} onClick={() => {
                                setUser(null)
                                localStorage.removeItem('user')
                            }}>LOGOUT</NavLink></li>}
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