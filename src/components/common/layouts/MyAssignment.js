import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../contexts/AppContextProvider";
import TableComponent from "../tableComponent";
import ProjectUtils from "../../../utilities/utils";
const MyAssignment = ({ setLoading }) => {
  const [iframeLink, setIframeLink] = useState("");
  const [type, setType] = useState("&New=true");
  const [searchText, setSearchText] = useState("");
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCountRecords, setCountRecords] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Set your desired items per page
  const [showRemote, setRemote] = useState(true);

  //const [totalRecords, setTotalRecords] = useState(0);

  //const itemsPerPage = 10;
  

  const {
    state: { token, assignments, otdsticke, assignmentsCount },
    actions: { getAssignmentsNew, getAssignmentsCountNew },
  } = useContext(AppContext).auth;

  useEffect(() => {
    loadAssignmentData();
  }, [type, currentPage, itemsPerPage, searchText]);

  const handleTypeChange = (str) => {
    setType(str);
    setCurrentPage(1);
    setTotalRecords(0);
    setRemote(false);
  };

  const extractTaskParams = (str) => {
    const start = str.indexOf("(");
    const end = str.lastIndexOf(")");
    const paramsString = str.substring(start + 1, end);

    const params = paramsString
      .split(",")
      .map((param) => parseInt(param.trim(), 10));

    return params;
  };
  
  const fetchData = async (type, page, sortField, sortOrder, filters) => {

    console.log("fetchData", type, page, sortField, sortOrder, filters);
    loadAssignmentData(sortOrder);

  }
  const loadAssignmentData = async (sortOrder = '') => {
    const token = window.sessionStorage.getItem('token')
    const payload = searchText
      ? type + `&columns[0]&columns[1][search][value]=${searchText}`
      : type;
    if (token) {
      setLoading(true);
     
      //const startIndex = (currentPage - 1) * itemsPerPage;
      const startIndex = currentPage;
      try {
        const [assignmentDataResponse, assignmentsCountResponse] = await Promise.all([
          getAssignmentsNew(token, payload, currentPage, startIndex, itemsPerPage, searchText, sortOrder),
          getAssignmentsCountNew(token),
        ]);
        
        setLoading(false);
        if (assignmentDataResponse?.recordsTotal) {
          setTotalRecords(assignmentDataResponse.recordsTotal);
        }
        if (assignmentsCountResponse) {
          setCountRecords(assignmentsCountResponse.data[0]?.Count);
        }
        
      } catch (error) {
        setLoading(false);
        return error;
      }
    }
  };


  const columns = [
    {
      dataField: "PwaRefNumber",
      text: "PWA Ref Number",
      sort: true,
      style: { width: '20%' },
     
      formatter: (_cell, row) => getLinkForTable(row),
    },
    {
      dataField: "subject",
      text: "Subject",
      sort: true,
      style: { width: '30%' },
      
      // formatter: (_cell, row) => (
      //   <div dangerouslySetInnerHTML={{ __html: row.subj }} />
      // ),
    },
    {
      dataField: "ContractNumber",
      text: "Contract Number",
      sort: true,
    },
    {
      dataField: "projectcode",
      text: "Project ID",
      sort: true,
    },
    {
      dataField: "ReceivedDate",
      text: "Received Date",
      sort: true,
      
      // cell: (row) => {
      //   return <div dangerouslySetInnerHTML={{ __html: row.asigdate }} />;
      // },
    },
  ];

  const showBtnStatus = (str) => {
    return type === str
      ? "btn btn-default mr-10 btn-fill btn-wd me-2"
      : "btn btn-info btn-fill mr-10 btn-wd me-2";
  };

  const getCount = (str) => {
    return type === str ? "(" + totalRecords + ")" : totalRecords;

  };

  // TODO we need to remove style and add inbuild css classes.

  return iframeLink ? (
    <>
      <button onClick={() => setIframeLink("")}>Close</button>
      <iframe
        src={iframeLink}
        sandbox="allow-same-origin"
        style={{ height: "75vh", width: "100%" }}
        allowFullScreen
      />
    </>
  ) : (
    <div style={{ padding: "15px" }}>
      
      <h3 style={{ marginBottom: "20px", marginLeft: "10px" }}>My Assignments</h3>
      <div className="myassign_header" style={{ display: "flex", margin: "0px 10px 10px 10px" }}>
        <button className={showBtnStatus("&New=true")} onClick={() => {
          setRemote(false)
        handleTypeChange("&New=true")}}>
          {/* New {showCountRecords}   */}
          New {getCount("&New=true")}
        </button>
        <button className={showBtnStatus("&Inprogress=true")} onClick={() => handleTypeChange("&Inprogress=true")}>
          InProgress {getCount("&Inprogress-=true")}
        </button>
        <button className={showBtnStatus("&Completed=true")} onClick={() => handleTypeChange("&Completed=true")}>
          Completed {getCount("&Completed=true")}
        </button>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder="Search..."
          className="form-control searchproject"
          style={{ maxWidth: 300 }}
        />
      </div>

      
      <TableComponent
        columns={columns}
        data={assignments || []}
        totalRecords={totalRecords}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        setCurrentPage={setCurrentPage}
        fetchData={fetchData}
        showRemote={showRemote}

      />
    </div>

    
  );
};

export default MyAssignment;
