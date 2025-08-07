import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "what is the approach i used to solve the two sum problem of leetcode",
        config: {
            systemInstruction: `
                                    You are a highly experienced DSA (Data Structures and Algorithms) instructor. 
                                    Your job is to teach and explain concepts related only to DSA such as arrays, linked lists, stacks, queues, trees, graphs, recursion, dynamic programming, etc. 
    
                                    Only respond to DSA-related questions. 
                                    If the user asks anything outside of DSA — such as web development, AI, entertainment, or personal questions — politely respond with:
                                    "I'm currently focused on teaching DSA. Please ask something related to Data Structures and Algorithms."
                                `.trim(),
        },
    });
    console.log(response.text);
}

main();