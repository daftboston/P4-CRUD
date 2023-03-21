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
        {   date: "",
            title: "",
            description: "",
            isCompleted: false, 

        }
    )
   }

    return (

    <div>

    <form onSubmit={handleSubmit(submit)}>
            <div>
             <label htmlFor="id">FECHA</label>
                <input
                 name= "id"
                 id="id"
                type="date"
               {...register("date",{required:true})}/>
            </div>
          
            <div>
                <label htmlFor="title">TITULO</label>
                <input
                 name= "title"
                 id="title"
                type="text"
                {...register("title",{required:true})}
                
               />
               {errors.title?.type === 'required' && <p role="alert">Title is required</p>}
            </div>
            <div>
                <label htmlFor="description">DESCRIPCION</label>
                <input
                 name= "descripton"
                 id="description"
                type="text"
                placeholder='enter descriprion'
                {...register("description", {required:true, maxLenght:40})}
                />
                {errors.description?.type === 'required' && <p role="alert">description is required</p>}
            </div>

            <div>
                <label htmlFor="Checkbox">Completada</label>
                <input type="checkbox"
                  name="terms"
                  id="terms"
                  {...register("isCompleted")} 
                   />
             </div>
         
          <button type="submit">Enviar Formulario</button>
         
        </form>

        </div>

)
}
export default ToDoForm