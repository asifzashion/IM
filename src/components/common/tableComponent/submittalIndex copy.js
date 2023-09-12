import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Mynext from "../layouts/Mynext"
import ProjectUtils from '../../../utilities/utils';
import NetworkManager from '../../../NetworkManager/NetworkManager';
// import "bootstrap/dist/css/bootstrap.min.css";
// const ActionButtons = ({ row }) => (
//   <div>
//     <button className="btn btn-primary btn-sm mr-2">Edit</button>
//     <button className="btn btn-danger btn-sm">Delete</button>
//   </div>
// );

//          window.userID +
//         "&project=" +
//         uploadData.Project +
//         "&section=" +
//         uploadData.Section +
//         "&VolumeID=" +
//         uploadData.VolumeID +
//         uploadData.AssetJSON,



const TableComponent = ({
  data,
  columns,
  totalRecords,
  currentPage = 1,
  setCurrentPage,
  itemsPerPage = 10,
}) => {
  const handleTableChange = (type, {data, page, sortField, sortOrder, filters }) => {
    setRowData(data);
    console.log("Table changed:", type, page, sortField, sortOrder, filters);
  };

  const [currentPopup, setCurrentPopup] = useState(1);
  const [metadataSubmit, setmetadataSubmit] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [metadataPopup, setmetadataPopup] = useState([]);



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

  // const openAdvanceUploadWindow = (abc) =>{

  //   console.log(abc)
  // }

  const openAdvanceUploadWindow = (VolumeID, PWARefNumber, Project, ProjDataID, Section, SubDataID, ProgDataID, DepartmentID, Department, ProjectType, Description, subMenuId, AssetJSON, Role, UIType, userID, OUID, OSID, ProjectID, revisiontypeid, ExistingDCSubMethod, Status) => {
    console.log("from myfunc", VolumeID, PWARefNumber, Project, ProjDataID, Section, SubDataID, ProgDataID, DepartmentID, Department, ProjectType, Description, subMenuId, AssetJSON, Role, UIType, userID, OUID, OSID, ProjectID, revisiontypeid, ExistingDCSubMethod, Status);
    fetchData(userID, Project, Section, VolumeID)
    //   setReportForm(false)
    setCurrentPopup(2);
  };

  useEffect(() => {
    window.openAdvanceUploadWindow = openAdvanceUploadWindow;

    return () => {
      window.openAdvanceUploadWindow = null;
    };
  }, []);

  const replaceIconWithText = (htmlContent, classNameToRemove,name) => {
    // Define a regular expression pattern dynamically
    const pattern = new RegExp(`<i\\s+class=['"]${classNameToRemove}['"]><\\/i>`, 'g');
  
    // Replace the matching <i> element with the string "name"
    const modifiedHtml = htmlContent.replace(
      pattern,
      name
    );
  
    return modifiedHtml;
  };

  const renderDropdownActions = (cell, row) => (
    
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id={`dropdown-${'hh'}`}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Actions
      </button>
      
      <div className="dropdown-menu" aria-labelledby={`dropdown-${'ff'}`}>
        {/* <button className="dropdown-item" type="button" onClick={() => {
        //   setShow(!show)
        setmetadataPopup(row)
        // fetchData('117630702', row.Project, 'Section%203', row.VolumeID)
        // //   setReportForm(false)
        // setCurrentPopup(2);
          }} id="metadatapage">Submit to Metadata</button>
           <button className="dropdown-item" type="button">Checklist</button>
           */}

       
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
   
    {currentPopup === 3 && (
    <div className="im_detail fullscreen">
                                <button type="button" className="close" id="closematadata2" onClick={() =>  setCurrentPopup(2)}><span aria-hidden="true">×</span></button>
                                <h3 className="text_23">Report and Forms → Ashghal O&M Approvals</h3>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="checkout-wrap col-md-12 col-sm-12 col-xs-12">
                                            <ul className="checkout-bar">
                                                <li className="visited"><a href="#get-started" data-toggle="tab">1. Validate</a></li>
                                                <li className="visited"><a href="#about-you" data-toggle="tab">2. Generate DocNumber</a></li>
                                                <li className="active"><a href="#looking-for" data-toggle="tab">3. Download CSV</a></li>
                                                <li className=""><a href="#">4. Bulk Load</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="corres_data_area">
                                    <div className="corres_table_wrapper">
                                        <table className="sender-table">
                                            <thead>
                                                <tr>
                                                    <th className="bs-checkbox" data-field="state">
                                                        <div className="th-inner "><input name="btSelectAll" type="checkbox" /></div>
                                                        <div className="fht-cell"></div>
                                                    </th>
                                                    <th> Discipline:</th>
                                                    <th> Type:</th>
                                                    <th> Sub Type:</th>
                                                    <th> Existing HO Documents:</th>
                                                    <th> Total:</th>
                                                    <th> Approved:</th>
                                                    <th> Returned / Revised:</th>
                                                    <th> Under review :</th>
                                                    <th> Actions:</th>
                                                    <th> Bulk Status :</th>
                                                </tr>
                                                <tr>
                                                    <td className="bs-checkbox"><input data-index="3" name="btSelectItem" type="checkbox" /></td>
                                                    <td>Report and Forms </td>
                                                    <td>Ashghal O&M Approvals  </td>
                                                    <td><button type="button" className="btn btn-dribbble">0</button></td>
                                                    <td><button type="button" className="btn btn-dribbble">0</button> </td>
                                                    <td><button type="button" className="btn btn-dribbble">0</button> </td>
                                                    <td><button type="button" className="btn btn-dribbble">0</button> </td>
                                                    <td> <button type="button" className="btn btn-dribbble">0</button></td>
                                                    <td> <button type="button" className="btn btn-dribbble">0</button></td>
                                                    <td><button type="button" className="btn btn-dribbble">0</button>
                                                    </td>
                                                    <td> <button type="button" className="btn btn-dribbble">0</button></td>
                                                </tr>
                                                <tr>
                                                    <td className="bs-checkbox"><input data-index="3" name="btSelectItem" type="checkbox" /></td>
                                                    <td>Report and Forms </td>
                                                    <td>Ashghal O&M Approvals </td>
                                                    <td><button type="button" className="btn btn-dribbble">0</button></td>
                                                    <td><button type="button" className="btn btn-dribbble">0</button> </td>
                                                    <td><button type="button" className="btn btn-dribbble">0</button> </td>
                                                    <td><button type="button" className="btn btn-dribbble">0</button> </td>
                                                    <td> <button type="button" className="btn btn-dribbble">0</button></td>
                                                    <td> <button type="button" className="btn btn-dribbble">0</button></td>
                                                    <td> <button type="button" className="btn btn-dribbble">0</button></td>
                                                    <td> <button type="button" className="btn btn-dribbble">0</button></td>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>)}

    {currentPopup === 2 && (
    <div className="im_detail fullscreen">
        <button type="button" className="close closematadata" id="closematadata" onClick={() =>  setCurrentPopup(1)}><span aria-hidden="true">×</span></button>
                                <h3 className="text_23">DCU forms</h3>
                                <div className="header_back_cpd_dtl">
                                    <div className="alert alert-danger">
                                        <span>Make sure to upload the documents to the appropriate folders.Update: Please download the latest release guide to find the updated procedures of linking XREFs, uploading supported pdf drawing files <a className="linkwhte" id="Guidepdf" target="_blank" href="../../assets/img/sample.pdf">Release Guide</a> 
                                            </span>
                                    </div>
                                </div>
                <div className="row">
                                    <div className="form-group col-md-3">
                                        <label className="pr-20">Subject</label>
                                        <span>{metadataPopup.Description}</span>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label className="pr-20">PWA RefNum</label>
                                        <span>{metadataPopup.PWARefNumber}</span>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label className="pr-20">Section</label>
                                        <span>{metadataPopup.SecDescription}</span>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <a href="#" className="pr-20">DC CheckList </a></div>
                                </div>
         <div className="corspnt_item">
                                    <div className="acdn_open_header">
                                        <div className="icon_wrapper">
                                            <div className="icon_typ icon_typ_002">
                                                <i className="pe-7s-check" onclick="demo.showSwal('warning-message-and-cancel')"></i>
                                            </div>
                                        </div>
                                        <div className="icon_wrapper">
                                            <div className="icon_typ icon_typ_001">
                                                <i className="pe-7s-refresh"></i>
                                            </div>
                                        </div>
                                        </div>
                                    <div className="corres_data_area">
                                        <div className="corres_table_wrapper">
                                            <table className="sender-table">
                                                <thead>
                                                    <tr>
                                                        <th> Discipline:</th>
                                                        <th> Type:</th>
                                                        <th> Sub Type:</th>
                                                        <th style={{ textAlign: "center" }}> Existing HO Documents:</th>
                                                        <th style={{ textAlign: "center" }}> Uploaded Documents</th>
                                                        <th style={{ textAlign: "center" }}> Actions</th>
                                                        <th style={{ textAlign: "center" }}>Bulk Status</th>
                                                    </tr>
                                                    {/* {metadataSubmit?.length ? (
        <BootstrapTable
          keyField="id"
          data={metadataSubmit}
          columns={[
            ...columns,
            {
              text: 'Actions',
          
            formatter: (cell, row) => renderDropdownActions(cell, row)
            }
          ]}
          remote={true}
          // onTableChange={handleTableChange}
          // pagination={paginationFactory({
          //   page: currentPage,
          //   sizePerPage: itemsPerPage,
          //   hideSizePerPage: true,
          //   totalSize: totalRecords,
          //   onPageChange: (page) => setCurrentPage(page),
          // })}
        />
      ) : null} */}
      {metadataSubmit.map((s,index) => (
          <tr key={index}>
            <td>{s['Level 1']} </td>
            <td>{s['Level 2']} </td>
            <td>{s['Level 3']}</td>
            <td style={{ textAlign: "center" }}><span className='tablecountspan'>{s['Existing Handover Documents']}</span></td>
            <td style={{ textAlign: "center" }}><span className='tablecountspan'>0</span></td>
                                                        
                                                        <td>
                                                            <div>
                                                                <div className="btn-group">
                                                                    <button type="button" className="btn btn-info btn-fill" data-toggle="dropdown">Metadata</button>
                                                                    <div className="dropdown-menu dropdown-menu-size">
                                                                        <button className="dropdown-item" type="button">Upload frrom Server</button>
                                                                        <div class="dropdown-item uploadbtn2" >Upload frrom Local Computer<input onClick={() => {
                                                                        //   setReportForm(!reportform)
                                                                        //   setShow(false)
                                                                        setCurrentPopup(3);
                                                                          }} type="file" name="file"/></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
          </tr>
      ))}
                                                   
     </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
 </div>)} 
   {currentPopup === 1 && (
    <div style={{ padding: "15px" }}>
        <div className="header" style={{paddingBottom :"10px", paddingTop :"0" }}>
          <div>
              <div className="btn-group">
                <i className="pe-7s-plus f35" data-toggle="dropdown"></i>
                  <div className="dropdown-menu dropdown-menu-size">
                        <button className="dropdown-item" type="button">Submit Handover Deliverables</button>
                        <button className="dropdown-item" type="button">Submit DC Deliverables (Partial)</button>
                        <button class="dropdown-item" type="button">Submit DC Deliverables (Full)</button>
                  </div>
              </div>
            </div>
        </div>
      {data?.length ? (
        <BootstrapTable
          keyField="id"
          data={data}
          columns={[
            ...columns,
            {
              text: 'Actions',
          
            formatter: (cell, row) => renderDropdownActions(cell, row)
            }
          ]}
          remote={true}
          onTableChange={handleTableChange}
          pagination={paginationFactory({
            page: currentPage,
            sizePerPage: itemsPerPage,
            hideSizePerPage: true,
            totalSize: totalRecords,
            onPageChange: (page) => setCurrentPage(page),
          })}
          // expandRow={ expandRow }
        />
      ) : null}
    </div>)
}
    </>
  );
};


export default TableComponent;
