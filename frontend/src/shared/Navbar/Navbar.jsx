import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  console.log(searchText);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
    e.target.reset();
  };

  return (
    <nav>
      <section className="flex justify-between items-center md:px-8 py-1 bg-base ">
        <div>
          <Link to={"/"}>
            <h1 className="text-xl md:text-xl text-white font-bold">
              Taste<span>Trail</span>
            </h1>
          </Link>
        </div>
        <form
          onSubmit={handleSearch}
          className="flex items-center rounded-full overflow-hidden shadow-sm"
        >
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            name="search"
            id="search"
            className="flex-1 px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search..."
          />
          <button className="p-2 bg-white text-second flex items-center justify-center">
            <FaSearch />
          </button>
        </form>
      </section>
    </nav>
  );
};

export default Navbar;
