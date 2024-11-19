import { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../../utils/uploadImage";
import Swal from "sweetalert2";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser, updateUser, loading, setLoading } = useAuth();

  const navigate = useNavigate();

  const imgbb = async (image) => {
    setLoading(true);
    const result = await uploadImage(image);
    return result;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password?.length < 6)
      return toast.error("Password should be atleast 6 characters!!");

    const imageUrl = await imgbb(e.target.image.files[0]);
    // console.log({ fullName, email, password, imageUrl });

    try {
      setLoading(true);
      if (imageUrl) {
        const data = await axios.post("http://127.0.0.1:8000/user/register/", {
          fullName,
          email,
          imageUrl,
        });
        if (data.status == 200) {
          await createUser(email, password).then(() => {
            updateUser(fullName, imageUrl).then(() => {
              toast.success("User Register Success");
              navigate("/");
              setLoading(false);
            });
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          text: "Please Try Again!!",
          confirmButtonColor: "#7e8940",
        });
      }
    } catch (error) {
      toast.error(error.message || error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200 h-[calc(100vh-68px)]">
      <div className="rounded-sm bg-white w-full max-w-sm shrink-0 shadow-2xl">
        <RegisterForm
          loading={loading}
          setFullName={setFullName}
          setEmail={setEmail}
          setPassword={setPassword}
          handleRegister={handleRegister}
        />
      </div>
    </div>
  );
};

export default Register;
