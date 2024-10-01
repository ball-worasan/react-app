import React, { useState, useEffect, useCallback } from 'react';

const Users = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getUserIdFromToken = useCallback(() => {
        const token = localStorage.getItem('token');
        if (!token) return null;

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.id;
        } catch (e) {
            console.error('Error decoding token:', e);
            return null;
        }
    }, []);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const id = getUserIdFromToken();
            if (!id) {
                setError('User ID not found');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://localhost:4000/users/${id}`);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || 'Failed to fetch user profile');
                }

                setUserProfile(data);
            } catch (err) {
                console.error('Error fetching user profile:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [getUserIdFromToken]);

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-500">Loading...</div>;
    }

    if (error) {
        return <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-500">Error: {error}</div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-500">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition duration-500 hover:scale-105">
                <div className="text-center mb-6">
                    <img
                        src={userProfile.avatarUrl || 'https://via.placeholder.com/150'}
                        alt="User Avatar"
                        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-500 shadow-md"
                    />
                    <h2 className="text-3xl font-bold text-gray-800">{userProfile.name || `${userProfile.fname} ${userProfile.lname}`}</h2>
                    <p className="text-sm text-gray-500">Role: {userProfile.role}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-indigo-600">Email:</h3>
                    <p className="text-gray-700">{userProfile.email}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-indigo-600">First Name:</h3>
                    <p className="text-gray-700">{userProfile.fname}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-indigo-600">Last Name:</h3>
                    <p className="text-gray-700">{userProfile.lname}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-indigo-600">Account Created:</h3>
                    <p className="text-gray-700">{new Date(userProfile.created_at).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};

export default Users;
