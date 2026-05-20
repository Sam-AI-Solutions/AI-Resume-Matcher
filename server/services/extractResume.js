import { model } from "./gemini.js";

export const extractResume = async (
  resumeText
) => {

  const prompt = `
Extract structured information from this resume.

Return ONLY valid JSON.

Format:

{
  "skills": [],
  "yearsExperience": number,
  "projects": [],
  "technologies": [],
  "summary": ""
}

Resume:
${resumeText}
`;

  const result =
    await model.generateContent(prompt);

  const response = result.response.text();

  return JSON.parse(response);
};