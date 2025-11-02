/**
 * In Next.js (especially App Router APIs), every API route runs as a serverless function.
T  his means that each time someone calls your API, a completely new instance of that function is created on the server.

   When you write mongoose.connect('mongodb_url') inside that API route, it will create a new connection to MongoDB every single time the API runs.

   So for example:
    - First API call → new connection created
    - Second API call → another new connection created
    - Third API call → another one again
    This keeps happening for every request.

   After the serverless function finishes running (when the response is sent), that instance is destroyed, which also closes the MongoDB connection.

   This constant opening and closing of connections is very inefficient.
    - It slows down your API response time,
    - increases MongoDB connection overhead,
    - and can even hit the maximum connection limit if too many requests come in quickly.

   The correct way to handle this:
   You need to maintain a single persistent connection instead of reconnecting every time.

   How?
    - You store the connection state globally (in a global variable) (for example, in a variable).
    - When the API runs again, you first check if there’s already a connection.
    - If yes, reuse that existing one instead of calling mongoose.connect() again.
    - If no, then connect once and mark it as connected.

   This way, only the first API request establishes the database connection.
   All the later requests reuse the same connection, which makes your app faster, stable, and prevents connection overload.
 */


// ------------------ METHOD 1. ---------------------
import { connect } from "mongoose"


const mongodb_URL = process.env.MONGODB_URL
if(!mongodb_URL){
    throw new Error("MongoDB URL is not found.")
}

// Create a global cache object for the connection
let cached = global.mongoose

// If global cache doesn’t exist, initialize it
// The cache will hold two things:
// - connection: the actual active DB connection
// - promise: the ongoing connection attempt (if any)
if(!cached){
    cached = global.mongoose = {connection: null, promise: null}
}

// Define the main connection function
const connectDB = async () => {

    // If there is already an active connection, reuse it
    if(cached.connection){
        console.log("Cached DB Connected");
        return cached.connection
    }

    // If no existing connection promise, create one
    if(!cached.promise){
        cached.promise =  connect(mongodb_URL).then((c) => c.connection)
    }

    // Wait for the connection to resolve
    try {
        cached.connection = await cached.promise
        console.log("DB Connected");
    } catch (error) {
        throw error
    }

    // Return the active connection for use in APIs
    return cached.connection
}

export default connectDB




// --------------------- METHOD 2. ----------------------
/*
import mongoose from "mongoose";

// global connection state
let isConnected = false;

export async function connectDb() {
    // Check if already connected
    if (isConnected) {
        console.log("Using existing MongoDB connection");
        return;
    }

    try {
        // Connect only once
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "mydatabase",
        });

        // mark connected
        isConnected = true; 
        console.log("MongoDB connected successfully");

    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
}
*/