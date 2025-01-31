import { useState } from "react";
import Row from "../../ui/Row";

function TechCard({ item: { itemTitle, itemPhoto } }) {
  const [isOn, setIsOn] = useState(false);
  function handleOnMouse() {
    setIsOn(true);
  }
  function handleOffMouse() {
    setIsOn(false);
  }

  return (
    <div onMouseEnter={handleOnMouse} onMouseLeave={handleOffMouse}>
      <Row
        type="vertical"
        className="relative items-center gap-3 rounded-lg bg-background-secondary p-7 text-text-primary transition-colors hover:text-text-lightGreen hover:duration-300"
      >
        <div>{itemPhoto}</div>

        <div
          className={
            "absolute top-[4px] z-10 rounded-lg bg-text-primary px-4 py-[2px] text-center text-sm text-background-secondary opacity-0 transition-opacity duration-500 " +
            (isOn ? " opacity-100" : "")
          }
        >
          {itemTitle}
        </div>
      </Row>
    </div>
  );
}

export default TechCard;
