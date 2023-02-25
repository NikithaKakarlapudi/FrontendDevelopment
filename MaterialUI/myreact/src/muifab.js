import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
function FloatingActionButtons(){
    return(
        <div>
            <h4>Basic Floating Action Button</h4>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" aria-label="add">
            <AddIcon />
            </Fab>
            <Fab color="warning" aria-label="edit">
            <EditIcon />
            </Fab>
            <Fab variant="extended">
            <NavigationIcon sx={{ mr:3 }} />
            Navigate
            </Fab>
            <Fab disabled aria-label="like">
            <FavoriteIcon />
            </Fab>
           </Box>

           <SizesExample/>
           <FloatSizeExm/>
      </div>
    )
};
function SizesExample(){
    return(
        <div>
            <h4>Use the size prop for smaller floating action buttons.</h4>
        <Box sx={{ '& > :not(style)': { m: 2 } }}>
        <Fab size="small" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab size="medium" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
      </div>

    )
};
function FloatSizeExm(){
    return(
        <box sx={{ '& >: not(style)': {m: 2}}}>
            <Fab variant="extended" size="small" arial-label="add" color="primary">
            <NavigationIcon sx={{ mr:1 }} />
            extended
            </Fab>
            <Fab variant="extended" size="large" arial-label="add" color="primary">
            <NavigationIcon sx={{ mr:1 }} />
            extended
            </Fab>
            <Fab variant="extended" arial-label="add" color="primary">
            <NavigationIcon sx={{ mr:1 }} />
            extended
            </Fab>
            
        </box>
    )
}
 export default FloatingActionButtons;