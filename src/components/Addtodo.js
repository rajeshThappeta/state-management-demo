import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { addTodo } from '../slices/todoSlice'
import { useDispatch } from 'react-redux'

function Addtodo() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()

    //form submit
    const onFormSubmit = (todoObj) => {
        // console.log(todoObj.todo);
        //call action creator function addTodo
        let actionObj = addTodo(todoObj.todo)
        //dispatch actionObj to store
        dispatch(actionObj)

    }



    return (
        <div className="row row-11 row-sm-10 row-md-7 border-end border-5 p-3">
            <p className="display-6 text-center text-info heading">
                <FontAwesomeIcon icon={faReact} className='text-success' /> New Todo
            </p>
            <hr />
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3">
                    <label htmlFor="todo">
                        Enter a task
                    </label>
                    <input type="text" id="todo" className="form-control" {...register("todo", { required: true })} />
                    {/* validation erro msg for todo */}
                    {errors.todo?.type === 'required' && <p className='text-danger'>*Task is required</p>}
                </div>
                <button className="btn btn-info w-50" type="submit">Add todo</button>
            </form>


        </div>
    )
}

export default Addtodo
