import * as React from 'react';

import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import TabsDocuments from './tabsdocuments.js';

export default function Buttons() {
  return (
    <Box mx={20} padding={1}>
        <Box display='flex' my={3} justifyContent='flex-end' alignItems='flex-end'>
            <Button variant="contained" color="info" size="large" >start new case</Button>
        </Box>
        <Box>
            <TabsDocuments/>
        </Box>
           
    </Box>
  );
}

