import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../axios';

export default function Edit() {

  const {id} = useParams();
  const [inputs,setInputs] = useState({});
  const navigate = useNavigate();

  useEffect(()=>{
    fetchUser()
},[]);


const fetchUser= () =>{
  axios.get('/get-user-by-id/'+id).then((res)=>{
    console.log(res.data);
      setInputs({
          name:res.data.name,
          email:res.data.email,
      });
  });
}

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values,[name]:value}))
}

const submitForm = () =>{
  axios.put('/update-user/'+id,inputs).then((res)=>{
      navigate('/');
  })
}




  return (
    <div>
            <h2>Edit User</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control mb-2"
                                value={inputs.name || ''}
                                onChange={handleChange}
                             />

                        <label>Email</label>
                        <input type="email" name="email" className="form-control mb-2"
                            value={inputs.email || ''}
                            onChange={handleChange}
                        />

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                    </div>
                </div>
            </div>
        </div>
  )
}
