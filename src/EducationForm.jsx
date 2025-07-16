export default function EducationForm({
  education,
  onChange,
  add,
  remove,
  handleCheckboxChange,
  months,
  years,
}) {
  return (
    <div className="border-b p-4  shadow-md my-2">
      <h2 className="text-2xl mb-3">Education</h2>
      {education.map((edu) => (
        <div key={edu.id} className="multi-form">
          <label className="block mb-2 ">
            Degree:
            <input
              type="text"
              name="degree"
              placeholder='Degree'
              value={edu.degree}
              onChange={(e) => onChange(edu.id, e)}
            />
          </label>
          <label>
            Institution:
            <input
              type="text"
              name="institution"
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) => onChange(edu.id, e)}
            />
          </label>

          <label>
            Admission Date:
            <select
              name="admissionMonth"
              value={edu.admissionMonth}
              onChange={(e) => onChange(edu.id, e)}
            >
              <option value="">Select Month</option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              name="admissionYear"
              value={edu.admissionYear}
              onChange={(e) => onChange(edu.id, e)}
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>

          {!edu.isCurrent && (
            <label>
              Graduation date:
              <select
                name="gradMonth"
                value={edu.gradMonth}
                onChange={(e) => onChange(edu.id, e)}
              >
                <option value="">Select Month</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                name="gradYear"
                value={edu.gradYear}
                onChange={(e) => onChange(edu.id, e)}
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>
          )}
          <label>
            <input
              type="checkbox"
              name="isCurrent"
              checked={edu.isCurrent}
              onChange={(e) => handleCheckboxChange(edu.id, e)}
            />
            Currently Enrolled
          </label>

          <button type="button" onClick={() => remove(edu.id)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={add} className="add-btn">
        Add Education
      </button>
    </div>
  );
}
