import { Component, useState } from 'react'

import './App.css'
import Form from './components/Form'
import ToDoForm from "./components/ToDoForm"
import UserList from './components/UsersList'
import ActivitieList from './components/ActivitieList'

import tasks from "./data/tasks"




function App() {

  //CRUD- CREATE READ UPDATE DELETE
  // Acciones mas basicas que podemos hacer con nuestras entidades, a partir de metodos get, put, delete. 



  

  
  const[users, setUsers]= useState([
    {
      username: "Daniel",
      password: "4321"
    }
  ])

  const [activities, setActivities]= useState (tasks)
  

  // READ
  //consultar info del app hasta los hermanos, guardada en el estado.


  //CREATE
  // Utilizando la informacion generada pr el formulario, vamos a añadir un nuevo objeto al estado

  const addTask = data=>{
    alert ("añadido!!!")
    console.warn(data);

    //Añadir nuevos elementos a un estado que tiene un formato de arreglo
    //Mutabilidad /Inmutabilidad
    //Los estados no deben mutar nunca
    //Las modificaciones en un estado solo deben realizarse a traves de la funcion seteadora

    //SPREAD OPERATOR [...arregloPrevio, nuevoElemento1, nuevoElemento2]

    
    setActivities([...activities,data])
  }

  //DELETE 
  // La posibilidad de detonar una accion de eliminacion
 const deleteTask =idTask=>{
 // alert(idTask)

  // Filter, obtener a todos los usuarios que no sean el que queremos eliminar, 
  // El usuario que queremeos eliminar, no estaria dentro del arreglo que se genera con el filter.

  //Eliminacion por descarte

  const filteredTask =  tasks.filter(task=> task.id!== idTask)
  setActivities(filteredTask)

}

 //UPDATE

 const selectTask = taskData =>{
  //alert ("actividad seleccionada")
  console.warn(taskData);
  setTaskUpdate(taskData)
 }

 const [taskUpdate, setTaskUpdate]=useState(null)

 const taskactualization= data2=> {
  console.log(data2);
  //Encontrar entro del arreglo del estado el objeto( el usuario ) que va a ser actualizad.
  // Reemplzamos el obejto actual por el nuevo objeto  data
  //seteamos el estado

  const index = tasks.findIndex(task=> task.id===data2.id )

  tasks[index]= data2

  setActivities([...tasks])
  
  setTaskUpdate(null)


 }


  return (
    <div className="App">
      <h1>REACT HOOK FORM</h1>

      
   
      <h2>to do form</h2>
      <ToDoForm 
      createTask={data=>addTask(data)}
      selectedTask={taskUpdate}
      updateTask={data2 => taskactualization(data2)}/>


      <ActivitieList taskData={activities}
      deleteTaskAction={id=>deleteTask(id)}
      selectTask={(task)=>selectTask(task)}/>

        
    
    </div>
  )
}

export default App


