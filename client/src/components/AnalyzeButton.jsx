function AnalyzeButton({
  analyzeMatch,
  loading,
}) {
  return (
    <button
      className="analyze-btn"
      onClick={analyzeMatch}
      disabled={loading}
    >
      {loading
        ? "Analyzing..."
        : "Analyze Match"}
    </button>
  );
}

export default AnalyzeButton;