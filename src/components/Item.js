import React, {Component} from "react";
import {Card, Button} from "react-bootstrap";
import store from "./redux/store";

class Item extends Component {
    state={
        cart:[]
    }

    changeItemsQuantity=(id, image, title, price)=>{
        console.log('Товар добавлен')
        store.dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id,
                image,
                title,
                price
            }
        })
    }
    addToCart=()=>{
        const cart = this.state.cart;
        fetch('https://fakestoreapi.com/carts',{
              method:"POST",
              headers: {
                'Content-Type': 'application/json',
                },
              body:JSON.stringify(cart)
          })
              .then(res=>res.json())
              .then(json=>console.log(json))
              .catch((error) => {
                    console.error('Error:', error);
                    });
        this.changeItemsQuantity(this.props)
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