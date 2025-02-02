import Drawer from "./Drawer";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Row from "./Row";
import { IoMdMenu } from "react-icons/io";
function Header() {
  return (
    <header className="text-white">
      <Row type="horizontal" className="justify-between">
        <Drawer>
          <Logo />

          <NavBar className="hidden md:flex" />

          <Drawer.Open>
            <div
              onClick={() => {}}
              className="block cursor-pointer text-text-lightGreen transition-transform duration-500 hover:scale-105 md:hidden"
            >
              <IoMdMenu size={40} />
            </div>
          </Drawer.Open>
          <Drawer.Window />
        </Drawer>
      </Row>
    </header>
  );
}

export default Header;
