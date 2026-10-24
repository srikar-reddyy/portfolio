import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaCheckCircle, FaEnvelope, FaExclamationCircle, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

import Section from './ui/Section';
import { reveal } from './ui/motion';
import { profile } from '../constants';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const emptyForm = { name: '', email: '', message: '' };

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: profile.name,
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setStatus('sent');
      setForm(emptyForm);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      description="Have a role, a project or an idea? Send me a message, or reach out directly."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        {/* Direct channels */}
        <motion.div variants={reveal} className="flex flex-col gap-4">
          <a href={`mailto:${profile.email}`} className="card card-hover p-6 flex items-center gap-4 group">
            <span className="grid place-items-center w-12 h-12 rounded-xl bg-accent/10 text-accent text-xl">
              <FaEnvelope />
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-neutral-500">Email</span>
              <span className="block font-semibold text-white group-hover:text-accent transition-colors break-all">
                {profile.email}
              </span>
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover p-6 flex items-center gap-4 group"
          >
            <span className="grid place-items-center w-12 h-12 rounded-xl bg-accent/10 text-accent text-xl">
              <FaLinkedin />
            </span>
            <span>
              <span className="block text-sm text-neutral-500">LinkedIn</span>
              <span className="block font-semibold text-white group-hover:text-accent transition-colors">
                Connect with me
              </span>
            </span>
          </a>
        </motion.div>

        {/* Form */}
        <motion.form variants={reveal} onSubmit={handleSubmit} className="card p-6 sm:p-8 flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm text-neutral-400">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                className="input"
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm text-neutral-400">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                className="input"
                required
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="text-sm text-neutral-400">Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to talk about?"
              className="input resize-none"
              required
            />
          </label>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
            <button type="submit" className="btn-primary disabled:opacity-60" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'} <FaPaperPlane className="text-sm" />
            </button>

            <p role="status" aria-live="polite" className="text-sm">
              {status === 'sent' && (
                <span className="inline-flex items-center gap-2 text-emerald-400">
                  <FaCheckCircle /> Thanks! I&apos;ll get back to you soon.
                </span>
              )}
              {status === 'error' && (
                <span className="inline-flex items-center gap-2 text-rose-400">
                  <FaExclamationCircle /> Couldn&apos;t send. Please email me directly.
                </span>
              )}
            </p>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

export default Contact;
