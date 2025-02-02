import { Outlet } from "react-router";
import Header from "../ui/Header";

function AppLayout() {
  return (
    <div className="grid min-h-[100dvh] grid-rows-[auto_1fr] items-start bg-background-primary px-5 py-5 sm:px-[10%] md:py-14 lg:px-[13%] xl:px-[21%]">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
