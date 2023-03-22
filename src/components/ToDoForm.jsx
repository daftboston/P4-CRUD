import { useForm } from 'react-hook-form'; 
import { useEffect } from 'react';

const ToDoForm = ({createTask, selectedTask,updateTask}) =>  {

    const {register, handleSubmit, formState: { errors }, reset}= useForm()


    //UPDATE
    useEffect (()=>{
        //Determinar si hay un usuario seleccionado

            
     if (selectedTask) {   
        // si no es un null  se cargara su info
        reset(selectedTask)
        
     } else {// si no lo hay, el formulario estara vacio
        emptyForm()
        
     }
   
    },[selectedTask])


   const submit = data => {
   

    if (selectedTask ) {
       updateTask(data)
        
    } else { 
    
        createTask(data)
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

    <div>

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
          
            <div>
                <label htmlFor="name">Name</label>
                <input
                 name= "name"
                 id="name"
                type="text"
                {...register("name",{required:true})}
                
               />
               {errors.name?.type === 'required' && <p role="alert">Name is required</p>}
            </div>
            <div>
                <label htmlFor="description">CATEGORY</label>
                <input
                 name= "category"
                 id="category"
                type="text"
                placeholder='enter category'
                {...register("category", {required:true, maxLenght:40})}
                />
                {errors.category?.type === 'required' && <p role="alert">category is required</p>}
            </div>
            <div>
                <label htmlFor="description">PRICE</label>
                <input
                 name= "price"
                 id="price"
                type="text"
                placeholder='enter price'
                {...register("price", {required:true, maxLenght:40})}
                />
                {errors.price?.type === 'required' && <p role="alert">description is required</p>}
            </div>


            

            <div>
                <label htmlFor="Checkbox">Is Available</label>
                <input type="checkbox"
                  name="isAvailable"
                  id="isAvailable"
                  {...register("isAvailable")} 
                   />
             </div>
         
          <button type="submit">Enviar Formulario</button>
         
        </form>

        </div>

)
}
export default ToDoForm