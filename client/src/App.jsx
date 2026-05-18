import { useState } from "react";

import ResumeInput from "./components/ResumeInput";
import JobDescriptionInput from "./components/JobDescriptionInput";
import AnalyzeButton from "./components/AnalyzeButton";
import ResultsCard from "./components/ResultsCard";

function App() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const analyzeMatch = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resume,
          jobDescription,
        }),
      });

      const data = await response.json();

      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">
          AI Resume Matcher
        </h1>

        <div className="space-y-6">
          <ResumeInput resume={resume} setResume={setResume} />

          <JobDescriptionInput
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
          />

          <AnalyzeButton analyzeMatch={analyzeMatch} loading={loading} />

          {result && <ResultsCard result={result} />}
        </div>
      </div>
    </div>
  );
}

export default App;
