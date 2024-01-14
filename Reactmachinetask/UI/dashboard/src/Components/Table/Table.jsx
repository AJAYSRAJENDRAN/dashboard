import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import media from "../../Assets/media.png";
import instagram from "../../Assets/instagram.png";
import facebook from "../../Assets/facebook.png";
import twitter from "../../Assets/twitter.png";

function Table1() {
  const [table, settable] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/table");
        settable(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    fetchdata();
  }, []);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: theme.palette.common.black,

      border: "1px solid #ddd",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      border: "1px solid #ddd",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
    border: "1px solid #ddd",
  }));

  return (
    <div>
      <div style={{ display: "flex", marginTop: "0px", marginLeft: "25px" }}>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 800 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    <b>ID</b>{" "}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Name</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Quantity</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Price</b>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {table.map((item) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {item.id}
                    </StyledTableCell>

                    <StyledTableCell align="left">{item.name}</StyledTableCell>
                    <StyledTableCell align="left">
                      {item.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="left">{item.price}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div style={{ marginLeft: "25px" }}>
          <div className="userinfo">
            <Card sx={{ maxWidth: 380, height: 350 }}>
              <div>
                <img src={media} />
              </div>
              <div
                style={{
                  marginTop: "0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div>
                  <h4 style={{ marginTop: "5px", marginBottom: "0" }}>
                    Jon Doe
                  </h4>
                </div>
                <div
                  style={{
                    marginTop: "5px",
                    marginBottom: "10px",
                    fontWeight: "2px",
                    color: "gray",
                  }}
                >
                  ceo
                </div>
                <div style={{ display: "flex", gap: "15px" }}>
                  <img src={facebook} />
                  <img src={instagram} />
                  <img src={twitter} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "200px" }}>
        <Stack spacing={1}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </div>
    </div>
  );
}

export default Table1;
