import Item from "components/ItemListContainer/Item"
import ItemCount from "components/ItemCard/ItemCount"
import {useEffect, useState} from 'react';

const ItemList = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        Item
        .then(response =>{
            setProduct(response)
        })
    },[])
    
    return(
        <div>
            {product.map(prod => <div key={prod.id}>
                                    <img src={prod.pictureUrl} alt={prod.title}/>
                                    <h5>{prod.title}</h5>
                                    <p>${prod.price}</p>
                                    <ItemCount initial={1} stock={prod.stock}/>
                                </div>
            )}
        </div>
    )
}

export default ItemList