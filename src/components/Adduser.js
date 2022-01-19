import React from 'react';
import { useForm } from 'react-hook-form'
import { addUser } from '../slices/userSlice';
import { useDispatch } from 'react-redux'
function Adduser() {

  let { register, handleSubmit, formState: { errors } } = useForm()
  let dispatch = useDispatch()

  const onFormSubmit = (userObj) => {
    // console.log(userObj);
    //create action obj
    let actionObj = addUser(userObj)
    //dispatch action obj
    dispatch(actionObj)
  }

  return <div>
    <p className="display-6 text-primary">Adding new user</p>
    <hr />
    {/* form to add user */}
    <form className='w-75 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
      {/* name */}
      <div className="mb-3">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="form-control" {...register("name")} />
      </div>
      {/* email */}
      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="form-control" {...register("email")} />
      </div>
      {/* submit */}
      <button type="submit" className="btn btn-success d-block mx-auto">Add user</button>
    </form>
  </div>;
}

export default Adduser;
