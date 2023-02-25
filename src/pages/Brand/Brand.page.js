import React from 'react'
import { useParams } from 'react-router-dom';

const Brand = () => {
    let { brandName } = useParams();
    console.log(brandName);
    return (
        <div>{brandName}</div>
    )
}

export default Brand