/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import useAuth from "../hooks/useAuth";
import DropDown from "./DropDown";
import { useEffect, useRef } from "react";

const SingleRecipe = ({ recipe, setControl, control }) => {
  const { user: currentUser } = useAuth();
  const { pk, user, data, created_at } = recipe || {};
  const {
    imgUrl: recipeImg,
    title,
    description,
    likes,
    dislikes,
    comments,
  } = data || {};
  const { fullName, email, imageUrl } = user || {};

  const recipeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(pk);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (recipeRef.current) {
      observer.observe(recipeRef.current);
    }

    return () => {
      if (recipeRef.current) {
        observer.unobserve(recipeRef.current);
      }
    };
  }, [pk]);

  return (
    <div
      id={pk}
      ref={recipeRef}
      className="flex flex-col w-full p-6 space-y-6 rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800"
    >
      <div className="flex justify-between items-start">
        <div className="flex space-x-4">
          <img
            alt={fullName || "User Image"}
            src={imageUrl || "https://via.placeholder.com/150"}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <div className="flex gap-4 items-center">
              <h1 className="text-sm font-semibold">
                {fullName || "Unknown User"}
              </h1>
              {email !== currentUser?.email && (
                <button>
                  <p className="text-blue-500 text-sm font-semibold">Follow</p>
                </button>
              )}
            </div>
            <span className="text-xs dark:text-gray-600">
              {created_at || "Unknown Time"}
            </span>
          </div>
        </div>
        <DropDown
          postUser={email}
          id={pk}
          setControl={setControl}
          control={control}
        />
      </div>
      <div>
        <img
          src={recipeImg || "https://via.placeholder.com/600x400"}
          alt={title || "Recipe Image"}
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">
          {title || "Untitled Recipe"}
        </h2>
        <div className="text-sm dark:text-gray-600">
          <div dangerouslySetInnerHTML={{ __html: description || "" }} />
        </div>
        <Link to={`/recipe-details/${pk}`}>...more</Link>
      </div>
      <div className="flex justify-between space-x-2 text-sm dark:text-gray-600">
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <button>
              <AiOutlineLike size={30} />
            </button>
            {likes?.length || 0}
          </div>
          <div className="flex items-center gap-2">
            <button>
              <AiOutlineDislike size={30} />
            </button>
            {dislikes?.length || 0}
          </div>
        </div>
        <div>
          <button>
            <p>Comments: {comments?.length || 0}</p>
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
