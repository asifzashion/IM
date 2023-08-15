import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../contexts/AppContextProvider";
import TableComponent from "../tableComponent";
import ProjectUtils from "../../../utilities/utils";

const ReportForms = ({ setLoading }) => {
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
                                <button type="button" className="close" id="closematadata2"><span aria-hidden="true">×</span></button>
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
                            </div>
    </div>

    </>
  );
};

export default ReportForms;
