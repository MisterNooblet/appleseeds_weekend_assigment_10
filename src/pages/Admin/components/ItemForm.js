import React, { useEffect, useState } from 'react'

const ItemForm = ({ model, fullName, image, details }) => {

    const [editMode, setEditMode] = useState(false)
    const [formValue, setFormValue] = useState(null)

    useEffect(() => {
        setFormValue((prev) => prev = {
            model: model,
            fullName: fullName,
            image: image,
            details: details,
            price: 0
        })
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        setFormValue({
            model: model,
            fullName: fullName,
            image: image,
            details: details,
            price: 0
        })

    }, [model, fullName, image, details])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formElements = e.target.elements
        const model = formElements.model.value;
        const fullName = formElements.fullName.value;
        const price = formElements.price.value;
        const details = [formElements.detail0.value, formElements.detail1.value, formElements.detail2.value, formElements.detail3.value, formElements.detail4.value]
        //eslint-disable-next-line
        const newShoe = {
            model: model,
            fullName: fullName,
            price: price,
            details: details,
            image: image
        }

    }


    if (formValue) {
        return (
            <form className='flex-col' onSubmit={(e) => { handleSubmit(e) }}>
                <label htmlFor='model'>{formValue.model}</label>
                {editMode && <input type='text' name='model' id='model' value={formValue.model} onChange={(e) => setFormValue({ ...formValue, model: e.target.value })} />}
                <label htmlFor='fullName'>{formValue.fullName}</label>
                {editMode && <input type='text' name='fullName' id='fullName' value={formValue.fullName} onChange={(e) => setFormValue({ ...formValue, fullName: e.target.value })} />}
                <img src={image} alt={fullName} />
                <label htmlFor='price'>Price:</label>
                <input type='number' name='price' id='price' autoFocus value={formValue.price} onChange={(e) => setFormValue({ ...formValue, price: e.target.value })} min={1} />
                <label htmlFor='details'>{'Details:'}</label>
                <ul>
                    {details.map(detail => <li key={Math.random()}>{detail}</li>)}
                </ul>
                {editMode && <ul className='flex-col'>{formValue.details.map((detail, idx) => <input id={`detail${idx}`} defaultValue={detail} key={Math.random()} />)}</ul>}
                <div className='form-btns'>
                    <button type='button' onClick={() => { setEditMode(!editMode) }}>EDIT DETAILS</button>
                    <button type='submit'>ADD ITEM</button>

                </div>
            </form>
        )

    }
}

export default ItemForm