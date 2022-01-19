import Addotodo from './components/Addtodo'
import Todolist from './components/Todolist'
import Todocount from './components/Todocount'
import Adduser from './components/Adduser'
import Userslist from './components/Userslist'

function App() {



  return (
    <div className="container text-center mt-5">
      {/* row-1 */}
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
      {/* row-2 */}
      <div className="row mt-5">
        <div className="col-sm-6">
          <Adduser />
        </div>
        <div className="col-sm-6">
          <Userslist />
        </div>
      </div>

    </div>
  );
}

export default App;
