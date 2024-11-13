import { useState } from "react";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log({ fullName, email, password, imageUrl });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="rounded-sm bg-white w-full max-w-sm shrink-0 shadow-2xl">
        <RegisterForm
          setFullName={setFullName}
          setEmail={setEmail}
          setPassword={setPassword}
          setImageUrl={setImageUrl}
          handleRegister={handleRegister}
        />
      </div>
    </div>
  );
};

export default Register;
