import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    const menueItems = <>

        <li><a  className='rounded-xl mr-2' >Home </a></li>
        <li><a className='rounded-xl mr-2' >All Books </a></li>
        <li><a className='rounded-xl mr-2' href=''>About Us</a></li>
        <li><a className='rounded-xl mr-2' href=''>Gellery</a></li>
        <li><a className='rounded-xl mr-2' href=''>Services</a></li>
        <li><a className='rounded-xl mr-2' href=''>Contact Us</a></li>
        <li><a className='rounded-xl' href=''>Review</a></li>
        <li><a className='rounded-xl bg-slate-800 text-white' href=''>LogIn</a></li>
  



    </>
    return (
        <div className=''>
            <div class="navbar bg-base-200  px-20">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menueItems}
                         

                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-2xl">Library Management</a>
                </div>
                <div class="navbar-center hidden lg:flex ">
                    <ul class="menu menu-horizontal lg:ml-96">
                        {menueItems}
            
                      
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Header;