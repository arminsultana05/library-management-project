import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import AllUsers from '../../../Dashboard/AllUsers';


const GetUsers = () => {
   
    const [loading]= useAuthState(auth)
    const [users, setAllusers] = useState([]);
    useEffect(() => {
        fetch('https://thawing-savannah-50233.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setAllusers(data))
      

    })
    // const makeAdmin =()=>{
    //     fetch(`https://thawing-savannah-50233.herokuapp.com/user/admin/${email}`)
    // }
    return (
        <div>
      <h2>All Login Users:{users.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
          
              <th>ID</th>
              <th>Email</th>
             
              <th>Accept</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
           {
             users.map(user => <AllUsers
             key ={user._id}
             user={user}>

             </AllUsers>)
           }
            {
            //   user.map((u, index) => <tr class="hover">
            //     <th>{index + 1}</th>
              
            //     <td>{u._id}</td>
            //     <td>{u.email}</td>
           
            //     <td><button className='btn btn-xs btn-outline bg-green-500 text-white '>Make Admin</button></td>
            //     <td><button className='btn btn-xs btn-outline bg-red-500 mt-5 text-white'>Remove User</button></td>

            //   </tr>)
            }



          </tbody>
        </table>
      </div>

    </div>
    );
};

export default GetUsers;