import Addotodo from './components/Addtodo'
import Todolist from './components/Todolist'
import Todocount from './components/Todocount'
import { useState } from 'react'

function App() {



  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-sm-4">
          <Addotodo />
        </div>
        <div className="col-sm-4">
          <Todolist />
        </div>
        <div className="col-sm-4">
          <Todocount />
        </div>
      </div>
    </div>
  );
}

export default App;
