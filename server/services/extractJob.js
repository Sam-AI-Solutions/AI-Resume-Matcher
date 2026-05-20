import { model } from "./gemini.js";

export const extractJob =
  async (jobDescription) => {

    const prompt = `
Extract structured job data.

Return ONLY valid JSON.

{
  "requiredSkills": [],
  "preferredSkills": [],
  "requiredTechnologies": [],
  "roleSummary": ""
}

Job Description:
${jobDescription}
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

return JSON.parse(cleanedText);;
  };