import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({ model, price, image, id, showLink }) => {

    if (showLink) {
        return (
            <Link to={`p/${id}`}>
                <div className='item-card'>
                    <h1>{model}</h1>
                    <img src={image} alt={model} />
                    <h3>{price}</h3>
                </div>
            </Link>
        )
    } else {
        return (

            <div className='item-card'>
                <h1>{model}</h1>
                <img src={image} alt={model} />
                <h3>{price}</h3>
            </div>

        )
    }

}

export default ItemCard