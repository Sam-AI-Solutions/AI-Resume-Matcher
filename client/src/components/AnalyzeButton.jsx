function AnalyzeButton({
  analyzeMatch,
  loading,
}) {
  return (
    <button
      onClick={analyzeMatch}
      className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:opacity-90 transition"
    >
      {loading
        ? "Analyzing..."
        : "Analyze Match"}
    </button>
  );
}

export default AnalyzeButton;