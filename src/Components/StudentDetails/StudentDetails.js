import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import auth from '../../firebase.init';

const StudentDetails = () => {
    const [user] = useAuthState(auth)
    const navigate =useNavigate();
    const sendDashboard =()=>{
        navigate('/dashboard/my-request')
    }
    const studentDetails = event => {
        event.preventDefault()
        const allInformation = {
            email: user.email,
            name: user.displayName,
            number: event.target.number.value,
            subject: event.target.subject.value,
           
        }
        fetch('http://localhost:5000/student', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(allInformation)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Request added',
                    showConfirmButton: false,
                    timer: 1500

                   
                })
                if(data){
                    event.target.number.value="";
                    event.target.subject.value="";

                }

            })

    }
    return (
        <div className='mid-container '>
            <div className='mt-16'>
                <h1 className="text-center text-5xl">Student Information</h1>
                <form className=" w-full p-7 max-w-lg shadow-2xl mx-auto" onSubmit={studentDetails}>
                    <div className="form-control mt-3">
                        <label className="label">
                            <span className="label-text">Student Name</span>
                        </label>
                        <input
                            className="input input-bordered" type="text" name="name" value={user?.displayName} placeholder='name' id="" readOnly />
                    </div>
                    <div className="form-control mt-3">
                        <label className="label">
                            <span className="label-text">Student Email</span>
                        </label>
                        <input
                            className="input input-bordered" ttype="email" name="email" value={user?.email} placeholder='email' id="" readOnly disabled />
                    </div>
                    <div className="form-control mt-3">
                        <label className="label">
                            <span className="label-text" >Student ID:</span>
                        </label>
                        <input
                            className="input input-bordered" type='number' name='number' required />
                    </div>
                    <div className="form-control mt-3">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input
                            className="input input-bordered" type='text' name='subject' required />
                    </div>
                  

                    <button  className='btn mt-4 w-full'>Send Request</button>
                </form>
            </div>

        </div>
    );
};

export default StudentDetails;