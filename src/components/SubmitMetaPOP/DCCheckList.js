

import React, { useState, useEffect } from 'react';

function DCCheckList({ metadataSubmit, metadataPopup, onButtonClick, onReportFormClick }) {

  return (
    <div className="im_detail fullscreen">
    <button type="button" className="close closematadata" id="closematadata" onClick={() =>  onButtonClick(1)}><span aria-hidden="true">×</span></button>
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
                                                                    <div class="dropdown-item uploadbtn2" >Upload frrom Local Computer<input  onClick={() =>  onReportFormClick(3)} type="file" name="file"/></div>
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
</div>
  );
}

export default DCCheckList;
