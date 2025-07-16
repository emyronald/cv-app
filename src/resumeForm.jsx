import { useState } from "react";
import PersonalDataForm from "./PersonalDataForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import SkillsForm from "./SkillsForm";
import "./index.css";
import "./App.css";

export default function ResumeForm() {
  const [formData, setFormData] = useState({
    personalData: {
      name: "",
      email: "",
      phone: "",
      summary: "",
      location: "",
    },
    education: [],
    experience: [],
    skills: [],
  });

  const [showPreview, setShowPreview] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from(
    { length: 50 },
    (_, i) => new Date().getFullYear() - i
  );

  function handlePersonalChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      personalData: {
        ...prevData.personalData,
        [name]: value,
      },
    }));
  }

  function togglePreview() {
    if (
      Object.values(formData.personalData).some((value) => value === "") ||
      formData.education.some((edu) =>
        Object.values(edu).some((value) => value === "")
      ) ||
      formData.experience.some((exp) =>
        Object.values(exp).some((value) => value === "")
      ) ||
      formData.skills.some((skill) =>
        Object.values(skill).some((value) => value === "")
      )
    ) {
      alert("Please fill in all required fields before previewing.");
      return;
    }

    // Toggle the preview mode
    setShowPreview((prev) => !prev);
  }

  function handleEducationChange(id, event) {
    const { name, value } = event.target;

    const newEducation = formData.education.map((edu) =>
      edu.id === id ? { ...edu, [name]: value } : edu
    );

    setFormData({ ...formData, education: newEducation });
  }

  function addEducation() {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: crypto.randomUUID(),
          degree: "",
          institution: "",
          admissionMonth: "",
          admissionYear: "",
          gradMonth: "",
          gradYear: "",
          isCurrent: false,
        },
      ],
    }));
  }

  function removeEducation(id) {
    const newEducation = formData.education.filter((edu) => edu.id !== id);
    setFormData({ ...formData, education: newEducation });
  }

  function handleExperienceChange(id, event) {
    const { name, value } = event.target;
    const newExp = formData.experience.map((exp) =>
      exp.id === id ? { ...exp, [name]: value } : exp
    );
    setFormData({ ...formData, experience: newExp });
  }

  function removeExperience(id) {
    const newExperience = formData.experience.filter((exp) => exp.id !== id);
    setFormData({ ...formData, experience: newExperience });
  }

  function addExp() {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: crypto.randomUUID(),
          position: "",
          company: "",
          startMonth: "",
          startYear: "",
          endMonth: "",
          endYear: "",
          isCurrent: false,
        },
      ],
    }));
  }

  function handleSkillsChange(id, event) {
    const { name, value } = event.target;
    const newSkill = formData.skills.map((skill) =>
      skill.id === id ? { ...skill, [name]: value } : skill
    );
    setFormData({ ...formData, skills: newSkill });
  }

  function addSkill() {
    setFormData((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        { id: crypto.randomUUID(), skill: "", years: "" },
      ],
    }));
  }

  function removeSkill(id) {
    const newSkills = formData.skills.filter((skill) => skill.id !== id);
    setFormData({ ...formData, skills: newSkills });
  }

  function handleExpCheckboxChange(id, event) {
    const { name, checked } = event.target;
    const newExperience = formData.experience.map((exp) =>
      exp.id === id
        ? { ...exp, [name]: checked, endMonth: "", endYear: "" }
        : exp
    );
    setFormData({ ...formData, experience: newExperience });
  }

  function handleEduCheckboxChange(id, event) {
    const { name, checked } = event.target;
    const newEducation = formData.education.map((edu) =>
      edu.id === id
        ? { ...edu, [name]: checked, gradMonth: "", gradYear: "" }
        : edu
    );
    setFormData({ ...formData, education: newEducation });
  }

  function handleClear() {
    setFormData({
      personalData: {
        name: "",
        email: "",
        phone: "",
        summary: "",
        location: "",
      },
      education: [],
      experience: [],
      skills: [],
    });
    setShowPreview(false);
  }

  return (
    <div className={"p-4 " + (showPreview ? "preview-mode" : "")}>
      {!showPreview && (
        <div>
          <h1 className="font-bold mb-4 !text-4xl">Resume Builder</h1>
          <PersonalDataForm
            onChange={handlePersonalChange}
            formData={formData}
            // handleShowForm={handleShowForm}
          />
          <EducationForm
            onChange={handleEducationChange}
            education={formData.education}
            add={addEducation}
            remove={removeEducation}
            handleCheckboxChange={handleEduCheckboxChange}
            months={months}
            years={years}
          />
          <ExperienceForm
            onChange={handleExperienceChange}
            experience={formData.experience}
            add={addExp}
            remove={removeExperience}
            handleCheckboxChange={handleExpCheckboxChange}
            months={months}
            years={years}
          />
          <SkillsForm
            onChange={handleSkillsChange}
            skills={formData.skills}
            add={addSkill}
            remove={removeSkill}
          />
        </div>
      )}

      {showPreview && (
        <Preview
          personalData={formData.personalData}
          education={formData.education}
          experience={formData.experience}
          skills={formData.skills}
        />
      )}
      <div className={"mt-4" + showPreview && " flex justify-between"}>
        <TogglePreviewButton
          showPreview={showPreview}
          onClick={togglePreview}
        />
        <ClearButton onClick={handleClear} />
        {showPreview && <DownloadPdfButton />}
      </div>
    </div>
  );
}

function Preview({ personalData, education, experience, skills }) {
  return (
    <div className="preview-container">
      <div className="">
        <h1>{personalData.name}</h1>
        <p>{personalData.location}</p>
        <p>{personalData.email}</p>
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
              <p>Graduate in {edu.degree}</p>
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
            <div key={exp.id}>
              <p>
                {exp.position} at {exp.company}
              </p>
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
            <div key={skill.id}>
              <p>
                {skill.skill} - {skill.years} years
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TogglePreviewButton({ showPreview, onClick }) {
  return (
    <button className="toggle-preview-btn" onClick={onClick}>
      {showPreview ? "Continue editing" : "Show Preview"}
    </button>
  );
}

function ClearButton({ onClick }) {
  return (
    <button className="clear-btn" onClick={onClick}>
      Clear
    </button>
  );
}

function DownloadPdfButton() {
  return (
    <button className="download-pdf-btn">
      Download PDF
    </button>
  );
}