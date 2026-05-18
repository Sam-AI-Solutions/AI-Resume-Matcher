function ResultsCard({ result }) {
  return (
    <div className="mt-8 border-t pt-8">

      <h2 className="text-3xl font-bold mb-4">
        Match Score: {result.matchScore}%
      </h2>

      <div className="space-y-6">

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Missing Skills
          </h3>

          <ul className="list-disc pl-6">
            {result.missingSkills.map(
              (skill, index) => (
                <li key={index}>{skill}</li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Strengths
          </h3>

          <ul className="list-disc pl-6">
            {result.strengths.map(
              (strength, index) => (
                <li key={index}>{strength}</li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Suggestions
          </h3>

          <ul className="list-disc pl-6">
            {result.suggestions.map(
              (suggestion, index) => (
                <li key={index}>{suggestion}</li>
              )
            )}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default ResultsCard;