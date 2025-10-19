import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-400 to-purple-500 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-white font-bold text-xl">My Portfolio</h1>
        
        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white font-medium hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Skill"
              className="text-white font-medium hover:text-yellow-300 transition duration-300"
            >
              Skill in Detail
            </Link>
          </li>
          <li>
            <Link
              to="/Project"
              className="text-white font-medium hover:text-yellow-300 transition duration-300"
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
