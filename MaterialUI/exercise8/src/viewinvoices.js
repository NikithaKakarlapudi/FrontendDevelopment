import React from "react";
import ViewInvoicesHeader from "./viewinvoiceheader";
import Footer from "./footer";
import { Box, Button, Grid, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PieChartWithCenterText from "./piechart";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

const propertiesinputs = [
    {
        title: 'All properties and tenants'
    }
]
const duemonths = [
    {
        title: 'Feburary 2020'
    }
]

function ViewInvoicesDashboard() {
    return (
        <Box padding={5} sx={{ background: '#f7f6f5' }}>
            <Box>
                <Box display={"flex"} justifyContent={"flex-start"} gap={3}>
                    <DropdownComponent inputs={propertiesandtenants} headertext="Properties and tenants" boxwidth={280} />
                    <DropdownComponent inputs={duemonths} headertext="Due in" boxwidth={200} />
                    <Button sx={{ color: '#c4c2c8', background: '#e8e1d9', borderRadius: '25px', paddingX: '20px' }}>Apply</Button>

                </Box>
                <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"}>
                    <Box>
                        <Box display='flex' alignItems='center'>
                            <Typography>$</Typography>
                            <Typography variant='h4' color='#2f2d46' > 12,000</Typography>
                        </Box>

                        <Typography>Total expected</Typography>
                    </Box>
                    <Box>
                        <Box display='flex' alignItems='center'>
                            <Typography variant='h5'>$</Typography>
                            <Typography variant='h4' color='#2f2d46'>6,000</Typography>
                        </Box>

                        <Box display='flex' alignItems='center'>
                            <FiberManualRecordIcon sx={{ fontSize: 'small', color: '#5d8bb9' }} />
                            <Typography>Paid</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Box display='flex' alignItems='center'>
                            <Typography variant='h5'>$</Typography>
                            <Typography variant='h4' color='#2f2d46'>4,000</Typography>
                        </Box>

                        <Box display='flex' alignItems='center'>
                            <FiberManualRecordIcon sx={{ fontSize: 'small', color: '#d57d00' }} />
                            <Typography>Due</Typography>
                        </Box>

                    </Box>
                    <Box>
                        <Box display='flex' alignItems='center'>
                            <Typography variant='h5' >$</Typography>
                            <Typography variant='h4' sx={{ color: ' #ba482e' }}>2,000</Typography>
                            <ReportProblemIcon sx={{ color: '#ba482e' }} />
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <FiberManualRecordIcon sx={{ fontSize: 'small', color: '#ba482e' }} />
                            <Typography>Paid Due</Typography>
                        </Box>

                    </Box>
                    <Box minWidth={180}>
                        <PieChartWithCenterText />
                    </Box>
                </Box>
            </Box>
            <Box>
                <EnhancedTable />
            </Box>
        </Box>
    )
}

const propertiesandtenants = [
    { title: 'All Properties and Tenants' },

];


function DropdownComponent(props) {

    return (
        <Box minWidth={props.boxwidth} sx={{ background: 'white' }}>

            <Autocomplete
                sx={{ border: '1px solid grey', borderRadius: '0px', background: 'white' }}
                id="size-small-filled"
                size="small"
                options={props.inputs}
                getOptionLabel={(option) => option.title}
                defaultValue={props.inputs[1]}
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip
                            variant="outlined"
                            label={option.title}
                            size="small"
                            {...getTagProps({ index })}
                        />
                    ))
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="filled"
                        label={props.headertext}
                        placeholder=""
                    />
                )}
            />
        </Box>

    )
}


function createData(sentto, units, invoiceNo, type, duedate,status,totaldue,paid,balance,action) {
    return {
        sentto,
        units,
        invoiceNo,
        type,
        duedate,
        status,
        totaldue,
        paid,
        balance,
        action
    };
}
const rows = [
    createData('Howlett L', '101 | Arrogrove', '1234567', 'Rented', '2/5/2020','Passed','$2,000.00', '$0','$2000.00',<MoreVertIcon/>),
    createData('Howlett L', '101 | Arrogrove', '1234568', 'Rented', '2/10/2020','Sent','$1,000.00', '$0','$1000.00',<MoreVertIcon/>),
    createData('Howlett L', '101 | Arrogrove', '1234569', 'Rented', '2/10/2020','View','$1,000.00', '$0','$1000.00',<MoreVertIcon/>),
    createData('Howlett L', '101 | Arrogrove', '1234570', 'Rented', '2/5/2020','Paid','$1,000.00', '$1,000.00','$0',<MoreVertIcon/>),
    createData('Williams, Heidi', '102 | Arrogrove', '1234571', 'Rented', '2/5/2020','Paid','$1,000.00', '$1,000.00','$0',<MoreVertIcon/>),
    createData('Williams, Heidi', '102 | Arrogrove', '1234572', 'Rented', '2/1/2020','Paid','$1,000.00', '$1,000.00','$0',<MoreVertIcon/>),
    createData('Williams, Heidi', '102 | Arrogrove', '1234577', 'Rented', '2/1/2020','Paid','$1,000.00', '$1,000.00','$0',<MoreVertIcon/>),
    createData('Williams, Heidi', '102 | Arrogrove', '1234579', 'Rented', '2/1/2020','Paid','$1,000.00', '$1,000.00','$0',<MoreVertIcon/>),
  
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
const headCells = [
    {
        id: 'sentto',
        numeric: false,
        disablePadding: true,
        label: 'Sent to',
    },
    {
        id: 'units',
        numeric: true,
        disablePadding: false,
        label: 'Units | Properties',
    },
    {
        id: 'invoiceNo',
        numeric: true,
        disablePadding: false,
        label: 'Invoice No',
    },
    {
        id: 'type',
        numeric: true,
        disablePadding: false,
        label: 'Type',
    },
    {
        id: 'duedate',
        numeric: true,
        disablePadding: false,
        label: 'Due date',
    },
    {
        id: 'status',
        numeric: true,
        disablePadding: false,
        label: 'Status',
    },
    {
        id: 'totaldue',
        numeric: true,
        disablePadding: false,
        label: 'Total Due',
    },
    {
        id: 'paid',
        numeric: true,
        disablePadding: false,
        label: 'Paid',
    },
    {
        id: 'balance',
        numeric: true,
        disablePadding: false,
        label: 'Balance',
    },
    {
        id: 'action',
        numeric: true,
        disablePadding: false,
        label: 'Action',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead >
            <TableRow sx={{ background: '#eceae7' }}>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all properties',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const grouping = [
    { title: 'None' }
]

const statusoptions = [
    {
        title: 'All'
    }
]

function EnhancedTableToolbar(props) {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 2, sm: 2 },
                gap: 3
            }}
        >
            <SearchIcon />
            <DropdownComponent inputs={grouping} headertext="Grouping" boxwidth={200} />
            <DropdownComponent inputs={statusoptions} headertext="Status" boxwidth={200} />
            <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid grey', gap: 3, height: '50px', padding: 2 }}>
                <Typography>More Filters</Typography>
                <FilterListIcon />
            </Box>
            <Button sx={{ color: '#c4c2c8', background: '#e8e1d9', borderRadius: '25px', paddingX: '20px' }}>Apply</Button>
            <Box flexGrow={1}>

            </Box>
            <IconButton edge="end" marginRight="10px">
                <SettingsIcon />
            </IconButton>

        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};


function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.sentto}
                                            </TableCell>
                                            <TableCell align="right">{row.units}</TableCell>
                                            <TableCell align="right">{row.invoiceNo}</TableCell>
                                            <TableCell align="right">{row.type}</TableCell>
                                            <TableCell align="right">{row.duedate}</TableCell>
                                            <TableCell align="right">{row.status}</TableCell>
                                            <TableCell align="right">{row.totaldue}</TableCell>
                                            <TableCell align="right">{row.paid}</TableCell>
                                            <TableCell align="right">{row.balance}</TableCell>
                                            <TableCell align="right">{row.action}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}