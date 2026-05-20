function ResumeInput({
  resume,
  setResume,
}) {
  return (
    <div className="input-group">
      <label>
        Resume
      </label>

      <textarea
        placeholder="Paste your resume..."
        value={resume}
        onChange={(e) =>
          setResume(e.target.value)
        }
      />
    </div>
  );
}

export default ResumeInput;