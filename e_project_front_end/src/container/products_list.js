import React,{Component} from 'react';
import '../App.css';
import Product from '../component/product';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


class ProductList extends Component
{
    state={
        productList:[{}],//products list coming fine.
        search_item:'',
        check:true
    }
    componentDidMount()
    {
      axios.get("http://localhost:3000").then(response =>{
          this.setState({productList:response.data},()=>{
              console.log(this.state.productList);
          });
      })
      .catch(error =>{
          console.log(error);
      })
    }
    onChangeHandler = (event) =>{
      this.setState({search_item:event.target.value},()=>{
          console.log(this.state.search_item);
      });
    }
    clickHandler = () =>{
      this.setState({check:false});
    }
    render()
    {
        let val="";
        if(!this.state.check)
        {
          val=this.state.search_item;
        }
        const myarray=this.state.productList.filter(value =>{
            console.log(value.product_name);
            return value;
           // return value.product_name.toLowerCase().includes(val.toLowerCase());
        })
        const myarray2=myarray.map(value =>{
            return <Product 
                     product_id={value.product_id} 
                     product_name={value.product_name} 
                     product_price={value.product_price} 
                     product_desciption={value.product_desciption} 
                     key={value.product_id+1}
                     />
        })
        return(
         <div className="tc"> 
           <h1>Products</h1>
           <input type="search" placeholder="Enter Search Product" onChange={this.onChangeHandler}></input>   
           <Button variant="primary" className="button1" onClick={this.clickHandler}>Search</Button>
           <div className="b1">
                {myarray2}
           </div>
        </div>    
        )
    }
}

export default ProductList;