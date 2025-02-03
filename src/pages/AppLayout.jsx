import { Outlet } from "react-router";
import Header from "../ui/Header";

function AppLayout() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-start gap-3 bg-background-primary px-4 py-5 sm:px-8 md:gap-0 md:py-14">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
