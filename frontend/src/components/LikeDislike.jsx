/* eslint-disable react/prop-types */
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import axios from 'axios'
import useAuth from "../hooks/useAuth";
import useRefetch from "../hooks/useRefetch";

const LikeDislike = ({likes, dislikes, id}) => {
  const {user} = useAuth();

  const {refetch, setRefetch} = useRefetch();

    const handleLike = async() =>{
        const data = await axios.put("http://127.0.0.1:8000/recipe/like/", {
          postID: id,
          userEmail: user?.email
        })
        if(data?.status == 200){
          setRefetch(!refetch);
        }
    }
    const handleDislike = async() =>{
        console.log("Dislike de");
    }
    return (
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <button onClick={handleLike}>
              <AiOutlineLike size={30} />
            </button>
            {likes?.length || 0}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleDislike}>
              <AiOutlineDislike size={30} />
            </button>
            {dislikes?.length || 0}
          </div>
        </div>
    );
};

export default LikeDislike;