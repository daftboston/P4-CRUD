import { useForm } from 'react-hook-form'; 
import { useEffect } from 'react';

const ProductsForm = ({createProduct, selectedProduct,updateProduct}) =>  {

    const {register, handleSubmit, formState: { errors }, reset}= useForm()


    //UPDATE
    useEffect (()=>{
        //Determinar si hay un usuario seleccionado

            
     if (selectedProduct) {   
        // si no es un null  se cargara su info
        reset(selectedProduct)
        
     } else {// si no lo hay, el formulario estara vacio
        emptyForm()
        
     }
   
    },[selectedProduct])


   const submit = data => {
   

    if (selectedProduct) {
       updateProduct(data)
        
    } else { 
    
        createProduct(data)
        emptyForm()
        
        
    }
    

      
   }

   //Reset
   // lo que hace es recibir un objeto que como propiedades va a tener los nombres de los diferentes in`puts del formulario
   // Los valores que tengan las propiedades de este objeto se setaran como valires del unput, 

   //Valores por default

  

   const emptyForm = ()=> {
    reset (
        {   name: "",
            category: "",
            price: "",
            isAvailable: false, 

        }
    )
   }

    return (

    <div className='inputCard'>

    <form onSubmit={handleSubmit(submit)}>
           {/* <div>
             <label htmlFor="id">FECHA</label>
                <input
                 name= "id"
                 id="id"
                type="date"
               {...register("date",{required:false})}/>
            </div>
    */}
          
            <div className='boxForm'>
                <label htmlFor="name">Name</label>
                <input
                 name= "name"
                 id="name"
                type="text"
                placeholder='Enter product name'
                {...register("name",{required:true})}
                
               />
               {errors.name?.type === 'required' && <p role="alert">Name is required</p>}
            </div>
            <div className='boxForm'>
                <label htmlFor="description">Category</label>
                <input
                 name= "category"
                 id="category"
                type="text"
                placeholder='Enter product category'
                {...register("category", {required:true, maxLenght:40})}
                />
                {errors.category?.type === 'required' && <p role="alert">category is required</p>}
            </div>
            <div className='boxForm'>
                <label htmlFor="description">Price</label>
                <input
                 name= "price"
                 id="price"
                type="number"
                placeholder='Enter product price'
                {...register("price", {required:true, maxLenght:40})}
                />
                {errors.price?.type === 'required' && <p role="alert">description is required</p>}
            </div>


            

            <div>
                <label htmlFor="Checkbox">Is Available</label>
                <input 
                className='checkbox'
                type="checkbox"
                  name="isAvailable"
                  id="isAvailable"
                  {...register("isAvailable")} 
                   />
             </div>
         
          <button className='send' type="submit">Enviar Formulario</button>
         
        </form>

        </div>

)
}
export default ProductsForm