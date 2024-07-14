"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyForScholarship = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        studentType: 'school',
        schoolName: '',
        collegeName: '',
        currentClass: '',
        currentCGPA: '',
        familyIncome: '',
        idCard: null,
        lastMarksheet: null,
        transcript: null,
        resume: null,
        aadharCard: null,
        parentName: '',
        relationWithParent: '',
        parentAadharCard: null,
    });


    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formDataToSend = new FormData();
        for (const key in formData) {
            if (formData[key] instanceof File) {
                formDataToSend.append(key, formData[key], formData[key].name);
            } else {
                formDataToSend.append(key, formData[key]);
            }
        }

        try {
            const response = await fetch('/api/apply-scholarship', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                toast.success('Application submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    studentType: 'school',
                    schoolName: '',
                    collegeName: '',
                    currentClass: '',
                    currentCGPA: '',
                    familyIncome: '',
                    idCard: null,
                    lastMarksheet: null,
                    transcript: null,
                    resume: null,
                    aadharCard: null,
                });
            } else {
                throw new Error('Failed to submit application');
            }
        } catch (error) {
            toast.error('Failed to submit application. Please try again later.');
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
                    Apply for <span className="text-[#FF5402]">Scholarship</span>
                </motion.h1>

                <motion.form
                    className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* Personal Information */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                            />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                            />
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Address"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                            />
                            <input
                                type="number"
                                name="familyIncome"
                                value={formData.familyIncome}
                                onChange={handleChange}
                                placeholder="Annual Family Income"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                            />
                            <input
                                type="text"
                                name="parentName"
                                value={formData.parentName}
                                onChange={handleChange}
                                placeholder="Parent's Name"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                            />
                            <input
                                type="text"
                                name="relationWithParent"
                                value={formData.relationWithParent}
                                onChange={handleChange}
                                placeholder="Relation with Parent"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                            />
                        </div>
                    </div>

                    {/* Educational Information */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Educational Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <select
                                name="studentType"
                                value={formData.studentType}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                            >
                                <option value="school">School Student</option>
                                <option value="college">College Student</option>
                            </select>
                            {formData.studentType === 'school' ? (
                                <input
                                    type="text"
                                    name="schoolName"
                                    value={formData.schoolName}
                                    onChange={handleChange}
                                    placeholder="School Name"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                                />
                            ) : (
                                <input
                                    type="text"
                                    name="collegeName"
                                    value={formData.collegeName}
                                    onChange={handleChange}
                                    placeholder="College Name"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                                />
                            )}
                            <input
                                type="text"
                                name="currentClass"
                                value={formData.currentClass}
                                onChange={handleChange}
                                placeholder={formData.studentType === 'school' ? "Current Class" : "Current Year"}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                            />
                            {formData.studentType === 'college' && (
                                <input
                                    type="text"
                                    name="currentCGPA"
                                    value={formData.currentCGPA}
                                    onChange={handleChange}
                                    placeholder="Current CGPA"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                                />
                            )}
                        </div>
                    </div>

                    {/* Document Uploads */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Document Uploads</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-2">School/College ID Card</label>
                                <input
                                    type="file"
                                    name="idCard"
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                                />
                            </div>
                            {formData.studentType === 'school' && (
                                <div>
                                    <label className="block mb-2">Last Marksheet</label>
                                    <input
                                        type="file"
                                        name="lastMarksheet"
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                                    />
                                </div>
                            )}
                            {formData.studentType === 'college' && (
                                <>
                                    <div>
                                        <label className="block mb-2">Transcript</label>
                                        <input
                                            type="file"
                                            name="transcript"
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2">Resume</label>
                                        <input
                                            type="file"
                                            name="resume"
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                                        />
                                    </div>
                                </>
                            )}
                            <div>
                                <label className="block mb-2">Aadhar Card</label>
                                <input
                                    type="file"
                                    name="aadharCard"
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Income Certificate</label>
                                <input
                                    type="file"
                                    name="incomeProof"
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                                />
                            </div>
                            {formData.studentType === 'college' && (
                                <div>
                                    <label className="block mb-2">Letter of Recommendation</label>
                                    <input
                                        type="file"
                                        name="recommendationLetter"
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                                    />
                                </div>
                            )}
                            <div>
                                <label className="block mb-2">Parent&apos;s Aadhar Card</label>
                                <input
                                    type="file"
                                    name="parentAadharCard"
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5402]"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#FF5402] text-white py-3 rounded-md font-semibold hover:bg-[#ff5202f1] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF5402] focus:ring-opacity-50"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                </motion.form>
            </div>
            <ToastContainer position="top-center" autoClose={5000} />
        </div>
    );
};

export default ApplyForScholarship;