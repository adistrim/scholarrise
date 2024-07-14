"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, isSuccess }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4"
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                >
                    <div className="text-center">
                        {isSuccess ? (
                            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                        ) : (
                            <FaTimesCircle className="text-red-500 text-5xl mx-auto mb-4" />
                        )}
                        <h2 className={`text-2xl font-bold mb-4 ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                            {isSuccess ? 'Message Sent!' : 'Oops!'}
                        </h2>
                        <p className="text-[#0C231B] mb-6">
                            {isSuccess
                                ? "Thank you for reaching out. We've received your message and will get back to you soon."
                                : "We couldn't send your message at this time. Please try again later or contact us directly."}
                        </p>
                        <button
                            onClick={onClose}
                            className="bg-[#FF5402] text-white px-6 py-2 rounded-full hover:bg-[#ff5202f1] transition-colors font-semibold"
                        >
                            {isSuccess ? 'Great!' : 'Close'}
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false)

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

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            setIsSuccess(response.ok);
            if (response.ok) {
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            }
        } catch (error) {
            setIsSuccess(false);
        } finally {
            setIsSubmitting(false);
            setModalOpen(true);
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
                </motion.form>
            </div>

            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                isSuccess={isSuccess}
            />
        </div>
    );
};

export default ContactPage;