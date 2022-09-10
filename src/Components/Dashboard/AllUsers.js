import React from 'react';
import Swal from 'sweetalert2'

const AllUsers = ({user}) => {
    const {_id, email,role} = user;
    const makeAdmin =()=>{
        fetch(`https://thawing-savannah-50233.herokuapp.com/user/admin/${email}`,{
            method:'PUT',
            headers:{
                'content-type': 'application.json'
            },

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully Create a admin',
                showConfirmButton: false,
                timer: 1500

               
            })
        })
    }
    return (
        <tr class="hover">
            <th></th>

            <td>{_id}</td>
            <td>{email}</td>

            <td>
                {
                    role !=='admin' && <button onClick={()=>makeAdmin()} className='btn btn-xs btn-outline bg-green-500 text-white '>Make Admin</button>

                }
                {
                    role =='admin' && <button onClick={()=>makeAdmin()} className='btn btn-xs btn-outline bg-green-500 text-white '>Already an Admin</button>

                }
                </td>
            <td><button className='btn btn-xs btn-outline bg-red-500 mt-5 text-white'>Remove User</button></td>

        </tr>
    );
};

export default AllUsers;