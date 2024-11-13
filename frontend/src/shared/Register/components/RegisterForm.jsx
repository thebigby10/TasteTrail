/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const RegisterForm = ({ setFullName, setEmail, setPassword, setImageUrl, handleRegister }) => {
  return (
    <form className="card-body">
      <div className="space-y-4">
        <h1 className="text-center text-2xl uppercase font-semibold text-second">
          Register Now
        </h1>
        <hr />
      </div>
      
      <div className="form-control">
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <input
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          placeholder="Full Name"
          className="px-4 py-2 border border-second rounded-sm"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="px-4 py-2 border border-second rounded-sm"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="px-4 py-2 border border-second rounded-sm"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Image URL</span>
        </label>
        <input
          onChange={(e) => setImageUrl(e.target.value)}
          type="url"
          placeholder="Image URL"
          className="px-4 py-2 border border-second rounded-sm"
        />
      </div>

      <div className="form-control mt-6">
        <button
          onClick={handleRegister}
          className="px-2 md:px-4 py-2 bg-second text-sm rounded-sm text-white font-semibold uppercase transition-transform"
        >
          Register
        </button>
      </div>

      <div>
        Already have an account?{" "}
        <Link to={"/login"} className="text-second font-semibold">
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
