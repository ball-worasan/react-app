import axios from 'axios';
import { useEffect, useState } from 'react';

function Account() {
    const [account, setAccount] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [editedName, setEditedName] = useState('');
    const [editedEmail, setEditedEmail] = useState('');
    const [editedPicture, setEditedPicture] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const getAccount = () => {
        const token = localStorage.getItem('token');

        axios.get('http://localhost:4000/account', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            const userData = res.data[0];
            setAccount(userData);
            setEditedName(userData?.name || '');
            setEditedEmail(userData?.email || '');

            // เพิ่มการใช้ URL ที่ถูกต้องสำหรับรูปภาพจากเซิร์ฟเวอร์
            setEditedPicture(userData?.picture ? `http://localhost:4000${userData.picture}` : '');
        }).catch(err => {
            console.log(err);
        });
    };

    const handleEditSubmit = () => {
        const token = localStorage.getItem('token');
        const formData = new FormData();

        formData.append('name', editedName);
        formData.append('email', editedEmail);
        if (selectedFile) {
            formData.append('picture', selectedFile);
        }

        axios.post('http://localhost:4000/account/update', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res.data);
            setShowModal(false);
            getAccount(); // อัปเดตข้อมูลใหม่หลังการบันทึก
        }).catch(err => {
            console.error(err);
        });
    };

    const handlePictureChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setEditedPicture(URL.createObjectURL(e.target.files[0]));
    };

    useEffect(() => {
        getAccount();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">ข้อมูลบัญชีผู้ใช้</h2>
                <div className="flex flex-col items-center mb-4">
                    <img
                        src={editedPicture || 'https://via.placeholder.com/150'}
                        alt="Profile"
                        className="w-24 h-24 rounded-full mb-4"
                    />
                    <p className="text-lg font-medium">ชื่อ: {account.name}</p>
                    <p className="text-lg font-medium">อีเมล: {account.email}</p>
                </div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={() => setShowModal(true)}
                >
                    แก้ไขข้อมูลส่วนตัว
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                        <h3 className="text-xl font-semibold mb-6">แก้ไขข้อมูลส่วนตัว</h3>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">ชื่อ</label>
                            <input
                                type="text"
                                value={editedName}
                                onChange={(e) => setEditedName(e.target.value)}
                                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">อีเมล</label>
                            <input
                                type="email"
                                value={editedEmail}
                                onChange={(e) => setEditedEmail(e.target.value)}
                                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">อัปโหลดรูปภาพ</label>
                            <input
                                type="file"
                                onChange={handlePictureChange}
                                className="w-full p-2 border rounded focus:outline-none"
                            />
                            {editedPicture && (
                                <img
                                    src={editedPicture}
                                    alt="Edited"
                                    className="w-24 h-24 rounded-full mt-4"
                                />
                            )}
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-gray-300 text-black px-4 py-2 rounded mr-2 hover:bg-gray-400 transition"
                                onClick={() => setShowModal(false)}
                            >
                                ยกเลิก
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                                onClick={handleEditSubmit}
                            >
                                บันทึก
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Account;
