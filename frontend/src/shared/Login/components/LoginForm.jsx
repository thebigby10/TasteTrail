import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LoginForm = ({ setEmail, setPassword, handleLogin }) => {
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
          placeholder="email"
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
          placeholder="***************"
          className="px-4 py-2 border border-second rounded-sm"
          required
        />
      </div>
      <div className="form-control mt-6">
        <button
          onClick={handleLogin}
          className="px-2 md:px-4 py-2 bg-second text-sm rounded-sm text-white font-semibold uppercase transition-transform"
        >
          Login
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
