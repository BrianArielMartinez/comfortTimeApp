import React from 'react'
import ItemCardContainer from "../ItemCard/ItemCardContainer"
import "/Users/Usuario/comfortTime-app/src/style/ItemListContainer.css"

export default function ItemListContainer ({productos}) {
    
    return (
        <div className="containCenter">
            <h3>{productos}</h3>
            <div>
                <ItemCardContainer />
            </div>
        </div>
    )
}




