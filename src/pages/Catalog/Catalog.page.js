import React from 'react'
import catalogData from '../../utils/CatalogData'
import BrandCard from './components/BrandCard'

const Catalog = () => {
    return (
        <div>
            {catalogData.map(brand => <BrandCard name={brand.name} image={brand.image} key={Math.random()} />)}
        </div>

    )
}

export default Catalog