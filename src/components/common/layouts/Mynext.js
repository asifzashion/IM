import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../contexts/AppContextProvider";
import TableComponent from "../tableComponent";
import ProjectUtils from "../../../utilities/utils";

const Mynext = ({MetadataClose}) => {
  const [iframeLink, setIframeLink] = useState("");

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
    <>
    <div style={{ paddingTop: "10px" }}>
    <div className="im_detail fullscreen">
                                    <button onClick={MetadataClose}>close2</button>
        <button type="button" className="close" id="closematadata" >close4</button>
                                <h3 className="text_23">DCU forms</h3>
                                <div className="header_back_cpd_dtl">
                                    <div className="alert alert-danger">
                                        <span>Make sure to upload the documents to the appropriate folders.Update: Please download the latest release guide to find the updated procedures of linking XREFs, uploading supported pdf drawing files <a className="linkwhte" id="Guidepdf" target="_blank" href="../../assets/img/sample.pdf">Release Guide</a> 
                                            </span>
                                    </div>
                                </div>
                <div className="row readyonlyheader">
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
                                                                        <div class="dropdown-item uploadbtn2">Upload frrom Local Computer<input type="file" name="file"/></div>
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
 </div>
    
    </div>

    </>
  );
};

export default Mynext;
