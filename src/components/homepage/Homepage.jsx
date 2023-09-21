import { useState, useEffect } from "react";
import DraggableGallery from "../draggable/Draggable";
import { HashLoader} from "react-spinners"


const Homepage = () => {

  const initialImages = [
    { id: 'image1', src: '/images/blueandyellowbird.jpg', title: 'Blue and Yellow Bird' },
    { id: 'image2', src: '/images/thewaterfalls.jpg', title: 'The Waterfall' },
    { id: 'image3', src: '/images/greenforest.jpg', title: 'Green Forest' },
    { id: 'image4', src: '/images/lighteningstrike.jpg', title: 'Lightening Strike' },
    { id: 'image5', src: '/images/pandaandcub.jpg', title: 'Pand and Cub' },
    { id: 'image6', src: '/images/squirreleatingcone.jpg', title: 'Squirrel Eating Cone' },
    { id: 'image7', src: '/images/runninghorses.jpg', title: 'Running Horses' },
    { id: 'image8', src: '/images/aigenerated.jpg', title: 'Ai Generated Dogs' },
    { id: 'image9', src: '/images/antarctica.jpg', title: 'View of Antarctica' },
    { id: 'image10', src: '/images/bloomingsunflower.jpg', title: 'Blooming Sunflower' },
    { id: 'image11', src: '/images/redadmiralbutterfly.jpg', title: 'Red Admiral Butterfly' },
    { id: 'image12', src: '/images/perfectsunrise.jpg', title: 'Perfect Sunrise' },
    
  ];
  const [searchText, setSearchText] = useState('');
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
  }, [])

  return (
    <div className="font-roboto bg-slate-200 h-sreen">
      <div>
        <h1 className="text-center pt-12 text-4xl">
          Welcome to Supremacy Gallery
        </h1>
        <div className="flex justify-center items-start text-center mt-12 px-2 sm:mx-0">
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
          <DraggableGallery filteredImages={filteredImages} initialImages={initialImages}/>
        )}
     
    </div>
  );
};


export default Homepage;
