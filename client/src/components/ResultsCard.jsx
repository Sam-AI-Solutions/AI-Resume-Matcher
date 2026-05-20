function ResultsCard({ result }) {
  return (
    <section className="results-card">

      <div className="score">
        <h2>
          Match Score
        </h2>

        <span>
          {result.matchScore}%
        </span>
      </div>

      <div className="results-grid">

        <div className="card">
          <h3>Strengths</h3>

          <ul>
            {result.strengths.map(
              (item, index) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="card">
          <h3>Missing Skills</h3>

          <ul>
            {result.missingSkills.map(
              (item, index) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="card">
          <h3>Suggestions</h3>

          <ul>
            {result.suggestions.map(
              (item, index) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default ResultsCard;