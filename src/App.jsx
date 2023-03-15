import { Component, useState } from 'react'

import './App.css'
import Form from './components/Form'
import ToDoForm from "./components/ToDoForm"
import UserList from './components/UsersList'
import ActivitieList from './components/ActivitieList'




function App() {

  //CRUD- CREATE READ UPDATE DELETE
  // Acciones mas basicas que podemos hacer con nuestras entidades, a partir de metodos get, put, delete. 



  

  
  const[users, setUsers]= useState([
    {
      username: "Daniel",
      password: "4321"
    }
  ])

  const [activities, setActivities]= useState ([
    {
      title: "Estudiar React",
      description: "Estudiar useState y useEffect",
      isCompleted: false,
      id: 1
    },
    {
      title: "Estudiar React",
      description: "Estudiar useState y useEffect",
      isCompleted: false,
      id: 1
    },
   
  ])
  

  // READ
  //consultar info del app hasta los hermanos


  //CREATE
  // Utilizando la informacion generada pr el formulario, vamos a añadir un nuevo objeto al estado

  const addUser = userData=>{
    alert ("añadido!!!")
    console.warn(userData);
    //Añadir nuevos elementos a un estado que tiene un formato de arreglo
    //Mutabilidad /Inmutabilidad
    //Los estados no deben mutar nunca
    //Las modificaciones en un estado solo deben realizarse a traves de la funcion seteadora
    setUsers ([...users,userData])
  }

  //DELETE 
  // La posibilidad de detonar una accion de eliminacion
 const deleteUser = idUser=>(
  alert(idUser)

 )

 //UPDATE


  return (
    <div className="App">
      <h1>REACT HOOK FORM</h1>

      <Form createUser ={data=> addUser(data)}></Form>
      <UserList 
      usersData={users}
      deleteUserAction={id=> deleteUser(id)}/>
      <h2>to do form</h2>
      <ToDoForm></ToDoForm> 
      <ActivitieList taskData={activities}/>

        
    
    </div>
  )
}

export default App


