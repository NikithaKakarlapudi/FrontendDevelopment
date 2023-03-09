import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import FaceIcon from '@mui/icons-material/Face';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';

 function ClickableChipsExm() {
    const handleClick = () => {
      console.info('You clicked the Chip.');
      
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    }
  
    return (
    <div>
        <h2>basic and Clickable chips</h2>
      <Stack direction="row" spacing={1}>
        <Chip label="Clickable" onClick={handleClick} />
        <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      </Stack>
      <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" color='success' />
      <Chip label="Chip Outlined" color='warning' variant="outlined" />
    </Stack>
    <Stack direction="row" spacing={1}>
        <Chip 
            label=" completed"
            size='small'
            onClick={handleClick}
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />} 
        />
        <Chip
            label="delete"
            size='large'
            variant="outlined" 
            onClick={handleClick}
            onDelete={handleDelete}
            deleteIcon={<DeleteIcon />}

        />
        </Stack>
        <Stack direction="row" spacing={1}>
        <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
        <Chip
            label="Clickable Link"
            component="a"
            href="#basic-chip"
            variant="outlined"
            clickable
        />
       </Stack>
       <h2>Avatar chip</h2>
       <Stack direction="row" spacing={1}>
       <Chip avatar={<Avatar>N</Avatar>} label="Naveen" />
       <Chip
            avatar={<Avatar alt="honey" src="https://www.brtstage.org/wp-content/uploads/2019/12/Leslie-Becker-headshot-1200x1800.jpg" />}
            label="honey"
            variant="outlined"
       />
       <Chip icon={<FaceIcon />} label="With Icon" />
       <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
       </Stack>


       
    </div>
    );
  }

//   interface DataValue {
//     key: number;
//     label: string;
//   }
  
//   const ListItem = styled('li')(({ theme }) => ({
//     margin: theme.spacing(0.5),
//   }));
  
// function ChipsArrayExm() {
//     const [DataValue, setDataValue] = React.useState<readonly DataValue[]>([
//       { key: 0, label: 'Angular' },
//       { key: 1, label: 'jQuery' },
//       { key: 2, label: 'Polymer' },
//       { key: 3, label: 'React' },
//       { key: 4, label: 'Vue.js' },
//     ]);
  
//     const handleDelete = (chipToDelete: DataValue) => () => {
//       setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
//     };
  
//     return (
//       <Paper
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           flexWrap: 'wrap',
//           listStyle: 'none',
//           p: 0.5,
//           m: 0,
//         }}
//         component="ul"
//       >
//         {DataValue.map((data) => {
//           let icon;
  
//           if (data.label === 'React') {
//             icon = <TagFacesIcon />;
//           }
  
//           return (
//             <ListItem key={data.key}>
//               <Chip
//                 icon={icon}
//                 label={data.label}
//                 onDelete={data.label === 'React' ? undefined : handleDelete(data)}
//               />
//             </ListItem>
//           );
//         })}
//       </Paper>
//     );
//   }
  
  export default ClickableChipsExm;
  