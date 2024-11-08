import React from 'react'
import Link from 'next/link'
const Header:React.FC = () => {
    return (
        <div>
          <nav className="bg-gray-200 flex items-center p-4">
            <h1 className="text-lg font-bold mr-4">Firstack</h1>
            <ul className="flex list-none p-0">
              <li className="mr-4"><Link href='/'>Home</Link></li>
              <li className="mr-4"><Link href='/about'>About</Link></li>
              <li><Link href='/contact'>Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      )
}
 
export default Header