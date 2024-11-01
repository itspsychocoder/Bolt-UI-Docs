import Link from 'next/link'
import React from 'react'
import "@/css/navbar.css";
function Navbar() {
  return (
    <div id='navbar' className='p-5 flex justify-between items-center'>
        <h1 className='text-[#E0E0E0] text-3xl font-bold'>Bolt UI</h1>

        <div>
            <ul id='navItems' className='flex justify-center items-center'>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/docs"}>Docs</Link></li>
                <li><Link href={"/about"}>about</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar