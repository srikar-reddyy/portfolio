import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import EarthCanvas from './canvas/EarthCanvas';
import { SectionWrapper } from '../hoc';

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: form.name,
      to_name: 'Srikar reddy',
      from_email: form.email,
      to_email: 'srikarsrikar303@gmail.com',
      message: form.message,
    };

    emailjs
      .send(
        'service_1bxkdxs',         // ✅ Your Service ID
        'template_gpzc3c8',        // ✅ Your Template ID
        templateParams,
        'QDalVp6ybyP4TKDLb'        // ✅ Your Public Key
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 max-w-6xl mx-auto p-4">
      {/* Contact Form */}
      <div className="md:w-1/2 bg-gray-900 bg-opacity-80 p-6 rounded-xl backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Get In Touch</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-gray-300 text-sm mb-1">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-gray-800 text-gray-300 placeholder-gray-500 px-4 py-2 rounded-lg border border-gray-700 text-sm"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-300 text-sm mb-1">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="bg-gray-800 text-gray-300 placeholder-gray-500 px-4 py-2 rounded-lg border border-gray-700 text-sm"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-300 text-sm mb-1">Your Message</span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              className="bg-gray-800 text-gray-300 placeholder-gray-500 px-4 py-2 rounded-lg border border-gray-700 text-sm resize-none"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors mt-2"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Earth Canvas */}
      <div className="md:w-1/2 h-64 md:h-80 lg:h-96">
        <EarthCanvas />
      </div>
    </div>
  );
}

export default SectionWrapper(Contact, 'contact');
  