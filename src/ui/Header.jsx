import Logo from "./Logo";
import NavBar from "./NavBar";
import Row from "./Row";

function Header() {
  return (
    <header className="text-white">
      <Row type="horizontal" className="justify-between">
        <Logo />
        <NavBar />
      </Row>
    </header>
  );
}

export default Header;
