const TableComponent = ({ data, columns }) => {
  return (
    <table id="bootstrap-table" class="table">
      <thead>
        <tr>
          {columns.map((column) =>
            column.id === "action" ? (
              <th
                data-field="actions"
                class="td-actions text-right"
                data-events="operateEvents"
                data-formatter="operateFormatter"
              >
                Actions
              </th>
            ) : (
              <th key={column.id} data-field={column.id}>
                {column.header()}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex}>{column.cell(row)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
