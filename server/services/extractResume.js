import { model } from "./gemini.js";

export const extractResume =
  async (resumeText) => {

    const prompt = `
Extract structured resume information.

Return ONLY valid JSON.

{
  "skills": [],
  "projects": [],
  "yearsExperience": number,
  "technologies": [],
  "summary": ""
}

Resume:
${resumeText}
`;

    const result =
      await model.generateContent(
        prompt
      );

    const response =
      await result.response;

    const text =
      response.text();

    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanedText);
  };