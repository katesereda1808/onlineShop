import React, {Component} from "react";
import {Card, Button} from "react-bootstrap";
import store from "./redux/store";

class Item extends Component {
    addToCart=(id, image, title, price)=>{
        store.dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id,
                image,
                title,
                price
            }

        })
        let globalStore=store.getState();
        console.log(globalStore.cart)

    }
    render(){
        const {id, image, title, price}=this.props
        return(
            <Card className="card h-100">
                            <div className="productImage">
                          <Card.Img variant="top" src={`${image}`} />
                          </div>
                          <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Subtitle>{price}</Card.Subtitle>
                
                            <Button variant="primary" onClick={()=>{this.addToCart(id, image, title, price)}}>Add to cart</Button>
                          </Card.Body>
            </Card>

        )
    }
}
export default Item;