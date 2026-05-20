import { useState } from "react";

import ResumeInput from "./components/ResumeInput";
import JobDescriptionInput from "./components/JobDescriptionInput";
import AnalyzeButton from "./components/AnalyzeButton";
import ResultsCard from "./components/ResultsCard";

import { analyzeResume } from "./services/api";

import "./styles/App.css";

function App() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] =
    useState("");

  const [result, setResult] = useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      setError("");
      setResult(null);

      const data = await analyzeResume({
        resume,
        jobDescription,
      });

      setResult(data);

    } catch (err) {
      setError(
        err.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app">
      <section className="container">

        <div className="hero">
          <h1>AI Resume Matcher</h1>

          <p>
            Compare your resume against
            any job description using AI.
          </p>
        </div>

        <div className="inputs">
          <ResumeInput
            resume={resume}
            setResume={setResume}
          />

          <JobDescriptionInput
            jobDescription={jobDescription}
            setJobDescription={
              setJobDescription
            }
          />

          <AnalyzeButton
            analyzeMatch={handleAnalyze}
            loading={loading}
          />
        </div>

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        {result && (
          <ResultsCard result={result} />
        )}
      </section>
    </main>
  );
}

export default App;