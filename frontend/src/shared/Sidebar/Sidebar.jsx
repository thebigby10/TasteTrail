import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { ShoppingBagIcon, PowerIcon } from "@heroicons/react/24/solid";

import { IoMdHome } from "react-icons/io";
import { AiOutlinePlus, AiOutlineLogin } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import superBg from "../../assets/images/Background/super_bg.jpeg";

export function Sidebar() {
  const { user, logOut } = useAuth();

  const linkClasses = ({ isActive }) =>
    `flex gap-4 items-center ${
      isActive ? "text-second font-bold" : "text-gray-600 hover:text-second"
    }`;

  return (
    <Card
      className="relative h-[calc(100vh-40px)] w-12 md:w-40 flex flex-col rounded-none justify-between p-1 md:p-4"
      style={{
        backgroundImage: `url(${superBg})`,
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white opacity-90 z-0" />
      
      <List className="space-y-6 z-10 relative">
        <ListItem>
          <NavLink to="/" className={linkClasses}>
            <ListItemPrefix>
              <IoMdHome className="h-5 w-5 md:h-7 md:w-7" />
            </ListItemPrefix>
            <span className={`hidden md:flex`}>Home</span>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/explore" className={linkClasses}>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5 md:h-7 md:w-7" />
            </ListItemPrefix>
            <span className="hidden md:flex">Explore</span>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/trending" className={linkClasses}>
            <ListItemPrefix>
              <BsFire className="h-5 w-5 md:h-7 md:w-7" />
            </ListItemPrefix>
            <span className="hidden md:flex">Trending</span>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/add-recipe" className={linkClasses}>
            <ListItemPrefix>
              <AiOutlinePlus className="h-5 w-5 md:h-7 md:w-7" />
            </ListItemPrefix>
            <span className={`hidden md:flex`}>Create</span>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/profile" className={linkClasses}>
            <ListItemPrefix>
              <FaUserCircle className="h-5 w-5 md:h-7 md:w-7" />
            </ListItemPrefix>
            <span className="hidden md:flex">Profile</span>
          </NavLink>
        </ListItem>
      </List>
      
      <List className="z-20 relative"> 
        {user ? (
          <ListItem
            onClick={logOut}
            className="flex gap-4 items-center md:px-2 w-full py-1 md:bg-[#B23B3B] text-sm rounded-sm text-[#b23b3b] md:text-white font-semibold uppercase hover:scale-105 transition-transform"
          >
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            <button className="hidden md:flex">Logout</button>
          </ListItem>
        ) : (
          <NavLink to="/login" className="w-full">
            <ListItem className="flex gap-4 items-center md:px-2 w-full py-1 md:bg-second text-sm rounded-sm text-second md:text-white font-semibold uppercase hover:scale-105 transition-transform">
              <ListItemPrefix>
                <AiOutlineLogin className="h-5 w-5" />
              </ListItemPrefix>
              <button className="hidden md:flex">Login</button>
            </ListItem>
          </NavLink>
        )}
      </List>
    </Card>
  );
}
