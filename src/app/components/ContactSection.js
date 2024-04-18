import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have a question or interested in our services? Get in touch with us!
          </p>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">
            Or reach out to us directly:
          </h3>
          <div className="flex justify-center items-center">
            <div
              className="bg-white rounded-md p-4 shadow-md mr-4"
              style={{ width: "250px" }}
            >
              <i className="fas fa-phone-alt text-4xl text-blue-500 mb-4"></i>
              <p className="text-lg text-gray-800">+1 (123) 456-7890</p>
            </div>
            <div
              className="bg-white rounded-md p-4 shadow-md"
              style={{ width: "250px" }}
            >
              <i className="fas fa-envelope text-4xl text-blue-500 mb-4"></i>
              <p className="text-lg text-gray-800">info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
