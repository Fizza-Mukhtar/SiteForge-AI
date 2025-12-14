import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  throw new Error("Missing API_KEY environment variable");
}

export const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });