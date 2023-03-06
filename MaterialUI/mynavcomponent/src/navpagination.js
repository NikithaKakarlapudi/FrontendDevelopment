import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Typography } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';


 function BasicPaginationExm() {
  return (
    <div>
        <h2>Basic Pagination & Rounded Pagination </h2>
        <Stack spacing={2}>
            <Pagination count={10} />
            <Pagination count={10} color="primary" />
            <Pagination count={10} color="secondary" />
            <Pagination count={10}  shape="rounded" />
            <Pagination count={10} variant="outlined"  shape="rounded" color="secondary" />
            
       </Stack>
       <h2>outlined Pagination</h2>
       <Stack spacing={2}>
            <Pagination count={10} variant="outlined" />
            <Pagination count={10} variant="outlined" color="primary" />
            <Pagination count={10} variant="outlined" color="secondary" />
            <Pagination count={10} variant="outlined" disabled />
       </Stack>
       <h2>size Pagination</h2>
       <Stack spacing={2}>
            <Pagination count={10} variant="outlined" size="small"/>
            <Pagination count={10} variant="outlined" color="success" size="medium" />
            <Pagination count={10} variant="outlined" color="warning"  size="large"/>
            <h2>Buttons</h2>
            <Pagination count={10} showFirstButton showLastButton />
            <Pagination count={10} hidePrevButton hideNextButton />
       </Stack>
       <h2> ranges pagination</h2>
       <Stack spacing={2}>
            <Pagination count={15} defaultPage={7} siblingCount={0} />
            <Pagination count={19} defaultPage={8} />
            <Pagination count={20} defaultPage={6} siblingCount={0} boundaryCount={3} />
            <Pagination count={15} defaultPage={5} boundaryCount={2} />
    </Stack>

       <CustomIconsExm/>
       <br/>
       <PaginationControlledExm/>
       <br/>
       <UsePaginationExm/>
       <br/>
       <TablePaginationExm/>
    </div>
  );
}

function CustomIconsExm() {
    return (
    <div>
        <h2>CustomIcons</h2>
    <Stack spacing={2}>
        <Pagination count={15}
          renderItem={(item) => (
            <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
           )}
        />
    </Stack>
    </div>
    );
  }
   
  function PaginationControlledExm(){
    const [page, setpage] = React.useState(1);
    const handlechange = (event, value) => {
        setpage(value);
    };
    return(
    <div>
        <h2>Controlled pagination</h2>
        <stack spacing={2}>
            <Typography>page: {page}</Typography>
            <Pagination count={15} page={page} onChange={handlechange} />
        </stack>
    </div>
    );
  }


  const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  });
  
  function UsePaginationExm() {
    const { items } = usePagination({
      count: 50,
    });
  
    return (
      <nav>
        <h2>usePagination</h2>
        <List>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;
  
            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              children = '…';
            } else if (type === 'page') {
              children = (
                <button
                  type="button"
                  style={{
                    fontWeight: selected ? 'bold' : undefined,
                  }}
                  {...item}
                >
                  {page}
                </button>
              );
            } else {
              children = (
                <button type="button" {...item}>
                  {type}
                </button>
              );
            }
  
            return <li key={index}>{children}</li>;
          })}
        </List>
      </nav>
    );
  }


   function TablePaginationExm() {
    const [page, setPage] = React.useState(5);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    return (
    <div>
        <h2>Table Pagination</h2>
      <TablePagination component="div" count={100} page={page} onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage} onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
    );
  }
  
export default BasicPaginationExm;
