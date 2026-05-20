const API_BASE_URL = "http://localhost:5000";

export const analyzeResume = async ({
  resume,
  jobDescription,
}) => {
  const response = await fetch(
    `${API_BASE_URL}/analyze`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        resume,
        jobDescription,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to analyze resume");
  }

  return response.json();
};