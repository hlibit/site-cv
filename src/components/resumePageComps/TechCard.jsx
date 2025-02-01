import Tip from "../../ui/Tip";

function TechCard({ item: { itemTitle, itemPhoto } }) {
  return (
    <Tip>
      <div className="relative">
        <Tip.Open id={itemTitle}>
          <div
            onMouseEnter
            onMouseLeave
            className="flex flex-col items-center gap-3 rounded-lg bg-background-secondary p-7 text-text-primary transition-colors hover:text-text-lightGreen hover:duration-300"
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
