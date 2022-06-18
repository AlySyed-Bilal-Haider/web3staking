import { Box, Button, Container, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    borderBottom: "none",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderBottom: "none",
  },
}));

const StyledButtton = ({ children, ...props }) => {
  return (
    <Button
      disableRipple={true}
      //   {...props}
      sx={{
        background: "linear-gradient(180deg, #D90EE8 15.29%, #1B7DAB 147.92%)",
        boxShadow: "0px 0px 13px rgba(182, 0, 211, 0.7)",
        borderRadius: "26px",
        color: "#fff",
        textTransform: "capitalize",
        height: "48px",
        width: "150px",
        fontSize: "16px",
        fontFamily: "Roboto",
        "&:hover": {
          background:
            "linear-gradient(180deg, #D90EE8 15.29%, #1B7DAB 147.92%)",
        },
      }}
    >
      {children}
    </Button>
  );
};

function RecordTable() {
  let array = [
    {
      number: "1",
      accountName: "B64..plx",
      dayLocked: "341 days",
      xSlim: "164760.10",
    },
    {
      number: "2",
      accountName: "BeeMore",
      dayLocked: "365 days",
      xSlim: "143438.42",
    },
    {
      number: "3",
      accountName: "Busan",
      dayLocked: "358 days",
      xSlim: "118882.70",
    },
    {
      number: "4",
      accountName: "Love-SOL",
      dayLocked: "365 days",
      xSlim: "110719.67",
    },
    {
      number: "5",
      accountName: "6BK..1CP",
      dayLocked: "112 days",
      xSlim: "102421.34",
    },
  ];

  return (
    <Box py={10}>
      <Typography
        textAlign="center"
        fontSize={{ xs: "35px", md: "50px" }}
        fontWeight="700"
        mb={5}
      >
        Staking Leaderboard
      </Typography>

      <Container maxWidth="md">
        <Box
          p={{ xs: 2.5, md: 4 }}
          sx={{
            backgroundColor: "#151515",
            borderRadius: "40px",
          }}
        >
          <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
            <Table sx={{ backgroundColor: "#151515" }}>
              <TableHead
                sx={{
                  backgroundColor: "#1a1a1a",
                }}
              >
                <TableRow>
                  <StyledTableCell
                    align="center"
                    sx={{ color: "#fff", fontSize: "16px" }}
                  >
                    #
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ color: "#fff", fontSize: "16px" }}
                  >
                    Display Name
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ color: "#fff", fontSize: "16px" }}
                  >
                    Days Locked
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ color: "#fff", fontSize: "16px" }}
                  >
                    xSLIM
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ color: "#fff", fontSize: "16px" }}
                  >
                    Claim/Unstake
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {array.map(({ number, accountName, dayLocked, xSlim }, i) => (
                  <TableRow key={i}>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color: "#fff",
                      }}
                    >
                      {number}
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ color: "#fff" }}>
                      {accountName}
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ color: "#fff" }}>
                      {dayLocked}
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={{ color: "#fff" }}>
                      {xSlim}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <StyledButtton>Unstake</StyledButtton>
                      {/* {currentTime > withdrawtime && !unstaked ? (
                      <StyledButtton onClick={() => withdrawHandler(i)}>
                        {withdrawan ? "claimed" : "claim"}
                      </StyledButtton>
                    ) : (
                      <StyledButtton onClick={() => unstakeHandler(i)}>
                        {unstaked ? "unstaked" : "unstake"}
                      </StyledButtton>
                    )} */}
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
}

export default RecordTable;
