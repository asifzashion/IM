import React, { useState,useEffect,useContext } from "react";
import { AppContext } from "../../../contexts/AppContextProvider";
import TableComponent from "../tableComponent";

const MyAssignment = ({setLoading}) => {

    const [type,setType] = useState("&new=true");

    const columns = React.useMemo(
        () => [
          {
            accessorKey: "pwn",
            id: "pwn",
            header: () => <span>PWA Ref Number</span>,
            //cell: (row) => <span>{row.pwn}</span>,  
            cell: (row) => {
                return <div dangerouslySetInnerHTML={{ __html: row.pwn }} />;
              },    
          },
          {
            accessorKey: "subj",
            id: "subj",
            header: () => <span>Subject</span>,
            //cell: (row) => <span>{row.subj}</span>,
            cell: (row) => {
                return <div dangerouslySetInnerHTML={{ __html: row.subj }} />;
              },
          },
          {
            accessorKey: "cont",
            id: "cont",
            header: () => <span>Contract Number</span>,
            //cell: (row) => <span>{row.subj}</span>,
            cell: (row) => {
                return <div dangerouslySetInnerHTML={{ __html: row.cont }} />;
              },
          },
          {
            accessorKey: "prjid",
            id: "prjid",
            header: () => <span>Project ID</span>,
            //cell: (row) => <span>{row.subj}</span>,
            cell: (row) => {
                return <div dangerouslySetInnerHTML={{ __html: row.prjid }} />;
              },
          },
           {
            accessorKey: "asigdate",
            id: "asigdate",
            header: () => <span>Received Date</span>,
            //cell: (row) => <span>{row.subj}</span>,
            cell: (row) => {
                return <div dangerouslySetInnerHTML={{ __html: row.asigdate }} />;
              },
          },
         
        ],
        []
      );
    
  
  const {
    state: { emaildid, token,assignments  },
    actions: { getAssignmentsNew },
  } = useContext(AppContext).auth;

  useEffect(() => {
    loadAssignmentData();
  }, [token,type]);

  console.log("assign",assignments);

  const loadAssignmentData = async () => { 
        if (token) {setLoading(true)
          await getAssignmentsNew(token, type, emaildid);
          setLoading(false)
        }   
  };

  return (
    <div>
    {/* <h3>My Assignments</h3> */}
    <button  style={{ marginTop: '15px',marginLeft: '10px',}} onClick={() => setType("&new=true")}>New</button>
    <button style={{ marginLeft: '5px',}} onClick={() => setType("&inprogress=true&wftype=inprogress")}>InProgress</button>
    <button style={{ marginLeft: '5px',}} onClick={() => setType("&completed=true")}>Completed</button>
     <TableComponent columns={columns} data={assignments || []}/>
    </div>
  );
};

export default MyAssignment;
