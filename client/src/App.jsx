import { useState } from "react";

import ResumeInput
  from "./components/ResumeInput";

import JobDescriptionInput
  from "./components/JobDescriptionInput";

import AnalyzeButton
  from "./components/AnalyzeButton";

import ResultsCard
  from "./components/ResultsCard";

import {
  analyzeResume,
} from "./services/api";

import "./styles/App.css";

function App() {

  const [resume, setResume] =
    useState("");

  const [
    jobDescription,
    setJobDescription,
  ] = useState("");

  const [result, setResult] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [provider, setProvider] =
    useState("gemini");

  const handleAnalyze =
    async () => {

      try {

        setLoading(true);

        const data =
          await analyzeResume({
            resume,
            jobDescription,
            provider,
          });

        setResult(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    };

  return (
    <main className="app">

      <section className="container">

        <div className="hero">
          <h1>
            AI Resume Matcher
          </h1>

          <p>
            Analyze your resume
            against any job posting
          </p>
        </div>

        <div className="provider-selector">

          <p>
            Analyze with:
          </p>

          <label>
            <input
              type="radio"
              value="gemini"
              checked={
                provider === "gemini"
              }
              onChange={(e) =>
                setProvider(
                  e.target.value
                )
              }
            />

            Gemini
          </label>

          <label>
            <input
              type="radio"
              value="ollama"
              checked={
                provider === "ollama"
              }
              onChange={(e) =>
                setProvider(
                  e.target.value
                )
              }
            />

            Ollama
          </label>

        </div>

        <div className="inputs">

          <ResumeInput
            resume={resume}
            setResume={setResume}
          />

          <JobDescriptionInput
            jobDescription={
              jobDescription
            }
            setJobDescription={
              setJobDescription
            }
          />

          <AnalyzeButton
            analyzeMatch={
              handleAnalyze
            }
            loading={loading}
          />

        </div>

        {result && (
          <ResultsCard
            result={result}
          />
        )}

      </section>

    </main>
  );
}

export default App;