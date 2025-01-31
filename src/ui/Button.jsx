const types = {
  outlined: "rounded-3xl px-7 py-3 text-text-darkGreen",
  social: "rounded-full p-2 text-text-darkGreen",
};

const baseQuery =
  "border-[0.5px] cursor-pointer  border-text-darkGreen text-xs font-semibold uppercase tracking-widest transition-all duration-300  hover:scale-105";

function Button({ type, onClick, children }) {
  return (
    <button onClick={onClick} className={baseQuery + " " + types[type]}>
      {children}
    </button>
  );
}

export default Button;
