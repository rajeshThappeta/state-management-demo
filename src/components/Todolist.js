import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTasks } from '@fortawesome/free-solid-svg-icons'
import todoImage from '../images/1.svg'


function Todolist({ todos }) {
    return (
        <div className='border-end border-5  p-3'>
            <p className="display-6 text-center heading" style={{color:'#0096c7'}}>
              <FontAwesomeIcon  icon={faTasks} className='text-danger' size='xs' />  List of Todos
            </p>
            <hr />
            <img src={todoImage} className='w-50 mx-auto' alt="" />
            {/* display list of todos */}
            {
                todos.map((task, index) => <h1 className='text-primary text-center list-item' key={index}>
                <FontAwesomeIcon  icon={faCheck} className='text-warning' size='xs' /> {task}
                </h1>)
            }

        </div>
    )
}

export default Todolist
