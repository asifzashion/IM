import React from "react";
import ProjectNav from "./ProjectNav";

const ParentComponent = () => {
  const handleSubProjectClick = (subProject) => {
    // Handle subproject click logic here
    console.log("Subproject clicked:", subProject);
  };

  const subProjects = [
    {
      Project: "Submittals",
    },
  ];

  // Render ProjectNav and pass handleSubProjectClick and subProjects as props
  return (
    <div>
      <h1>Parent Component</h1>
      <ProjectNav projects={[]} subProjects={subProjects} handleSubProjectClick={handleSubProjectClick} />
    </div>
  );
};

export default ParentComponent;
