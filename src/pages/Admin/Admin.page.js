import React, { useState } from 'react'
import greetUser from '../../utils/Greet'
import InventoryManger from './components/InventoryManger'
import UserManager from './components/UserManager'

const Admin = () => {
    const [manage, setManage] = useState(1)
    return (
        <>
            <h1>{`${greetUser()} 'username' what would you like to do?`}</h1>
            <div>
                <button onClick={() => { setManage(1) }}>MANAGE INVENTORY</button>
                <button onClick={() => { setManage(2) }}>MANAGE USERS</button>
            </div>
            <>
                {manage === 1 ? <InventoryManger /> : <UserManager />}
            </>
        </>
    )
}

export default Admin