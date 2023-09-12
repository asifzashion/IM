import React, { useContext, useEffect, useState } from "react";
import ProjectNav from "../components/common/ProjectNav";
import TableComponent from "../components/common/tableComponent/submittalIndex";
import ProjectTable from "../components/common/tableComponent/projectTable";
import { AppContext } from "../contexts/AppContextProvider";
import MyAssignment from "../components/common/layouts/MyAssignment";
import Header from "../../components/common/layouts/Header";
import Footer from "../../components/common/layouts/Footer";
import FixedPlugin from "../components/common/layouts/FixedPlugin";


const Dashboard = () => {
  const [currentProject, setCurrentProject] = useState({});
  const [loading, setLoading] = useState(false);
  const [expandProjects, setExpandProjects] = useState(false);
  const [submittalsData, setSubmittalsData] = useState([]);
  const [showAssignments, setShowAssignments] = useState('MyAssignment');
  const [showProject, setshowProject] = useState(false);

  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [toggle, setToggle] = useState(true);
  const itemsPerPage = 10;
  const columns = React.useMemo(
    () => [
     
      {
        dataField: "PWARefNumber",
        text: "PWA Ref Number",
        //sort: true,
        style: {
          width: '16%',
        }
      },
      {
        dadaField: "Subject",
        text: "Subject",
        style: {
          width: '22%',
        },
        //sort: true,
        formatter: (_cell, row) => {
          return <div dangerouslySetInnerHTML={{ __html: row.Subject }} />;
        },
      },

      {
        dataField: "Purpose",
        text: "Purpose",
        //sort: true
      },
      {
        dataField: "Owner",
        text: "Owner",
        //sort: true
      },
      {
        dataField: "Asset",
        text: "Asset",
        //sort: true
      },
      {
        dataField: "Section",
        text: "Section",
        //sort: true,
        formatter: (_cell, row) => {
          return <div dangerouslySetInnerHTML={{ __html: row.Section }} />;
        },
      },
      {
        dataField: "Created Date",
        text: "Created Date",
        style: {
          width: '8%',
        },
        //sort: true
      },
      {
        dataField: "Status",
        text: "Status",
        //sort: true
      },
    ],
    []
  );


  // const handletoggle =(()=>{
  //   setToggle(!toggle)
  // }
  // )
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

  // useEffect(() => {
  //   setShowAssignments('MyAssignment');
  // }, []);


  const handleProjectMenuClick = async (project, type) => {
    setShowAssignments(type);
    if (type === "Submittals") {
      setCurrentProject(project);
      setCurrentPage(1);
    }
  };
  
  const handleProjectClick = async (project, type) => {
    setShowAssignments('Project');
    const token = window.sessionStorage.getItem('token')
    const email = window.sessionStorage.getItem('email')
    if (token) {
      await getProjects(token, email);
    }
    setCurrentProject(project);
    setCurrentPage(1);
  };

  const getSubmittalsData = async (project) => {
    setLoading(true);
    const token = window.sessionStorage.getItem('token')

    if(token){
    setSubmittalsData([]);
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
  }
  };
    
    
  const handleAssignmentClick = () => {
    setShowAssignments('MyAssignment');
  }



  // const handleSideBarClick = () => {
  //   document.body.classList.toggle("sidebar-mini");
  // };

  return (
    <div className="wrapper">
      <div  className="sidebar"  data-color="purple" style={{ backgroundImage: `url("../img/sidebar-5.jpg")` }}>
        <div className="logo">
          <a href="#" class="simple-text logo-mini">IM</a>
          <a href="#" className="simple-text logo-normal"><img src="../img/ashghal.png" /></a> 
        </div>
        <div className="sidebar-wrapper">
        <div className="sidebarsearch">

        <div class="input-icons">
                <i class="pe-7s-search nav-search"></i>
                <input class="input-field" type="text" placeholder="Password" />
            </div>

        </div>
          <ul className="nav">
            <li className="active" key={"MyAssignments"}>
            <a onClick={handleAssignmentClick}><i className="pe-7s-note2"></i>
              <p>My Assignments</p>
            </a>
          </li>
            <li>
              {/* <a  onClick={handleProjectClick}> */}
              <a onClick={() => setExpandProjects(!expandProjects)}>
                <i className="pe-7s-news-paper"></i>
                <p> Projects<b className="caret"></b></p>
              </a>
              <div className={`collapse ${expandProjects ? "" : "show"}`} id="projects">
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
      <Header />
        <div className="main-content im-scrollbar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="toolbar"></div>
                  {showAssignments === 'MyAssignment' && <MyAssignment setLoading={setLoading} />}
                  {showAssignments === 'Project' && 
                  <ProjectTable 
                  keyField="PWARefNumber"
                  data={submittalsData}
                  columns={columns}
                  totalRecords={totalRecords}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  setCurrentPage={setCurrentPage}
                  
                  />}
                  {showAssignments === 'Submittals' && 
                  <TableComponent
                  keyField="PWARefNumber"
                  data={submittalsData}
                  columns={columns}
                  totalRecords={totalRecords}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  setCurrentPage={setCurrentPage}
                />
                  }

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
      <Footer />
    </div>
  );
};

export default Dashboard;
