import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Mynext from "../../common/layouts/Mynext"
import IframeComponent from '../iframe/IframeComponent';



// import "bootstrap/dist/css/bootstrap.min.css";

// const ActionButtons = ({ row }) => (
//   <div>
//     <button className="btn btn-primary btn-sm mr-2">Edit</button>
//     <button className="btn btn-danger btn-sm">Delete</button>
//   </div>
// );


const TableComponent = ({
  data,
  columns,
  totalRecords,
  currentPage = 1,
  setCurrentPage,
  itemsPerPage = 10,
  setItemsPerPage,
  fetchData,
  showRemote,
  setMyAssignmentData,
  setVolumeID
  
}) => {
  const handleTableChange = (type, { page, sortField, sortOrder, filters }) => {
    console.log("Table changed:", type, page, sortField, sortOrder, filters);
    fetchData(type, page, sortField, sortOrder, filters);
    setRemote(false);
    
  };

 console.log(showRemote);

  const handleSizePerPageChange = (sizePerPage) => {
    // Update the itemsPerPage state
    setItemsPerPage(sizePerPage);

    // Reset the currentPage to 1 when changing items per page
    setCurrentPage(1);
  };
  const [selectedRow, setSelectedRow] = useState(null);
  const [showDiv, setshowDiv] = useState(false);
  const [show, setShow] = useState(false);
  const [showTaskpopup, setTaskpopup] = useState(false);
  const [showIframepopup, setIframepopup] = useState(null);
  const [ShowRemote, setRemote] = useState(true);
  const [showMyAssignmentAudit, setMyAssignmentAudit] = useState(false);


  const handleSubmitAudit =(VolumeID) =>{
    setVolumeID(VolumeID)
    setMyAssignmentAudit(true)
    setMyAssignmentData(false)
  }


  const defaultSorted = [{
    dataField: 'Receiveddate',
    order: 'desc'
  }];

  const renderDropdownActions = (row) => (
    <div className="dropdown">
 
      <i className="pe-7s-more btn-secondary dropdown-toggle"
        type="button"
        id={`dropdown-${'hh'}`}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"></i>
      
      <div className="dropdown-menu" aria-labelledby={`dropdown-${'ff'}`}>
        {/* <button class="dropdown-item" onClick={handleSubmitAudit} type="button">Audit</button> */}
        <button class="dropdown-item" onClick={() => handleSubmitAudit(row.VolumeID)} type="button">
  Audit
</button>        
{/* <button class="dropdown-item" type="button">Properties</button> */}
        </div>
    </div>
  );

  const handlenextbtn = () => {
    setshowDiv(true);
}
const firstColumnFormatter = (cell, row, rowIndex, columnIndex) => {
  // Customize the formatter for the first column to make it clickable
  return (
    // <a
    //   href="#"
    //   onClick={(e) => {
    //     e.preventDefault();
    //     setTaskpopup(true)
    //     setIframepopup(row)
    //   }}
    // >
    //   {cell}
    // </a>

row.pwn == 0 ? 
cell
 :
<a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setTaskpopup(true)
        setIframepopup(row)
      }}
    >
      {cell}
    </a>

  );
};

const firstColumn = {
  dataField: 'PwaRefNumber',
  text: 'Pwa Ref Number',
  sort:true,
  formatter: firstColumnFormatter,
};

  const baseUrl = 'https://tempouat.ashghal.gov.qa/otcs/llisapi.dll/app/processes/';
  const token = typeof window !== 'undefined' && window.sessionStorage && window.sessionStorage.getItem('OTDSToken');
  //const iframeUrl = `https://www.dummywebsite.com/`;
  var iframeUrl ='';
  if(showIframepopup && showIframepopup.VolumeID){
    const nextUrl = encodeURIComponent (`/otcs/llisapi.dll?func=ll&objId=${showIframepopup.MYID}&objAction=RunReport`);
       iframeUrl = `${baseUrl}${showIframepopup.VolumeID}/${showIframepopup.Subworkid}/${showIframepopup.TaskID}?otdsticket=${token}&nexturl=${nextUrl}`;
  }
    console.log(showIframepopup);
  return (
    <>  
     {showTaskpopup ?  <div className="full-iframeparent">
      {/* <iframe className="full-iframe" id="folderBroswerFrame" allowtransparency="true" href="#" src="https://tempouat.ashghal.gov.qa/otcs/llisapi.dll/app/processes/124107359/124107359/4"></iframe> */}
      <IframeComponent
        src={iframeUrl}
        width="600"
        height="400"
        
      />
      </div> : null}
    {show ?  <Mynext /> : null}
  
    <div className="m-3">
      {data?.length ? (
        <BootstrapTable
          keyField="id"
          data={data}
          sort={{ dataField: 'PwaRefNumber', order: 'asc' }}
          columns={[
            firstColumn, // Include the clickable first column
            ...columns.slice(1), // Exclude the first column from the rest of the columns
            {
              text: 'Actions',
              formatter: (cell, row) => renderDropdownActions(row),
            },
          ]}
          remote={showRemote}
          onTableChange={handleTableChange}
          defaultSorted={ defaultSorted }
          pagination={paginationFactory({
            page: currentPage,
            sizePerPage: itemsPerPage,
            totalSize: totalRecords,
            onPageChange: (page) => setCurrentPage(page),
            onSizePerPageChange: handleSizePerPageChange,
          })}
        />
      ) : null}
    </div>
    </>
  );
};

export default TableComponent;
