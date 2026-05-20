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

import "./styles/index.css";

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

      <div className="app-container">

        {/* HERO */}

        <div className="hero">

          <div className="hero-badge">
            <p className="hero-badge-text">
              AI-Powered ATS Analysis
            </p>
          </div>

          <h1 className="hero-title">
            AI Resume Matcher
          </h1>

          <p className="hero-subtitle">
            Compare your resume against
            real job descriptions using
            Gemini or locally-hosted
            Ollama models.
          </p>

        </div>

        {/* INPUTS */}

        <div className="input-grid">

          <div className="card">
            <ResumeInput
              resume={resume}
              setResume={setResume}
            />
          </div>

          <div className="card">
            <JobDescriptionInput
              jobDescription={
                jobDescription
              }
              setJobDescription={
                setJobDescription
              }
            />
          </div>

        </div>

        {/* ACTION BAR */}

        <div className="action-bar">

          <div className="provider-group">

            <p className="provider-label">
              Analyze with
            </p>

            <div className="provider-toggle">

              <button
                className={
                  provider === "gemini"
                    ? "provider-pill active-provider"
                    : "provider-pill"
                }
                onClick={() =>
                  setProvider(
                    "gemini"
                  )
                }
              >
                <span className="provider-dot gemini-dot" />

                Gemini
              </button>

              <button
                className={
                  provider === "ollama"
                    ? "provider-pill active-provider"
                    : "provider-pill"
                }
                onClick={() =>
                  setProvider(
                    "ollama"
                  )
                }
              >
                <span className="provider-dot ollama-dot" />

                Ollama
              </button>

            </div>

          </div>

          <AnalyzeButton
            analyzeMatch={
              handleAnalyze
            }
            loading={loading}
          />

        </div>

        {/* RESULTS */}

        {result && (
          <div className="results-container">

            <ResultsCard
              result={result}
            />

          </div>
        )}

      </div>

    </main>
  );
}

export default App;