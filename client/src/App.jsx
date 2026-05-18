import { useState } from "react";

function App() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeMatch = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/analyze",
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

      const data = await response.json();

      setResult(data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>AI Resume Matcher</h1>

      <textarea
        placeholder="Paste your resume..."
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        rows={10}
        cols={60}
      />

      <br /><br />

      <textarea
        placeholder="Paste job description..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        rows={10}
        cols={60}
      />

      <br /><br />

      <button onClick={analyzeMatch}>
        {loading ? "Analyzing..." : "Analyze Match"}
      </button>

      <br /><br />

      {result && (
        <div>
          <h2>Match Score: {result.matchScore}%</h2>

          <h3>Missing Skills</h3>
          <ul>
            {result.missingSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h3>Strengths</h3>
          <ul>
            {result.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>

          <h3>Suggestions</h3>
          <ul>
            {result.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;