import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { graphql } from "../gql";
import { FC } from "react";
import type { GetTasksTaskTableFragment } from "../gql/graphql";

graphql(`
  fragment getTasksTaskTable on Tasks {
    data {
      id
      name
      status
      dueDate
    }
  }
`);

type Props = {
  tasks: GetTasksTaskTableFragment;
};

const TaskTable: FC<Props> = ({ tasks }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ width: "80%", m: "auto", maxWidth: "1440px", marginTop: "20px" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell align="right">Due Date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks?.data?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.dueDate}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
