function AnalyzeButton({
  analyzeMatch,
  loading,
}) {

  return (
    <button
      onClick={analyzeMatch}
      disabled={loading}
      className="analyze-btn"
    >
      {loading
        ? "Analyzing..."
        : "Analyze Resume"}
    </button>
  );
}

export default AnalyzeButton;