/*
  * In Next.js, API routes can handle four main HTTP methods: GET, POST, PUT, and DELETE.
  * Each method is defined as an exported async function with its name (e.g., export async function GET()).
  * These functions receive two main objects:
  * 1. NextRequest – contains details about the incoming request (headers, body, params, etc.).
  * 2. NextResponse – used to send back the response to the client.


  * To call an API in Next.js (from frontend or server components):
  * - Use the fetch() method with the API route path (e.g., /api/users).
  * - Example (client-side):
  *   const res = await fetch('/api/users', { method: 'GET' });
  *   const data = await res.json();

  * - Example (sending data):
  *   const res = await fetch('/api/users', {
  *       method: 'POST',
  *       headers: { 'Content-Type': 'application/json' },
  *       body: JSON.stringify({ name: 'John', age: 25 })
  *   });
  *   const result = await res.json();
  * 
  * Note: The API routes are created inside the `/app/api` or `/pages/api` directory.

*/

import { NextRequest, NextResponse } from "next/server";


// GET 
export async function GET() {
    return NextResponse.json({
        name: "John",
        roll: "Full Stack Developer"
    })
}


// POST
export async function POST(request: NextRequest) {
    let {name, roll} = await request.json()

    return NextResponse.json({
        name, roll
    })
}