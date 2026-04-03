import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <Helmet>
        <title>Contact WickedAILabs — Start Your AI Project</title>
        <meta name="description" content="Get in touch with WickedAILabs to discuss your AI consulting, development, or platform needs. We'd love to hear from you." />
        <link rel="canonical" href="https://www.wickedailabs.com/contact" />
      </Helmet>
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
