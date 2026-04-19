import React from 'react'
import { Helmet } from 'react-helmet-async'
import Card from '../components/ui/Card'

const freeResources = [
  {
    name: 'wickedailabs-agentframework (Python)',
    description: 'Open-source agent framework for Python, published on PyPI.',
    url: 'https://pypi.org/project/wickedailabs-agentframework/',
  },
  {
    name: 'WickedAILabs.AgentFramework (.NET)',
    description: 'Open-source agent framework for .NET, published on NuGet.',
    url: 'https://www.nuget.org/packages/WickedAILabs.AgentFramework',
  },
]

const commercialResources = [
  {
    name: 'PhotoCop AI — AI Image Forensics',
    description: 'Commercial AI-powered image forensics and authenticity analysis.',
    url: 'https://www.photocop-ai.com/',
  },
]

function ResourceCard({ name, description, url }) {
  return (
    <Card>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="opacity-80 mb-3">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-500 underline hover:opacity-70 text-sm break-all"
      >
        {url}
      </a>
    </Card>
  )
}

export default function Resources(){
  return (
    <div className="hero min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Helmet>
          <title>Resources — Open-Source Frameworks &amp; Commercial Products | WickedAILabs</title>
          <meta name="description" content="Explore WickedAILabs resources — open-source agent frameworks for Python and .NET, and commercial AI products including PhotoCop AI image forensics." />
          <link rel="canonical" href="https://www.wickedailabs.com/resources" />
        </Helmet>
        <h1 className="text-4xl font-bold mb-4">Resources</h1>
        <p className="text-lg opacity-80 mb-10">
          A collection of open-source frameworks and commercial products from WickedAILabs.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Free &amp; Open Source</h2>
        <div className="space-y-6 mb-10">
          {freeResources.map((r) => <ResourceCard key={r.name} {...r} />)}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Commercial Products</h2>
        <div className="space-y-6">
          {commercialResources.map((r) => <ResourceCard key={r.name} {...r} />)}
        </div>
      </div>
    </div>
  )
}
