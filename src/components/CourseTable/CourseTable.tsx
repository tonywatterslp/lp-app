import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination, // Added TablePagination component
} from "@mui/material";

export interface Course {
  name: string;
  alias: string; // New column: Alias
  type: string; // New column: Type
  visibility: string; // New column: Visibility
  levels: number; // New column: Levels
  enrolments: number; // New column: Enrolments
  dateCreated: string;
}

interface CourseTableProps {
  courses: Course[];
}

const CourseTable: React.FC<CourseTableProps> = ({ courses }) => {
  const [page, setPage] = React.useState(0); // Added state for page
  const [rowsPerPage, setRowsPerPage] = React.useState(10); // Added state for rows per page

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, courses.length - page * rowsPerPage);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Alias</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Visibility</TableCell>
            <TableCell>Levels</TableCell>
            <TableCell>Enrolments</TableCell>
            <TableCell>Date Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? courses.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : courses
          ).map((course) => (
            <TableRow key={course.name}>
              <TableCell>{course.name}</TableCell>
              <TableCell>{course.alias}</TableCell>
              <TableCell>{course.type}</TableCell>
              <TableCell>{course.visibility}</TableCell>
              <TableCell>{course.levels}</TableCell>
              <TableCell>{course.enrolments}</TableCell>
              <TableCell>{course.dateCreated}</TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={7} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination // Added TablePagination component
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={courses.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default CourseTable;
