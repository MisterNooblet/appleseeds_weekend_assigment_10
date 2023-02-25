import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemCard from '../../components/ItemCard';
import invAPI from '../../utils/InventoryAPI';

const Brand = () => {
    let { brandName } = useParams();
    let showLink = true
    const [items, setItems] = useState(null)


    const getData = async () => {
        const result = await invAPI.getByBrand(brandName.toLowerCase())
        setItems((prevItems) => prevItems = result)
        console.log(result);
    }

    useEffect(() => {
        getData()
        //eslint-disable-next-line
    }, [])
    return (
        <>
            <div>{brandName}</div>
            {items ? items.map(item => { return <ItemCard model={item.model} image={item.image} key={Math.random()} price={item.price} id={item.id} showLink={showLink} /> }) : null}
        </>
    )
}

export default Brand