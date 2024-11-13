import { useState } from "react";
import LoginForm from "./components/LoginForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="rounded-sm bg-white w-full max-w-sm shrink-0 shadow-2xl">
        <LoginForm
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      </div>
    </div>
  );
};

export default Login;
