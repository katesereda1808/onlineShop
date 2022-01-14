import React, { Component } from 'react';
import {Card, Button} from "react-bootstrap";

class CartItem extends Component {
    render (){
        const {id, image, title, price}=this.props
        return (
            <Card className="card h-100">
                            <div className="productImage">
                          <Card.Img variant="top" src={`${image}`} />
                          </div>
                          <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Subtitle>{price}</Card.Subtitle>
                
                            <Button variant="primary" onClick={()=>{this.addToCart(id, image, title, price)}}>Delete</Button>
                          </Card.Body>
            </Card>
            )
    }
}
export default CartItem;
