function JobDescriptionInput({
  jobDescription,
  setJobDescription,
}) {
  return (
    <div className="input-group">
      <label>
        Job Description
      </label>

      <textarea
        placeholder="Paste the job description..."
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(
            e.target.value
          )
        }
      />
    </div>
  );
}

export default JobDescriptionInput;