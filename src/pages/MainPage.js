import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Items from '../components/Items';
import Title from '../components/Title';

class MainPage extends Component{
    render(){
        return(
            <div className="MainPage">
              <Header/>
              <Title style={{color: '#000'}}/>
              <Items/>
              <Footer/>
            </div>
        )
    }
};
export default MainPage;