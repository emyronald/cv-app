export default function SkillsForm({ onChange, skills, add, remove }) {
  return (
    <div className="border-b p-4 shadow-md my-2">
      <h2 className="text-2xl">Skills</h2>
      {skills.map((skill) => (
        <div key={skill.id} className="multi-form">
          <label>
            Skill:
            <input
              type="text"
              name="skill"
              placeholder="e.g. JavaScript"
              value={skill.skill}
              onChange={(e) => onChange(skill.id, e)}
            />
          </label>
          <label>
            Years of Experience:
            <input
              type="number"
              min="0"
              name="years"
              placeholder='Number of years'
              value={skill.years}
              onChange={(e) => onChange(skill.id, e)}
            />
          </label>
          <button type="button" onClick={() => remove(skill.id)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={add} className="add-btn">
        Add Skill
      </button>
    </div>
  );
}