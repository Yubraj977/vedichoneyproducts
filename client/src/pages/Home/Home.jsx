import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import One from '../../heplers/swiper/One';
import Two from '../../heplers/swiper/Two';
import Three from '../../heplers/swiper/Three';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalComponents = 3; // Assuming you have 3 components in total

  function handlePrevious() {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalComponents - 1 : prevIndex - 1));
  }

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex === totalComponents - 1 ? 0 : prevIndex + 1));
  }

  // Function to render the current component based on the currentIndex
  function renderCurrentComponent() {
    switch (currentIndex) {
      case 0:
        return <One />;
      case 1:
        return <Two />;
      case 2:
        return <Three />;
      default:
        return null;
    }
  }

  return (
    <div className='mx-side mt-top flex items-center'>
      <FaAngleLeft onClick={handlePrevious} />
      {renderCurrentComponent()}
      <FaAngleRight onClick={handleNext} />
    </div>
  );
}

export default Home;
