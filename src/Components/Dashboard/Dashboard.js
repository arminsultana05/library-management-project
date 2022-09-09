import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { VscBook } from 'react-icons/vsc';
import { ImBooks } from 'react-icons/im';
import { FaQuestion } from 'react-icons/fa';
import { TbGitPullRequestClosed } from 'react-icons/tb';
import { RiAdminLine } from 'react-icons/ri';
import { BiImageAdd } from 'react-icons/bi';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl font-bold text-green-400 text-center mt-5'>Welcome to Your Dashboard</h2>
                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-56 mt-5 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li ><Link to ='/dashboard' > <AiOutlineUsergroupAdd/> My-Profile</Link></li>
                    <li className='mt-5'><Link to ='/dashboard/my-request'><VscBook></VscBook>My-Book-Request</Link></li>
                    <li className='mt-5'><Link to ='/dashboard/faq'><FaQuestion></FaQuestion>FAQ</Link></li>
                    <li className='mt-5'><Link to ='/dashboard/manage-books'><ImBooks></ImBooks>Manage All Books</Link></li>
                    <li className='mt-5'><Link to ='/dashboard/all-request'><TbGitPullRequestClosed></TbGitPullRequestClosed>Students-Request</Link></li>
                
                    <li className='mt-5'><Link to ='/dashboard/make-admin'><RiAdminLine></RiAdminLine>Make-admin</Link></li>
                    <li className='mt-5'><Link to ='/dashboard/add-books'><BiImageAdd></BiImageAdd>Add Books</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;