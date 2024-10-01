import React, { useMemo } from 'react';
import { Link, Outlet, useLocation, Navigate } from 'react-router-dom';

const DashboardLayout = () => {
    const location = useLocation();

    if (location.pathname === '/dashboard') {
        return <Navigate to="/dashboard/profile" />;
    }

    return (
        <div className="flex bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen">
            <Sidebar />
            <div className="flex-1 p-6">
                <div className="bg-white p-8 shadow-lg rounded-xl">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

const Sidebar = () => {
    const isAdmin = useMemo(() => localStorage.getItem('isAdmin') === 'true', []);

    return (
        <div className="w-64 bg-gray-800 text-white flex flex-col shadow-2xl">
            <div className="p-6 text-2xl font-extrabold bg-purple-600 text-center ">Dashboard</div>
            <nav className="flex-1 p-4">
                <ul className="space-y-4">
                    <li>
                        <Link to={`/dashboard/profile`} className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-purple-600 transition duration-200">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to={`/dashboard/account`} className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-purple-600 transition duration-200">
                            Account
                        </Link>
                    </li>
                    {isAdmin && (
                        <>
                            <li>
                                <Link to={`/dashboard/users`} className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-purple-600 transition duration-200">
                                    Users
                                </Link>
                            </li>
                            <li>
                                <Link to={`/dashboard/addnew`} className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-purple-600 transition duration-200">
                                    Add New
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default DashboardLayout;
