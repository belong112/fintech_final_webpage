import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import styles from "./mytable.module.css";

// self-defined-components
const columns = [
  { id: "firm", label: "公司名稱", minWidth: 170 },
  {
    id: "invest",
    label: "投資比例",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "expected",
    label: "預期報酬",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(firm, invest, expected) {
  return { firm, invest, expected };
}

const rows = [
  createData("India", 1324171354, 3287263),
  createData("China", 1403500365, 9596961),
  createData("Italy", 60483973, 301340),
  createData("United States", 327167434, 9833520),
  createData("Canada", 37602103, 9984670),
  createData("Australia", 25475400, 7692024),
  createData("Germany", 83019200, 357578),
  createData("Ireland", 4857000, 70273),
  createData("Mexico", 126577691, 1972550),
  createData("Japan", 126317000, 377973),
  createData("France", 67022000, 640679),
  createData("United Kingdom", 67545757, 242495),
  createData("Russia", 146793744, 17098246),
  createData("Nigeria", 200962417, 923768),
  createData("Brazil", 210147125, 8515767),
  createData("Taiwan", 99022000, 990679),
  createData("Korea", 6748057, 241495),
  createData("Tailand", 1793744, 278246),
  createData("Denmark", 2962417, 912768),
  createData("Chili", 1234563, 124322),
];

const MyTable = ({}) => {
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper className={styles.root}>
      <TableContainer className={styles.container}>
        <Table stickyHeader>
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
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.firm}>
                    {columns.map((column) => {
                      const value = row[column.id];
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
        component="div"
        count={rows.length}
        rowsPerPage={10}
        rowsPerPageOptions={[10]}
        page={page}
        onChangePage={handleChangePage}
      />
    </Paper>
  );
};

MyTable.propTypes = {};

export default MyTable;
