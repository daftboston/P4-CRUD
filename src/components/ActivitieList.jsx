const ActivitieList = ({taskData,deleteTaskAction,selectTask}) =>  {
  
  return (
<ul> 
    { 
      taskData?.map(task=>(
        
        <li key= {task.id}>
             
             <h4> <span> NAME:</span> {task.name} </h4> 
             <h4> <span> CATEGORY:</span> {task.category} </h4> 
             <h4> <span> PRICE:</span> {task.price} </h4> 
             <h4> <span> COMPLETADA:</span> {task.isCompleted? "true":"false"} </h4>   
             <button onClick={()=>deleteTaskAction(task.id)}>Eliminar</button> 
             <button onClick={()=>selectTask(task)}>Editar</button>    
        </li>

    ))  
    }      
</ul>
)
}
export default ActivitieList