import React, { useState, useEffect } from 'react';

function UsersTable() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    const listUser = user.map((u) => (
        <tr key={u.id}>
            <td className="px-5 py-5 text-sm">{u.id}</td>
            <td className="px-5 py-5 text-sm">{u.name}</td> {/* JSONPlaceholder ใช้ 'name' แทน 'firstname' */}
            <td className="px-5 py-5 text-sm">{u.email}</td>
            <td className="px-5 py-5 text-sm">{u.username}</td> {/* ไม่มีข้อมูล 'birthDate' ใน API นี้ จึงใช้ 'username' แทน */}
            <td className="px-5 py-5 text-sm">{u.address.street}</td>
        </tr>
    ));

    return (
        <table className="min-w-full">
            <thead>
                <tr>
                    <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">ID</th>
                    <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Name</th>
                    <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Email</th>
                    <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Username</th> {/* แทน 'birthDate' */}
                    <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Street</th>
                </tr>
            </thead>
            <tbody>{listUser}</tbody>
        </table>
    );
}

export default UsersTable;
