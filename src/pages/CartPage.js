import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

class CartPage extends Component{
    render(){
        return(
            <div className="MainPage">
              <Header/>
              <Cart/>
              <Footer/>
            </div>
        )
    }
};
export default CartPage;