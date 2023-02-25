import React from 'react'
import { Link } from 'react-router-dom'

const BrandCard = ({ name, image }) => {
    return (
        <div className='brand-card'>
            <Link to={name}><img src={image} alt={name} /></Link>
        </div>
    )
}

export default BrandCard