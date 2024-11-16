/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { HiDotsHorizontal } from "react-icons/hi";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DropDown = ({ id, control, setControl, postUser }) => {
  const { user: currentUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDelete = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7E8940",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`http://127.0.0.1:8000/recipe/delete/${id}`);
          if (response.status === 200) {
            setControl(!control);
            toast.success("Recipe deleted successfully!");
          }
        } catch (error) {
          toast.error("Failed to delete recipe. Please try again.");
          console.error(error.message || error);
        }
      }
    });
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <HiDotsHorizontal size={25} />
      </button>
      {isOpen && (
        <ul className="menu dropdown-content bg-white z-[1] w-36 shadow-md rounded-lg absolute right-0 mt-2">
          {currentUser?.email === postUser && (
            <>
              <li>
                <button onClick={handleDelete}>Delete</button>
              </li>
              <li>
                <Link to={`/update-recipe/${id}`}>Edit</Link>
              </li>
            </>
          )}
          <li>
            <button>Block</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
