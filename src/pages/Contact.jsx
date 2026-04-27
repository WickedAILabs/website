import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  return (
      <div className="hero min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-20">
        <Helmet>
          <title>Contact WickedAILabs — Start Your AI Project</title>
          <meta name="description" content="Get in touch with WickedAILabs to discuss your AI consulting, development, or platform needs. We'd love to hear from you." />
          <link rel="canonical" href="https://www.wickedailabs.com/contact" />
          <meta property="og:image" content="/site-banner.png" />
          <meta property="og:image:alt" content="Contact WickedAILabs" />
          <meta name="twitter:image" content="/site-banner.png" />
        </Helmet>
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg opacity-80 mb-6">
        Ready to explore what AI can do for your organisation? We'd love to hear from you.
        </p>
        <p className="text-lg opacity-80">
        For general enquiries:{' '}
          <a
            href="mailto:enquiries@wickedailabs.com"
            className="text-brand-500 underline hover:opacity-70 min-h-[48px] inline-flex items-center py-2 px-1"
           >
            enquiries@wickedailabs.com
           </a>
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Aaron Saikovski</h2>
          <p className="text-lg opacity-80 mb-3">CTO/Founding Technical Director</p>
          <p className="text-lg opacity-80">
            Email:{' '}
            <a
              href="mailto:aaron@wickedailabs.com"
              className="text-brand-500 underline hover:opacity-70 min-h-[48px] inline-flex items-center py-2 px-1"
             >
              aaron@wickedailabs.com
             </a>
          </p>
          <p className="text-lg opacity-80">
            Mobile:{' '}
            <a
              href="tel:+61410480971"
              className="text-brand-500 underline hover:opacity-70 min-h-[48px] inline-flex items-center py-2 px-1"
             >
              +61 410 480 971
             </a>
          </p>
          <p className="text-lg opacity-80">
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/asaikovski/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 underline hover:opacity-70 min-h-[48px] inline-flex items-center py-2 px-1"
             >
              linkedin.com/in/asaikovski
             </a>
          </p>
        </div>
        </div>
      </div>
    )
}
