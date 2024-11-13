import { useState } from "react";
import LoginForm from "./components/LoginForm";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser, loading, setLoading } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await loginUser(email, password);
      toast.success("Login Success");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="rounded-sm bg-white w-full max-w-sm shrink-0 shadow-2xl">
        <LoginForm
          loading={loading}
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      </div>
    </div>
  );
};

export default Login;
