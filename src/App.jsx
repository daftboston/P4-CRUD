import { Component, useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

import ToDoForm from "./components/ToDoForm"
import ActivitieList from './components/ActivitieList'
import tasks from "./data/tasks"




function App() { 
  //READ
  const [activities, setActivities]= useState ([])

  useEffect (()=>{
    getData()
    },[])

    const getData = ()=>{
      axios
      .get ("https://todos-crud.academlo.tech/todos/")
      .then(resp => setActivities(resp.data))
      .catch ( error => console.error(error) )
   
    }
    
  //UPDATE
  const [taskUpdate, setTaskUpdate]=useState(null)




//AÑADIR
  const addTask = data=>{
    /*
   axios
    .post("url",body)
    */
   axios
     .post("https://todos-crud.academlo.tech/todos/",data)
     .then((resp)=> getData())
     .catch (error=> console.error(error))

  }

  


  //DELETE

 const deleteTask =idTask=>{
  axios
   .delete (`https://todos-crud.academlo.tech/todos/${idTask}/`)
   .then (()=>getData())
   .catch(error => console.error(error))
}

 

//???
 const selectTask = taskData =>{
  //alert ("actividad seleccionada")
  console.warn(taskData);
  setTaskUpdate(taskData)
 }




 //UPDATE
 const taskactualization= data2=> {
  /* axios
  .put("url", body) */
    axios
      .put(`https://todos-crud.academlo.tech/todos/${data2.id}/`, data2)
      .then(()=>{
        getData()
        setTaskUpdate(null)        
      })
      .catch(error=> console.error(error))
 
 




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


