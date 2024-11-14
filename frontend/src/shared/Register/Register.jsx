import { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { createUser, updateUser, loading, setLoading } = useAuth();

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log({ fullName, email, password, imageUrl });

    try {
      setLoading(true);
      await createUser(email, password).then(() => {
        updateUser(fullName, imageUrl).then(async () => {
          toast.success("User Register Success");
          navigate("/");
          setLoading(false);
          const data = await axios.post("http://127.0.0.1:8000/user/register/", {
            fullName,
            email,
            imageUrl,
          });
          console.log(data);
        });
      });
    } catch (error) {
      toast.error(error.message || error);
      setLoading(false); 
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="rounded-sm bg-white w-full max-w-sm shrink-0 shadow-2xl">
        <RegisterForm
          loading={loading}
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
