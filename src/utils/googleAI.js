import { GoogleGenerativeAI } from "@google/generative-ai";
import { GOOGLEAI_KEY } from "./constants";

export const genAI = new GoogleGenerativeAI(GOOGLEAI_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });