import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DashboardLayout from './components/Dashboard';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Account from './pages/Account';
import Users from './pages/Users';
import Addnew from './pages/Addnew';
import './styles/App.css';

const ProtectedRoute = ({ children, isLoggedIn }) => {
    return isLoggedIn ? children : <Navigate to="/signin" />;
};

const RedirectIfLoggedIn = ({ children, isLoggedIn }) => {
    return isLoggedIn ? <Navigate to="/dashboard" /> : children;
};

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            const isAdmin = localStorage.getItem('isAdmin') === 'true';
            setIsAdmin(isAdmin);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        setIsLoggedIn(false);
        setIsAdmin(false);
        window.location.replace('/signin');
    };

    return (
        <Router>
            <header className="header flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg">
                <h1 className="text-3xl font-extrabold tracking-wider">My Worasan</h1>
                <nav className="navbar space-x-4">
                    <Link to="/" className="hover:text-gray-300 transition duration-200">Home</Link>
                    <Link to="/about" className="hover:text-gray-300 transition duration-200">About</Link>
                    <Link to="/contact" className="hover:text-gray-300 transition duration-200">Contact</Link>
                </nav>
                <div className="auth-buttons space-x-4">
                    {isLoggedIn ? (
                        <>
                            <Link to="/dashboard">
                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                                    Dashboard
                                </button>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/signin">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                                    Sign In
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                                    Sign Up
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </header>

            <main className="mx-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route
                        path="/signin"
                        element={
                            <RedirectIfLoggedIn isLoggedIn={isLoggedIn}>
                                <SignIn setIsLoggedIn={setIsLoggedIn} />
                            </RedirectIfLoggedIn>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <RedirectIfLoggedIn isLoggedIn={isLoggedIn}>
                                <SignUp />
                            </RedirectIfLoggedIn>
                        }
                    />

                    <Route
                        path="/dashboard/*"
                        element={
                            <ProtectedRoute isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                                <DashboardLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route path="profile" element={<Profile />} />
                        <Route path="account" element={<Account />} />
                        <Route path="users" element={<Users />} />
                        <Route path="addnew" element={<Addnew />} />
                    </Route>
                </Routes>
            </main>

            <footer className="text-center py-4 bg-gray-800 text-white">
                <p className="text-sm">© 2024 My Worasan. All rights reserved.</p>
            </footer>
        </Router>
    );
};

export default App;
