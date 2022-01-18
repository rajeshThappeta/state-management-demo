import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTasks } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'


function Todolist() {

    let todolist = useSelector(state => state.todo)

    console.log("todo list is ", todolist)

    return (
        <div className='border-end border-5  p-3'>
            <p className="display-6 text-center heading" style={{ color: '#0096c7' }}>
                <FontAwesomeIcon icon={faTasks} className='text-danger' size='xs' />  List of Todos
            </p>
            <hr />

            {
                todolist.map((todoTask, index) => <h3 className='text-warning' key={index}>{todoTask}</h3>)
            }


        </div>
    )
}

export default Todolist
