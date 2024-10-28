import React, { useState } from 'react';
import Link from '../Link/Link';
import { RiMenu2Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";



const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Profile', path: '/profile/:id' },
      ];
    return (
        <nav className='p-6' >
            <div onClick={()=>setOpen(!open)} className='md:hidden'>
            {
                open?<MdClose></MdClose>:<RiMenu2Fill></RiMenu2Fill>
            }
           </div>
           <ul className={`md:flex absolute md:static bg-black duration-1000
            ${
                // open?'': 'hidden'                <<----//open close dropdown
                // open?'top-12':'-top-60'               //<<-------come from top     
                open?'left-8': '-left-60'

            }`}>
           {
                routes.map((r) => <Link key={r.id} r = {r}></Link>
                    )
            }
           </ul>
           
        </nav>
    );
};

export default NavBar;