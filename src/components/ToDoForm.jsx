import { useForm } from 'react-hook-form'; 

const ToDoForm = () =>  {

    const {register, handleSubmit, formState: { errors }, reset}= useForm()
   const submit = data => {
    data.id = Date.now()
    console.log(data);
      // si el envio de info se envia, se ejecute el empty form
      emptyForm()
   }

   //Reset
   // lo que hace es recibir un objeto que como propiedades va a tener los nombres de los diferentes in`puts del formulario
   // Los valores que tengan las propiedades de este objeto se setaran como valires del unput, 

   //Valores por default

  

   const emptyForm = ()=> {
    reset (
        {   date: "",
            title: "",
            description: "" 

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
               {errors.title?.type === 'required' && <p role="alert">TITLE IS REQUIRED</p>}
            </div>
            <div>
                <label htmlFor="description">DESCRIPCION</label>
                <input
                 name= "descripton"
                 id="description"
                type="text"
                {...register("description")}
                />
            </div>

            <div>
                <label htmlFor="terms">Completada</label>
                <input type="checkbox"
                  name="terms"
                  id="terms"
                  {...register("checkbox")} 
                   />
             </div>
         
          <button type="submit">Enviar Formulario</button>
         
        </form>

        </div>

)
}
export default ToDoForm