import { Button, Divider } from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import VacanciesChart from "./vacancieslinechart";

export default function Vacancies(){
    return(
        <Box display="flex" flexDirection="column" justifyContent='space-between' height='100%'>
        <Box flexGrow={1}>
        <Typography align="start">Occupancy</Typography>
          <VacanciesChart/>
        </Box>
        <Divider width='100%'/>
        <Box height={50} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-end">            
            <Button >
                <Typography>
                View Vacancies
                </Typography>
                <ChevronRightIcon/>
            </Button>
        </Box>
      </Box>
    )
}