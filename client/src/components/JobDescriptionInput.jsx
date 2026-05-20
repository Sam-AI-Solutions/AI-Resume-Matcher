function JobDescriptionInput({
  jobDescription,
  setJobDescription,
}) {

  return (
    <div className="input-wrapper">

      <div>

        <h2 className="input-title">
          Job Description
        </h2>

        <p className="input-subtitle">
          Paste the target job posting
        </p>

      </div>

      <textarea
        className="textarea"
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