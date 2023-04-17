import React from "react";
import ViewInvoicesHeader from "./viewinvoiceheader";
import Footer from "./footer";
import { Box, Button, Grid, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ViewInvoicesDashboard from "./viewinvoicesdashboard";

export default function ViewInvoices() {
    return (
        <Box>
            <ViewInvoicesHeader />
            <Button variant="contained" startIcon={<AddIcon />} sx={{ float: 'right', zIndex: '3', bottom: '20px', marginRight: '40px', borderRadius: '25px', background: '#ed8b00' }}>New Invoice</Button>
            <ViewInvoicesDashboard />
            <Footer />
        </Box>
    )
}
