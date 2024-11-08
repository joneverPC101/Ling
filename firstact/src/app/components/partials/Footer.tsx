import React from 'react'
 
const Footer:React.FC = () => {
    return (
        <div className="bg-gray-200 p-4 text-center">
          <h1 className="text-lg font-bold mb-4">Footer</h1>
          <p>&copy; 2023 Company Name. All rights reserved.</p>
          <ul className="flex justify-center mb-4">
            <li className="mr-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">Terms of Service</a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a>
            </li>
          </ul>
          <div className="flex justify-center">
            <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="text-sm text-gray-600">
            <p>Address: 123 Main St, Anytown, USA 12345</p>
            <p>Phone: 555-555-5555</p>
            <p>Email: [info@companyname.com](mailto:info@companyname.com)</p>
          </div>
        </div>
      )
}
 
export default Footer;
