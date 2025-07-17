export default function LanguagesForm({
  languages,
  onChange,
  add,
  remove,
  fluency,
}) {
  return (
    <div className="border-b p-4  shadow-md my-2">
      <h2 className="text-2xl mb-3">Languages</h2>
      {languages.map((lang) => (
        <div key={lang.id} className="multi-form">
          <label>
            Language:
            <input
              type="text"
              name="language"
              placeholder="e.g English"
              value={lang.language}
              onChange={(e) => onChange(lang.id, e)}
            />
          </label>
          <label>
            Fluency:
            <select
              name="fluency"
              value={lang.laqnguage}
              onChange={(e) => onChange(lang.id, e)}
              required
            >
              <option value="">Select fluency</option>
              {fluency.map((fluency) => (
                <option key={fluency} value={fluency}>
                  {fluency}
                </option>
              ))}
            </select>
          </label>

          <button type="button" onClick={() => remove(lang.id)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={add} className="add-btn">
        Add Language
      </button>
    </div>
  );
}
