import { Typography, Box, Card, CardContent } from "@mui/material";
import * as React from "react";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Divider from "@mui/material/Divider";

export default function Properties() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexGrow: "1" }}>
          <HomeWorkOutlinedIcon
            fontSize="large"
            sx={{ width: "60px", height: "60px",color:'#4149ac' }}
          />
          <Box sx={{ml:2,textAlign:"left"}}>
            <Typography variant="h5" color="#041838">
              98
            </Typography>
            <Typography variant="subtitle1" color="#64779b">
              properties
            </Typography>
          </Box>
        </Box>
        <Box display="flex" color="#434bac">
          <Typography>See all properties</Typography>
          <ChevronRightOutlinedIcon />
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "#e2e8f4",
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center",
          mt:2
        }}
      >
        <Box sx={{textAlign:'center'}}>
          <Typography variant="h5" color="#041838">
            8
          </Typography>
          <Typography variant="subtitle1" color="#7f8fac">
            Vacant
          </Typography>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box>
          <Typography variant="h5" color="#041838">
            64
          </Typography>
          <Typography variant="subtitle1" color="#7f8fac">
            Occupied
          </Typography>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box>
          <Typography variant="h5" color="#041838">
            16
          </Typography>
          <Typography variant="subtitle1" color="#7f8fac">
            Unlisted
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
