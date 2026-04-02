import React from 'react'

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
      <p className="text-lg opacity-80 mb-6">
        Ready to explore what AI can do for your organisation? We'd love to hear from you.
      </p>
      <a
        href="mailto:enquiries@wickedailabs.com"
        className="text-brand-500 text-lg underline hover:opacity-70"
      >
        enquiries@wickedailabs.com
      </a>
      <p className="text-lg opacity-80 mt-4">
        Mobile: +61 410 480 971
      </p>
    </div>
  )
}
