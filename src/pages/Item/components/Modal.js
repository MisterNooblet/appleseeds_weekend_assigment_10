import React from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCard from '../../../components/ItemCard'
import invAPI from '../../../utils/InventoryAPI'
const Modal = ({ item, setShowModal }) => {
    const navigate = useNavigate()
    const deleteItem = () => {
        invAPI.deleteItem(item.id)
        navigate('/catalog')
    }

    return (
        <div>
            <h1>Are you sure you want to delete this item?</h1>
            <ItemCard model={item.fullName} price={item.price} image={item.image} />
            <h3 className='error'>Note: this action is irreversible!</h3>
            <button onClick={() => { setShowModal(false) }}>BACK</button><button onClick={deleteItem}>YES DELETE THE ITEM</button>
        </div>
    )
}

export default Modal