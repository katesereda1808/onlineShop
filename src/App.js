import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';

class App extends React.Component {
  render() {
    return (
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/cart" element={<CartPage/>}/>
          </Routes>
        </BrowserRouter>
      
    )
  }
}


export default App;

// <div className="App">
        /* <MainPage/> */
      // </div>
