import Row from "../../ui/Row";
import ResumeOption from "./ResumeOption";

function OptionsList({ resumeFields, ...props }) {
  return (
    <Row
      type="ul"
      className="mx-auto w-[300px] gap-6 sm:w-[360px] md:mx-0 md:w-full xl:w-full"
    >
      {resumeFields.map((field) => {
        return (
          <ResumeOption
            key={field.fieldName}
            {...props}
            option={field.fieldName}
          />
        );
      })}
    </Row>
  );
}

export default OptionsList;
