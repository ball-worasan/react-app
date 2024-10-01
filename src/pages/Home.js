import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-500 flex flex-col items-center justify-center py-6">
            <div className="text-center bg-white p-10 rounded-lg shadow-2xl max-w-2xl transform transition-all duration-300 hover:scale-105">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Welcome to Our Platform</h1>
                <p className="text-gray-600 text-xl leading-relaxed mb-8">
                    We provide top-notch services to ensure that your business runs smoothly. With our cutting-edge technology and exceptional customer support, we are dedicated to helping you achieve success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Innovative Solutions</h2>
                        <p className="text-gray-600">
                            We offer a wide range of innovative solutions designed to help your business thrive in a competitive market. From data analytics to cloud services, we've got you covered.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Dedicated Support</h2>
                        <p className="text-gray-600">
                            Our customer support team is available 24/7 to assist you with any questions or issues you may have. Your satisfaction is our top priority.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Customizable Features</h2>
                        <p className="text-gray-600">
                            Tailor our services to meet the unique needs of your business. Our customizable features allow you to take full control and optimize your operations.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Scalable Solutions</h2>
                        <p className="text-gray-600">
                            Whether you're a small startup or a large enterprise, our scalable solutions grow with your business, ensuring that you always have the resources you need.
                        </p>
                    </div>
                </div>
                <div className="mt-10">
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
