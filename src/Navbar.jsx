import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-gray-900 font-bold text-xl">Amjad khan</h1>
        
        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-gray-700 font-medium hover:text-purple-600 transition duration-300"
            >
              Home
            </Link>
          </li>
       
          <li>
            <Link
              to="/Project"
              className="text-gray-700 font-medium hover:text-purple-600 transition duration-300"
            >
              Project in Detail
            </Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;