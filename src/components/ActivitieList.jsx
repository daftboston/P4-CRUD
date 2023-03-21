const ActivitieList = ({taskData,deleteTaskAction,selectTask}) =>  {
  
  return (
<ul> 
    { 
      taskData?.map(task=>(
        
        <li key= {task.id}>
             <h4> <span>FECHA: </span>   {task.date}</h4>
             <h4> <span> TITULO:</span> {task.title} </h4> 
             <h4> <span> DESCRIPCION:</span> {task.description} </h4> 
             <h4> <span> COMPLETADA:</span> {task.isCompleted? "true":"false"} </h4>   
             <button onClick={()=>deleteTaskAction(task.id)}>Eliminar</button> 
             <button onClick={(task)=>selectTask(task)}>Editar</button>    
        </li>

    ))  
    }      
</ul>
)
}
export default ActivitieList