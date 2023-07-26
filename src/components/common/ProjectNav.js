import React, { useState } from "react";
import MyAssignment from "./layouts/MyAssignment";

const ProjectNav = ({ projects, handleProjectMenuClick, handleAssignmentClick }) => {
  const [expandedId, setExpandedId] = useState([]);
  const projectMenus = ["Submittals", "Checklist Form", "Documents"];

  const handleExpanded = (id) => {
    if (id === expandedId) {
      setExpandedId("");
    } else {
      setExpandedId(id);
    }
  };

  return (
    <ul className="nav">
       <li key={"MyAssignments"}>
            <a onClick={handleAssignmentClick}>
              <i className="pe-7s-note2
"></i>
              <p>
               My Assignments
                            </p>
            </a>
          </li>
      {projects.map((project) => {
        return (
          <li key={project.ProjectDataID}>
            <a onClick={() => handleExpanded(project.ProjectDataID)}>
              <i className="pe-7s-wallet"></i>
              <p>
                {project.Project}
                <b className="caret"></b>
              </p>
            </a>

            <div
              className={`collapse ${
                expandedId === project.ProjectDataID ? "show" : ""
              }`}
              id={project.Project}
            >
              {projectMenus && projectMenus.length > 0 && (
                <ul className="nav" style={{ marginLeft: 60 }}>
                  {projectMenus.map((subProject) => (
                    <li key={subProject}>
                       <i className="pe-7s-angle-right"></i>
                      <a
                        onClick={() =>
                          handleProjectMenuClick(project, subProject)
                        }
                      >
                        <span className="sidebar-normal">{subProject}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectNav;
