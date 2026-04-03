import React from 'react'
import { Helmet } from 'react-helmet-async'
import Card from '../components/ui/Card'

const services = [
  {
    title: 'AI Consulting',
    description:
      'Navigate your AI journey with confidence. We provide AI strategy, readiness assessments, technology selection, and clear roadmaps that align AI investment with business outcomes.',
    points: ['AI strategy & roadmapping', 'Readiness assessments', 'Technology evaluation', 'Use-case identification & prioritisation'],
  },
  {
    title: 'AI Development',
    description:
      'From proof-of-concept to production. We design and build custom AI solutions — LLM integrations, intelligent agents, ML pipelines, and automation — engineered to solve real business problems.',
    points: ['Custom LLM & generative AI solutions', 'Intelligent agent development', 'ML model development & integration', 'Process automation & AI-powered workflows'],
  },
  {
    title: 'AI Platforms',
    description:
      'Build the infrastructure your AI needs to scale. We design and deploy end-to-end AI platforms covering model serving, MLOps pipelines, monitoring, and governance for enterprise workloads.',
    points: ['MLOps pipeline design & implementation', 'Model serving & deployment infrastructure', 'AI platform architecture', 'Monitoring, observability & governance'],
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
    <div className="max-w-4xl mx-auto px-4 py-20">
      <Helmet>
        <title>AI Services — Consulting, Development, Platforms &amp; Cloud | WickedAILabs</title>
        <meta name="description" content="WickedAILabs offers AI consulting, custom AI development, MLOps platform engineering, and cloud architecture on Azure and AWS for enterprise organisations." />
        <link rel="canonical" href="https://www.wickedailabs.com/services" />
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
  )
}
