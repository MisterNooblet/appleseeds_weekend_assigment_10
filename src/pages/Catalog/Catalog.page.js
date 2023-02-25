import React from 'react'
import catalogData from '../../utils/CatalogData'
import BrandCard from './components/BrandCard'

const Catalog = () => {
    return (
        <div className='catalog-page'>
            {catalogData.map(brand => <BrandCard name={brand.name} image={brand.image} key={Math.random()} />)}
        </div>

    )
}

export default Catalog