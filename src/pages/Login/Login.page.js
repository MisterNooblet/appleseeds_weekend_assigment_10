import React from 'react'
import UserForm from './components/UserForm'


const Login = ({ setUser }) => {
    return (
        <div>
            <UserForm formType={'login'} setUser={setUser} />
        </div>
    )
}

export default Login