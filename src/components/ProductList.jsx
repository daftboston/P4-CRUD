const ProductList = ({productData,deleteProductAction,selectProduct}) =>  {
  
  return (
<ul> 
    { 
      productData?.map(product=>(
        
           <li key= {product.id}>
              

             <h2>{product.name} </h2> 
             <div className="info">
             <h4>  Category </h4> 
             <h3>{product.category}</h3>
             </div>
             <div className="info">
             <h4> <span> Price</span>  </h4> 
             <h3>{product.price}</h3>
             </div>

             <div className="info">  
             <h4> <span> Is Avalible:</span>  </h4>  
             <h3>{product.isAvailable? "true":"false"}</h3> 
             </div>
             <div className="buttons">
             <button className="deleteB" onClick={()=>deleteProductAction(product.id)}><i className='bx bxs-trash' ></i></button> 
             <button  className="editB" onClick={()=>selectProduct(product)}><i className='bx bxs-pencil'></i></button>
             </div>
                
           </li>
      
        

    ))  
    }      
</ul>
)
}
export default ProductList