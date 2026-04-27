import React from 'react'
import { Helmet } from 'react-helmet-async'
import Card from '../components/ui/Card'

const services = [
   {
    title: 'AI Consulting',
    description:
       'Navigate your AI journey with confidence. We provide AI strategy, readiness assessments, technology selection, and clear roadmaps that align AI investment with business outcomes.',
    points: ['AI strategy & roadmaps', 'Readiness assessments', 'Technology evaluation', 'Use-case identification & prioritisation','Staff training and upskilling'],
   },
   {
    title: 'AI Development',
    description:
       'From proof-of-concept to production. We design and build custom AI solutions — LLM integrations, RAG-based systems, intelligent agents, ML pipelines, and full end-to-end agentic software delivery and integration — engineered to solve real business problems.',
    points: ['Custom LLM & generative AI solutions', 'RAG-based solution design & implementation', 'Intelligent agent development', 'End-to-end agentic software delivery & integration', 'ML model development & integration', 'Process automation & AI-powered workflows', 'Spec-driven development setup, training & coaching'],
   },
   {
    title: 'Agent Factory Development',
    description:
       'Autonomous AI agents, built and deployed at scale. A repeatable framework to create, orchestrate, and manage intelligent agents — delivering in days and weeks, not months. We upskill your teams and transform your delivery processes to be AI-Ready.',
    points: ['Autonomous agent design & development', 'Multi-agent orchestration & coordination', 'Agent lifecycle management & monitoring', 'Agentic workflow automation', 'Custom tool & API integration for agents', 'Team upskilling & AI-first capability building', 'Software delivery transformation with agentic workflows'],
   },
   {
    title: 'Cloud Architecture',
    description:
       'Cloud foundations built for AI at scale. We architect and engineer cloud-native environments on Azure and AWS that are optimised for modern AI and data workloads.',
    points: ['Azure & AWS architecture design', 'Cloud-native AI infrastructure', 'Cloud migrations & modernisation', 'Cost optimisation & security'],
   },
]

export default function Services(){
  return (
     <div className="hero min-h-screen">
       <div className="max-w-4xl mx-auto px-4 py-20">
       <Helmet>
         <title>AI Services — Consulting, Development, Agent Factory &amp; Cloud | WickedAILabs</title>
         <meta name="description" content="WickedAILabs offers AI consulting, custom AI development, Agent Factory development, and cloud architecture on Azure and AWS for enterprise organisations." />
         <link rel="canonical" href="https://www.wickedailabs.com/services" />
         <meta property="og:image" content="/site-banner.png" />
         <meta property="og:image:alt" content="WickedAILabs AI Services" />
         <meta name="twitter:image" content="/site-banner.png" />
       </Helmet>
       <h1 className="text-4xl font-bold mb-4">Our Services</h1>
       <p className="text-lg opacity-80 mb-4">
        WickedAILabs delivers end-to-end AI solutions — from initial strategy and consulting through to bespoke AI development and the deployment of production-grade AI platforms.
       </p>
       <p className="text-lg opacity-80 mb-10">
        Whether you need to define your AI roadmap, build a custom AI-powered product, stand up an enterprise AI platform, or design the cloud infrastructure to support it all — we have the expertise to deliver.
       </p>
       <div className="space-y-6">
         {services.map((s) => (
           <Card key={s.title}>
             <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
             <p className="opacity-80 mb-3">{s.description}</p>
             <ul className="list-disc list-inside space-y-1 text-sm opacity-70">
               {s.points.map((p) => <li key={p}>{p}</li>)}
             </ul>
           </Card>
         ))}
       </div>
       </div>
     </div>
   )
}
