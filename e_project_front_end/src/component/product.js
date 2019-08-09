import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const product = (props) =>{
    return(
        <Card style={{ width: '18rem' }} className="card1">
                <Card.Title >
                        {props.product_name}
                </Card.Title>
                <Card.Img variant="top" src={`img${props.product_id}.jpg/100px180`} />
                <Card.Body>
                    <strong>    Price : {props.product_price} $ </strong>
                    <Card.Text>
                            {props.product_desciption}
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
         </Card>
    )
}

export default product;
