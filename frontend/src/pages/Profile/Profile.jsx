/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Profile = ({ userInfo, totalRecipes }) => {
//   console.log(userInfo, totalRecipes);
  return (
    <div className="flex gap-8 md:px-12 md:py-8 items-center">
      <div>
        <img
          src={userInfo?.imageUrl}
          alt={userInfo?.fullName}
          className="h-28 w-28 object-cover border-2 border-second rounded-full"
        />
      </div>
      <div className="space-y-2">
        <div className="flex gap-2 items-center">
          <h1>{userInfo?.fullName}</h1>
          <button className="text-xs cursor-pointer px-2 py-1 bg-second text-white rounded-md">
            Edit Profile
          </button>
        </div>
        <div className="flex gap-6 items-center">
          <p>{totalRecipes} posts</p>
          <p>{userInfo?.followers?.length} followers</p>
          <p>{userInfo?.following?.length} following</p>
        </div>
        <div>
          <Link to={`mailto:${userInfo?.email}`}><p className="bg-gray-200 w-fit px-2 rounded-full">{userInfo?.email}</p></Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
