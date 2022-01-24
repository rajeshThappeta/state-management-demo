import React from 'react';
import { fetchData } from '../slices/userSlice'
import { useSelector, useDispatch } from 'react-redux'

function Apidata() {

    let { userdata, isPending, isError, errMsg } = useSelector(state => state.users)
    let dispatch = useDispatch()

    return (
        <div className='text-center'>
            <button className="btn btn-info" onClick={() => dispatch(fetchData('https://jsonplaceholder.typicode.com/posts'))} >
                Get data
            </button>

            {/* id pending */}
            {isPending == true && <h1>Loading...</h1>}
            {/* if error */}
            {isError == true && <p className='display-3'>{errMsg}</p>}

            {/* if no error */}
            {
                isError !== true && <table className="table">
                    <tbody>
                        {
                            userdata.map(userObj => <tr key={userObj.id}>
                                <td>{userObj.userId}</td>
                                <td>{userObj.title}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>
    );
}

export default Apidata;
