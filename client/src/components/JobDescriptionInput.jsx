function JobDescriptionInput({
  jobDescription,
  setJobDescription,
}) {
  return (
    <div>
      <label className="block mb-2 font-semibold">
        Job Description
      </label>

      <textarea
        className="w-full border rounded-xl p-4 h-48"
        placeholder="Paste the job description..."
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(e.target.value)
        }
      />
    </div>
  );
}

export default JobDescriptionInput;