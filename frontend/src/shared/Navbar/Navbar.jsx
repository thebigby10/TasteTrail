import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  return (
    <nav>
      <section className="flex justify-between items-center px-4 md:px-8 py-4 bg-base shadow-sm shadow-second">
        <div>
          <Link to={"/"}>
            <h1 className="text-xl md:text-3xl text-white font-bold">
              Taste<span>Trail</span>
            </h1>
          </Link>
        </div>
        <div>
          {user ? (
            <div className="flex gap-4 items-center">
              <div>
                <Link to={"/add-recipe"}>
                  <button className="uppercase text-white text-sm font-semibold">
                    Add Recipe
                  </button>
                </Link>
              </div>
              <button
                onClick={logOut}
                className="px-2 md:px-4 py-2 bg-second text-sm rounded-sm text-white font-semibold uppercase hover:scale-105 transition-transform"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="px-2 md:px-4 py-2 bg-second text-sm rounded-sm text-white font-semibold uppercase hover:scale-105 transition-transform">
                Login
              </button>
            </Link>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
