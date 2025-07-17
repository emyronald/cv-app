import { useState } from "react";
import PersonalDataForm from "./PersonalDataForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import SkillsForm from "./SkillsForm";
import LanguagesForm from "./LanguagesForm";
import { months, years, degreeOptions, fluencyLevels } from "./data";
import Preview from "./Preview";
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
    languages: [],
  });

  const [showPreview, setShowPreview] = useState(false);

  

  function handleDownloadPdf() {
    
    window.print();
  }

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

  function handleLanguageChange(id, event) {
    const { name, value } = event.target;
    const newLang = formData.languages.map((lang) =>
      lang.id === id ? { ...lang, [name]: value } : lang
    );
    setFormData({ ...formData, languages: newLang });
  }

  function addLanguage() {
    setFormData((prev) => ({
      ...prev,
      languages: [
        ...prev.languages,
        { id: crypto.randomUUID(), language: "", fluency: "" },
      ],
    }));
  }

  function removeLanguage(id) {
    const newLanguages = formData.languages.filter((lang) => lang.id !== id);
    setFormData({ ...formData, languages: newLanguages });
  }

  function removeSkill(id) {
    const newSkills = formData.skills.filter((skill) => skill.id !== id);
    setFormData({ ...formData, skills: newSkills });
  }

  function handleExpCheckboxChange(id, event) {
    const { name, checked } = event.target;
    const newExperience = formData.experience.map((exp) =>
      exp.id === id
        ? { ...exp, [name]: checked, endMonth: null, endYear: null }
        : exp
    );
    setFormData({ ...formData, experience: newExperience });
  }

  function handleEduCheckboxChange(id, event) {
    const { name, checked } = event.target;
    const newEducation = formData.education.map((edu) =>
      edu.id === id
        ? { ...edu, [name]: checked, gradMonth: null, gradYear: null }
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
            degreeOptions={degreeOptions}
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
          <LanguagesForm
            languages={formData.languages}
            onChange={handleLanguageChange}
            add={addLanguage}
            remove={removeLanguage}
            fluency={fluencyLevels}
          />
        </div>
      )}

      {showPreview && (
        <Preview
          personalData={formData.personalData}
          education={formData.education}
          experience={formData.experience}
          languages={formData.languages}
          skills={formData.skills}
        />
      )}
      <div className='mt-4 no-print' >
        <TogglePreviewButton
          showPreview={showPreview}
          onClick={togglePreview}
        />
        <ClearButton onClick={handleClear} />
        {showPreview && <DownloadPdfButton onClick={handleDownloadPdf} />}
      </div>
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

function DownloadPdfButton({ onClick }) {
  return (
    <button className="download-pdf-btn" onClick={onClick}>
      Download PDF
    </button>
  );
}
