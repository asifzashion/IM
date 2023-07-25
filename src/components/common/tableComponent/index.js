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
        />
      ) : null}
    </div>
  );
};

export default TableComponent;
