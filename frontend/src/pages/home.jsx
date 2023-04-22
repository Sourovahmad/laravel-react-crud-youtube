import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from '../axios';

export default function Home() {


  const [users, setUsers] = useState([]);

    useEffect(()=>{
      fetchAllUsers();
  },[]);


const fetchAllUsers = () => {
  axios.get('/get-users').then(res=>{
      setUsers(res.data);
  })
}


const deleteUser = (id) => {

  axios.delete('/user-delete/'+id).then(res=>{
      fetchAllUsers();
  })
}




  return (
    <> 
        <div className="container">
        <h2>All users</h2>


        <table className="table table-striped">
    <thead>
      <tr>
        <th>Sno.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={user.id}>
          <td>{++index}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <Link className="btn btn-info mr-2" to={{ pathname: "/edit/" + user.id }}>
              Edit
            </Link>
            <Link className="btn btn-primary mr-2" to={{ pathname: "/view/" + user.id }}>
              View
            </Link>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete
            </button>
          </td>

          
        </tr>
      ))}
    </tbody>
  </table>




        </div>
    
    
    </>
  )
}
