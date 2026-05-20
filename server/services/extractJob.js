import { model } from "./gemini.js";

export const extractJob = async (
  jobDescription
) => {

  const prompt = `
Extract the key requirements from this job description.

Return ONLY valid JSON.

Format:

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
    await model.generateContent(prompt);

  const response = result.response.text();

  return JSON.parse(response);
};