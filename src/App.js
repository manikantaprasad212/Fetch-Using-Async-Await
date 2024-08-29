
import './App.css';
import {useEffect, useState} from 'react';

function App() {
   
let [products,setProducts]= useState([]);

  let getingProductsFromServer = async()=>{
    let reqOption ={
      method:"GET"
    }
    let JSONData =await fetch("https://fakestoreapi.com/products?limit=5", reqOption);

    let JSOData = await JSONData.json();
    setProducts(JSOData);
    console.log(JSOData);
  };

  // useEffect(()=>{
  //   getingProductsFromServer();
  // },[])
  return (
    <div className="App">
      <button type="button" onClick={()=>{
        getingProductsFromServer();
      }}>Products</button>
      <div className='produtsContainer'>
      {products.map((ele,i)=>{
        return <div className='productDiv'>
          <img src={ele.image} className='productPicture' title={ele.description}></img>
          <p>{ele.title}</p>
          <p>Price:${ele.price}</p>
          <p>{ele.category}</p>
          <p>[{ele.rating.count}]</p>
          
       </div>
      
      })}
      </div>
     
    </div>
  );
}

export default App;
