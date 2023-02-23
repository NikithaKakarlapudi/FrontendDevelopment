import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import Stack from '@mui/material/Stack';


function App() {
  return (
    <div className="App">
      <h2>
        Material UI - Buttons and different types.
      </h2>
      <div>
      <Button variant="contained" color="primary">Submit</Button>
      <Button>submit</Button>
      <Button disabled>Disabled</Button>
      </div>
      <p>Text buttons </p>
      <div>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </div>
      <p>Contained buttons </p>
      <div>
      <Button variant="contained">Contained</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" href="#contained-buttons">
  Link
</Button>
      </div>
      <div>
      <Button variant="contained" disableElevation>
  Disable elevation
</Button>
      </div>

      <p>Outlined buttons</p>
      <div>
      <Button variant="outlined">Primary</Button>
<Button variant="outlined" disabled>
  Disabled
</Button>
<Button variant="outlined" href="#outlined-buttons">
  Link
</Button>
      </div>
      <p>Handling Button click</p>
      <div>
      <Button size="large"
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>
      </div>
    <div>
    {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button> */}
    </div>






    </div>
    
  );
}

export default App;
