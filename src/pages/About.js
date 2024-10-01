import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center p-8">
            <div className="bg-white p-10 rounded-lg shadow-2xl max-w-4xl flex transform transition-all duration-300 hover:scale-105">
                <div className="mr-8 flex-shrink-0">
                    <div className="bg-gray-300 w-64 h-64 flex items-center justify-center rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://via.placeholder.com/400"
                            alt="Team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl font-extrabold mb-4 text-gray-800">About Us</h2>
                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                        Welcome to our company! We are a passionate team of web developers committed to building cutting-edge web applications that provide excellent user experiences. Our mission is to create high-quality, reliable software solutions that meet the diverse needs of our clients and users.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        With years of expertise in full-stack development, we have mastered a wide range of technologies, including React, Node.js, Python, and more. Our focus is on staying ahead of the curve, continuously learning, and applying the latest trends in web development to deliver the best possible solutions.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Our commitment to innovation and excellence drives us to develop applications that are not only functional but also aesthetically pleasing and responsive across all devices. Whether you're a small business or a large enterprise, we can help bring your ideas to life with scalable, efficient solutions tailored to your needs.
                    </p>
                    <div className="mt-8">
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700 transition duration-300">
                            Learn More About Our Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
