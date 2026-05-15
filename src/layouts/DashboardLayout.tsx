import {  Outlet, useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { HomeIcon } from "lucide-react";

export default function DashboardLayout() {
    const logout = useAuthStore((state) => state.logout);
    const Navigate = useNavigate();

    const handleLogout = () => {
        logout();

        Navigate("/login")
    };

    return (
        <div className="flex min-h-screen">
            {/* Kiri */}
            <div className="min-h-screen bg-red-900 w-64 flex flex-col justify-between p-4">
                {/* Satu */}
                <div className="border-b border-gray-50 py-4">
                    <h1 className="text-white text-2xl font-semibold">
                        Invofest Dashboard</h1>
                </div>

                {/* Dua */}
                <div>
                    <div>
                        <nav className="flex flex-col">
                            <Link to="/dashboard" className="p-4 text-white text-lg hover:bg-black transition ease-in duration-150 flex items-center gap-2">
                            <span>
                                <HomeIcon size={18} />
                            </span>
                            Dashboard</Link>
                            <Link to="/dashboard/category" className="p-4 text-white text-lg hover:bg-black transition ease-in duration-150">Category</Link>
                            <Link to="/dashboard/event" className="p-4 text-white text-lg hover:bg-black transition ease-in duration-150">Event</Link>
                            <Link to="/dashboard/speaker" className="p-4 text-white text-lg hover:bg-black transition ease-in duration-150">Speaker</Link>
                        </nav>
                    </div>
                </div>

                {/* Tiga */}
                <div>
                    <button onClick={handleLogout} 
                    className="bg-amber-500 p-4 w-full hover:bg-amber-400 cursor-pointer">Logout</button>
                </div>

            </div>

            {/* Kanan */}
            <div className="p-6">
                <Outlet />
            </div>
        </div>
    );
}