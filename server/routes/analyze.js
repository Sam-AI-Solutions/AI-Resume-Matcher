import express from "express";
import { model } from "../services/gemini.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { resume, jobDescription } = req.body;

    const prompt = `
You are an ATS resume analyzer.

Compare the resume and the job description.

Return ONLY valid JSON.

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

    const result = await model.generateContent(prompt);

    const response = await result.response;

    const text = response.text();

    // Clean markdown formatting
    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const data = JSON.parse(cleanedText);

    res.json(data);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to analyze resume",
    });
  }
});

export default router;