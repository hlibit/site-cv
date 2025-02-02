import NavLink from "./NavLink";
import Row from "./Row";

function NavBar({ className: userClasses, onClick }) {
  return (
    <Row className={"gap-6 font-medium " + userClasses} type="nav">
      <NavLink onClick={onClick || undefined} to="home">
        Головна
      </NavLink>
      <NavLink onClick={onClick || undefined} to="resume">
        Резюме
      </NavLink>
      <NavLink onClick={onClick || undefined} to="projects">
        Проєкти
      </NavLink>
      <NavLink onClick={onClick || undefined} to="contact">
        Контакти
      </NavLink>
    </Row>
  );
}

export default NavBar;
