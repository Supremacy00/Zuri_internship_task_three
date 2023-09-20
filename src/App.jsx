import { useState, useEffect } from "react";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashLoader} from "react-spinners"

function App() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  
  return (
    <BrowserRouter>
      <div>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen text-red-700">
            <HashLoader color="#000000" />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/homepage" element={<Homepage />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
