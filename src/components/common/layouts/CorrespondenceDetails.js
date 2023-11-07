import { useState } from "react";


const CorresDetails = ({onButtonClick}) => {

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
          <div className="corspnt_item">
                                    <div className="acdn_open_header">
                                        <div className="icon_wrapper">
                                            <div className="icon_typ icon_typ_001">
                                                <i className="pe-7s-note2"></i>
                                            </div>
                                        </div>
                                        <p className="title_001">Request Details</p>
                                    </div>
                                    <div className="corres_data_area">
                                        <div className="content">
                                            <form method="#" action="#">
                                                <div className="form-group">
                                                    <label>To Department</label>
                                                    <input type="text" placeholder="To Department" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Subject</label>
                                                    <input type="text" placeholder="Subject" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>External Ref #</label>
                                                    <input type="text" placeholder="External Ref #" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Purpose</label>
                                                    <input type="text" placeholder="Purpose" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Project</label>
                                                    <input type="text" placeholder="Project" className="form-control" />
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-default btn-simple" data-dismiss="modal">Link</button>
                                    <button type="button" onClick={onButtonClick} className="btn btn-info btn-fill btn-wd me-2">Create</button>
                                </div>
        </div>
        {/* <div class="im_detail2" style={{ display: display ? "none" : "" }}>
        </div> */}
      </div>
    </div>
  );
};
export default CorresDetails;
