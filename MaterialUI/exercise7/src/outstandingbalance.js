import { Card, CardContent } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import CustomBoxHeader from "./boxheader.js";
import { Avatar, Divider, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function OutstandingBalance() {
  return (
   
      <Box sx={{minHeight:'300px'}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt:'5px'
          }}
        >
          <Typography variant="h4" color="#071436"> $ 6,280</Typography>
          <MoreHorizIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt:'10px'
          }}
        >
        <Box textAlign="left">
            <Typography variant="h6" fontWeight='500' color="#071436"> Outstanding Balances</Typography>
         <Box display="flex">
              <Typography variant="subtitle1" color="#596d93">All properties</Typography>
              <ExpandMoreIcon />
        </Box>
        </Box>
        <Avatar
            sx={{ width: 80, height: 50 }}
            variant="rounded"
            src="https://flyclipart.com/thumb2/bar-bar-chart-business-chart-graph-icon-530857.png"
        >

        </Avatar>
        </Box>

        <Box display="flex" sx={{mt:'25px'}} >
          <Avatar
            sx={{ width: 80, height: 80 }}
            variant="rounded"
            src="https://th.bing.com/th/id/OIP.L2tqDIWlJsxOVYeLzuV1XQHaJ4?pid=ImgDet&rs=1"
          ></Avatar>
          <Box textAlign="left" sx={{ml:2}}>
            <Typography color='#071436' fontWeight='600'>Garden Row Multi Building</Typography>
            <Typography color='#071436' fontWeight='600'>Complex</Typography>
            <Typography color='#071436' fontWeight='600'>Amanda Rawles</Typography>
            <Typography color="#26ad74" fontWeight='600'>$350</Typography>
          </Box>
        </Box>

      </Box>
    
  );
}
