import React, { useState } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Mynext from "../../common/layouts/Mynext"
// import "bootstrap/dist/css/bootstrap.min.css";

// const ActionButtons = ({ row }) => (
//   <div>
//     <button className="btn btn-primary btn-sm mr-2">Edit</button>
//     <button className="btn btn-danger btn-sm">Delete</button>
//   </div>
// );


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
  const [selectedRow, setSelectedRow] = useState(null);
  const [showDiv, setshowDiv] = useState(false);
  const [show, setShow] = useState(false);
  // const handleRowClick = (row) => {
  //   if (selectedRow === row.id) {
  //     setSelectedRow(null);
  //   } else {
  //     setSelectedRow(row.id);
  //   }
  // };

  const renderDropdownActions = (row) => (
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
        <button class="dropdown-item" type="button">Audit</button>
        <button class="dropdown-item" type="button">Properties</button>
        </div>
    </div>
  );

  const handlenextbtn = () => {
    setshowDiv(true);
}

  return (
    <>
    {show ?  <Mynext /> : null}
  
    <div className="m-3">
      {data?.length ? (
        <BootstrapTable
          keyField="id"
          data={data}
          columns={[
            ...columns,
            {
              text: 'Actions',
              formatter: renderDropdownActions
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
    </div>
    </>
  );
};

export default TableComponent;
