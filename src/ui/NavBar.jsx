import NavLink from "./NavLink";
import Row from "./Row";

function NavBar() {
  return (
    <Row className="gap-6 font-medium" type="nav">
      <NavLink to="home">Головна</NavLink>
      <NavLink to="resume">Резюме</NavLink>
      <NavLink to="projects">Проєкти</NavLink>
      <NavLink to="contact">Контакти</NavLink>
    </Row>
  );
}

export default NavBar;
