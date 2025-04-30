import React from "react";

export const Skills = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="skills">
      <h3>Skills</h3>
      <ul>
        {/* Use the map method to get each skill in the array. */}
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
export default Skills;
