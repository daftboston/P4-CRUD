const ProductList = ({productData,deleteProductAction,selectProduct}) =>  {
  
  return (
<ul> 
    { 
      productData?.map(product=>(
        
        <li key= {product.id}>
             
             <h4> <span> NAME:</span> {product.name} </h4> 
             <h4> <span> CATEGORY:</span> {product.category} </h4> 
             <h4> <span> PRICE:</span> {product.price} </h4> 
             <h4> <span> IS AVALABLE:</span> {product.isAvailable? "true":"false"} </h4>   
             <button onClick={()=>deleteProductAction(product.id)}>Eliminar</button> 
             <button onClick={()=>selectProduct(product)}>Editar</button>    
        </li>

    ))  
    }      
</ul>
)
}
export default ProductList