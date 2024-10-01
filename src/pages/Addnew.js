import React, { useState, useCallback } from 'react';

const AddNewUser = () => {
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); // ค่าเริ่มต้นเป็น 'user'
    const [message, setMessage] = useState('');

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setMessage(''); // Reset message on new form submission

        // ตรวจสอบความถูกต้องของข้อมูลก่อนทำการส่งแบบฟอร์ม
        if (!email || !fname || !lname || !password) {
            setMessage('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }

        // ส่งข้อมูลไปยัง API
        try {
            const response = await fetch('http://localhost:4000/addnew', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, fname, lname, password, role }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('เพิ่มผู้ใช้สำเร็จ');
                // เคลียร์ฟอร์มหลังจากเพิ่มผู้ใช้สำเร็จ
                setEmail('');
                setFname('');
                setLname('');
                setPassword('');
                setRole('user');
            } else {
                setMessage(data.message || 'เกิดข้อผิดพลาด');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์');
        }
    }, [email, fname, lname, password, role]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
                <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-900">Add New User</h2>
                {message && <p className="text-red-500 mb-4 text-center">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fname">
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="fname"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your first name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            id="lname"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your last name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                            Role:
                        </label>
                        <select
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:bg-purple-800 transition-all duration-300"
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewUser;
