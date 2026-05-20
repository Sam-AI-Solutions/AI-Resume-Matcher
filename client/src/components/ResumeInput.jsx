function ResumeInput({
  resume,
  setResume,
}) {

  return (
    <div className="input-wrapper">

      <div>

        <h2 className="input-title">
          Resume
        </h2>

        <p className="input-subtitle">
          Paste your resume content
        </p>

      </div>

      <textarea
        className="textarea"
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