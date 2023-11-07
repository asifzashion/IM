import { useState } from "react";


const CreateSubmittal = () => {

    const [display, setDisplay] = useState(false);

  return (
    <div>
      <div className="new_edt_cont_wrapper" style={{ display: display ? "block" : "" }}>
        <div class="im_detail" style={{ width: display ? "100%" : "" }}>
          <button onClick={() => setDisplay((prevDisplay) => !prevDisplay)} className="corsp_ext_btn">
            <img src="../../../img/full-screen.svg" />
          </button>
          <h3 class="text_23">Supervision Project</h3>
          <div class="header_back_cpd_dtl">
            <div class="alert alert-danger">
              <span>
                Supervision Contracts Validation for DC Clearance Request:
                Please make sure all related contracts to this Supervision
                Contract are DC approved. For any queries contact
                'PDLMSupport@ashghal.gov.qa'.
              </span>
            </div>
          </div>
          <div class="corspnt_item">
            <div class="acdn_open_header">
              <div class="icon_wrapper">
                <div class="icon_typ icon_typ_001">
                  <i class="pe-7s-note2"></i>
                </div>
              </div>
              <p class="title_001">Request Details</p>
            </div>
            <div class="corres_data_area">
              <div class="corres_table_wrapper">
                <table class="sender-table">
                  <thead>
                    <tr>
                      <th>Contract No:</th>
                      <th>Title:</th>
                      <th>Project Engineer:</th>
                      <th>DC Status:</th>
                    </tr>
                    <tr>
                      <td>
                        <input type="text" class="form-control" />
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
          <div style={{textAlign: "right"}}>
                                    <button type="button" className="btn btn-default btn-simple" data-dismiss="modal">Link</button>
                                    <button type="button" className="btn btn-info btn-fill btn-wd me-2">Create</button>
                                </div>
        </div>
        {/* <div class="im_detail2" style={{ display: display ? "none" : "" }}>
        
        </div> */}
      </div>
    </div>
  );
};
export default CreateSubmittal;
