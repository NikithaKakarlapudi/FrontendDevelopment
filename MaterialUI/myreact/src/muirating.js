import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function BasicRatingExm() {
  const [value, setValue] = React.useState(2);

  return (
    <div>
        <h2>Basic Rating example</h2>
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
    
      <Typography component="legend">Controlled</Typography>
        <Rating name="simple-controlled"value={value} onChange={(event, newValue) => {setValue(newValue);
        }}/>
      <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} />
    </Box>

        <HalfRatingExm/><br/>
        <HoverRatingExm/><br/>
        <SizeExample/><br/>
        <CustomizedRating/><br/>
        <TextExample/><br/>
    </div>
  );
}
 function HalfRatingExm() {
  return (
    <Stack spacing={1}>
        <h2>Half Rating Example</h2>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
  );
}
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  function HoverRatingExm() {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
  
    return (
        <div>
            <h2>Hover feedback</h2>
      <Box
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
      </div>
    );
  }
   function SizeExample(){
    return(
        <Stack spacing={4}>
            <h2> larger and smaller ratings use the size</h2>
            <Rating name="size-small" defaultValue={2} size="small"/>
            <Rating name="size-medium" defaultValue={2} />
            <Rating name="size-large" defaultValue={1} size="large"/>
        </Stack>

    );
   }

   const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: 'pink',
    },
    '& .MuiRating-iconHover': {
      color:'rad',
    },
  });

   function CustomizedRating(){
    return(
    <div>
    <Box
      sx={{
        '& > legend': { mt: 5 },
      }}
    >
      <Typography component="legend">Custom icon and color</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Typography component="legend">10 stars</Typography>
      <Rating name="customized-10" defaultValue={2} max={10} />
    </Box>
    </div>

    );
   }
   
  
    function TextExample() {
    const value = 4.5;
     return (
    <div>
    <h2>Accessibility</h2>
      <Box
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Rating
          name="text-feedback"
          value={value}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box sx={{ ml: 2 }}>{labels[value]}</Box>
      </Box>
    </div>
    );
  }
  
export default BasicRatingExm;
