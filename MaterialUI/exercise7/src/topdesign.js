import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
  Avatar,
} from "@mui/material";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export default function TopDesign() {
  return (
    <Box>
      <CssBaseline />
      <AppBar sx={{ background: "#121924" }}>
        <Toolbar sx={{ mx: 8 }}>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}> */}
            <IconButton edge="start" color="inherit">
              <ChangeCircleOutlinedIcon />
            </IconButton>
            <Typography variant="h5">Clova</Typography>
          </Box>
          {/* <Divider orientation="vertical" variant="inset" /> */}

          <Box
            sx={{
              flexGrow: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <IconButton edge="start" color="inherit">
              <PhoneOutlinedIcon />
            </IconButton>
            <Typography>829-362-7204</Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                width: "280px",
                display: "flex",
                mr: 2,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                variant="contained"
                sx={{ background: "#2aa77b" }}
                startIcon={<AddOutlinedIcon />}
              >
                New property
              </Button>
              <TextsmsOutlinedIcon />
              <NotificationsOutlinedIcon />
            </Box>
            <Avatar
              sx={{ mr: 1 }}
              alt="Ram"
              src="https://i1.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-17-1.jpg?fit=800%2C1200&ssl=1"
            />
            <Box sx={{alignItems:'left'}}>
              <Typography>Rodney Leonard</Typography>
              <Typography variant="subtitle2">Landlord</Typography>
            </Box>
            <ExpandMoreOutlinedIcon />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
