import { useState } from "react";
import InfoProject from "../components/projectsPageComps/InfoProject";

import Carousel from "../components/projectsPageComps/Carousel";

function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="grid max-h-[420px] grid-cols-2">
      <InfoProject currentIndex={currentIndex} />
      <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  );
}

export default ProjectsPage;
