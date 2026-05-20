import express from "express";

import { model }
  from "../services/gemini.js";

import {
  generateWithOllama,
} from "../services/ollama.js";

const router = express.Router();

router.post(
  "/",
  async (req, res) => {

    try {

      const {
        resume,
        jobDescription,
        provider,
      } = req.body;

      const prompt = `
You are a strict ATS resume analyzer.

Analyze the resume against the job description.

Scoring Rules:
- Very short resumes should receive low scores.
- Lack of detail should reduce the score.
- Missing technical skills should reduce the score.
- Generic resumes should not score highly.
- Strong resumes include:
  - detailed experience
  - relevant technologies
  - projects
  - measurable achievements
  - years of experience

Return ONLY raw valid JSON.

Do not include markdown.
Do not explain anything.

Use this exact format:

{
  "matchScore": number,
  "missingSkills": [],
  "strengths": [],
  "suggestions": []
}

Resume:
${resume}

Job Description:
${jobDescription}
`;

      let text = "";

      if (
        provider === "ollama"
      ) {

        text =
          await generateWithOllama(
            prompt
          );

      } else {

        const result =
          await model.generateContent(
            prompt
          );

        const response =
          await result.response;

        text =
          response.text();
      }

      const cleanedText =
        text
          .replace(
            /```json/g,
            ""
          )
          .replace(
            /```/g,
            ""
          )
          .trim();

      const data =
        JSON.parse(cleanedText);

      res.json(data);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error:
          "Failed to analyze resume",
      });
    }
  }
);

export default router;