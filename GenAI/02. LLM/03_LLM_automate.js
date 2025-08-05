import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync'
import dotenv from "dotenv";
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Create a chat session with the Gemini 2.5 Flash model
// The session automatically maintains conversation history
const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history: [],
})


// Main function to get user input and interact with the chat session
async function main() {
    const userMessage = readlineSync.question("\nAsk me anything: ");

    // Send the user's message to the chat session
    // The session automatically includes previous messages for context
    const response = await chat.sendMessage({
        message: userMessage
    })

    console.log("Response: ", response.text);
    main();
}

main();