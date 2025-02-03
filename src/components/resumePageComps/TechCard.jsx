import Tip from "../../ui/Tip";

function TechCard({ item: { itemTitle, itemPhoto } }) {
  return (
    <Tip>
      <div className="relative">
        <Tip.Open id={itemTitle}>
          <div
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            className="flex justify-center rounded-lg bg-background-secondary p-[26px] text-text-primary transition-colors hover:text-text-lightGreen hover:duration-300"
          >
            <div>{itemPhoto}</div>
          </div>
        </Tip.Open>
        <Tip.Window id={itemTitle} itemTitle={itemTitle} top=" top-[4px]" />
      </div>
    </Tip>
  );
}

export default TechCard;
