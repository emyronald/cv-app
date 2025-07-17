export default function Preview({
  personalData,
  education,
  experience,
  skills,
  languages,
}) {
  return (
    <div className="preview-container">
      <div className="">
        <h1>{personalData.name}</h1>
        <p>{personalData.location}</p>
        <a href={`mailto: ${personalData.email}`}>{personalData.email}</a>
        <p>{personalData.phone}</p>
      </div>
      <div>
        <h2>Professional Summary</h2>
        <p>{personalData.summary}</p>
      </div>
      {education.length > 0 && (
        <div>
          <h2>Education</h2>
          {education.map((edu) => (
            <div key={edu.id}>
              <p>
                {!edu.isCurrent ? "Graduate in" : "Student of"} {edu.degree}(
                {edu.degreeType})
              </p>
              <p>{edu.institution}</p>
              <p>
                {edu.admissionMonth} {edu.admissionYear} -{" "}
                {edu.isCurrent ? "Present" : edu.gradMonth + " " + edu.gradYear}
              </p>
            </div>
          ))}
        </div>
      )}
      {experience.length > 0 && (
        <div>
          <h2 className="text-red-400">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-5">
              <p>
                {exp.position} at {exp.company}
              </p>
              <p>{exp.description}</p>
              <p>
                {exp.startMonth} {exp.startYear} -{" "}
                {exp.isCurrent ? "Present" : exp.endMonth + " " + exp.endYear}
              </p>
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <h2>Skills</h2>
          {skills.map((skill) => (
            <li key={skill.id}>
              {skill.skill} - {skill.years} years
            </li>
          ))}
        </div>
      )}
      {languages.length > 0 && (
        <div>
          <h2>Languages</h2>
          {languages.map((lang) => (
            <li key={lang.id}>
              {lang.language} - {lang.fluency}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
