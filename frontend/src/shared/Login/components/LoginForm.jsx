import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LoginForm = ({ setEmail, setPassword, handleLogin, loading }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <form className="card-body">
      <div className="space-y-4">
        <h1 className="text-center text-2xl uppercase font-semibold text-second">
          Login Now
        </h1>
        <hr />
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
      <div className="form-control relative">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type={`${toggle ? "text" : "password"}`}
          placeholder="***************"
          className="px-4 py-2 border border-second rounded-sm"
          required
        />
        <span
          onClick={handleToggle}
          className="absolute top-1/2 right-2 py-2 cursor-pointer text-sm"
        >
          {toggle ? "Hide" : "Show"}
        </span>
      </div>
      <div className="form-control mt-6">
        <button
          onClick={handleLogin}
          disabled={loading}
          className="px-2 md:px-4 py-2 bg-second text-sm rounded-sm text-white font-semibold uppercase transition-transform"
        >
          {loading ? "Wait..." : "Login"}
        </button>
      </div>
      <div>
        Do not have an account?{" "}
        <Link to={"/register"} className="text-second font-semibold">
          Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
