const ActivitieList = ({taskData}) =>  {
  
  return (
<ul> 
    { 
      taskData?.map(task=>(
        
        <li >
        <h4> <span>FECHA: </span>   </h4>
        <h4> <span> TITULO:</span> {task.title} </h4> 
        <h4> <span> DESCRIPCION:</span>   </h4> 
        <h4> <span> COMPLETADA:</span>   </h4>        
    </li>

    ))  
    }
    
    <li>
        <h4> <span>FECHA: </span>   </h4>
        <h4> <span> TITULO:</span>   </h4> 
        <h4> <span> DESCRIPCION:</span>   </h4> 
        <h4> <span> COMPLETADA:</span>   </h4>        
    </li>
    <li>
       <h4> <span>FECHA: </span>   </h4>
        <h4> <span> TITULO:</span>   </h4> 
        <h4> <span> DESCRIPCION:</span>   </h4> 
        <h4> <span> COMPLETADA:</span>   </h4> 
             
    </li>
    <li>
        <h4> <span>FECHA: </span>   </h4>
        <h4> <span> TITULO:</span>   </h4> 
        <h4> <span> DESCRIPCION:</span>   </h4> 
        <h4> <span> COMPLETADA:</span>   </h4> 
             
    </li>
</ul>
)
}
export default ActivitieList