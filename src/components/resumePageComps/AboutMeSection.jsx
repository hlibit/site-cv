import Row from "../../ui/Row";
import AboutDetail from "./AboutDetail";

function AboutMeSection({ data }) {
  return (
    <div className="mt-auto flex max-h-full w-full max-w-[600px] flex-col gap-6 overflow-auto">
      <div className="text-sm font-normal leading-8 tracking-wider text-text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        laborum, error expedita quia autem ex rem possimus sunt, tempore nemo,
        corrupti ea? Earum esse iusto, quos iste voluptatibus distinctio neque!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid alias,
        quisquam autem sed dolo
      </div>
      <div className="grid grid-cols-1 grid-rows-6 gap-1 sm:gap-4 md:grid-rows-3 lg:grid-cols-2">
        {data.map((detail) => {
          return (
            <AboutDetail key={detail.itemLabel} label={detail.itemLabel}>
              {detail.itemValue}
            </AboutDetail>
          );
        })}
      </div>
    </div>
  );
}

export default AboutMeSection;
