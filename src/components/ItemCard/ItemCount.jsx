import { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

export default function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const lessClick = () => {
            setCount(count - 1)
    }

    const plusClick = () => {
        count < parseInt(stock) ? setCount(count + 1) : alert(`El stock de ${stock} productos`)

    }

    return (
        <div>
            <InputGroup className="mb-3">
                <Button variant="outline-primary" onClick={lessClick} disabled={count <= 1}>-</Button>
                <FormControl className="text-center" aria-label="Example text with two button addons" value={count} />
                <Button variant="outline-primary" onClick={plusClick}>+</Button>
            </InputGroup>
            <Button variant="primary" onClick={() => onAdd(count)}>Agregar al carrito</Button>
        </div>
    )
}