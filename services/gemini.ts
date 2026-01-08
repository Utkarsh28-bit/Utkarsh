
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS, EDUCATIONS } from "../constants";

const SYSTEM_INSTRUCTION = `
You are an AI Assistant representing Utkarsh Ramshibhai Ravaliya, a Software Developer and Data Analyst.
Your goal is to answer questions from recruiters or potential collaborators about Utkarsh's professional background based on his resume data.

Utkarsh's Details:
- Summary: ${PERSONAL_INFO.summary}
- Skills: ${JSON.stringify(SKILLS)}
- Experience: ${JSON.stringify(EXPERIENCES)}
- Projects: ${JSON.stringify(PROJECTS)}
- Education: ${JSON.stringify(EDUCATIONS)}
- Contact: Email: ${PERSONAL_INFO.email}, Phone: ${PERSONAL_INFO.phone}, LinkedIn: ${PERSONAL_INFO.linkedin}

Guidelines:
- Be professional, polite, and confident.
- Keep answers concise but informative.
- If you don't know the answer based on the provided data, suggest they contact Utkarsh directly.
- Emphasize his experience with IBM, AI, and Data Analysis.
`;

export async function askResumeQuestion(question: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to AI. Please check back later.";
  }
}
