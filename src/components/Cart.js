import React, { Component } from 'react';
import store from './redux/store';



class Cart extends Component{
    state = {
        cartItems: [],
    }
    componentDidMount(){
        store.subscribe(()=>{
            const globalState=store.getState();
            // console.log(globalState);
            this.setState({cartItems:globalState.cart});
        })
        console.log(store.getState())
    }
    render(){
        console.log(this.state);
        return(
            <>
            <p>Your goods</p>
            </>
        )
    }
};
export default Cart;