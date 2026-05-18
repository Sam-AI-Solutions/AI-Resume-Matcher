import { model } from "./gemini.js";

export const generateFeedback = async (
  resumeData,
  jobData,
  score
) => {

  const prompt = `
You are an ATS resume coach.

Resume Data:
${JSON.stringify(resumeData)}

Job Data:
${JSON.stringify(jobData)}

Match Score:
${score}

Return ONLY valid JSON:

{
  "strengths": [],
  "missingSkills": [],
  "suggestions": []
}
`;

  const result =
    await model.generateContent(prompt);

  const response = result.response.text();

  return JSON.parse(response);
};