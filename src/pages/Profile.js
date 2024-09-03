import React from 'react';

const Users = () => {
    // ตัวอย่างข้อมูลผู้ใช้ (สามารถเปลี่ยนเป็นข้อมูลที่ดึงมาจาก API ได้)
    const userProfile = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        username: 'johndoe123',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
        avatarUrl: 'https://via.placeholder.com/150',
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="text-center mb-6">
                    <img
                        src={userProfile.avatarUrl}
                        alt="User Avatar"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h2 className="text-2xl font-bold">{userProfile.name}</h2>
                    <p className="text-gray-500">@{userProfile.username}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Email:</h3>
                    <p className="text-gray-700">{userProfile.email}</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Bio:</h3>
                    <p className="text-gray-700">{userProfile.bio}</p>
                </div>
            </div>
        </div>
    );
};

export default Users;
