import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import DashboardLayout from './pages/Dashboard';
import Profile from './pages/Profile';
import Users from './pages/Users';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <header className="header flex justify-between items-center p-4 bg-gray-800 text-white">
                <h1 className="text-2xl font-bold">My Worasan</h1>
                <nav className="navbar space-x-4">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/about" className="hover:text-gray-300">About</Link>
                    <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                </nav>
                <div className="auth-buttons space-x-4">
                    <Link to="/signin">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Sign In
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            Sign Up
                        </button>
                    </Link>
                    <Link to="/dashboard">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            Dashboard
                        </button>
                    </Link>
                </div>
            </header>

            <div className="mx-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signup" element={<SignUp />} />

                    {/* กำหนดเส้นทางสำหรับ Dashboard */}
                    <Route path="/dashboard" element={<DashboardLayout />}>
                        <Route path="profile" element={<Profile />} />
                        <Route path="users" element={<Users />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
