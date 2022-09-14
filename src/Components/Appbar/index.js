import React, { useState } from "react";
import Form from "..//Form";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Box,
  Stack,
  Typography,
  Modal,
  Container,
  IconButton,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

export default function Index() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    outline: "none",
    p: 4,
    borderRadius: "10px",
  };
  const drawerWidth = 240;
  const navItems = ["Demos", "Pages", "Support"];
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Omega
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Stack
        direction="column"
        alignContent="center"
        spacing={5}
        alignItems="center"
      >
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{
            width: "150px",
            height: "40px",
          }}
        >
          Sign up
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Form onClose={handleClose} />
          </Box>
        </Modal>
        <Stack direction="row" spacing={1}>
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "normal",
              color: "#000",
            }}
          >
            Cart
          </Typography>
          <Box
            sx={{
              width: "1.563rem",
              height: "1.563rem",
              borderRadius: "50%",
              background: "#fedc5a",
            }}
          >
            <Typography align="center">3</Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );

  return (
    <Box
      sx={{
        background: "#5454d4",
        px: 5,
      }}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="nav"
        sx={{
          diplay: { sm: "none" },
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        sx={{
          display: { sm: "block", xs: "none" },
        }}
      >
        <Stack
          direction={{ sm: "row", xs: "column" }}
          justifyContent="space-between"
          sx={{
            pt: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.35rem",

              fontWeight: "900",
              color: "#fff",
            }}
          >
            Omega
          </Typography>
          <Stack direction="row" spacing={5}>
            <Typography
              sx={{
                fontSize: "1.2rem",

                fontWeight: "normal",
                color: "#fff",
              }}
            >
              Demos
            </Typography>
            <Typography
              sx={{
                fontSize: "1.2rem",

                fontWeight: "normal",
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              Pages
            </Typography>
            <Typography
              sx={{
                fontSize: "1.2rem",

                fontWeight: "normal",
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              Support
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignContent="center"
            spacing={5}
            alignItems="center"
          >
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{
                width: "150px",
                height: "40px",
              }}
            >
              Sign up
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Form onClose={handleClose} />
              </Box>
            </Modal>
            <Stack direction="row" spacing={1}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "normal",
                  color: "#fff",
                }}
              >
                Cart
              </Typography>
              <Box
                sx={{
                  width: "1.563rem",
                  height: "1.563rem",
                  borderRadius: "50%",
                  background: "#fedc5a",
                }}
              >
                <Typography align="center">3</Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
