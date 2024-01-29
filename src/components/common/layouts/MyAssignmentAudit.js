import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../contexts/AppContextProvider";
import IframeComponent from '../iframe/IframeComponent';



const MyAssignmentAudit = ({showVolumeID,onButtonClick}) => {

  const {
    state: { token, audit, auditDetails },
    actions: { getAuditMyassignment, getAuditDetailsMyassignment },
  } = useContext(AppContext).auth;

    const [display, setDisplay] = useState(false);
    const [showAttachmentpopup, setAttachmentpopup] = useState(false);
    const [showSectionsDetailpopup, setSectionsDetailpopup] = useState(false);
    const [showAttachmentRowdata, setAttachmentRowdata] = useState("");
    const [showSectionsDetailRowdata, setSectionsDetailRowdata] = useState("");





    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const token = window.sessionStorage.getItem('token');
    //       if (token) {
    //         await getAuditMyassignment(token, showVolumeID);
    //         console.log(audit);
    //         await getAuditDetailsMyassignment(token);
    //       }
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //       // Handle error (e.g., show an error message to the user)
    //     }
    //   };
    
    //   fetchData(); // Call the async function immediately
    
    // }, []);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = window.sessionStorage.getItem('token');
          if (token) {
            const result = await getAuditMyassignment(token, showVolumeID);
            if (result) {
              console.log(result);
              const Volumeid = result.data[0].Volumeid;
              const WFExpand = result.data[0].WFExpand;
              const Workflow = result.data[0].Workflow;


              // If getAuditMyassignment is successful, call getAuditDetailsMyassignment
              await getAuditDetailsMyassignment(token, Volumeid, WFExpand, Workflow);
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle error (e.g., show an error message to the user)
        }
      };
    
      fetchData(); // Call the async function immediately
    
    }, []);

    const [isVisible, setIsVisible] = useState(false);
    const [isSectionDetails, setSectionDetails] = useState(false);


    const handleSectiontoggle = () => {
      setSectionDetails(!isSectionDetails);
    };

    const handleToggle = () => {
      setIsVisible(!isVisible);
    };
  
    const baseUrl = 'https://tempouat.ashghal.gov.qa/otcs/llisapi.dll/app/processes/';
    const token2 = typeof window !== 'undefined' && window.sessionStorage && window.sessionStorage.getItem('OTDSToken');
    //const iframeUrl = `https://www.dummywebsite.com/`;
    var iframeUrl ='';
    if(true){
      iframeUrl = `https://tempouat.ashghal.gov.qa/IM2/widgets/folderbrowse.html?folderDataID=${showAttachmentRowdata.Volumeid}`;
      // const nextUrl = encodeURIComponent (`/otcs/llisapi.dll?func=ll&objId=${showIframepopup.MYID}&objAction=RunReport`);
      //    iframeUrl = `${baseUrl}${showIframepopup.VolumeID}/${showIframepopup.Subworkid}/${showIframepopup.TaskID}?otdsticket=${token}&nexturl=${nextUrl}`;
    }
  
    var iframeUrlSectionDetail ='';
    if(isSectionDetails){
      iframeUrlSectionDetail = `https://tempouat.ashghal.gov.qa/IM2/${showSectionsDetailRowdata}`;
    }

  return (
    <div>
       {showAttachmentpopup ?  <div className="full-iframeparent">
       <button type="button" className="close closematadata" id="closematadata2" onClick={() =>  setAttachmentpopup(!showAttachmentpopup)}><span aria-hidden="true">×</span></button>

      <IframeComponent
        src={iframeUrl}
        width="600"
        height="400"
        
      />
      </div> : null}

      {showSectionsDetailpopup ?  <div className="full-iframeparent">
       <button type="button" className="close closematadata" id="closematadata2" onClick={() =>  setAttachmentpopup(!showAttachmentpopup)}><span aria-hidden="true">×</span></button>

      <IframeComponent
        src={iframeUrlSectionDetail}
        width="600"
        height="400"
        
      />
      </div> : null}

      <div className="new_edt_cont_wrapper" style={{ display: display ? "block" : "" }}>
        <div class="im_detail" style={{ width: display ? "100%" : "" }}>
        <button type="button" className="close closematadata" id="closematadata" onClick={() =>  onButtonClick(0)}><span aria-hidden="true">×</span></button>
          <h3 class="text_23">Submit DC Deliverables</h3>
          
          <div class="corspnt_item">
            <div class="acdn_open_header">
              <div class="icon_wrapper">
                <div class="icon_typ icon_typ_001">
                  <i class="pe-7s-note2"></i>
                </div>
              </div>
              <p class="title_001">Export Audit</p>
            </div>
            <div class="corres_data_area">
              <div class="corres_table_wrapper">
                <table class="sender-table">
                  <thead>
                    <tr>
                      <th>PWA Reference Number</th>
                      <th>Creation Date</th>
                      <th>Creator</th>
                      <th>Subject</th>
                      <th>Current Stage</th>
                      <th>Sections Detail</th>
                      <th>Attachments</th>
                      <th>Workflow Audit</th>
                    </tr>
                    <tr>
                    <td>{audit && audit[0].PWAREFNO}</td>
                      <td>{audit && audit[0].CREDATE}</td>
                      <td>{audit && audit[0].CREATOR}</td>
                      <td>{audit && audit[0].SUBJECT}</td>
                      <td>{audit && audit[0].CURRSTAGE}</td>
                      <td onClick={handleSectiontoggle} style={{textAlign: "center"}}>Sections Detail</td>
                      <td style={{textAlign: "center"}}><i class="pe-7s-paperclip"  onClick={(e) => {
        e.preventDefault();
        setAttachmentpopup(true)
        setAttachmentRowdata(audit[0])
      }} style={{color: "#842655", fontSize: "20px", cursor:'pointer'}}></i></td>
                      <td onClick={handleToggle} style={{textAlign: "center"}}><i class="pe-7s-look" style={{color: "#842655", fontSize: "20px", cursor:'pointer'}}></i></td>
                      
                      
                      {/* <td>{audit && audit[0].Workflow}</td> */}
                    
                    
                      {/* {audit &&
                      audit.length > 0 &&
                      audit.map((item) => (
                        <tr key={item.id}>
                          <td>{item.PWAREFNO}</td>
                          <td>{item.CREDATE}</td>
                          <td>{item.CREATOR}</td>
                          <td>{item.SUBJECT}</td>
                          <td>{item.CURRSTAGE}</td>
                          <td>Sections Detail</td>
                          <td>Attachments</td>
                          <td onClick={handleToggle} style={{textAlign: "center"}}><i class="pe-7s-look" style={{color: "#842655", fontSize: "20px", cursor:'pointer'}}></i></td>

                        </tr>
                      ))} */}

                    </tr>
                  </thead>
                </table>
              </div>
            </div>


            {isVisible && <div class="corres_data_area">
              <div class="corres_table_wrapper">
              <h4 class="text_23">ITERATION: 1</h4>
                <table class="sender-table">
                  <thead>
                    <tr>
                      <th style={{width:"17%"}}>Status</th>
                      <th>Role</th>
                      <th style={{width:"21%"}}>User</th>
                      <th style={{width:"12%"}}>Task Received</th>
                      <th style={{width:"12%"}}>Task Open</th>
                      <th style={{width:"12%"}}>Task Complete</th>
                      <th>Due Date</th>
                      <th>Days Taken</th>
                      <th style={{width:"17%"}}>Comments</th>
                      <th>Action</th>
                      <th>Instructions</th>
                      
                    </tr>
                    
                    {auditDetails &&
                      auditDetails.length > 0 &&
                      auditDetails.map((item) => (
                        <tr key={item.id}>
                          <td style={{ color: item.Status === 'Completed' ? 'green' : 'orange' }}>
              {item.Status}
            </td>
                          <td>{item.Role}</td>
                          <td>{item.User}</td>
                          <td>{item.TaskReceived}</td>
                          <td>{item.TaskOpen}</td>
                          <td>{item.TaskComplete}</td>
                          <td>{item.DueDate}</td>
                          <td>{item.DaysTaken}</td>
                          <td><div
      dangerouslySetInnerHTML={{__html: item.Comments}}
    /></td>
     <td>{item.ActionTaken}</td>
                          <td>{item.INSTR}</td>
                        </tr>
                      ))}
                  </thead>
                </table>
                        
              </div>
            </div>}
            

            {isSectionDetails && <div class="corres_data_area">
              <div class="corres_table_wrapper">
                <table class="sender-table">
                  <thead>
                    <tr>
                      <th style={{width:"17%"}}>Section</th>
                      <th style={{width:"21%"}}>Description</th>
                      <th style={{width:"12%"}}>Selected Description</th>
                      <th style={{width:"12%"}}>Asset</th>
                      {/* <th>Action</th>
                      <th>Instructions</th> */}
                      
                    </tr>
                    
                    {audit &&
                      audit.length > 0 &&
                      audit[0].EXPAND.map((item) => (
                        <tr key={item.id}>
                         
                          <td>{item.Section}</td>
                          <td>{item.Description}</td>
                          <td>{item.SelectedDescription}</td>
                          <td>{item.Asset}</td>
                          {/* <td><div
      dangerouslySetInnerHTML={{__html: item.DocumentReview}}
    /></td> */}
 {/* <td style={{textAlign: "center"}}> <i class="pe-7s-paperclip"  onClick={(e) => {
        e.preventDefault();
        setSectionsDetailpopup(true)
        setSectionsDetailRowdata(item.DocumentReview)
      }} style={{color: "#842655", fontSize: "20px", cursor:'pointer'}}></i></td> */}

<td><div dangerouslySetInnerHTML={{ __html: item.DocumentReview }} onClick={(e) => {
        e.preventDefault();
        const hrefValue = e.target.getAttribute('href');
        console.log('Clicked link with href:', hrefValue);
        setSectionsDetailpopup(true)
        setSectionsDetailRowdata(hrefValue)
      }} /></td>


                        </tr>
                      ))}
                  </thead>
                </table>
                        
              </div>
            </div>}


             
          </div>
          {/* <div style={{textAlign: "right"}}>
                                    <button type="button" className="btn btn-default btn-simple" data-dismiss="modal">Link</button>
                                    <button type="button" className="btn btn-info btn-fill btn-wd me-2">Create</button>
                                </div> */}
        </div>
        {/* <div class="im_detail2" style={{ display: display ? "none" : "" }}>
        
        </div> */}
      </div>
    </div>
  );
};
export default MyAssignmentAudit;
