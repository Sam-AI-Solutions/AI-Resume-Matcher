import { extractResume }
  from "../services/extractResume.js";

import { extractJob }
  from "../services/extractJob.js";

import { calculateScore }
  from "../services/calculateScore.js";

import { generateFeedback }
  from "../services/generateFeedback.js";

export const analyzeController =
  async (req, res) => {

    try {

      const {
        resume,
        jobDescription,
      } = req.body;

      if (
        !resume ||
        !jobDescription
      ) {
        return res.status(400).json({
          error:
            "Resume and job description are required",
        });
      }

      const resumeData =
        await extractResume(resume);

      const jobData =
        await extractJob(
          jobDescription
        );

      const {
        score,
      } = calculateScore(
        resumeData,
        jobData
      );

      const feedback =
        await generateFeedback(
          resumeData,
          jobData,
          score
        );

      res.json({
        matchScore: score,
        ...feedback,
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error:
          "Failed to analyze resume",
      });
    }
  };