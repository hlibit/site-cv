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
    <div>
      <Row className="gap-7">
        <div
          className="font-mono text-8xl font-extrabold leading-none tracking-tight text-transparent"
          style={{
            WebkitTextStroke: "1px white",
          }}
        >
          {numOfProject}
        </div>

        <Heading as="h1">{projectName}</Heading>
        <div className="text-sm font-normal leading-8 tracking-wider text-text-dark">
          {description}
        </div>
        <Heading as="h3Thin">
          <span className="text-text-darkGreen">{techStack}</span>
        </Heading>
      </Row>
      <LinksProject links={links} />
    </div>
  );
}

export default InfoProject;
