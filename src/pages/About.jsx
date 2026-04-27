import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function About(){
  return (
    <div className="hero min-h-screen">
       <div className="max-w-4xl mx-auto px-4 py-20">
       <Helmet>
         <title>About WickedAILabs — 30+ Years of AI, Cloud &amp; Software Expertise</title>
         <meta name="description" content="WickedAILabs is a specialist AI consulting firm with over 30 years of experience in software engineering, cloud infrastructure, AI and machine learning." />
         <link rel="canonical" href="https://www.wickedailabs.com/about" />
         <meta property="og:image" content="/site-banner.png" />
         <meta property="og:image:alt" content="About WickedAILabs" />
         <meta name="twitter:image" content="/site-banner.png" />
       </Helmet>
       <h1 className="text-4xl font-bold mb-6">About WickedAILabs</h1>
       <p className="text-lg opacity-80 mb-4">
        WickedAILabs is a specialist AI consulting, development and platforms company. We work with organisations that are serious about AI — helping them move beyond experimentation and into real, production-grade AI systems that deliver measurable value.
       </p>
       <p className="text-lg opacity-80 mb-4">
        We are cloud and AI/ML experts with over 30 years of tech experience spanning software engineering, cloud infrastructure, artificial intelligence, and machine learning. That depth of experience means we've seen what works, what doesn't, and how to build things that last.
       </p>
       <p className="text-lg opacity-80 mb-4">
        Our team brings deep expertise across the full AI stack: from strategy and advisory, through to custom model development, LLM integration, intelligent agent design, and cloud-native AI platform engineering.
       </p>
       <p className="text-lg opacity-80 mb-4">
        We combine technical rigour with practical delivery experience. Whether you're mapping out your AI strategy, building a bespoke solution, or scaling an existing AI platform — we're the partner that gets it done.
       </p>
       </div>
     </div>
   )
}
