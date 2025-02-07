import { FaGithub } from "react-icons/fa";
import Button from "../../ui/Button";
import Row from "../../ui/Row";
import { moveByOuterLink } from "../../utils/helpers";
import { GoArrowUpRight } from "react-icons/go";
import Tip from "../../ui/Tip";

function LinksProject({ links: { github, site, privateGithub } }) {
  return (
    <Row
      type="horizontal"
      className="mt-4 gap-5 border-t-[1px] border-text-dark pt-4 lg:mt-6 lg:pt-6"
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
      {privateGithub && (
        <div className="relative">
          <Tip>
            <Tip.Open id={github}>
              <Button type="contained" className="bg-text-dark">
                <FaGithub size={30} />
              </Button>
            </Tip.Open>
            <Tip.Window id={github} top=" top-[-26px]" itemTitle="Приватний" />
          </Tip>
        </div>
      )}
    </Row>
  );
}

export default LinksProject;
