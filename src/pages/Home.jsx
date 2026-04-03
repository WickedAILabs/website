import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

export default function Home(){
  return (
    <div>
      <Helmet>
        <title>WickedAILabs — AI Consulting, Development &amp; Platforms</title>
        <meta name="description" content="WickedAILabs helps organisations move from AI ambition to AI reality — through expert consulting, bespoke development, and production-ready AI platforms." />
        <link rel="canonical" href="https://www.wickedailabs.com/" />
      </Helmet>
      <section className="hero py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Built for the Real World
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
            WickedAILabs helps organisations move from AI ambition to AI reality — through expert consulting, bespoke development, and production-ready AI platforms.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact"><Button>Start a Project</Button></Link>
            <Link to="/services" className="px-4 py-2 rounded-md border hover:bg-gray-50">Our Services</Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <h3 className="text-xl font-semibold mb-2">AI Consulting</h3>
              <p className="opacity-80">Strategy, readiness assessments, and AI roadmaps that turn ambition into a clear path forward.</p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-2">AI Development</h3>
              <p className="opacity-80">Custom AI and LLM solutions, intelligent agents, and automation built for production.</p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-2">AI Platforms</h3>
              <p className="opacity-80">End-to-end AI platform engineering — MLOps pipelines, model serving, and scalable infrastructure.</p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-2">Cloud Architecture</h3>
              <p className="opacity-80">Enterprise-grade cloud design on Azure and AWS, built to support AI workloads at scale.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
