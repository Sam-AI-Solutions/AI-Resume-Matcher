function ResultsCard({ result }) {

  return (
    <section>

      <div className="results-header">

        <h2 className="results-title">
          Match Score
        </h2>

        <span className="results-score">
          {result.matchScore}%
        </span>

      </div>

      <div className="results-grid">

        <div className="result-card">

          <h3 className="result-card-title">
            Strengths
          </h3>

          <ul className="result-list">

            {result.strengths.map(
              (item, index) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}

          </ul>

        </div>

        <div className="result-card">

          <h3 className="result-card-title">
            Missing Skills
          </h3>

          <ul className="result-list">

            {result.missingSkills.map(
              (item, index) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}

          </ul>

        </div>

        <div className="result-card">

          <h3 className="result-card-title">
            Suggestions
          </h3>

          <ul className="result-list">

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