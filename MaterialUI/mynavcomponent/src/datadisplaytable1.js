import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'nikitha', firstName: 'kakarlapudi', age: 35 },
  { id: 2, lastName: 'sunny', firstName: 'rocks', age: 42 },
  { id: 3, lastName: 'lasya', firstName: 'varma', age: 45 },
  { id: 4, lastName: 'honey', firstName: 'honey', age: 16 },
  { id: 5, lastName: 'priyanka', firstName: 'priya', age: null },
  { id: 6, lastName: 'vasavi', firstName: null, age: 150 },
  { id: 7, lastName: 'anji', firstName: 'uppalapati', age: 44 },
  { id: 8, lastName: 'ashok', firstName: 'kumar', age: 36 },
  { id: 9, lastName: 'rishi', firstName: 'ram', age: 65 },
 
];

 function DataTableExm() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />


      
    </div>
  );
}

export default DataTableExm;