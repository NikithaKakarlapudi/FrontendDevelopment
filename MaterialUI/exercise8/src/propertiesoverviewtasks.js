import { Box, CardContent, Typography } from "@mui/material";
import * as React from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Paper from "@mui/material/Paper";
import PushPinIcon from "@mui/icons-material/PushPin";

export default function OverviewTasks() {
  return (
    <Paper sx={{ background: "white", padding: 5, width: "95%", mx: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Task(3)</Typography>
        <ExpandLessIcon sx={{ color: "#6b63a1" }} />
      </Box>
      <Box sx={{ mt: 4,display:'flex',justifyContent:'space-between' }}>

        <Box>
        <Typography variant="body1" color="#747283">
            incomplete unit details for Arrowgrove
          </Typography>
          <Typography variant="body1" color="#747283">
            101 | Arrowgrove - Move out process
          </Typography>
          <Typography variant="body1" color="#747283">
            104 | Arrowgrove - Tenant Search
          </Typography>

        </Box>
        <Box>
        <Typography variant="body1" color="#acabb5">
            5 of 6 unit completed
          </Typography>
          <Typography variant="body1" color="#acabb5">
            Tenent confirmed
          </Typography>
          <Typography variant="body1" color="#acabb5">
            33% complete
          </Typography>
        </Box>
        <Box >
                <Box sx={{ display: "flex", alignItems: "center",justifyContent:'flex-end' }}>
                    <Typography variant="h6" color="#6b63a1">
                    COMPLETE UNIT DETAILS
                    </Typography>
                    <PushPinIcon sx={{ color: "#6b63a1", ml: 2 }} />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center",justifyContent:'flex-end' }}>
                    <Typography variant="h6" color="#6b63a1">
                    FINALIZE MOVE OUT
                    </Typography>
                    <PushPinIcon
                    sx={{ alignItems: "flex-end", ml: 2, color: "#bfbfc7" }}
                    />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center",justifyContent:'flex-end' }}>
                    <Typography variant="h6" color="#6b63a1">
                    FIND QUALITY TENANTS
                    </Typography>
                    <PushPinIcon sx={{ ml: 2, color: "#bfbfc7" }} />
                </Box>

        </Box>

    
      </Box>
    </Paper>
  );
}
