import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  const { user } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
    e.target.reset();
  };

  return (
    <nav>
      <section className="flex justify-between items-center p-1 md:px-8  bg-base ">
        <div>
          <Link to={"/"}>
            <h1 className=" md:text-xl text-white font-bold">
              Taste<span>Trail</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <form
            onSubmit={handleSearch}
            className="flex items-center rounded-full overflow-hidden shadow-sm"
          >
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              name="search"
              id="search"
              className="flex-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Search..."
            />
            <button className="py-1 px-2 bg-white text-second flex items-center justify-center">
              <FaSearch />
            </button>
          </form>
          {user ? (
            <Link to={"/profile"}>
              <img
                alt={user?.fullName || "User Image"}
                src={user?.photoURL || "https://via.placeholder.com/150"}
                className="object-cover hidden md:flex w-8 h-8 rounded-full shadow dark:bg-gray-500"
              />
            </Link>
          ) : (
            <img
              src="https://via.placeholder.com/150"
              className="object-cover hidden md:flex w-8 h-8 rounded-full shadow dark:bg-gray-500"
            />
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
