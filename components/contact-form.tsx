"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    concernType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We will get back to you soon!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      concernType: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#C4C4C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E58D8] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#C4C4C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E58D8] focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#333333] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#C4C4C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E58D8] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="concernType" className="block text-sm font-medium text-[#333333] mb-2">
            Type of Concern *
          </label>
          <select
            id="concernType"
            name="concernType"
            required
            value={formData.concernType}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#C4C4C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E58D8] focus:border-transparent"
          >
            <option value="">Select a concern type</option>
            <option value="general-inquiry">General Inquiry</option>
            <option value="document-request">Document Request</option>
            <option value="complaint">Complaint</option>
            <option value="suggestion">Suggestion</option>
            <option value="emergency">Emergency</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#333333] mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#C4C4C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E58D8] focus:border-transparent"
          placeholder="Please describe your concern or inquiry in detail..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#0E58D8] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
      >
        Send Message
      </button>
    </form>
  )
}
