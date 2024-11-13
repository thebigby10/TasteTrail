import { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { createUser, updateUser } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log({ fullName, email, password, imageUrl });

    try {
      await createUser(email, password).then(() => {
        updateUser(fullName, imageUrl).then(async () => {
          const data = await axios.post("http://127.0.0.1:8000/user/register", {
            fullName,
            email,
            imageUrl,
          });
          console.log(data);
        });
      });
    } catch (error) {
      console.log(error);
    }
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
