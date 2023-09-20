import { useState } from "react";
import Login from "../auth/Login";
const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginForm = () => {
    setShowLoginForm(true);

};

const handleClose = () => {
  setShowLoginForm(false)
}

  return (
   
    <div>
      <section>
        <div className="container mx-auto font-roboto mt-36 text-white px-5 sm:px-6 sm:mt-44 md:mt-28 sm:max-w-[1300px]">
          <h1 className="text-[32px] leading-[50px] font-medium sm:text-[35px] md:text-[43px] md:leading-[65px] md:max-w-[600px] lg:max-w-[620px]">
            Welcome to Supremacy Gallery, feel free to explore, drag and drop
            images.
          </h1>
          <p className=" text-[19px] mt-7 md:text-[22px]">
            Lets enjoy the beauty of this gallery app
          </p>
          <div className="mt-16">
            <button className="text-[17px] font-normal bg-slate-700 rounded-md px-3 py-3 hover:bg-slate-600 md:py-4 md:text-[18px]" onClick={handleLoginForm}>
              Login Here
            </button>
          </div>
        </div>
        {showLoginForm && <Login handleClose={handleClose}/>}
      </section>
    </div>
   
  );
};

export default Header;
