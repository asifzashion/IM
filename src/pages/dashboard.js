import React, { useContext, useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const [expandProjects, setExpandProjects] = useState(false);
  const [submittalsData, setSubmittalsData] = useState([]);
  const [showAssignments, setShowAssignments] = useState(false);
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "Subject",
        id: "Subject",
        header: () => <span>Subject</span>,
        //cell: (row) => <span>{row.Subject}</span>,
        cell: (row) => {
          return <div dangerouslySetInnerHTML={{ __html: row.Subject }} />;
        },
        // cell: (info) => {
        //     return <div dangerouslySetInnerHTML={{ __html: info.renderValue() }} />
        // },
      },
      {
        accessorKey: "PWARefNumber",
        id: "PWARefNumber",
        header: () => <span>#PWA Ref Number</span>,
        cell: (row) => <span>{row.PWARefNumber}</span>,
        // cell: (info) => info.getValue(),
      },
      {
        accessorKey: "Purpose",
        id: "Purpose",
        header: () => <span>Purpose</span>,
        cell: (row) => <span>{row.Purpose}</span>,
      },
      {
        accessorKey: "Owner",
        id: "Owner",
        header: () => <span>Stakeholder</span>,
        cell: (row) => <span>{row.Stakeholder}</span>,
      },
      {
        accessorKey: "Asset",
        id: "Asset",
        header: () => <span>Asset</span>,
        cell: (row) => <span>{row.Asset}</span>,
      },
      {
        accessorKey: "Section",
        id: "Section",
        header: () => <span>Section</span>,
        //cell: (row) => <span>{row.Section}</span>,
        cell: (row) => {
          return <div dangerouslySetInnerHTML={{ __html: row.Section }} />;
        },
      },
      {
        accessorKey: "CreatedDate",
        id: "CreatedDate",
        header: () => <span>Craeted Date</span>,
        cell: (row) => <span>{row.CreatedDate}</span>,
      },
      {
        accessorKey: "Status",
        id: "Status",
        header: () => <span>Status</span>,
        cell: (row) => <span>{row.Status}</span>,
      },
    ],
    []
  );

  const {
    state: { email, token, projects = [] },
    actions: { getProjects, getSubmittals },
  } = useContext(AppContext).auth;

  React.useEffect(async () => {
    if (token) {
      await getProjects(token, email);
    }
  }, [token]);

  const handleProjectMenuClick = async (project, type) => {
    setShowAssignments(false);
    if (type === "Submittals") {
      setLoading(true);
      setSubmittalsData([]);
      const response = await getSubmittals(token, project.ProjectDataID);
      console.log("response", response);
      setSubmittalsData(response.data);
      setLoading(false);
    }
  };

  const handleAssignmentClick = () => {
    setShowAssignments(true)
  }

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
        <div class="logo">
          <a href="#" class="simple-text logo-normal">
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

      <div class="main-panel">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-minimize">
              <button
                id="minimizeSidebar"
                class="btn btn-warning btn-fill btn-round btn-icon"
                onClick={handleSideBarClick}
              >
                <i class="fa fa-ellipsis-v visible-on-sidebar-regular"></i>
                <i class="fa fa-navicon visible-on-sidebar-mini"></i>
              </button>
            </div>
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="bootstrap-table.html#">
                PDLM
              </a>
            </div>
            <div class="collapse navbar-collapse">
              <form
                class="navbar-form navbar-left navbar-search-form"
                role="search"
              >
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-search"></i>
                  </span>
                  <input
                    type="text"
                    value
                    class="form-control"
                    placeholder="Search..."
                  />
                </div>
              </form>
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a href="../charts.html">
                    <i class="fa fa-line-chart"></i>
                    <p>Stats</p>
                  </a>
                </li>
                <li class="dropdown">
                  <a
                    href="bootstrap-table.html#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i class="fa fa-gavel"></i>
                    <p class="hidden-md hidden-lg">
                      Actions
                      <b class="caret"></b>
                    </p>
                  </a>
                  <ul class="dropdown-menu">
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
                    <li class="divider"></li>
                    <li>
                      <a href="bootstrap-table.html#">Another Action</a>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a
                    href="bootstrap-table.html#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i class="fa fa-bell-o"></i>
                    <span class="notification">5</span>
                    <p class="hidden-md hidden-lg">
                      Notifications
                      <b class="caret"></b>
                    </p>
                  </a>
                  <ul class="dropdown-menu">
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
                <li class="dropdown dropdown-with-icons">
                  <a
                    href="bootstrap-table.html#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i class="fa fa-list"></i>
                    <p class="hidden-md hidden-lg">
                      More
                      <b class="caret"></b>
                    </p>
                  </a>
                  <ul class="dropdown-menu dropdown-with-icons">
                    <li>
                      <a href="bootstrap-table.html#">
                        <i class="pe-7s-mail"></i> Messages
                      </a>
                    </li>
                    <li>
                      <a href="bootstrap-table.html#">
                        <i class="pe-7s-help1"></i> Help Center
                      </a>
                    </li>
                    <li>
                      <a href="bootstrap-table.html#">
                        <i class="pe-7s-tools"></i> Settings
                      </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="bootstrap-table.html#">
                        <i class="pe-7s-lock"></i> Lock Screen
                      </a>
                    </li>
                    <li>
                      <a href="bootstrap-table.html#" class="text-danger">
                        <i class="pe-7s-close-circle"></i> Log out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="main-content im-scrollbar">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="toolbar"></div>
                 { showAssignments ?<MyAssignment setLoading={setLoading} />
                  :<TableComponent data={submittalsData} columns={columns} />}
                  {loading && (
                    <div style={{ position: "relative", height: 100 }}>
                      <div class="jvectormap-spinner" />
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
