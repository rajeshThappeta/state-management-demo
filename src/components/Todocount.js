import React from 'react'
import {useSelector} from 'react-redux'


function Todocount() {

    let todolist=useSelector(state=>state.todo)

    console.log("todolist in count component is ",todolist)
    return (
        <div>
           <p className="display-6 text-center text-success heading">Todo count</p>
           <hr />
            <h1 className="text-center">{todolist.length}</h1>
        </div>
    )
}

export default Todocount
