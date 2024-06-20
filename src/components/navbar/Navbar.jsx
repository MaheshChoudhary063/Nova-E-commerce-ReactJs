import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {

  const user = JSON.parse(localStorage.getItem("users"));


  const navigate = useNavigate();


  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

   const cartItems = useSelector((state) => state.cart);



  const navList = (
    <ul className="flex space-x-3 text-navy-700 border-black  font-medium text-lg px-5 ">
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      <li>
        <Link to={"/allproduct"}>All Product</Link>
      </li>
      <li>
        <Link to={"/contact"}>About Us</Link>
      </li>

      {!user ? (
        <li>
          <Link to={"/signup"}>Signup</Link>
        </li>
      ) : (
        ""
      )}

      {!user ? (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      ) : (
        ""
      )}

      {user?.role === "user" && (
        <li>
          <Link to={"/user-dashboard"}>{user?.name}</Link>
        </li>
      )}

      {user?.role === "admin" && (
        <li>
          <Link to={"/admin-dashboard"}>Admin</Link>
        </li>
      )}

      {user && (
        <li className=" cursor-pointer" onClick={logout}>
          logout
        </li>
      )}

      <li>
        <Link to={"/cart"}>Cart({cartItems.length})</Link>
      </li>
    </ul>
  );
  return (
    <nav
      style={{ backgroundColor: "white", borderBottom: "1px solid black" }}
      className="sticky top-0"
    >
      <div className="lg:flex lg:justify-between items-center py-5 lg:px-3">
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className="font-bold text-blue-950 text-4xl text-center">
              Nova
            </h2>
          </Link>
        </div>
        <SearchBar />
        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>
      </div>
    </nav>
  );
};

export default Navbar;