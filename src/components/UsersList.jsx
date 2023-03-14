const UserList = ({usersData}) =>  {

    return (
<ul>
    {
        usersData?.map(user=>(
            <li key= {user.id}>
             <h4> <span>Nombre: </span> {user.username}   </h4>
             <h4> <span> Contraseña:</span> {user.password}   </h4>
             <button >eliminar</button>        
            </li>
          
        ))
    }
    <li>
        <h4> <span>Nombre: </span>   </h4>
        <h4> <span> Contraseña:</span>   </h4>        
    </li>
    
   
</ul>
)
}
export default UserList