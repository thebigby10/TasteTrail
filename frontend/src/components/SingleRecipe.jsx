import { Link } from "react-router-dom";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import useAuth from "../hooks/useAuth";
import DropDown from "./DropDown";

/* eslint-disable react/prop-types */
const SingleRecipe = ({ recipe, setControl, control }) => {
  const { user: currentUser } = useAuth();

  const { imgUrl, user, title, description, likes, dislikes, comments } =
    recipe.data || "";

  return (
    <div className="flex flex-col w-full p-6 space-y-6 rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div className="flex justify-between items-start">
        <div className="flex space-x-4">
          <img
            alt=""
            src={imgUrl}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <div className="flex gap-4 items-center">
              <h1 className="text-sm font-semibold">{user}</h1>
              {user != currentUser?.email && (
                <button>
                  <p className="text-blue-500 text-sm font-semibold">Follow</p>
                </button>
              )}
            </div>
            <span className="text-xs dark:text-gray-600">4 hours ago</span>
          </div>
        </div>
        <DropDown
          postUser={user}
          id={recipe?.pk}
          setControl={setControl}
          control={control}
        />
      </div>
      <div>
        <img
          src={imgUrl}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">{title}</h2>
        <div className="text-sm dark:text-gray-600">
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <Link to={`/recipe-details/${recipe?.pk}`}>...more</Link>
      </div>

      <div className="flex justify-between space-x-2 text-sm dark:text-gray-600">
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <button>
              <AiOutlineLike size={30} />
            </button>
            {likes?.length}
          </div>
          <div className="flex items-center gap-2">
            <button>
              <AiOutlineDislike size={30} />
            </button>
            {dislikes?.length}
          </div>
        </div>
        <div>
          <button>
            <p>Comments: {comments?.length}</p>
          </button>
        </div>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Drop a comment"
          className="w-full px-4 py-2 rounded-l-full border border-second focus:outline-none"
        />
        <button className="bg-second px-4 text-white rounded-r-full">
          <IoSend size={25} />
        </button>
      </div>
    </div>
  );
};

export default SingleRecipe;
