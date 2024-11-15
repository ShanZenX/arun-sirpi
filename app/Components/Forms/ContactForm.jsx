// ContactForm.js
"use client";
import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/send-message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        
        

        if (response.ok) {
            alert("Message sent successfully!");
            setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
        } else {
            alert("Failed to send message. Please try again.");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex  flex-col md:gap-[12px] gap-2   md:h-[480px]  p-6 bg-white shadow-lg rounded-lg"
        >
            <div className="flex  md:flex-nowrap flex-wrap md:justify-between md:gap-4 gap-2">
                <div className="w-full md:w-[45%]">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-yellow-300"
                    />
                </div>

                <div className="w-full md:w-[45%]">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number:
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        placeholder="1234567890"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-yellow-300"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-yellow-300"
                />
            </div>

            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject:
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-yellow-300"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message:
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring focus:ring-yellow-300"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full py-2 px-4 bg-yellow-950 text-white font-semibold rounded hover:bg-yellow-700 focus:ring focus:ring-yellow-300"
            >
                Send Message
            </button>
        </form>
    );
}
