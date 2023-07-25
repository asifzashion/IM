import React, { useContext, useEffect, useState } from "react";
import ProjectNav from "../components/common/ProjectNav";
import TableComponent from "../components/common/tableComponent";
import { AppContext } from "../contexts/AppContextProvider";
import MyAssignment from "../components/common/layouts/MyAssignment";

//import BootstrapTable from 'react-bootstrap-table-2';
//import 'react-bootstrap-table-2/dist/react-bootstrap-table2.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'react-bootstrap';
//import Swal from 'sweetalert2';

//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.min.js';

const Dashboard = () => {
  const [currentProject, setCurrentProject] = useState({});
  const [loading, setLoading] = useState(false);
  const [expandProjects, setExpandProjects] = useState(false);
  const [submittalsData, setSubmittalsData] = useState([]);
  const [showAssignments, setShowAssignments] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const columns = React.useMemo(
    () => [
      {
        dadaField: "Subject",
        text: "Subject",
        formatter: (_cell, row) => {
          return <div dangerouslySetInnerHTML={{ __html: row.Subject }} />;
        },
      },
      {
        dataField: "PWARefNumber",
        text: "#PWA Ref Number",
      },
      {
        dataField: "Purpose",
        text: "Purpose",
      },
      {
        dataField: "Owner",
        text: "Owner",
      },
      {
        dataField: "Asset",
        text: "Asset",
      },
      {
        dataField: "Section",
        text: "Section",
        formatter: (_cell, row) => {
          return <div dangerouslySetInnerHTML={{ __html: row.Section }} />;
        },
      },
      {
        dataField: "CreatedDate",
        text: "Craeted Date",
      },
      {
        dataField: "Status",
        text: "Status",
      },
    ],
    []
  );

  const {
    state: { email, token, projects = [] },
    actions: { getProjects, getSubmittals },
  } = useContext(AppContext).auth;

  React.useEffect(async () => {
    const token = window.sessionStorage.getItem('token')
    const email = window.sessionStorage.getItem('email')
    if (token) {
      await getProjects(token, email);
    }
  }, []);

  useEffect(() => {
    if (currentProject) getSubmittalsData(currentProject);
  }, [currentPage, currentProject]);

  const handleProjectMenuClick = async (project, type) => {
    setShowAssignments(false);
    if (type === "Submittals") {
      setCurrentProject(project);
      setCurrentPage(1);
    }
  };

  const getSubmittalsData = async (project) => {
    setLoading(true);
    setSubmittalsData([]);
    const token = window.sessionStorage.getItem('token')
    const startIndex = (currentPage - 1) * itemsPerPage; (0) * 10;
    const response = await getSubmittals(
      token,
      project.ProjectDataID,
      currentPage,
      startIndex,
      itemsPerPage
    );
    setSubmittalsData(response.data);
    setLoading(false);
    if (response?.recordsTotal) {
      setTotalRecords(response.recordsTotal);
    }
  };

  const handleAssignmentClick = () => {
    setShowAssignments(true);
  };

  const handleSideBarClick = () => {
    document.body.classList.toggle("sidebar-mini");
  };

  return (
    <div className="wrapper">
      <div
        className="sidebar"
        data-color="purple"
        style={{ backgroundImage: `url("../img/sidebar-5.jpg")` }}
      >
        <div className="logo">
          <a href="#" className="simple-text logo-normal">
            Ashghal
          </a>
        </div>
        <div className="sidebar-wrapper ps-container ps-theme-default ps-active-y im-scrollbar">
          <div className="user">
            <div className="info">
              <div className="photo">
                <img src="../img/default-avatar.png" />
              </div>
              <a
                data-toggle="collapse"
                href="#collapseExample"
                className="collapsed"
              >
                <span>
                  User Name
                  <b className="caret"></b>
                </span>
              </a>
              <div className="collapse" id="collapseExample">
                <ul className="nav">
                  <li>
                    <a href="#">
                      <i className="pe-7s-user"></i>
                      <span className="sidebar-normal">My Profile</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="nav">
            {/* <li className="active">
              <a href="">
                <i className="pe-7s-graph"></i>
                <p>Dashboard</p>
              </a>
            </li> */}

            {/* <li>
              <a data-toggle="collapse" href="#formsExamples">
                <i className="pe-7s-note2"></i>
                <p>Single Link</p>
              </a>
            </li> */}
            <li>
              <a
                // data-toggle="collapse"
                // href="#projects"
                onClick={() => setExpandProjects(!expandProjects)}
              >
                <i className="pe-7s-news-paper"></i>
                <p>
                  Projects
                  <b className="caret"></b>
                </p>
              </a>
              <div
                className={`collapse ${expandProjects ? "show" : ""}`}
                id="projects"
              >
                <ProjectNav
                  handleAssignmentClick={handleAssignmentClick}
                  projects={projects}
                  handleProjectMenuClick={handleProjectMenuClick}
                />
              </div>
            </li>
          </ul>
          <div className="ps-scrollbar-x-rail">
            <div className="ps-scrollbar-x"></div>
          </div>
          <div className="ps-scrollbar-y-rail">
            <div className="ps-scrollbar-y"></div>
          </div>
        </div>
      </div>

      <div className="main-panel">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-minimize">
              <button
                id="minimizeSidebar"
                className="btn btn-warning btn-fill btn-round btn-icon"
                onClick={handleSideBarClick}
              >
                <i className="pe-7s-angle-left visible-on-sidebar-regular"></i>
                <i className="pe-7s-angle-right visible-on-sidebar-mini"></i>
              </button>
            </div>
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="bootstrap-table.html#">
                PDLM
              </a>
            </div>
            <div className="collapse navbar-collapse">
              <form
                className="navbar-form navbar-left navbar-search-form"
                role="search"
              >
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-search"></i>
                  </span>
                  <input
                    type="text"
                    value
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="../charts.html">
                    <i className="fa fa-line-chart"></i>
                    <p>Stats</p>
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    href="bootstrap-table.html#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-gavel"></i>
                    <p className="hidden-md hidden-lg">
                      Actions
                      <b className="caret"></b>
                    </p>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="bootstrap-table.html#">Create New Post</a>
                    </li>
                    <li>
                      <a href="bootstrap-table.html#">Manage Something</a>
                    </li>
                    <li>
                      <a href="bootstrap-table.html#">Do Nothing</a>
                    </li>
                    <li>
                      <a href="bootstrap-table.html#">Submit to live</a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="bootstrap-table.html#">Another Action</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="bootstrap-table.html#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-bell-o"></i>
                    <span className="notification">5</span>
                    <p className="hidden-md hidden-lg">
                      Notifications
                      <b className="caret"></b>
                    </p>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="bootstrap-table.html#">Notification 1</a>
                    </li>
                    <li>
                      <a href="bootstrap-table.html#">Notification 2</a>
                    </li>
                    <li>
                      <a href="bootstrap-table.html#">Notification 3</a>
                    </li>
                    <li>
                      <a href="bootstrap-table.html#">Notification 4</a>
                    </li>
                    <li>
                      <a href="bootstrap-table.html#">Another notification</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-with-icons">
                  <a
                    href="bootstrap-table.html#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-list"></i>
                    <p className="hidden-md hidden-lg">
                      More
                      <b className="caret"></b>
                    </p>
                  </a>
                  <ul className="dropdown-menu dropdown-with-icons">
                    <li>
                      <a href="bootstrap-table.html#">
                        <i className="pe-7s-mail"></i> Messages
                      </a>
                    </li>
                    <li>
                      <a href="bootstrap-table.html#">
                        <i className="pe-7s-help1"></i> Help Center
                      </a>
                    </li>
                    <li>
                      <a href="bootstrap-table.html#">
                        <i className="pe-7s-tools"></i> Settings
                      </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="bootstrap-table.html#">
                        <i className="pe-7s-lock"></i> Lock Screen
                      </a>
                    </li>
                    <li>
                      <a href="bootstrap-table.html#" className="text-danger">
                        <i className="pe-7s-close-circle"></i> Log out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="main-content im-scrollbar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="toolbar"></div>
                  {showAssignments ? (
                    <MyAssignment setLoading={setLoading} />
                  ) : (
                    <TableComponent
                      data={submittalsData}
                      columns={columns}
                      totalRecords={totalRecords}
                      currentPage={currentPage}
                      itemsPerPage={itemsPerPage}
                      setCurrentPage={setCurrentPage}
                    />
                  )}
                  {loading && (
                    <div style={{ position: "relative", height: 100 }}>
                      <div className="jvectormap-spinner" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Dashboard;
