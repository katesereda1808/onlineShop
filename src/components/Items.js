import React, { Component } from 'react';
import { Card, Button, Container, Col, Row} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import store from './redux/store';
import './Items.css';
import Item from './Item';

class Items extends Component {
    state={
        items: []
    };
    addToCart=(id)=>{
      store.dispatch({
          type: 'ADD_TO_CART',
          payload: {
            id:id,
          }
      })
    }
    componentDidMount(){
      fetch('https://fakestoreapi.com/products')
      .then(resp=>{
        return resp.json();
      })
      .then(data=>{
        // console.log(data);
        this.setState({items: data});
        console.log(this.state.items);
        console.log(this.state.items[0].id)       
      })
      .catch((error) => {
        console.error('Error:', error);
        })

    }
    render() {
        return (
            <div className="items">
              <Container>
                <Row>
                        {this.state.items.map((item) => (
                          <Col xs="auto" md={4} lg={4} sm={6} key={item.id}>
                        <Item {...item}/>
                        </Col>
                        ))}
                </Row>
              </Container>

            </div>
        );
    }
}
 
export default Items;