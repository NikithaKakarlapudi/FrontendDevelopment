import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Typography } from "@mui/material";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";
import Box from "@mui/material/Box";

export default function RevenueChangeTab() {
  return (
    <Box>
        <Box
      sx={{
        width: "200px",
        height: "100px",
        padding: "5px",
        margin: "13px",
        border: 1,
        borderColor: "#4149ac",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ textAlign: "right",ml:2 }}>
        <ChevronRightIcon sx={{ color: "#4149ac" }} />
        <Box textAlign="left">
          <Typography variant="h5" color="#4149ac">
            $46,690
          </Typography>
        </Box>
        <Box display="flex">
          <Typography variant="subtitle1" color="#596d93">
            Money in
          </Typography>
          <OutboundOutlinedIcon sx={{ color: "#26ad74",mx:1,mb:'15px'  }} />
          <Typography color="#26ad74">5.8%</Typography>
        </Box>
      </Box>
    </Box>
    <Box
      sx={{
        width: "200px",
        height: "100px",
        padding: "5px",
        margin: "13px",
        border: 1,
        borderColor: "#ff7a21",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ textAlign: "right",ml:2 }}>
        <ChevronRightIcon sx={{ color: "#ff7a21" }} />
        <Box textAlign="left">
          <Typography variant="h5" color="#ff7a21">
            $46,690
          </Typography>
        </Box>
        <Box display="flex">
          <Typography variant="subtitle1" color="#596d93">
            Money out
          </Typography>
          <OutboundOutlinedIcon  sx={{ color: "red",transform: 'rotate(90deg)', mx:1,mb:'15px' }} />
          <Typography color="red">26.4%</Typography>
        </Box>
      </Box>
    </Box>
    </Box>
    
  );
}
