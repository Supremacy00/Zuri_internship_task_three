import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { SlMenu } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignOut = async () => {
    setIsLoading(true);
    const auth = getAuth();
    try {
      await signOut(auth);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.error("Sign out failed:", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mx-auto max-w-[1240px] px-4 pt-6 sm:pt-8  xl:px-0">
        <button
          className="text-[16px] bg-slate-600 px-3 py-2 text-slate-100 rounded-md hover:bg-slate-700 md:px-4 md:py-2 md:text-md"
          onClick={handleSignOut}
        >{`${isLoading ? "Login Out.." : "Log Out"}`}</button>
        <SlMenu className="text-3xl" />
      </div>
    </div>
  );
};

export default SignOut;
