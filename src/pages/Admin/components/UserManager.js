import React, { useEffect, useState } from 'react'

import styles from './UsersTable.module.css'
import { FcCheckmark, FcHighPriority } from 'react-icons/fc';
import userAPI from '../../../utils/UsersAPI';
const UserManager = () => {
    const [users, setUsers] = useState(null)
    useEffect(() => {
        initList()
        //eslint-disable-next-line
    }, [])

    const initList = async () => {
        const result = await userAPI.getUsers()
        setUsers((prev) => result)
    }

    const deleteUser = async (id) => {
        const updatedList = await userAPI.deleteUser(id)
        setUsers((prev) => updatedList)
    }
    if (users) {
        return (
            <div className={styles.table_container}>

                <div className={`${styles.divTable} ${styles.usertable}`}>
                    <div className={styles.divTableHeading} >
                        <div className={styles.divTableRow} >
                            <div className={styles.divTableHead} >Username</div>
                            <div className={styles.divTableHead} >Display Name</div>
                            <div className={styles.divTableHead} >Admin?</div>
                            <div className={styles.divTableHead} >Delete?</div>
                        </div>
                    </div>
                    <div className={styles.divTableBody}>
                        {
                            users.map((element, idx) => {
                                return (
                                    <div key={idx} className={`${styles.divTableRow} ${element.voted ? styles.voted : styles.default}`}>
                                        <div className={styles.divTableCell}>{element.username}</div>
                                        <div className={styles.divTableCell}>{element.alias}</div>
                                        <div className={styles.divTableCell}>{element.isAdmin ? <FcCheckmark /> : <FcHighPriority />}</div>
                                        <div className={styles.divTableCell}><button onClick={() => { deleteUser(element.id) }}>DELETE USER</button></div>
                                    </div>)
                            })
                        }

                    </div>
                </div>

            </div>

        )

    }
}

export default UserManager