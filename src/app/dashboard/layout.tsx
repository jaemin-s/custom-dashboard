import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="bg-slate-100 w-full h-full overflow-scroll flex justify-center">
      <Outlet />
    </div>
  );
}
