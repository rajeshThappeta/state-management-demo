import { useState } from 'react'
import { useForm } from 'react-hook-form'


function Addtodo() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    //state
    const [todos, setTodos] = useState([])


    const onFormSubmit = (todoObj) => {
        console.log(todoObj)
        setTodos([...todos, todoObj.todo])
    }

    return (
        <div className="row row-11 row-sm-10 row-md-7">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3">
                    <label htmlFor="todo">Enter a task</label>
                    <input type="text" id="todo" className="form-control" {...register("todo", { required: true })} />
                    {/* validation erro msg for todo */}
                    {errors.todo?.type === 'required' && <p className='text-danger'>*Task is required</p>}
                </div>
                <button className="btn btn-info w-50" type="submit">Add todo</button>
            </form>

            <mt-4>
                <p className="display-5">List of Todos</p>
                {
                    todos.map((todo, index) => <h3 className='text-secondary' key={index}>{todo}</h3>)
                }
            </mt-4>
        </div>
    )
}

export default Addtodo
