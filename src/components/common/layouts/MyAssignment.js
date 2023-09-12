import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../contexts/AppContextProvider";
import TableComponent from "../tableComponent";
import ProjectUtils from "../../../utilities/utils";
const MyAssignment = ({ setLoading }) => {
  const [iframeLink, setIframeLink] = useState("");
  const [type, setType] = useState("&new=true");
  const [searchText, setSearchText] = useState("");
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const {
    state: { emaildid, token, assignments, otdsticket },
    actions: { getAssignmentsNew },
  } = useContext(AppContext).auth;

  useEffect(() => {
    loadAssignmentData();
  }, [token, type, currentPage, searchText]);

  const handleTypeChange = (str) => {
    setType(str);
    setCurrentPage(1);
    setTotalRecords(0);
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

  const getLinkForTable = (row) => {
    const payload = extractTaskParams(row);
    const openTaskWindow = () => {
      console.log(payload);
      if (payload.length !== 3) return ""; 
      const url = ProjectUtils.getMyassignmentData(payload,otdsticket)
      return url;
    };
    const tempelement = document.createElement("div");
    tempelement.innerHTML = row;
    return openTaskWindow() ? (
      <a
        onClick={(e) => {
          e.stopPropagation();
          setIframeLink(openTaskWindow());
        }}
      >
        {tempelement?.textContent}
      </a>
    ) : (
      <div>{tempelement.textContent}</div>
    );
  };

  const loadAssignmentData = async () => {
    const token = window.sessionStorage.getItem('token')
    const payload = searchText
      ? type + `&columns[0]&columns[1][search][value]=${searchText}`
      : type;
    if (token) {
      setLoading(true);
      const startIndex = (currentPage - 1) * itemsPerPage;
      try {
        const response = await getAssignmentsNew(
          token,
          payload,
          emaildid,
          currentPage,
          startIndex,
          itemsPerPage
        );
        setLoading(false);
        if (response?.recordsTotal) {
          setTotalRecords(response.recordsTotal);
        }
      } catch (error) {
        setLoading(false);
        return error;
      }
    }
  };

  const columns = [
    {
      dataField: "pwn",
      text: "PWA Ref Number",
      formatter: (_cell, row) => getLinkForTable(row.pwn),
    },
    {
      dataField: "subj",
      text: "Subject",
      formatter: (_cell, row) => (
        <div dangerouslySetInnerHTML={{ __html: row.subj }} />
      ),
    },
    {
      dataField: "cont",
      text: "Contract Number",
    },
    {
      dataField: "prjid",
      text: "Project ID",
    },
    {
      dataField: "asigdate",
      text: "Received Date",
      
      cell: (row) => {
        return <div dangerouslySetInnerHTML={{ __html: row.asigdate }} />;
      },
    },
  ];

  const showBtnStatus = (str) => {
    return type === str
      ? "btn btn-default btn-fill btn-wd me-2"
      : "btn btn-info btn-fill btn-wd me-2";
  };

  const getCount = (str) => {
    return type === str ? "(" + totalRecords + ")" : null;
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
      
      {/* <h3>My Assignments</h3> */}
      <div className="myassign_header" style={{ display: "flex", margin: "0px 10px 10px 10px" }}>
        <button
          style={{ marginRight: 10 }}
          className={showBtnStatus("&new=true")}
          onClick={() => handleTypeChange("&new=true")}
        >
          New {getCount("&new=true")}
        </button>
        <button
          style={{ marginRight: 10 }}
          className={showBtnStatus("&inprogress=true")}
          onClick={() => handleTypeChange("&inprogress=true")}
        >
          InProgress {getCount("&inprogress-=true")}
        </button>
        <button
          style={{ marginRight: 10 }}
          className={showBtnStatus("&completed=true")}
          onClick={() => handleTypeChange("&completed=true")}
        >
          Completed {getCount("&completed=true")}
        </button>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder="Search..."
          className="form-control searchproject"
          style={{ maxWidth: 400 }}
        />
      </div>
      <TableComponent
        columns={columns}
        data={assignments || []}
        totalRecords={totalRecords}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>

    
  );
};

export default MyAssignment;
