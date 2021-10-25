import React from 'react'
import ItemCount from './ItemCount'
import { Card } from 'react-bootstrap';
import img from '../../assets/images/Floyd-principal.jpg';

export default function ItemCardContainer(){
    const handleClick=(total) =>{
        alert(`La cantidad agregada es  ${total}`)
    }

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>Sofá Floyd Extensible</Card.Title>
            <Card.Text>
            Sofá extensible en diferentes medidas y telas. Puede incluir cabezal.
            </Card.Text>
           
            <ItemCount stock={8} initial={1} onAdd={handleClick}/>
        </Card.Body>
        </Card>
    )
}