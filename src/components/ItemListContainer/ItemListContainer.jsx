/* import React, { useEffect } from 'react' */
import ItemCardContainer from "components/ItemCard/ItemCardContainer"
import ItemList from "components/ItemListContainer/ItemList"
import "style/ItemListContainer.css"
/* import { useState } from 'react'
import ItemList from './ItemList' */

export default function ItemListContainer ({productos}) {
    
    /* const [products, setProducts] = useState ([])
    console.log(products) */

    //Fetch - Async y Await
    /* const getProducts = async () =>{
        const data = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        const dataProduct = await data.json()
        setProducts(dataProduct)

    } */

    /* useEffect(() => {
        setTimeout(() => getProducts(), 2000)
    },[]) */

    return (
        <div className="containCenter">
            <h3>{productos}</h3>
            <div>
                <ItemCardContainer />
                <ItemList />
            </div>
        </div>
    )
}




