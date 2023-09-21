import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const DraggableGallery = ({ filteredImages, initialImages }) => {
  const [pattern, setPattern] = useState(
    initialImages.map((image, index) => ({
      i: image.id,
      x: index % 4,
      y: Math.floor(index / 4),
      w: 1,
      h: 1,
    }))
  );

  useEffect(() => {
    const handleBrealPoints = () => {
      setPattern((prevPattern) => {
        return prevPattern.map((item, index) => ({
          ...item,
          x: index % 4,
          y: Math.floor(index / 4),
        }));
      });
    };

    window.addEventListener("resize", handleBrealPoints);
    return () => {
      window.removeEventListener("resize", handleBrealPoints);
    };
  }, []);

  const handleDrop = (patternItem, targetPattern) => {
    const droppedItem = patternItem;
    const targetItem = targetPattern.find((item) => item.i === droppedItem.i);

    if (targetItem) {
      const updatedPattern = pattern.map((item) => {
        if (item.i === droppedItem.i) {
          return { ...item, x: targetItem.x, y: targetItem.y };
        } else if (item.i === targetItem.i) {
          return { ...item, x: droppedItem.x, y: droppedItem.y };
        }
        return item;
      });

      setPattern(updatedPattern);
    }
  };

  const handleMouseOver = () => {};

  return (
    <div className="container mx-auto mt-24">
      <ResponsiveGridLayout
        className="pattern"
        layouts={{ lg: pattern }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 4, md: 3, sm: 3, xs: 2, xxs: 1 }}
        rowHeight={300}
        width={1000}
        onDrop={(patternItem, targetPattern) =>
          handleDrop(patternItem, targetPattern)
        }
      >
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="  cursor-pointer group "
            onMouseOver={handleMouseOver}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover relative"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center">{image.title}</p>
            </div>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};
DraggableGallery.propTypes = {
  filteredImages: PropTypes.array.isRequired,
  initialImages: PropTypes.array.isRequired,
};

export default DraggableGallery;
