import React, { Component } from 'react';
import { Card, Button, Container, Col, Row} from 'react-bootstrap';
import store from './redux/store';
import './Items.css';
import CartItem from './CartItem';


class Cart extends Component{
    state = {
        cartItems: [],
        error: ''
    }
    componentDidMount(){
        fetch('https://fakestoreapi.com/carts')
        .then(resp=>{
            if(resp.ok){
                return resp.json();
            }else{
                this.setState({error: 'Ошибка'})
            }
        })
        .then(data=>{
            if(data){
                this.setState({cartItems: data});
            } else {
                this.setState({error: 'Корзина пуста'})
            }
            
        })
        .catch((error) => {
            console.error('Error:', error);
            })

    }
    render(){
        return(
            <div className="cartItems">
              <Container>
                <Row>
                        {this.state.cartItems.map((item) => (
                          <Col xs="auto" md={12} key={item.id}>
                        <CartItem {...item}/>
                        </Col>
                        ))}
                </Row>
              </Container>
            </div>
        )
    }
};
export default Cart;