import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('http://localhost:3000/api/contact', formData);
      setStatus('Message Sent Successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send. Try again later.');
    }
  };
  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <div className="flex flex-col justify-center items-start text-left mb-12 w-full max-w-4xl">
        <p className="text-xs sm:text-sm text-gray-500 mb-1">________ CONTACT</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">CONTACT ME</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-[#fc8019] mb-6">
            Let's connect — I'm always excited to hear from you!
        </p>
        <div className="text-base sm:text-lg text-gray-400 space-y-2">
            <p><span className="font-semibold text-white">Name:</span> Jayendra</p>
            <p><span className="font-semibold text-white">Email:</span> jayendramalla26@gmail.com</p>
            <p><span className="font-semibold text-white">Phone No:</span> 7842814826</p>
        </div>
    </div>
      <form onSubmit={handleSubmit} className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-[#fc8019]">Send a Message</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 bg-black border border-gray-700 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 bg-black border border-gray-700 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full p-3 mb-4 bg-black border border-gray-700 rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#fc8019] text-black font-semibold py-3 rounded hover:bg-white transition"
        >
          Send Message
        </button>
        {status && <p className="text-center mt-4 text-sm">{status}</p>}
      </form>
    </div>
  );
}
