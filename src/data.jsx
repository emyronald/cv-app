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

const degreeOptions = [
  "BSc",
  "BTech",
  "BA",
  "LLB",
  "MSc",
  "MTech",
  "MA",
  "PhD",
  "Diploma",
  "Other",
];

const years = Array.from(
  { length: 50 },
  (_, i) => new Date().getFullYear() - i
);

const fluencyLevels = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Fluent",
  "Native",
];

export { months, years, degreeOptions, fluencyLevels };
