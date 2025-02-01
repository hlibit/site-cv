//

import { cloneElement, createContext, useContext, useState } from "react";

const TipContext = createContext();

function Tip({ children }) {
  const [activeTip, setActiveTip] = useState("");

  const close = () => setActiveTip("");
  const open = setActiveTip;

  return (
    <TipContext.Provider value={{ close, open, activeTip }}>
      {children}
    </TipContext.Provider>
  );
}
function Open({ id, children }) {
  const { open, close } = useContext(TipContext);
  return cloneElement(children, {
    onMouseEnter: () => open(id),
    onMouseLeave: close,
  });
}

function Window({ itemTitle, top, id }) {
  const { activeTip } = useContext(TipContext);
  const isOn = id === activeTip;

  return (
    <div
      className={
        "absolute left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg bg-text-primary px-4 py-[2px] text-center text-xs text-background-secondary opacity-0 transition-opacity duration-500 " +
        (isOn ? " opacity-100" : "") +
        top
      }
    >
      {itemTitle}
    </div>
  );
}

Tip.Open = Open;
Tip.Window = Window;

export default Tip;
