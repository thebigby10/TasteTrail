/* eslint-disable react/prop-types */
import axios from "axios";
import toast from "react-hot-toast";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DropDown = ({ id, control, setControl }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
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
          const data = await axios.delete(
            `http://127.0.0.1:8000/recipe/delete/${id}/`
          );
          if (data.status == 200) {
            setControl(!control);
            toast.success("Deleted");
          }
        }
      });
    } catch (error) {
      toast.error(error?.message || error);
    }
  };

  return (
    <details className="dropdown dropdown-end">
      <summary tabIndex={0} role="button" className="btn">
        <HiDotsHorizontal size={25} />
      </summary>
      <ul className="menu dropdown-content bg-white z-[1] w-36 shadow-md rounded-lg">
        <li>
          <button onClick={handleDelete}>Delete</button>
        </li>
        <li>
          <Link>Edit</Link>
        </li>
      </ul>
    </details>
  );
};

export default DropDown;
