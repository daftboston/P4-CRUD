import { Component, useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

import ProductsForm from "./components/ProductsForm"
import ProductList from './components/ProductList'





function App() { 
  //READ
  const [products, setProducts]= useState ([])

  useEffect (()=>{
    getData()
    },[])

    const getData = ()=>{
      axios
      .get ("https://products-crud.academlo.tech/products/")
      .then(resp => setProducts(resp.data))
      .catch ( error => console.error(error) )
   
    }
    
  //UPDATE
  const [productUpdate, setProductUpdate]=useState(null)




//AÑADIR
  const addProduct = data=>{
    /*
   axios
    .post("url",body)
    */
   axios
     .post("https://products-crud.academlo.tech/products/",data)
     .then((resp)=> getData() )
     .catch (error=> console.error(error))

  }

  


  //DELETE

 const deleteProduct =idProduct=>{
  axios
   .delete (`https://products-crud.academlo.tech/products/${idProduct}/`)
   .then (()=>getData())
   .catch(error => console.error(error))
}

 

//???
 const selectProduct = productData =>{
  //alert ("actividad seleccionada")
  console.warn(productData);
  setProductUpdate(productData)
 }




 //UPDATE
 const productActualization= data2=> {
  /* axios
  .put("url", body) */
    axios
      .put(`https://products-crud.academlo.tech/products/${data2.id}/`, data2)
      .then(()=>{
        getData()
        setProductUpdate(null)        
      })
      .catch(error=> console.error(error))
 
 




 }


  return (
    <div className="App">
    

      
   
      <h2>Products Form</h2>
      <ProductsForm 
      createProduct={data=>addProduct(data)}
      selectedProduct={productUpdate}
      updateProduct={data2 => productActualization(data2)}/>

      <div className='productList'>
          <ProductList productData={products}
          deleteProductAction={id=>deleteProduct(id)}
          selectProduct={(product)=>selectProduct(product)}/>

      </div>
    
    </div>
  )
}

export default App


