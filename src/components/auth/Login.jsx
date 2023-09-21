import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { HashLoader } from "react-spinners";

const Login = ({ handleClose }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (email === "user@example.com" && password === "1Password") {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password);
        setIsLoading(false);
        navigate("/homepage");
      } else {
        setError("Invalid email or password");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed flex items-center justify-center z-50 inset-0 font-roboto shadow-3xl shadow-white bg-black bg-opacity-50 backdrop-blur-sm">
      <img
        src="/images/artgallery.jpg"
        className="object-cover hidden rounded-l-lg w-[400px] max-h-[532px] lg:block"
        alt=""
      />
      <div className="bg-slate-100 rounded-lg shadow-xl relative px-8 py-20 max-h-[432px] mx-6 md:py-32  lg:max-h-[532px] lg:mx-0 lg:px-16 lg:rounded-l-none w-[400px] ">
        <div>
          <span
            className="text-slate-500 cursor-pointer absolute top-4 right-4 text-[27px]"
            onClick={handleClose}
          >
            <MdClose />
          </span>
        </div>
        {isLoading ? (
          <div className="h-screen relative flex justify-center top-[100px] text-red-700">
            <HashLoader color="#FF0000" />
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-700 block font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="text-white bg-cyan-500 px-4 py-2 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600"
              >
                Sign In
              </button>
              <a href="#" className="text-cyan-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}{" "}
      </div>
    </div>
  );
};

Login.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default Login;
