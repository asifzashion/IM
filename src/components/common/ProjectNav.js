import React, { useState } from "react";
import MyAssignment from "./layouts/MyAssignment";

const ProjectNav = ({ projects, handleProjectMenuClick, handleAssignmentClick }) => {

  const [showAllItems, setShowAllItems] = useState(false);
  const [expandedId, setExpandedId] = useState([]);
  const [isAtive, setinActive] = useState(null);

  const projectMenus = ["Submittals", "Checklist Form", "Documents"];

  const handleExpanded = (id) => {
    if (id === expandedId) {
      setExpandedId("");
    } else {
      setExpandedId(id);
    }
  };
  
  const handleReadMoreClick = () => {
    setShowAllItems(true);
  };
  
  const handleActive = (index) => {
    setinActive(index);
  }

  const visibleItems = showAllItems ? projects : projects.slice(0, 5);
  return (
    <>
    <ul className="nav">
       
      {visibleItems.map((project, index) => {
        return (
          <li onClick={() => handleActive(index)} key={project.ProjectDataID} className={ isAtive === index ? 'active' : ''}>
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
                <ul className="nav submittal" style={{ marginLeft: 0, }}>
                  {projectMenus.map((subProject) => (
                    <li key={subProject}>
                       {/* <i className="pe-7s-notebook"></i> */}
                      <a 
                        onClick={() =>
                          handleProjectMenuClick(project, subProject)
                        }
                      >
                        <span className="sidebar-mini">{subProject[0]}</span>
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

      <ul className="showmore">
      <li>{!showAllItems && (
        <a onClick={handleReadMoreClick}>Show more...</a>
      )}
      </li>
      </ul>
    </>
  );
};

export default ProjectNav;
