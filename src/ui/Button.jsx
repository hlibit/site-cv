const types = {
  outlined: "rounded-3xl px-7 py-3 text-text-darkGreen",
  social: "rounded-full p-2 text-text-darkGreen",
  contained:
    "rounded-full cursor-pointer bg-background-secondary text-text-primary p-4 border-background-secondary",
};

const hoverQuery =
  "hover:duration-300 hover:text-background-primary hover:bg-text-darkGreen";

const baseQuery =
  "border-[0.5px] cursor-pointer border-text-darkGreen text-xs font-semibold uppercase tracking-widest transition-colors";

function Button({
  type,
  onClick,
  hover,
  onMouseEnter,
  onMouseLeave,
  children,
}) {
  if (onMouseEnter && onMouseLeave)
    return (
      <button
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={
          baseQuery + " " + types[type] + " " + (hover ? hoverQuery : "")
        }
      >
        {children}
      </button>
    );
  return (
    <button
      onClick={onClick}
      className={
        baseQuery + " " + types[type] + " " + (hover ? hoverQuery : "")
      }
    >
      {children}
    </button>
  );
}

export default Button;
