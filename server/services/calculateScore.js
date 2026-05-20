export const calculateScore = (
  resumeData,
  jobData
) => {

  let score = 0;

  const matchedSkills =
    resumeData.skills.filter(
      (skill) =>
        jobData.requiredSkills.includes(
          skill
        )
    );

  score += matchedSkills.length * 10;

  if (
    resumeData.projects.length > 0
  ) {
    score += 15;
  }

  if (
    resumeData.yearsExperience >= 2
  ) {
    score += 15;
  }

  if (
    resumeData.technologies.length >= 5
  ) {
    score += 10;
  }

  if (score > 100) {
    score = 100;
  }

  return {
    score,
    matchedSkills,
  };
};