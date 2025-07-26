import { Outlet } from "react-router";
import NavBar from "../../components/navbar";

export default function LayoutPage() {
  return (
    <div className="h-full relative">
      <NavBar />
      <Outlet />
    </div>
  );
}
