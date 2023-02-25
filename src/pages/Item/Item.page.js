import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import invAPI from '../../utils/InventoryAPI';

const Item = () => {
    let { id } = useParams();
    const [item, setItem] = useState(null)

    const displayItem = async () => {
        const result = await invAPI.getModel(id)
        setItem((prevItem) => result)
    }

    useEffect(() => {
        displayItem()
        //eslint-disable-next-line
    }, [])

    if (item) {
        return (
            <div>
                <h1>{item.fullName}</h1>
                <img src={item.image} alt={item.fullName} />
                <h3>Price: {item.price}</h3>
                <ul>
                    {item.details.map(detail => { return <li>{detail}</li> })}
                </ul>
            </div>
        )
    }

}

export default Item