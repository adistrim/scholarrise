"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setSubmitMessage(data.message);
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setSubmitMessage('Oops! Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F9F8F4] py-16">
            <div className="container mx-auto px-4">
                <motion.h1
                    className="text-4xl font-bold text-[#0C231B] mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Contact <span className="text-[#FF5402]">Scholar Rise India</span>
                </motion.h1>

                <motion.form
                    className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-[#0C231B] font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-[#0C231B] font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-[#0C231B] font-semibold mb-2">Phone (optional)</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-[#0C231B] font-semibold mb-2">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-[#0C231B] font-semibold mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#FF5402] text-white py-3 rounded-md font-semibold hover:bg-[#ff5202f1] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF5402] focus:ring-opacity-50"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {submitMessage && (
                        <p className="mt-4 text-center text-green-600">{submitMessage}</p>
                    )}
                </motion.form>
            </div>
        </div>
    );
};

export default ContactPage;