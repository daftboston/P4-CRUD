import { useForm} from 'react-hook-form';

const Form = ({createUser}) =>  {
  // Luego lo ejecutamos. Retorna un objeto. Vamos a desestructurar dos propiedades muy importantes: register y handleSubmit.
   const {register, handleSubmit, formState: { errors }, reset }= useForm()

   const submit = data => {
    data.id= Date.now()
    console.log(data);
    createUser(data)
   }
   const fillForm = () => {
    reset (
        {
           username: "fillform" ,
           password: "fill"
        }
    )
   }


    return (
        
 <form onSubmit={handleSubmit(submit)}> 
       <div>
            <label htmlFor="username">usuario</label>
            <input type="text" name="username" id='username' placeholder='tu nombre va aqui' {...register("username ",{required:true})} />  
            
            { errors.username?.type === 'required' && <p role="alert">username is required</p>}
    
      </div>
      <div>
          <label htmlFor="password">contraseña</label>
          <input type="password" name='password' id='password' placeholder='1234' {...register("password",{required:true})} />      
       
     </div>
          <button type='submit'>acceder</button>
          <button onClick={fillForm}>llenar formulario</button>
</form>
)
}
export default Form