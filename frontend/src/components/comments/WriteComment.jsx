import { IoSend } from "react-icons/io5";

const WriteComment = () => {
    return (
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
    );
};

export default WriteComment;