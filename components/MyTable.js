import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import styles from "./mytable.module.css";

// self-defined-components
const fakeData = [
  { firm: "India", investRatio: 0.13213, expectedProfit: 3287263 },
  { firm: "China", investRatio: 0.0235, expectedProfit: 9596961 },
  { firm: "Italy", investRatio: 0.0334, expectedProfit: 301340 },
  { firm: "United States", investRatio: 0.05, expectedProfit: 9833520 },
  { firm: "Canada", investRatio: 0.103, expectedProfit: 9984670 },
  { firm: "Australia", investRatio: 0.0754, expectedProfit: 7692024 },
  { firm: "Germany", investRatio: 0.0892, expectedProfit: 357578 },
  { firm: "Ireland", investRatio: 0.034857, expectedProfit: 70273 },
  { firm: "Mexico", investRatio: 0.0177691, expectedProfit: 1972550 },
  { firm: "Japan", investRatio: 0.11, expectedProfit: 377973 },
  { firm: "France", investRatio: 0.0123, expectedProfit: 640679 },
  { firm: "United Kingdom", investRatio: 0.067545757, expectedProfit: 242495 },
  { firm: "Russia", investRatio: 0.0146793744, expectedProfit: 17098246 },
  { firm: "Nigeria", investRatio: 0.0200962417, expectedProfit: 923768 },
  { firm: "Brazil", investRatio: 0.0210147125, expectedProfit: 8515767 },
  { firm: "Taiwan", investRatio: 0.099022, expectedProfit: 990679 },
  { firm: "Korea", investRatio: 0.06748057, expectedProfit: 241495 },
  { firm: "Thailand", investRatio: 0.01793744, expectedProfit: 278246 },
  { firm: "Denmark", investRatio: 0.0962417, expectedProfit: 912768 },
  { firm: "Chili", investRatio: 0.01234563, expectedProfit: 124322 },
];

const columns = [
  { id: "firm", label: "公司名稱", minWidth: 170 },
  {
    id: "investRatio",
    label: "投資比例",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "expectedProfit",
    label: "預期報酬",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(firm, investRatio, expectedProfit) {
  investRatio = `${(investRatio * 100).toFixed(2)} %`;
  return { firm, investRatio, expectedProfit };
}

const calculateTotalProfit = (investData) => {
  let totalProfit = 0;
  investData.forEach(({ investRatio, expectedProfit }) => {
    totalProfit += investRatio * expectedProfit;
  });
  return totalProfit.toFixed(0);
};

const MyTable = ({ investData = fakeData }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;
  const rows = investData.map(({ firm, investRatio, expectedProfit }) => {
    return createData(firm, investRatio, expectedProfit);
  });

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
            <TableRow>
              <TableCell rowSpan={2} />
              <TableCell>預期總報酬</TableCell>
              <TableCell align="right">
                {calculateTotalProfit(investData)}
              </TableCell>
            </TableRow>
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
