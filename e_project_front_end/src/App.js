import React,{Component} from 'react';
import './App.css';
import Navbar from '../src/component/navbar';
import HorizontalMenu from '../src/component/horizontalmenu';
import Cover from '../src/component/cover';
import ProductList from './container/products_list';
import Footer from '../src/component/footer';
import {BrowserRouter,Switch} from 'react-router-dom';

class App extends Component
{
  render()
  {
    return (
      <BrowserRouter className="app">
         <Navbar />
         <HorizontalMenu/>
         <Cover />
         <ProductList/>
          <Footer />
      </BrowserRouter>
      );
  }
};
 
export default App;
