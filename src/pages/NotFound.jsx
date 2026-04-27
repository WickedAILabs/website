import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
export default function NotFound(){
  return (
     <div className="max-w-4xl mx-auto px-4 py-20 text-center">
       <Helmet>
         <title>Page Not Found — WickedAILabs</title>
         <meta name="description" content="The page you are looking for does not exist." />
         <link rel="canonical" href="https://www.wickedailabs.com" />
         <meta property="og:image" content="/site-banner.png" />
         <meta property="og:image:alt" content="WickedAILabs" />
         <meta name="twitter:image" content="/site-banner.png" />
       </Helmet>
       <h1 className="text-3xl font-bold mb-4">Page not found</h1>
       <p className="opacity-80">Sorry, we couldn't find that page.</p>
       <p className="mt-6"><Link to="/" className="text-brand-500 underline hover:opacity-70">Go back home</Link></p>
     </div>
   )
}
