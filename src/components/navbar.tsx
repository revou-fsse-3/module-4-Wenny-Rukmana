import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 shadow-md">
      <ul className="flex space-x-4 text-white font-semibold">
        <li>
          <Link to="/" className="text-white font-semibold">
            Home
          </Link>
        </li>
        <li>
          <Link to="/loginpages" className="text-white font-semibold">
            Login
          </Link>
        </li>
        <li>
          <Link to="/category" className="text-white font-semibold">
            Category
          </Link>
        </li>
        <li>
          <Link to="/module4" className="text-white font-semibold">
            Week 9
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
