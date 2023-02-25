import React, { useEffect, useRef, useState } from 'react'

import invAPI from '../../../utils/InventoryAPI'
import ItemForm from './ItemForm'

const InventoryManger = () => {

    const [dataloading, setDataloading] = useState(true)
    const [brands, setBrands] = useState(null)
    const [models, setModels] = useState(null)
    const [selectedBrand, setSelectedBrand] = useState(null)
    const [selectedModel, setSelectedModel] = useState(null)
    const [brandName, setBrandName] = useState(null)

    const model = useRef(null)

    const getData = async () => {
        try {
            const resultBrands = await invAPI.getBrands()
            const resultModels = await invAPI.getModels()
            const initialBrand = resultModels[resultBrands[0].toLowerCase()]
            setModels((prev) => prev = resultModels)
            setBrands((prev) => prev = resultBrands)
            setSelectedBrand((prev) => prev = initialBrand)
            setSelectedModel((prev) => prev = initialBrand[0])
            setBrandName((prev) => prev = resultBrands[0])
        } catch (error) {

        }

        setDataloading(false)
    }

    useEffect(() => {
        getData()
        //eslint-disable-next-line
    }, [])




    const updateModels = (brand) => {
        const name = brand.toLowerCase().split(' ').join('')
        setSelectedBrand((prev) => prev = models[name])
        setSelectedModel((prev) => prev = models[name][0])
        setBrandName(brand)
    }

    const selectModel = (model) => {
        setSelectedModel((prev) => prev = selectedBrand.find(element => element.name === model))

    }

    return (
        <>
            <form id='itemform'>
                <label htmlFor='brand'>Select brand:</label>
                <select id='brand' name='brand' form='itemform' onChange={(e) => { updateModels(e.target.value) }} defaultValue='adidas'>
                    {!dataloading && brands.map((element) => { return <option value={element.toLowerCase()} key={element}>{element}</option> })}
                </select>
                <label htmlFor='model'>Select model:</label>
                <select id='model' name='model' form='itemform' ref={model} onChange={(e) => { selectModel(e.target.value) }}>
                    {!dataloading && selectedBrand ? selectedBrand.map((element) => { return <option value={element.name} key={element.name}>{element.name}</option> }) : null}
                </select>
            </form >
            <div>
                {!dataloading ? <ItemForm brand={brandName} model={selectedModel.name} fullName={selectedModel.fullName} image={selectedModel.image} details={selectedModel.details} /> : null}
            </div>
        </>
    )
}

export default InventoryManger