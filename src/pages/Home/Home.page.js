import React from 'react'
import { Link } from 'react-router-dom'
import greetUser from '../../utils/Greet'

const Home = ({ user }) => {
    return (
        <div className='home-screen'>
            <h1>{`${greetUser()} ${user ? user.alias : 'user'} what do your feet desire? `}</h1>
            <Link to={'/catalog'}><button>TO CATALOG</button></Link>
        </div>
    )
}

export default Home