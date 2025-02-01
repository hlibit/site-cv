import { Outlet } from "react-router";
import Header from "../ui/Header";

function AppLayout() {
  return (
    <div className="grid-row-[auto_1fr] grid min-h-[100dvh] grid-cols-1 bg-background-primary px-[20%] py-14">
      <Header />
      <main className="mt-5">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
