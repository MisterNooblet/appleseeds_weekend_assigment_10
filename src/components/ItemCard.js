import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({ model, price, image, id }) => {
    return (
        <Link to={`p/${id}`}>
            <div>
                <h1>{model}</h1>
                <img src={image} alt={model} />
                <h3>{price}</h3>
            </div>
        </Link>
    )
}

export default ItemCard