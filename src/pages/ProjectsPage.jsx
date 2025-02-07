import { useState } from "react";
import InfoProject from "../components/projectsPageComps/InfoProject";

import Carousel from "../components/projectsPageComps/Carousel";

function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <main className="my-auto flex w-full max-w-[1000px] flex-col items-center gap-4 md:max-h-[530px] md:flex-row-reverse lg:items-start xl:gap-6">
      <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <InfoProject currentIndex={currentIndex} />
    </main>
  );
}

export default ProjectsPage;
