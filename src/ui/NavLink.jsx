import { NavLink as RouterNavLink } from "react-router";

function NavLink({ to, onClick = undefined, children }) {
  return (
    <RouterNavLink
      onClick={onClick}
      to={to}
      className={({ isActive }) =>
        isActive
          ? "border-b-2 border-text-darkGreen pb-2 text-text-darkGreen transition-colors duration-500"
          : "pb-2.5 text-text-primary"
      }
    >
      {children}
    </RouterNavLink>
  );
}

export default NavLink;
