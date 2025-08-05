import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });


// Main function to demonstrate LLM interaction
async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
 
        // ------------ Chat without previous History (Context) --------------
        // Example inputs showing single messages without context
        // These would generate responses without remembering previous messages

        // contents: "Hello, how are you?",
        // contents: "Hello, My name is Saksham. How are you?",
        // contents: "Hello, What is My name?",
        // contents: "Hi, I am Saksham. How are you?",


        // ------------ Chat with previous History (Context) --------------
        // This simulates a conversation where the model remembers previous messages
        contents : [
            {
                role: 'user',
                parts: [{text: "Hi, I am Saksham."}]
            },
            {
                role: 'model',
                parts:[{text: "Hi Saksham, nice to meet you! How can I help you today?"}]
            },
            {
                role: 'user',
                parts: [{text: "What is my name?"}]
            }
        ]
    });

    console.log("Response: ", response.text);
}


main();