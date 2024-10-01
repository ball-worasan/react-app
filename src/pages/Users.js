import React, { useState, useEffect, useCallback, useMemo } from 'react';

function UsersTable() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', fname: '', lname: '', role: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:4000/users");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleEdit = useCallback((u) => {
        setEditingUser(u.id);
        setFormData({ name: u.name, email: u.email, fname: u.fname, lname: u.lname, role: u.role });
    }, []);

    const handleUpdate = useCallback(async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to update user');
            }
            const updatedUser = await response.json();
            setUser((prevUsers) =>
                prevUsers.map((u) => (u.id === id ? updatedUser : u))
            );
            setEditingUser(null);
        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    }, [formData]);

    const handleDelete = useCallback(async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/users/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
            setUser((prevUsers) => prevUsers.filter((u) => u.id !== id));
        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    }, []);

    const handleChange = useCallback((e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }, [formData]);

    const listUser = useMemo(() => user.map((u) => (
        <tr key={u.id} className="border-b hover:bg-gray-100 transition duration-200">
            {editingUser === u.id ? (
                <>
                    <td className="px-5 py-5 text-sm">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border p-1 rounded"
                        />
                    </td>
                    <td className="px-5 py-5 text-sm">
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border p-1 rounded"
                        />
                    </td>
                    <td className="px-5 py-5 text-sm">
                        <input
                            type="text"
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                            className="border p-1 rounded"
                        />
                    </td>
                    <td className="px-5 py-5 text-sm">
                        <input
                            type="text"
                            name="lname"
                            value={formData.lname}
                            onChange={handleChange}
                            className="border p-1 rounded"
                        />
                    </td>
                    <td className="px-5 py-5 text-sm">
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="border p-1 rounded"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </td>
                    <td className="px-5 py-5 text-sm flex space-x-2">
                        <button
                            onClick={() => handleUpdate(u.id)}
                            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setEditingUser(null)}
                            className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                        >
                            Cancel
                        </button>
                    </td>
                </>
            ) : (
                <>
                    <td className="px-5 py-5 text-sm">{u.name}</td>
                    <td className="px-5 py-5 text-sm">{u.email}</td>
                    <td className="px-5 py-5 text-sm">{u.fname}</td>
                    <td className="px-5 py-5 text-sm">{u.lname}</td>
                    <td className="px-5 py-5 text-sm">{u.role}</td>
                    <td className="px-5 py-5 text-sm flex space-x-2">
                        <button
                            onClick={() => handleEdit(u)}
                            className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(u.id)}
                            className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </td>
                </>
            )}
        </tr>
    )), [user, editingUser, formData, handleEdit, handleUpdate, handleDelete, handleChange]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (user.length === 0) {
        return <div>No users found.</div>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full leading-normal shadow-lg">
                <thead>
                    <tr>
                        <th className="px-5 py-3 bg-blue-600 text-white text-left text-sm uppercase font-semibold">
                            Name
                        </th>
                        <th className="px-5 py-3 bg-blue-600 text-white text-left text-sm uppercase font-semibold">
                            Email
                        </th>
                        <th className="px-5 py-3 bg-blue-600 text-white text-left text-sm uppercase font-semibold">
                            First Name
                        </th>
                        <th className="px-5 py-3 bg-blue-600 text-white text-left text-sm uppercase font-semibold">
                            Last Name
                        </th>
                        <th className="px-5 py-3 bg-blue-600 text-white text-left text-sm uppercase font-semibold">
                            Role
                        </th>
                        <th className="px-5 py-3 bg-blue-600 text-white text-left text-sm uppercase font-semibold">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>{listUser}</tbody>
            </table>
        </div>
    );
}

export default UsersTable;
