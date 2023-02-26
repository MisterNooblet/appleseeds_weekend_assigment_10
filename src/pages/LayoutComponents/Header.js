import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer'

const Header = ({ user, setUser }) => {
    let activeClassName = "active-link";
    return (
        <>
            <main>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink className={({ isActive }) =>
                                    isActive ? activeClassName : undefined
                                } to={''}>HOME</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) =>
                                    isActive ? activeClassName : undefined
                                } to={'catalog'}>CATALOG</NavLink>
                            </li>
                            {user && user.isAdmin ? <li><NavLink className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            } to={'admin'}>ADMIN</NavLink></li> : null}
                            {!user && <li><NavLink className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            } to={'login'}>LOGIN</NavLink></li>}
                            {!user && <li><NavLink className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            } to={'register'}>REGISTER</NavLink></li>}
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