import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@material-ui/core";
import { Loading } from "./loading";

const columns = [
  { id: "name", label: "Product", minWidth: 170 },
  { id: "price", label: "Price", minWidth: 100 },
  { id: "pluse",label:"", minWidth: 20, align: "right" },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 10,
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "minus",label:"", minWidth: 20 },
  {
    id: "total",
    label: "Total Price",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "actions",
    label: "",
    minWidth: 170,
    align: "right",
  },
];

function createData(name, price) {
  const quantity = 1;
  const total = price * quantity;
  return { name, price, quantity, total };
}

export const DataTable = ({ data, setData }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const rows = data && data.map((item) => createData(item.product_name, item.price));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  console.log(data, rows);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (index) => {
    console.log(index);
    data.splice(index, 1);
    sessionStorage.setItem("cart", JSON.stringify(data));
    setData(JSON.parse(sessionStorage.getItem("cart")));
  };

  return (
    <>
      {!data && <Loading />}
      {data && (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          if (column.id === "actions")
                            return (
                              <TableCell key={"action"}>
                                {column.format && typeof value === "number" ? (
                                  column.format(value)
                                ) : (<>
                                
                                  <Button
                                    variant="contained"
                                    color=":red"
                                    style={{ width: "25%" }}
                                    onClick={() => handleDelete(index)}
                                  >
                                    DELETE
                                  </Button>
                                  </>
                                )}
                              </TableCell>
                            );
                            if (column.id === "pluse")
                            return (
                              <TableCell key={"pluse"}>
                                {column.format && typeof value === "number" ? (
                                  column.format(value)
                                ) : (<>
                                  <Button
                                    variant="contained"
                                    color=":red"
                                    style={{ width: "5%" }}
                                  >
                                    +
                                  </Button>
                                  </>
                                )}
                              </TableCell>
                            );
                            if (column.id === "minus")
                            return (
                              <TableCell key={"minus"}>
                                {column.format && typeof value === "number" ? (
                                  column.format(value)
                                ) : (<>
                                  <Button
                                    variant="contained"
                                    color=":red"
                                    style={{ width: "5%" }}
                                  >
                                    -
                                  </Button>
                                  </>
                                )}
                              </TableCell>
                            );
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
};
