import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="row">
        <nav>
          <ul>
            <li className="nav-item">
              <Link className="nav-link active" to="/">Skill in Detail</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
