// NOTE: SSR, SSG, ISR -> all three only work on "server component" for api fetching
//       CSR  ->  for client side component (api fetching as in React)

/*
Next.js provides four main data fetching strategies:

1. SSR (Server-Side Rendering)
   - Runs on the server for every request.
   - Data is fetched at request time.
   - Best for pages with dynamic data that changes frequently.

2. SSG (Static Site Generation)
   - Runs only at build time.
   - Generates static HTML for each page.
   - Best for pages with data that rarely changes.

3. ISR (Incremental Static Regeneration)
   - Similar to SSG, but allows revalidating pages at intervals.
   - Uses getStaticProps with a "revalidate" field.
   - Best for pages that need partial updates without full rebuilds.

4. CSR (Client-Side Rendering)
   - Works inside client components (like React).
   - Data is fetched in the browser using fetch(), axios, etc.
   - Best for user-specific or frequently updating data.
*/

"use client"

import { useEffect } from "react"

const page = () => {

  // ------------- SSR ---------------
  // let res = await fetch('http://localhost:3000/api/user', {
  //   cache: 'no-store'
  // })
  // let data = await res.json()
  // console.log(data)


  // -------------- SSG ---------------
  // let res = await fetch('http://localhost:3000/api/user', {
  //   cache: 'force-cache'
  // })
  // let data = await res.json()
  // console.log(data)


  // -------------- ISR ---------------
  // let res = await fetch('http://localhost:3000/api/user', {
  //   next: {revalidate: 5}
  //   // after 5 second it call automatically in background
  // })
  // let data = await res.json()
  // console.log(data)


  // -------------- CSR -----------------
  const handleAPI = async () => {
    let res = await fetch('/api/user')

    let data = await res.json()
    console.log(data)
  }

  useEffect(() =>{
    handleAPI()
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="font-bold text-shadow-indigo-50 text-2xl">
        HELLO 👋
      </div>
    </div>
  )
}

export default page