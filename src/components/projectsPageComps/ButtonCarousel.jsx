import Row from "../../ui/Row";

const baseQuery =
  "h-12 w-12 cursor-pointer bg-text-darkGreen text-xs  font-semibold uppercase tracking-widest text-background-secondary transition-colors hover:scale-105  active:bg-text-lightGreen ";

const disabledQuery =
  "disabled:hover:scale-100 disabled:duration-700 disabled:bg-text-dark";
function ButtonCarousel({ disabled, onClick, children }) {
  return (
    <button
      className={baseQuery + (disabled && disabledQuery)}
      onClick={onClick}
      disabled={disabled}
    >
      <Row className="items-center">{children}</Row>
    </button>
  );
}

export default ButtonCarousel;
