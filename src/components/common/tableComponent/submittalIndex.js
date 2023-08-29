import React, { useState } from 'react';
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

const fetchData = async (userID, Project, Section, VolumeID) => {
    try {
       //const a ='&userID=117630702&project=C2019-137&section=Section%203&VolumeID=120688278&ContractualDocuments=true&Drainage=true&GIS=true&ReportandForms=true&Roads=true&Survey=true'
       const token = window.sessionStorage.getItem('token') 
       const response = await NetworkManager.getDataWithUrl(token)(
            ProjectUtils.getSubmittoMedatdataURL(userID, Project, Section, VolumeID)
          );
        console.log (response)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

const TableComponent = ({
  data,
  columns,
  totalRecords,
  currentPage = 1,
  setCurrentPage,
  itemsPerPage = 10,
}) => {
  const handleTableChange = (type, { page, sortField, sortOrder, filters }) => {
    console.log("Table changed:", type, page, sortField, sortOrder, filters);
  };
  // const expandRow = {
  //   renderer: row => (
  //     <div class="hoverdiv">
  //     <ul>
  //         <li><i class="pe-7s-exapnd2"></i></li>
  //         <li><i class="pe-7s-menu"></i></li>
  //         <li><i class="pe-7s-note"></i></li>
  //         <li><i class="pe-7s-flag"></i></li>
  //     </ul>

  // </div>
  //   ),
  //   showExpandColumn: true,
  //   expandByColumnOnly: true
  // };

  const [currentPopup, setCurrentPopup] = useState(1);
  
  const renderDropdownActions = (row) => (
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
        <button class="dropdown-item" type="button" onClick={() => {
        //   setShow(!show)
        fetchData('117630702', 'C2019-137', 'Section%203', '120688278')
        //   setReportForm(false)
        setCurrentPopup(2);
          }} id="metadatapage">Submit to Metadata</button>
           <button class="dropdown-item" type="button">Checklist</button>
        <button class="dropdown-item" type="button">Upload</button>
        
       
        </div>
    </div>
  );

  return (
    <>
     <div class="header">
      <div>
          <div class="btn-group">
             <i class="pe-7s-plus f35" data-toggle="dropdown"></i>
              <div class="dropdown-menu dropdown-menu-size">
                    <button class="dropdown-item" type="button">Submit Handover Deliverables</button>
                    <button class="dropdown-item" type="button">Submit DC Deliverables (Partial)</button>
                    <button class="dropdown-item" type="button">Submit DC Deliverables (Full)</button>
               </div>
          </div>
        </div>
    </div>
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
                                        <span>Detailed Design Test 2 </span>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label className="pr-20">PWA RefNum</label>
                                        <span>C2014-135-AQC-DC-SUB-0009</span>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label className="pr-20">Section</label>
                                        <span>Section 1</span>
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
                                                        <th> Existing HO Documents:</th>
                                                        <th> Total:</th>
                                                        <th> Approved:</th>
                                                        <th> Returned / Revised:</th>
                                                        <th> Under review :</th>
                                                        <th> Actions:</th>
                                                        <th> Bulk Status :</th>
                                                    </tr>
                                                    <tr>
                                                        <td>Report and Forms </td>
                                                        <td>Ashghal O&M Approvals </td>
                                                        <td><button type="button" className="btn btn-dribbble">0</button></td>
                                                        <td><button type="button" className="btn btn-dribbble">0</button> </td>
                                                        <td><button type="button" className="btn btn-dribbble">0</button> </td>
                                                        <td><button type="button" className="btn btn-dribbble">0</button> </td>
                                                        <td> <button type="button" className="btn btn-dribbble">0</button></td>
                                                        <td> <button type="button" className="btn btn-dribbble">0</button></td>
                                                        <td> <button type="button" className="btn btn-dribbble">0</button></td>
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
     </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
 </div>)} 
   {currentPopup === 1 && (
    <div style={{ padding: "15px" }}>
      {data?.length ? (
        <BootstrapTable
          keyField="id"
          data={data}
          columns={[
            ...columns,
            {
              text: 'Actions',
            formatter: renderDropdownActions

            // formatter: (cell, row) => {
            //     return (
            //       <div>
                    
            //         {row.ChecklistDC}
            //       </div>
            //     );
            //   },


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
