import React from 'react';
import { useSelector } from 'react-redux'



function Userslist() {

    //get user slice from state
    let users = useSelector(state => state.users)

    return (<div>
        <p className="display-6 text-secondary">List of users</p>
        {users.length == 0 && <h1 className='text-danger'>No user found</h1>}

        {/* display users data as table */}
        {users.length !== 0 &&
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((userObj, index) => <tr key={index}>
                            <td>{userObj.name}</td>
                            <td>{userObj.email}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </div>)
}

export default Userslist;
