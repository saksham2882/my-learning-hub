import { GoogleGenAI } from "@google/genai";
// Import readline-sync to get user input from the console
import readlineSync from 'readline-sync'
import dotenv from "dotenv";
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Array to store conversation history (user messages and model responses)
const History = []


// Function to handle user input and generate AI response
async function Chatting(userMessage) {

    // store user message in history
    History.push({
        role: 'user',
        parts: [{text: userMessage}]
    })

    // Send the full conversation history to the Gemini 2.5 Flash model
    // This allows the model to respond with context from previous messages
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents : History
    });

    // Store LLM response in history
    History.push({
        role: 'model',
        parts: [{ text: response.text }]
    })
    
    console.log("Response: ", response.text);
}


// Main function to repeatedly get user input and call the Chatting function
async function main() {
    const userMessage = readlineSync.question("\nAsk me anything: ");
    console.log("\n");
    await Chatting(userMessage)
    main();
}

main();