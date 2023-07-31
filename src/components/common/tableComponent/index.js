import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
// import "bootstrap/dist/css/bootstrap.min.css";

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
  const expandRow = {
    renderer: row => (
      <div class="hoverdiv">
      <ul>
          <li><i class="pe-7s-exapnd2"></i></li>
          <li><i class="pe-7s-menu"></i></li>
          <li><i class="pe-7s-note"></i></li>
          <li><i class="pe-7s-flag"></i></li>
      </ul>

  </div>
    ),
    showExpandColumn: true,
    expandByColumnOnly: true
  };

  return (
    <div className="m-3">
      {data?.length ? (
        <BootstrapTable
          keyField="id"
          data={data}
          columns={columns}
          remote={true}
          onTableChange={handleTableChange}
          pagination={paginationFactory({
            page: currentPage,
            sizePerPage: itemsPerPage,
            hideSizePerPage: true,
            totalSize: totalRecords,
            onPageChange: (page) => setCurrentPage(page),
          })}
          expandRow={ expandRow }
        />
      ) : null}
    </div>
  );
};

export default TableComponent;
