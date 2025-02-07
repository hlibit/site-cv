import { projectsData } from "../../data/projectsData";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import { niceNumber } from "../../utils/helpers";
import LinksProject from "./LinksProject";

function InfoProject({ currentIndex }) {
  const numOfProject = niceNumber(currentIndex);
  const { projectName, description, techStack, links } =
    projectsData[currentIndex];

  return (
    <div className="sm:w-[90%] md:w-[50%] lg:w-[40%]">
      <Row className="gap-2 md:gap-4 lg:gap-4">
        <div
          className="font-mono text-6xl font-extrabold leading-none tracking-tight text-transparent lg:text-7xl"
          style={{
            WebkitTextStroke: "1px white",
          }}
        >
          {numOfProject}
        </div>

        <Heading as="h1">{projectName}</Heading>
        <div className="text-sm font-normal leading-6 tracking-wider text-text-dark">
          {description}
        </div>
        <div className="font-lighter max-h-[96px] overflow-auto text-xl text-text-darkGreen lg:text-2xl">
          {techStack}
        </div>
      </Row>
      <LinksProject links={links} />
    </div>
  );
}

export default InfoProject;
