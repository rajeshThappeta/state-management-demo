import Addotodo from './components/Addtodo'
import Todolist from './components/Todolist'
import Todocount from './components/Todocount'
import { useState } from 'react'

function App() {

  //state
  const [todos, setTodos] = useState([])


  const onFormSubmit = (todoObj) => {

    setTodos([...todos, todoObj.todo])
  }

  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-sm-4">
          <Addotodo onFormSubmit={onFormSubmit} />
        </div>
        <div className="col-sm-4">
          <Todolist todos={todos} />
        </div>
        <div className="col-sm-4">
          <Todocount todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
