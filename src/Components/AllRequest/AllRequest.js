import React, { useEffect, useState } from 'react';

const AllRequest = () => {
     const [allrequest, setAllrequest] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-request')
            .then(res => res.json())
            .then(data => setAllrequest(data))
        console.log(allrequest);

    })

    return (
        <div>
      <h2>My Book requested:{allrequest.length}</h2>
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
              <th>Accept</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              allrequest.map((r, index) => <tr class="hover">
                <th>{index + 1}</th>
                <td>{r.name}</td>
                <td>{r.email}</td>
                <td>{r.number}</td>
                <td>{r.subject}</td>
                <td><button className='btn btn-xs btn-outline bg-green-400 mt-5'>accept</button></td>
                <td><button className='btn btn-xs btn-outline mt-5'>Cancel</button></td>

              </tr>)
            }



          </tbody>
        </table>
      </div>

    </div>
    );
};

export default AllRequest;