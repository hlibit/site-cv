import { Outlet } from "react-router";
import Header from "../ui/Header";

function AppLayout() {
  return (
    <div className="grid-row-[auto_1fr] grid min-h-[100dvh] grid-cols-1 bg-background-primary px-5 py-5 sm:px-[10%] md:py-14 lg:px-[13%] xl:px-[20%]">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
