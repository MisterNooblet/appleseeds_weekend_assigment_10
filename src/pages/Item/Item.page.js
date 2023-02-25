import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import invAPI from '../../utils/InventoryAPI';
import Modal from './components/Modal';

const Item = ({ user }) => {
    let { id } = useParams();

    const [item, setItem] = useState(null)
    const [editMode, setEditMode] = useState(false)
    const [formValue, setFormValue] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const displayItem = async () => {
        const result = await invAPI.getModel(id)
        setItem((prevItem) => result)

    }

    const showForm = () => {
        setFormValue((prev) => prev = {
            fullName: item.fullName,
            details: item.details,
            price: item.price
        })
    }

    useEffect(() => {
        displayItem()

        //eslint-disable-next-line
    }, [])



    const handleSubmit = async (e) => {
        e.preventDefault()
        const formElements = e.target.elements
        const fullName = formElements.fullName.value;
        const price = formElements.price.value;
        const details = [formElements.detail0.value, formElements.detail1.value, formElements.detail2.value, formElements.detail3.value, formElements.detail4.value]
        //eslint-disable-next-line
        const newShoe = {
            fullName: fullName,
            price: price,
            details: details,
        }
        let response = await invAPI.updateItem(newShoe, id)
        setItem((prevItem) => response)
        setEditMode(!editMode)
    }


    if (item && !showModal) {
        return (
            <div>
                <form className='flex-col' onSubmit={(e) => { handleSubmit(e) }}>
                    <h1>{item.fullName}</h1>
                    {editMode && <input type='text' name='fullName' id='fullName' value={formValue.fullName} onChange={(e) => setFormValue({ ...formValue, fullName: e.target.value })} />}
                    <img src={item.image} alt={item.fullName} />
                    <h3>Price: {item.price}</h3>
                    {editMode && <input type='number' name='price' id='price' autoFocus value={formValue.price} onChange={(e) => setFormValue({ ...formValue, price: e.target.value })} min={1} />}
                    <ul>
                        {item.details.map(detail => { return <li key={Math.random()}>{detail}</li> })}
                    </ul>
                    {editMode && <ul className='flex-col'>{formValue.details.map((detail, idx) => <input id={`detail${idx}`} defaultValue={detail} key={Math.random()} />)}</ul>}
                    {editMode && <button type='button' onClick={() => setEditMode(!editMode)}>BACK</button>}
                    {editMode && <button type='button' onClick={() => setShowModal(true)}>DELETE</button>}
                    {editMode && <button type='submit'>UPDATE</button>}
                </form>
                {user && user.isAdmin && !editMode ? <button onClick={() => {
                    setEditMode(!editMode)
                    showForm()
                }}>EDIT ITEM</button> : null}
            </div>
        )
    } else if (showModal) {
        return <Modal setShowModal={setShowModal} item={item} />
    }

}

export default Item