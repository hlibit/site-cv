import Row from "../../ui/Row";
import AboutDetail from "./AboutDetail";

function AboutMeSection({ data }) {
  return (
    <Row className="gap-8">
      <div className="text-sm font-normal leading-8 tracking-wider text-text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        laborum, error expedita quia autem ex rem possimus sunt, tempore nemo,
        corrupti ea? Earum esse iusto, quos iste voluptatibus distinctio neque!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid alias,
        quisquam autem sed dolo
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-1">
        {data.map((detail) => {
          return (
            <AboutDetail key={detail.itemLabel} label={detail.itemLabel}>
              {detail.itemValue}
            </AboutDetail>
          );
        })}
      </div>
    </Row>
  );
}

export default AboutMeSection;
