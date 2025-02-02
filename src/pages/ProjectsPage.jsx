import { useState } from "react";
import InfoProject from "../components/projectsPageComps/InfoProject";

import Carousel from "../components/projectsPageComps/Carousel";

function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  //grid grid-rows-[1fr_auto] gap-4 sm:grid-rows-[40vh_auto] md:max-h-[420px] md:grid-cols-2 md:grid-rows-1
  return (
    <main className="mt-5 flex flex-col items-start md:max-h-[460px] md:flex-row-reverse lg:mt-2 xl:gap-7">
      <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <InfoProject currentIndex={currentIndex} />
    </main>
  );
}

export default ProjectsPage;
