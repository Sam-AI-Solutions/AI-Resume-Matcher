function ResumeInput({ resume, setResume }) {
  return (
    <div>
      <label className="block mb-2 font-semibold">
        Resume
      </label>

      <textarea
        className="w-full border rounded-xl p-4 h-48"
        placeholder="Paste your resume..."
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />
    </div>
  );
}

export default ResumeInput;