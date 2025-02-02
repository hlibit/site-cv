import { projectsData } from "../../data/projectsData";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import ButtonCarousel from "./ButtonCarousel";

function Carousel({ currentIndex, setCurrentIndex }) {
  const [imageIndex, setImageIndex] = useState(0);
  const currentImageLink = projectsData[currentIndex].images[imageIndex];

  const disabledNext =
    currentIndex === projectsData.length - 1 &&
    imageIndex === projectsData[currentIndex].images.length - 1;

  const disabledPrev = currentIndex === 0 && imageIndex === 0;

  function handleNextSlide() {
    if (imageIndex >= projectsData[currentIndex].images.length - 1) {
      if (currentIndex < projectsData.length - 1) {
        setCurrentIndex((i) => i + 1);
        setImageIndex(0);
      } else setCurrentIndex(projectsData.length - 1);
    } else {
      setImageIndex((i) => i + 1);
    }
  }

  function handlePrevSlide() {
    if (imageIndex <= 0) {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        setImageIndex(projectsData[currentIndex - 1].images.length - 1);
      }
    } else {
      setImageIndex((i) => i - 1);
    }
  }

  return (
    <div className="flex flex-col gap-7 md:w-[60%] lg:w-[50%]">
      <div className="h-[290px] w-[290px] sm:h-[300px] sm:w-[300px] md:ml-auto lg:h-[340px] lg:w-[340px] xl:h-[418px] xl:w-[418px]">
        <img
          src={currentImageLink}
          className="h-auto w-full object-cover"
          alt={`Project ${currentIndex + 1} Image`}
        />
      </div>
      <div className="ml-auto space-x-3">
        <ButtonCarousel disabled={disabledPrev} onClick={handlePrevSlide}>
          <MdArrowBackIosNew size={24} />
        </ButtonCarousel>

        <ButtonCarousel disabled={disabledNext} onClick={handleNextSlide}>
          <MdArrowForwardIos size={24} />
        </ButtonCarousel>
      </div>
    </div>
  );
}

export default Carousel;
