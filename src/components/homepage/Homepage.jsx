import { useState, useEffect } from "react";
import DraggableGallery from "../draggable/Draggable";
import { HashLoader } from "react-spinners";
import Footer from "../footer/Footer";
import SignOut from "../auth/SignOut";
import { initialImages } from "../data";

const Homepage = () => {
  
  const [searchText, setSearchText] = useState("");
  const [filteredImages, setFilteredImages] = useState(initialImages);

  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);

    const filtered = initialImages.filter((image) =>
      image.title.toLowerCase().includes(text)
    );
    setFilteredImages(filtered);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="font-roboto bg-slate-50 h-sreen">
      <SignOut />
      <div>
        <h1 className="text-center pt-8 text-[30px] px-4 sm:px-0 md:text-4xl ">
          Welcome to Supremacy Gallery
        </h1>
        <div className="flex justify-center items-start text-center px-5 mt-8 sm:mx-0 md:mt-12  ">
          <input
            type="text"
            className=" w-[400px] h-12 pl-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            placeholder="Search..."
            value={searchText}
            onChange={handleSearch}
          />
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen relative bottom-44 text-red-700">
          <HashLoader color="#000000" />
        </div>
      ) : (
        <DraggableGallery
          filteredImages={filteredImages}
          initialImages={initialImages}
        />
      )}
      <Footer />
    </div>
  );
};

export default Homepage;
