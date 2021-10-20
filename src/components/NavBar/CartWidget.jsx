import React, { useState } from 'react'
import { BsFillCartFill } from "react-icons/bs";


export const CartWidget = () => {
const [Carrito, setCarrito] = useState(0)

const AgregarCarrito = () => {
    setCarrito(Carrito + 1)
}

    return (
        <div>
            <a href="">
            <BsFillCartFill className="BsFillCartFill"/>
            </a>
        </div>
    )
}
