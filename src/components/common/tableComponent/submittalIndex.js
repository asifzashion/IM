import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from "react-bootstrap-table2-paginator";
import CreateSubmittal from '../layouts/CreateSubmittal';
import SubmitDCDeliverables from '../layouts/SubmitDCDeliverables';
import CorresDetails from '../layouts/CorrespondenceDetails';
import DCCheckList from '../../SubmitMetaPOP/DCCheckList';
import ReportForm from '../../SubmitMetaPOP/ReportForm';
import ProjectUtils from '../../../utilities/utils';
import NetworkManager from '../../../NetworkManager/NetworkManager';
//import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

//const { SearchBar } = Search;


const TableComponent = ({
  data,
  columns,
  totalRecords,
  currentPage = 1,
  setCurrentPage,
  itemsPerPage = 10,
}) => {
  const handleTableChange = (type, {data, page, sortField, sortOrder, filters }) => {
    //setRowData(data);
    
    console.log("Table changed:", type, page, sortField, sortOrder, filters);
  };

  const defaultSorted = [{
    dataField: 'Status',
    order: 'desc'
  }];
  
  const [currentPopup, setCurrentPopup] = useState(1);
  const [metadataSubmit, setmetadataSubmit] = useState([]);
  //const [rowData, setRowData] = useState([]);
  const [metadataPopup, setmetadataPopup] = useState([]);
  const [showCreateSubmittal, setCreateSubmittal] = useState(false);
  const [showCorresDetails, setCorresDetails] = useState(false);
  const [showSubmitDC, setSubmitDC] = useState(false);
  

  const fetchData = async (userID, Project, Section, VolumeID) => {
    try {
       //const a ='&userID=117630702&project=C2019-137&section=Section%203&VolumeID=120688278&ContractualDocuments=true&Drainage=true&GIS=true&ReportandForms=true&Roads=true&Survey=true'
       const token = window.sessionStorage.getItem('token') 
       const response = await NetworkManager.getDataWithUrl(token)(
            ProjectUtils.getSubmittoMedatdataURL(userID, Project, Section, VolumeID)
          );
        console.log (response)
        setmetadataSubmit(response && response.data && response.data ? response.data : [])
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const openAdvanceUploadWindow = (VolumeID, PWARefNumber, Project, ProjDataID, Section, SubDataID, ProgDataID, DepartmentID, Department, ProjectType, Description, subMenuId, AssetJSON, Role, UIType, userID, OUID, OSID, ProjectID, revisiontypeid, ExistingDCSubMethod, Status) => {
    console.log("from myfunc", VolumeID, PWARefNumber, Project, ProjDataID, Section, SubDataID, ProgDataID, DepartmentID, Department, ProjectType, Description, subMenuId, AssetJSON, Role, UIType, userID, OUID, OSID, ProjectID, revisiontypeid, ExistingDCSubMethod, Status);
    fetchData(userID, Project, Section, VolumeID)
    //   setReportForm(false)
    setCurrentPopup(2);
  };

  const openAdvanceUploadWindowHO = (VolumeID, PWARefNumber, Project, ProjDataID, Section, SubDataID, ProgDataID, DepartmentID, Department, ProjectType, Description, subMenuId, AssetJSON, Role, UIType, userID, OUID, OSID, ProjectID, revisiontypeid, ExistingDCSubMethod, Purpose, Status) => {
    console.log("from myfunc", VolumeID, PWARefNumber, Project, ProjDataID, Section, SubDataID, ProgDataID, DepartmentID, Department, ProjectType, Description, subMenuId, AssetJSON, Role, UIType, userID, OUID, OSID, ProjectID, revisiontypeid, ExistingDCSubMethod, Purpose, Status);
    fetchData(userID, Project, Section, VolumeID)
    //   setReportForm(false)
    setCurrentPopup(2);
  };

  const deleteToDo_HO = (VolumeID, ProgDataID, ProjDataID, Project, DepartmentID, ProjectType, Role) => {
    console.log("from myfunc", VolumeID, ProgDataID, ProjDataID, Project, DepartmentID, ProjectType, Role);
    fetchData(userID, Project, Section, VolumeID)
    //   setReportForm(false)
    setCurrentPopup(2);
  };

  const handleCreateSubmittal =() =>{

    setCreateSubmittal(true)
    setCurrentPopup(false);
    setCreateSubmittal(false)
  }

  const handleSubmitDC =() =>{
    setCreateSubmittal(false)
    setSubmitDC(true)
    setCurrentPopup(false);
    setCorresDetails(false)
  }

  const handleHandoverDeliverables =() =>{

    setCorresDetails(true)
    setCreateSubmittal(false)
    setSubmitDC(false)
    setCurrentPopup(false);
  }

  useEffect(() => {
    window.openAdvanceUploadWindow = openAdvanceUploadWindow;
    window.openAdvanceUploadWindowHO = openAdvanceUploadWindowHO;
    window.deleteToDo_HO = deleteToDo_HO;


    return () => {
      window.openAdvanceUploadWindow = null;
      window.openAdvanceUploadWindowHO = null;

    };
  }, []);

  const replaceIconWithText = (htmlContent, classNameToRemove,name) => {
    // Define a regular expression pattern dynamically
    const pattern = new RegExp(`<i\\s+class=['"]${classNameToRemove}['"]><\\/i>`, 'g');
  
    // Replace the matching <i> element with the string "name"
    const modifiedHtml = htmlContent && htmlContent.replace(
      pattern,
      name
    );
  
    return modifiedHtml;
  };

  const renderDropdownActions = (cell, row) => (
                  
                  <div className="dropdown">
                    {/* <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id={`dropdown-${'hh'}`}
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Actions
                    </button> */}
                    <i className="pe-7s-more btn-secondary dropdown-toggle"
                      type="button"
                      id={`dropdown-${'hh'}`}
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"></i>
                    <div className="dropdown-menu" aria-labelledby={`dropdown-${'ff'}`}>    
              {row.Status === "Draft" ? (
                        <button className="dropdown-item" onClick={() => {
                        setmetadataPopup(row);
                        }} dangerouslySetInnerHTML={{ __html: replaceIconWithText(row.ChecklistDC, 'fa fa-calendar-check-o fontsize20', 'Submit to Metadata') }} />
                      ) : null}

              {row.Status === "Draft" ? (
                        <button className="dropdown-item" onClick={() => {
                        setmetadataPopup(row);
                        }} dangerouslySetInnerHTML={{ __html: replaceIconWithText(row.Audit, 'fa fa-info-circle fontsize20', 'Audit') }} />
                      ) : null}
                      
              {row.Status === "Draft" ? (
                        <button className="dropdown-item" onClick={() => {
                        setmetadataPopup(row);
                        }} dangerouslySetInnerHTML={{ __html: replaceIconWithText(row.Checklist, 'fa fa-calendar-check-o fontsize20', 'Checklist') }} />
                      ) : null} 

              {row.Status === "Draft" ? (
                        <button className="dropdown-item" onClick={() => {
                        setmetadataPopup(row);
                        }} dangerouslySetInnerHTML={{ __html: replaceIconWithText(row.EditDetails, 'fa fa-pencil fontsize20', 'EditDetails') }} />
                      ) : null} 

              {row.Status === "Draft" ? (
                        <button className="dropdown-item" onClick={() => {
                        setmetadataPopup(row);
                        }} dangerouslySetInnerHTML={{ __html: replaceIconWithText(row.Cancel, 'fa fa-trash fontsize20', 'Cancel') }} />
                      ) : null} 


              {row.Status === "Submitted" ? (
                        <button className="dropdown-item" onClick={() => {
                        setmetadataPopup(row);
                        }} dangerouslySetInnerHTML={{ __html: replaceIconWithText(row.Audit, 'fa fa-info-circle fontsize20', 'Audit') }} />
                      ) : null}

              {row.Status === "Submitted" ? (
                        <button className="dropdown-item" onClick={() => {
                        setmetadataPopup(row);
                        }} dangerouslySetInnerHTML={{ __html: replaceIconWithText(row.Checklist, 'fa fa-calendar-check-o fontsize20', 'Checklist') }} />
                      ) : null}

                    
              {row.Status === "Completed" ? (
                        <button className="dropdown-item" onClick={() => {
                        setmetadataPopup(row);
                        }} dangerouslySetInnerHTML={{ __html: replaceIconWithText(row.Audit, 'fa fa-info-circle fontsize20', 'Audit') }} />
                      ) : null}

              {row.Status === "Completed" ? (
                        <button className="dropdown-item" onClick={() => {
                        setmetadataPopup(row);
                        }} dangerouslySetInnerHTML={{ __html: replaceIconWithText(row.Checklist, 'fa fa-calendar-check-o fontsize20', 'Checklist') }} />
                      ) : null}


              {row.Status === "Returned to Contractor" ? (
                        <button className="dropdown-item" onClick={() => {
                        setmetadataPopup(row);
                        }} dangerouslySetInnerHTML={{ __html: replaceIconWithText(row.ChecklistDC, 'fa fa-calendar-check-o fontsize20', 'Submit to Metadata') }} />
                      ) : null}

              {row.Status === "Returned to Contractor" ? (
                        <button className="dropdown-item" onClick={() => {
                        setmetadataPopup(row);
                        }} dangerouslySetInnerHTML={{ __html: replaceIconWithText(row.Audit, 'fa fa-info-circle fontsize20', 'Audit') }} />
                      ) : null}
                      
              {row.Status === "Returned to Contractor" ? (
                        <button className="dropdown-item" onClick={() => {
                        setmetadataPopup(row);
                        }} dangerouslySetInnerHTML={{ __html: replaceIconWithText(row.Checklist, 'fa fa-calendar-check-o fontsize20', 'Checklist') }} />
                      ) : null} 

              {row.Status === "Returned to Contractor" ? (
                        <button className="dropdown-item" onClick={() => {
                        setmetadataPopup(row);
                        }} dangerouslySetInnerHTML={{ __html: replaceIconWithText(row.EditDetails, 'fa fa-pencil fontsize20', 'EditDetails') }} />
                      ) : null} 

                      
                  </div> 


    </div> 
    
  );

  return (
    <>

{ showCreateSubmittal ? <CreateSubmittal /> : null}
{showSubmitDC ? <SubmitDCDeliverables data={data} onButtonClick={() => {
  setSubmitDC(false)
  setCurrentPopup(1)
  
  }  } /> : null}
{showCorresDetails ? <CorresDetails onButtonClick={() => {
  setCorresDetails(false)
  setCurrentPopup(1)
  
  }  } /> : null}
   
    {currentPopup === 3 && <ReportForm metadataSubmit={metadataSubmit} metadataPopup={metadataPopup} onButtonClick={() =>  setCurrentPopup(2)} onReportFormClick={() =>  setCurrentPopup(2)} />}

    {currentPopup === 2 && <DCCheckList metadataSubmit={metadataSubmit} metadataPopup={metadataPopup} onButtonClick={() =>  setCurrentPopup(1)} onReportFormClick={() =>  setCurrentPopup(3)} /> } 
   {currentPopup === 1 && (
    <div style={{ padding: "15px" }}>
        <div className="header" style={{paddingBottom :"10px", paddingTop :"0" }}>

          <div>
              <div className="btn-group">
                <i className="pe-7s-plus f35" data-toggle="dropdown"></i>
                  <div className="dropdown-menu dropdown-menu-size">
                        <button className="dropdown-item" onClick={handleHandoverDeliverables} type="button">Submit Handover Deliverables</button>
                        <button className="dropdown-item" onClick={handleSubmitDC} type="button">Submit DC Deliverables (Partial)</button>
                        <button class="dropdown-item" onClick={handleCreateSubmittal} type="button">Submit DC Deliverables (Full)</button>
                  </div>
              </div>

            </div>
            <h3 style={{ marginBottom: "20px", marginLeft: "10px" }}>My Submittal</h3>

            {/* <SearchBar { ...data.searchProps } /> */}
        </div>
        
      {data?.length ? (
        // <ToolkitProvider
        // keyField="id"
        // data={data}
        // columns={ columns }
        // search
        //   >
 
        <BootstrapTable 
        
          keyField="id"
          data={data}
          sort={ { dataField: 'Status', order: 'desc' } }
          columns={[
            ...columns,
            {
              text: 'Actions',
          
            formatter: (cell, row) => renderDropdownActions(cell, row)
            }
          ]}
          //defaultSortDirection="asc"
          remote={false}
          onTableChange={handleTableChange}
          defaultSorted={ defaultSorted } 
          pagination={paginationFactory({
            page: currentPage,
            sizePerPage: itemsPerPage,
            // hideSizePerPage: true,
            totalSize: totalRecords,
            onPageChange: (page) => setCurrentPage(page),
            
          })}
          />
          // </ToolkitProvider>
      ) : null}
      
    </div>)
}
    </>
  );
};


export default TableComponent;
