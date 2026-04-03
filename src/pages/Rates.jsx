import React from 'react'
import { Helmet } from 'react-helmet-async'
import Card from '../components/ui/Card'

const rates = [
  { role: 'Platform Engineer',      daily: '$2,000' },
  { role: 'Solution Architect',     daily: '$2,000' },
  { role: 'AI/ML Engineer',         daily: '$2,000' },
  { role: 'AI Software Developer',  daily: '$2,000' },
]

export default function Rates(){
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <Helmet>
        <title>Consulting Rates — WickedAILabs</title>
        <meta name="description" content="WickedAILabs standard daily consulting rates for Platform Engineers, Solution Architects, AI/ML Engineers and AI Software Developers." />
        <link rel="canonical" href="https://www.wickedailabs.com/rates" />
      </Helmet>
      <h1 className="text-4xl font-bold mb-4">Consulting Rates</h1>
      <p className="text-lg opacity-80 mb-10">
        Our standard daily rates are listed below. All rates are in Australian dollars and exclude GST.
      </p>
      <Card>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="pb-3 font-semibold text-sm uppercase tracking-wide opacity-60">Role</th>
              <th className="pb-3 font-semibold text-sm uppercase tracking-wide opacity-60 text-right">Daily Rate (AUD + GST)</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((r, i) => (
              <tr key={r.role} className={i < rates.length - 1 ? 'border-b' : ''}>
                <td className="py-4 font-medium">{r.role}</td>
                <td className="py-4 text-right text-brand-500 font-semibold">{r.daily}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <p className="text-sm opacity-60 mt-6">
        Rates are subject to change. Please <a href="/contact" className="text-brand-500 hover:underline">contact us</a> to discuss your engagement requirements.
      </p>
    </div>
  )
}
