import React, { useEffect, useState } from "react";
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from "@mui/material"
import { deleteUser, getallUsers } from "../service/api";
import { Link } from "react-router-dom";

// const useStyle = makeStyles({
//   table: {
//     width: "80%",
//     margin: "50px 100px 100px 140px",
//   },
//   thead: {
//     "& > *": {
//       background: "#000000",
//       color: "#FFFFFF",
//       fontSize: "16px",
//     },
//   },
//   trow: {
//     "& > *": {
//       fontSize: "16px",
//     },
//   },
// });

const AllUsers = () => {
  // const classes = useStyle();

  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async (id) => {
    const response = await getallUsers();
    console.log(response);
    setUser(response.data);
  };

  const deleteData = async (id) => {
    await deleteUser(id);
    getUsers();
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Date</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {user.map((data) => (
          <TableRow>
            <TableCell>{data.id}</TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.lastname}</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell>{data.rent}</TableCell>
            <TableCell>{data.date}</TableCell>
            <TableCell>
              <Button
                variant="contained" color="primary"
                style={{ margin: "0px 20px" }} component={Link}
                to={`/edit/${data.id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained" color="secondary"
                style={{ margin: "0px 20px" }}
                onClick={() => deleteData(data.id)}
              >
                Cancel
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsers;
