import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import NavBar from "./NavBar";
import { useOutsideClick } from "../hooks/useOutsideClick";
const DrawerContext = createContext();

function Drawer({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return (
    <DrawerContext.Provider value={{ open, close, isOpen }}>
      {children}
    </DrawerContext.Provider>
  );
}

function Open({ children }) {
  const { open } = useContext(DrawerContext);
  return cloneElement(children, { onClick: () => open() });
}

function Window() {
  const { isOpen, close } = useContext(DrawerContext);
  const ref = useOutsideClick(close);
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed left-0 top-0 z-[1000] h-[100dvh] w-[100%] bg-transparent backdrop-blur-sm transition-all duration-700">
      <div
        ref={ref}
        className="absolute right-0 top-0 z-50 flex h-[100dvh] w-[40%] flex-col items-center justify-center bg-background-secondary transition-all duration-700"
      >
        <NavBar className="flex-col justify-center" onClick={close} />
      </div>
    </div>,
    document.body,
  );
}

Drawer.Open = Open;
Drawer.Window = Window;
export default Drawer;
