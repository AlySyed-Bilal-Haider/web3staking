import React, { useContext } from "react";
import { Container, Button, Box, useMediaQuery, Paper } from "@mui/material";
import Hidden from "@mui/material/Hidden";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";

import { AppContext } from "../utils";

const useStyles = makeStyles({
  list: {
    width: 260,
  },
  fullList: {
    width: "auto",
  },
});

const StyledButtton = ({ children, ...props }) => {
  return (
    <Button
      disableRipple={true}
      {...props}
      sx={{
        background: "linear-gradient(180deg, #D90EE8 15.29%, #1B7DAB 147.92%)",
        boxShadow: "0px 0px 13px rgba(182, 0, 211, 0.7)",
        borderRadius: "24px",
        color: "#fff",
        textTransform: "capitalize",
        height: "48px",
        width: "170px",
        marginLeft: "20px",
        fontSize: "18px",
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

export default function Header() {
  const { account, connect, disconnect } = useContext(AppContext);

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  // const matches = useMediaQuery("(max-width:960px)");
  const matches1 = useMediaQuery("(max-width:1279px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box mt={10} mb={5} textAlign="center">
        <Button
          sx={{
            width: " 100px",
            height: " 40px",
            background: " #D9D4D5",
            borderRadius: " 24px",
            fontWeight: "bold",
            "&:hover": {
              background: "#D9D4D5",
            },
          }}
        >
          Logo
        </Button>
      </Box>
      {/* <List>
        {["About", "Services", "Roadmap", "FAQ", "Statistic"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemText
                style={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                primary={text}
              />
            </ListItem>
          )
        )}
      </List> */}
      <Box mb={1} display="flex" justifyContent="center">
        {account ? (
          <StyledButtton onClick={() => disconnect()}>
            {account.slice(0, 4) + "..." + account.slice(-4)}
          </StyledButtton>
        ) : (
          <StyledButtton onClick={() => connect()}>
            connect wallet
          </StyledButtton>
        )}
      </Box>
    </div>
  );
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          background: "transparent",
          zIndex: "100px",
        }}
        height="92px"
        width="100%"
      >
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            // pl={matches ? 0 : 5}
            // pr={matches ? 0 : 5}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              // flexBasis="20%"
            >
              <Box
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                <Button
                  sx={{
                    width: " 100px",
                    height: " 40px",
                    background: " #D9D4D5",
                    borderRadius: " 24px",
                    fontweight: "bold",
                    "&:hover": {
                      background: "#D9D4D5",
                    },
                  }}
                >
                  Logo
                </Button>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent={matches1 ? "end" : "space-between"}
              alignItems="center"
              // flexBasis={matches1 ? "45px" : "78%"}
            >
              <Box
                display="flex"
                justifyContent="space-around"
                // flexBasis={matches1 ? "0px" : "70%"}
                alignItems="center"
              >
                <Hidden mdDown>
                  {/* <Box
                    mr={6}
                    fontSize="20px"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    About
                  </Box>
                  <Box
                    mr={6}
                    fontSize="20px"
                    zIndex="1"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Services
                  </Box>

                  <Box
                    mr={6}
                    fontSize="20px"
                    zIndex="1"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Roadmap
                  </Box>
                  <Box
                    mr={6}
                    fontSize="20px"
                    zIndex="1"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    FAQ
                  </Box>
                  <Box
                    mr={6}
                    fontSize="20px"
                    zIndex="1"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Statistic
                  </Box> */}
                  {account ? (
                    <StyledButtton onClick={() => disconnect()}>
                      {account.slice(0, 4) + "..." + account.slice(-4)}
                    </StyledButtton>
                  ) : (
                    <StyledButtton onClick={() => connect()}>
                      connect wallet
                    </StyledButtton>
                  )}
                </Hidden>
              </Box>

              <Hidden mdUp>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                    >
                      <MenuIcon
                        style={{
                          fontSize: "38px",
                          cursor: "pointer",
                        }}
                      ></MenuIcon>
                    </Button>
                    <Paper>
                      <SwipeableDrawer
                        classes={{ paper: classes.paper }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </Paper>
                  </React.Fragment>
                ))}
              </Hidden>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
