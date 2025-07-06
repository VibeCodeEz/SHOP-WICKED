import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // You can integrate with an email service or backend here
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact The Wicked Daze Clothing</h2>
        <div className="contact-info-block">
          <p><b>Email:</b> <a href="mailto:thewickeddazeclothing@gmail.com">thewickeddazeclothing@gmail.com</a></p>
          <p><b>Facebook Messenger:</b> <a href="https://facebook.com/thewickeddazeclothing" target="_blank" rel="noopener noreferrer">facebook.com/thewickeddazeclothing</a></p>
          <p><b>Instagram DM:</b> <a href="https://instagram.com/thewickeddazeclothing" target="_blank" rel="noopener noreferrer">@thewickeddazeclothing</a></p>
          <p><b>Phone/WhatsApp:</b> <a href="tel:+639123456789">+63 912 345 6789</a></p>
        </div>

        <div className="contact-form-block">
          <h3>Send Us a Message</h3>
          {submitted ? (
            <div className="contact-success">Thank you for reaching out! We'll get back to you soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <select name="subject" value={form.subject} onChange={handleChange} required>
                  <option value="">What are you contacting us about?</option>
                  <option value="Order">Order</option>
                  <option value="Collab">Collab</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-row">
                <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required rows={4} />
              </div>
              <button type="submit" className="send-btn">Send Message</button>
            </form>
          )}
        </div>

        <div className="contact-social-callout">
          <p className="callout-text">DM us on Instagram or Facebook for the fastest response!</p>
          <div className="social-icons">
            <a href="https://facebook.com/thewickeddazeclothing" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"/></svg>
            </a>
            <a href="https://instagram.com/thewickeddazeclothing" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5a6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5zm6.25 1.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/></svg>
            </a>
            <a href="https://wa.me/639123456789" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.62A12.07 12.07 0 0 0 12 24c6.63 0 12-5.37 12-12c0-3.22-1.25-6.25-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.22-1.45l-.37-.22l-3.69.96l.98-3.59l-.24-.38A9.98 9.98 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10s-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9c-.25-.09-.43-.14-.61.14c-.18.28-.7.9-.86 1.08c-.16.18-.32.2-.6.07c-.28-.14-1.18-.44-2.25-1.4c-.83-.74-1.39-1.65-1.55-1.93c-.16-.28-.02-.43.12-.57c.13-.13.28-.34.42-.51c.14-.17.18-.29.28-.48c.09-.18.05-.35-.02-.49c-.07-.14-.61-1.47-.84-2.01c-.22-.53-.45-.46-.61-.47c-.16-.01-.35-.01-.54-.01c-.19 0-.5.07-.76.35c-.26.28-1 1-1 2.43c0 1.43 1.03 2.81 1.18 3c.15.19 2.03 3.1 5.02 4.23c.7.24 1.25.38 1.68.49c.71.18 1.36.15 1.87.09c.57-.07 1.65-.67 1.88-1.32c.23-.65.23-1.2.16-1.32c-.07-.12-.25-.19-.53-.33z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 