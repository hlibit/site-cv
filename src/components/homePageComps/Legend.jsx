import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import SocialLinks from "./SocialLinks";

function Legend() {
  return (
    <Row type="vertical" className="max-w-[50%]">
      <Heading as="h6">Front-End Developer</Heading>
      <Heading as="h0">Вітаю, Я</Heading>
      <Heading as="h0">
        <span className="text-text-lightGreen">Гліб Мазаєв</span>
      </Heading>
      <div className="mt-6 max-w-[90%] text-sm font-light leading-8">
        Дуже вмотивований, відповідальний розробник, який прагне розвиватися та
        створювати незабутні для користувачів інтерфейси!
      </div>
      <SocialLinks />
    </Row>
  );
}

export default Legend;
