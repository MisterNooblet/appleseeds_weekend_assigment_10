import React from 'react'
import { Link } from 'react-router-dom'

const BrandCard = ({ name, image }) => {
    return (
        <div>
            <Link to={name}><img src={image} alt={name} /></Link>
        </div>
    )
}

export default BrandCard