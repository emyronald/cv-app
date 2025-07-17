export default function ExperienceForm({
  onChange,
  experience,
  add,
  remove,
  handleCheckboxChange,
  months,
  years,
}) {
  return (
    <div className="border-b p-4 shadow-md my-2">
      <h2 className="text-2xl">Experience</h2>

      {experience.map((exp) => (
        <div key={exp.id} className="multi-form">
          <label>
            Position:
            <input
              type="text"
              name="position"
              placeholder="Job Title"
              value={exp.position}
              onChange={(e) => onChange(exp.id, e)}
            />
          </label>
          <label>
            Company:
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={exp.company}
              onChange={(e) => onChange(exp.id, e)}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              placeholder="Job Description"
              value={exp.description}
              onChange={(e) => onChange(exp.id, e)}
            />
          </label>
          <label>
            Start date:
            <div>
            <select
              name="startMonth"
              value={exp.startMonth}
              onChange={(e) => onChange(exp.id, e)}
            >
              <option value="">Select Month</option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <select
              name="startYear"
              value={exp.startYear}
              onChange={(e) => onChange(exp.id, e)}
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            </div>
          </label>
          {!exp.isCurrent && (
            <label>
              End date:
              <div>
              <select
                name="endMonth"
                value={exp.endMonth}
                onChange={(e) => onChange(exp.id, e)}
              >
                <option value="">Select Month</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                name="endYear"
                value={exp.endYear}
                onChange={(e) => onChange(exp.id, e)}
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              </div>
            </label>
          )}
          <label>
            <input
              type="checkbox"
              name="isCurrent"
              checked={exp.isCurrent}
              onChange={(e) => handleCheckboxChange(exp.id, e)}
            />
            Currently Employed
          </label>

          <button type="button" onClick={() => remove(exp.id)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={add} className="add-btn">
        Add Experience
      </button>
    </div>
  );
}
