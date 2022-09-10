import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Loading/Loading';
import swal from 'sweetalert';

const MyRequest = () => {
  const [request, setRequest] = useState([])

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`https://thawing-savannah-50233.herokuapp.com/request?email=${user.email}`)
        .then(res => res.json())
        .then(data => setRequest(data));
    }


  }, [user])
  // const handleRemove = id => {
  //     // window.confirm("Are You Sure Delete Item?");
  //     swal({
  //         title: "Are you sure?",
  //         text: "Once deleted, you will not be able to recover this imaginary file!",
  //         icon: "warning",
  //         buttons: true,
  //         dangerMode: true,
  //       })
  //       .then((willDelete) => {
  //         if (willDelete) {
  //             const url = `https://thawing-savannah-50233.herokuapp.com/request/:${id}`;
  //             fetch(url, {
  //                 method: 'DELETE'
  //             })
  //                 .then(res => res.json())
  //                 .then(data => {
  //                     console.log(data);
  //                     const remaining = requestt.filter(p => p._id !== id);
  //                     setRequestt(remaining)
  //                 })
  //           swal("Poof! Your imaginary file has been deleted!", {
  //             icon: "success",
  //           });
  //         } else {
  //           swal("Your imaginary file is safe!");
  //         }
  //       });


  //     // if (procce) {

  //     // }
  // }
  // if (loading){
  //     return <Loading></Loading>
  // }
  return (
    <div>
      <h2>My Book requested:{request.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>ID</th>
              <th>Subject</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {
              request.map((r, index) => <tr class="hover">
                <th>{index + 1}</th>
                <td>{r.name}</td>
                <td>{r.email}</td>
                <td>{r.number}</td>
                <td>{r.subject}</td>
                <td><button className='btn btn-xs btn-outline mt-5'>Cancel</button></td>

              </tr>)
            }



          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyRequest;