import Header from "../header/Header";
import Smedia from "../smedia/Smedia";

const Navbar = () => {
  const backgroundImage = "/images/backgroundimage.jpg";

  return (
    <>
      <nav
        className={`bg-cover bg-center bg-no-repeat h-screen font-roboto relative `}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto max-w-[1200px]  px-5 py-5 sm:px-7 md:max-w-[1300px]">
          <div className="flex justify-between items-center ">
            <h1 className="text-[25px] text-white font-semibold sm:text-[25px]">
              Sup<span className="text-slate-300 font-medium">Remacy</span>
            </h1>
            <button className="text-[17px] font-normal bg-slate-700 px-3 py-3 rounded-md hover:bg-slate-600 text-slate-300 md:px-5 md:text-[17px]">
              Sign Up
            </button>
          </div>
        </div>
        <Header />
        <Smedia />
      </nav>
    </>
  );
};

export default Navbar;
