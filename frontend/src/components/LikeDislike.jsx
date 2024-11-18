/* eslint-disable react/prop-types */
import { AiFillLike, AiOutlineDislike, AiFillDislike, AiOutlineLike } from "react-icons/ai";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useState, useEffect } from "react";

const LikeDislike = ({ likes, dislikes, id }) => {
  const { user } = useAuth();
  const [localLikes, setLocalLikes] = useState(likes || []);
  const [localDislikes, setLocalDislikes] = useState(dislikes || []);
  const [toggleLike, setToggleLike] = useState(likes?.includes(user?.email));
  const [toggleDislike, setToggleDislike] = useState(dislikes?.includes(user?.email));

  useEffect(() => {
    setLocalLikes(likes);
    setLocalDislikes(dislikes);
    setToggleLike(likes?.includes(user?.email));
    setToggleDislike(dislikes?.includes(user?.email));
  }, [likes, dislikes, user?.email]);

  const handleLike = async () => {
    try {
      let updatedLikes = [...localLikes];
      let updatedDislikes = [...localDislikes];

      if (toggleDislike) {
        updatedDislikes = updatedDislikes.filter((email) => email !== user?.email);
        setToggleDislike(false);
      }

      if (updatedLikes.includes(user?.email)) {
        updatedLikes = updatedLikes.filter((email) => email !== user?.email);
      } else {
        updatedLikes.push(user?.email);
      }

      const response = await axios.put("http://127.0.0.1:8000/recipe/like/", {
        postID: id,
        userEmail: user?.email,
      });

      if (response?.status === 200) {
        setToggleLike(!toggleLike);
        setLocalLikes(updatedLikes);
        setLocalDislikes(updatedDislikes);
      }
    } catch (error) {
      console.error("Error liking the recipe:", error);
    }
  };

  const handleDislike = async () => {
    try {
      let updatedLikes = [...localLikes];
      let updatedDislikes = [...localDislikes];

      if (toggleLike) {
        updatedLikes = updatedLikes.filter((email) => email !== user?.email);
        setToggleLike(false);
      }

      if (updatedDislikes.includes(user?.email)) {
        updatedDislikes = updatedDislikes.filter((email) => email !== user?.email);
      } else {
        updatedDislikes.push(user?.email);
      }

      const response = await axios.put("http://127.0.0.1:8000/recipe/dislike/", {
        postID: id,
        userEmail: user?.email,
      });

      if (response?.status === 200) {
        setToggleDislike(!toggleDislike);
        setLocalLikes(updatedLikes);
        setLocalDislikes(updatedDislikes);
      }
    } catch (error) {
      console.error("Error disliking the recipe:", error);
    }
  };

  return (
    <div className="flex gap-8">
      <div className="flex items-center gap-2">
        <button onClick={handleLike}>
          {toggleLike ? (
            <AiFillLike size={30} />
          ) : (
            <AiOutlineLike size={30} />
          )}
        </button>
        {localLikes?.length || 0}
      </div>
      <div className="flex items-center gap-2">
        <button onClick={handleDislike}>
          {toggleDislike ? (
            <AiFillDislike size={30} />
          ) : (
            <AiOutlineDislike size={30} />
          )}
        </button>
        {localDislikes?.length || 0}
      </div>
    </div>
  );
};

export default LikeDislike;
