import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import GrainIcon from '@mui/icons-material/Grain';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function BreadcrumbsExm() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
         Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
         catalog
        </Link>
        <Typography color="text.primary">accessories</Typography>
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          Breadcrumbs
        </Link>
      </Breadcrumbs>
      <br/>
      <IconBreadcrumbsExm/>
    </div>
  );
}


    function IconBreadcrumbsExm() {
    return (
      <div role="presentation" onClick={handleClick}>
        <h2> Icon</h2>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            href="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            <FilterNoneIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            catalog
          </Link>
          <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            color="text.primary"
          >
            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            accessories
          </Typography>
        </Breadcrumbs>
        <h2>Collapsed breadcrumbs</h2>
        <Breadcrumbs maxItems={2} aria-label="breadcrumb">
         <Link underline="hover" color="inherit" href="#">
           Home
         </Link>
         <Link underline="hover" color="inherit" href="#">
           Catalog
         </Link>
         <Link underline="hover" color="inherit" href="#">
           Accessories
         </Link>
         <Link underline="hover" color="inherit" href="#">
           New Collection
         </Link>
         <Typography color="text.primary">Signin</Typography>
       </Breadcrumbs>
     </div>
    );
  }
export default BreadcrumbsExm;