import { Component, useState } from 'react'

import './App.css'
import Form from './components/Form'
import ToDoForm from "./components/ToDoForm"




function App() {


 

  const [index, setindex]=useState(0)



  return (
    <div className="App">
      <h1>REACT HOOK FORM</h1>

      <Form></Form>
      <h2>to do form</h2>
      <ToDoForm></ToDoForm>

        
    
    </div>
  )
}

export default App


