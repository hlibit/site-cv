import Row from "../../ui/Row";
import ResumeOption from "./ResumeOption";

function OptionsList({ resumeFields, ...props }) {
  return (
    <Row type="ul" className="gap-6">
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
