import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-500 flex flex-col items-center justify-center py-6">
      <div className="text-center bg-white p-10 rounded-lg shadow-2xl max-w-2xl transform transition-all duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
        <p className="text-lg text-center text-gray-600 mb-10">
          We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Reach out to us through any of the following channels, and we'll get back to you as soon as possible.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Email:</strong> contact@ourcompany.com</li>
              <li><strong>Phone:</strong> +1 234 567 890</li>
              <li><strong>Address:</strong> 123 Main St, Suite 100, Your City, Your Country</li>
            </ul>

            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.597808911673!2d103.50202041532533!3d16.43298618863614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3122bdcd8fb76dbb%3A0x728032fcf7b67a3d!2z4Lir4Lih4Li54Lii4Lij4LiH4LiXIOC4oOC4mOC4suC4meC4sSDguK3guYDguKPguLTguYHguJrguKI!5e0!3m2!1sth!2sth!4v1633594381713!5m2!1sth!2sth"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                title="Kalasin University Location"
                className="rounded-lg shadow-md"
              ></iframe>

            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  rows="5"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-bold shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
