import { NavLink as RouterNavLink } from "react-router";

function NavLink({ to, children }) {
  //   function addActiveClasses(isActive) {
  //     console.log(isActive);
  //   }
  return (
    <RouterNavLink
      to={to}
      //   className={({ isActive }) => addActiveClasses(isActive)}
      className={({ isActive }) =>
        isActive
          ? "text-text-darkGreen border-text-darkGreen border-b-2 pb-2 transition-colors duration-500"
          : "text-text-primary pb-2.5"
      }
    >
      {children}
    </RouterNavLink>
  );
}

export default NavLink;
