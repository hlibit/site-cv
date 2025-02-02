import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import SocialLinks from "./SocialLinks";

function Legend() {
  return (
    <Row
      type="vertical"
      className="order-2 items-center gap-2 text-center md:order-1 md:max-w-[50%] md:items-start md:text-left"
    >
      <Heading as="h6">Front-End Developer</Heading>
      <div className="text-5xl font-normal lg:text-6xl xl:text-7xl">
        Вітаю, Я
      </div>
      <div className="text-5xl font-normal text-text-lightGreen lg:text-6xl xl:text-7xl">
        Гліб Мазаєв
      </div>
      <div className="mt-6 text-sm font-light leading-8 md:max-w-[90%] lg:text-base">
        Дуже вмотивований, відповідальний розробник, який прагне розвиватися та
        створювати незабутні для користувачів інтерфейси!
      </div>
      {/* <SocialLinks /> */}
    </Row>
  );
}

export default Legend;
