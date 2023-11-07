import { useState } from "react";
import BootstrapTable from 'react-bootstrap-table-next';


const SubmitDCDeliverables = ({onButtonClick, data}) => {

    const columns = [{
        dataField: 'id',
        text: 'Product ID',
        sort: true
      }, {
        dataField: 'name',
        text: 'Product Name',
        sort: true
      }, {
        dataField: 'price',
        text: 'Product Price',
        sort: true
      }];
      
      const defaultSorted = [{
        dataField: 'name',
        order: 'desc'
      }];
      const products = [
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 150 },
        // ...other data
      ];

    const [display, setDisplay] = useState(false);

  return (
    <div>
      <div className="new_edt_cont_wrapper" style={{ display: display ? "block" : "" }}>
     <div className="im_detail" style={{ width: display ? "100%" : "" }}>
                               
                                <button onClick={() => setDisplay((prevDisplay) => !prevDisplay)}  className="corsp_ext_btn"><img src="../../../img/full-screen.svg" /></button>
                                <div className="header_back_cpd_dtl">
                                    <h3 className="text_23">Submit DC Deliverables</h3>
                                </div>
                                <div className="sender_wrapper corspnt_item">
                                    <div className="acdn_open_header">
                                        <div className="icon_wrapper">
                                            <div className="icon_typ icon_typ_001">
                                                <i className="pe-7s-news-paper"></i>
                                            </div>
                                        </div>
                                        <p className="title_001">Project Details</p>
                                    </div>
                                    <div className="corres_data_area">
                                        <div className="corres_table_wrapper">
                                            <table className="sender-table">
                                                <thead>
                                                    <tr>
                                                        <th> Project Code:</th>
                                                        <th> Project Title:</th>
                                                        <th> Contract No:</th>
                                                        <th> Department:</th>
                                                    </tr>
                                                    <tr>
                                                        <td> abs1234</td>
                                                        <td> RPD - Staffing Plan & Timesheet Testing Project</td>
                                                        <td> P/2021/199</td>
                                                        <td> Roads Projects Department (RPD)</td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="corspnt_item">
                                    <div className="acdn_open_header">
                                        <div className="icon_wrapper">
                                            <div className="icon_typ icon_typ_001">
                                                <i className="pe-7s-graph"></i>
                                            </div>
                                        </div>
                                        <p className="title_001">Request Details</p>
                                    </div>
                                    <div className="corres_data_area">
                                       <BootstrapTable
                                        keyField="id"
                                        data={products}
                                        columns={ columns }
                                        defaultSorted={ defaultSorted } 
                                        />
                                    </div>
                                </div>
                                <div style={{textAlign: "right"}}>
                                    <button type="button" onClick={onButtonClick} className="btn btn-info btn-fill btn-wd me-2">Create</button>
                                </div>
                            </div>
                            </div>
    </div>
  );
};
export default SubmitDCDeliverables;
