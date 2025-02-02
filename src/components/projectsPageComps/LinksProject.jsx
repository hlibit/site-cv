import { FaGithub } from "react-icons/fa";
import Button from "../../ui/Button";
import Row from "../../ui/Row";
import { moveByOuterLink } from "../../utils/helpers";
import { GoArrowUpRight } from "react-icons/go";
import Tip from "../../ui/Tip";

function LinksProject({ links: { github, site } }) {
  return (
    <Row
      type="horizontal"
      className="mt-4 gap-5 border-t-[1px] border-text-dark pt-4 md:mt-8 md:pt-8"
    >
      {site && (
        <div className="relative">
          <Tip>
            <Tip.Open id={site}>
              <Button
                hover={true}
                onClick={() => moveByOuterLink(site)}
                type="contained"
              >
                <GoArrowUpRight size={30} />
              </Button>
            </Tip.Open>
            <Tip.Window id={site} top=" top-[-26px] " itemTitle="Live-проєкт" />
          </Tip>
        </div>
      )}
      {github && (
        <div className="relative">
          <Tip>
            <Tip.Open id={github}>
              <Button
                hover={true}
                onClick={() => moveByOuterLink(github)}
                type="contained"
              >
                <FaGithub size={30} />
              </Button>
            </Tip.Open>
            <Tip.Window
              id={github}
              top=" top-[-26px]"
              itemTitle="Репозиторій"
            />
          </Tip>
        </div>
      )}
    </Row>
  );
}

export default LinksProject;
