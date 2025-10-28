'use client'
import React, { useState } from "react";
import { Star } from "lucide-react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

export default function CustomerReviewForm() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        designation: "", 
        remarks: "",
        comments: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        setError(null)

        try {
            const resp = await axios.post("https://lam-backend-sooty.vercel.app/api/v1/reviews/add-review", { ...formData, rating })

            if (resp.data.success) {
                toast.success("Review added successfully")
                setFormData({
                    name: "",
                    designation: "",
                    comments: "",
                })
                setRating(0)
            }

        } catch (error) {
            setError(error.response.data.message)
        }

        setLoading(false)
        // console.log({ ...formData, rating });
        // alert("Review Submitted Successfully!");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <ToastContainer />
            <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Customer Review
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Designation */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">
                            Profession
                        </label>
                        <input
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Profession"
                        />
                    </div>

                    {/* Remarks about doctor */}

                    <div>
                        <label className="block text-gray-600 font-medium mb-1">
                            Short remarks about doctor
                        </label>
                        <input
                            type="text"
                            name="remarks"
                            value={formData.remarks}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Remarks"
                        />
                    </div>

                    {/* Comments */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">
                            Comments
                        </label>
                        <textarea
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Write your feedback..."
                        />
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Rate</label>
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    size={32}
                                    className={`cursor-pointer transition-colors ${(hover || rating) >= star
                                            ? "text-yellow-400 fill-yellow-400"
                                            : "text-gray-300"
                                        }`}
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHover(star)}
                                    onMouseLeave={() => setHover(0)}
                                />
                            ))}
                        </div>
                    </div>

                    {
                        error && <p className="text-red-500">Error: {error}</p>
                    }

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl shadow-md transition"
                    >
                        {loading ? "Loading..." : "Submit Review"}
                    </button>
                </form>
            </div>
        </div>
    );
}
