export default function PersonalDataForm({ onChange, formData }) {
  return (
    <div className="border-b p-4  shadow-md my-2">
      <h2>Personal Data</h2>
      <form>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g. John Doe"
          onChange={onChange}
          value={formData.personalData.name}
        />
        <label>
          Location:
          <input
            type="text"
            id="location"
            name="location"
            placeholder="City, State, Country"
            onChange={onChange}
            value={formData.personalData.location}
          />
        </label>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="e.g. johndoe@gmail.com"
          onChange={onChange}
          value={formData.personalData.email}
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder='e.g. +1234567890'
          onChange={onChange}
          value={formData.personalData.phone}
        />
        <label htmlFor="summary">Professional Summary:</label>
        <textarea
          id="summary"
          rows="4"
          cols="50"
          name="summary"
          placeholder="Write a brief summary of your professional background and skills"
          onChange={onChange}
          value={formData.personalData.summary}
        />
      </form>
    </div>
  );
}
