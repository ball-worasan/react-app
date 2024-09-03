import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="flex bg-gray-100">
            <Sidebar />
            <div className="flex-1 p-6">
                <Outlet />
            </div>
        </div>
    );
};

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-800 text-white flex flex-col">
            <div className="p-4 text-2xl font-bold">Dashboard</div>
            <nav className="flex-1">
                <ul className="space-y-2">
                    <li>
                        <Link to="/dashboard/profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                            Users
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="p-4">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default DashboardLayout;
