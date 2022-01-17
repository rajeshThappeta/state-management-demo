import React from 'react'

function Todocount({todos}) {
    return (
        <div>
           <p className="display-6 text-center text-success heading">Todo count</p>
           <hr />
           <h2 className="text-center text-success">{todos.length}</h2>
        </div>
    )
}

export default Todocount
