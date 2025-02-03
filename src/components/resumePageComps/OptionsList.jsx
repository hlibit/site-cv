import Row from "../../ui/Row";
import ResumeOption from "./ResumeOption";

function OptionsList({ resumeFields, ...props }) {
  return (
    <Row type="ul" className="mx-auto max-w-[380px] gap-6 md:mx-0">
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
