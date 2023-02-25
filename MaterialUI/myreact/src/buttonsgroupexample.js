import { ButtonGroup, Checkbox, listItemAvatarClasses } from '@mui/material'
import { Button } from '@mui/material';

function ButtonGrp(){
    return(
        <div>
            <h3>Basic Button Groups</h3>
            <ButtonGroup variant="contained" aria-aria-label="outlined primary ButtonGroup">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>

            <Buttonvariants/>

            <GroupSizeColors/>
            <VerticalGroup/>
            <Disabledelevation/>
        </div>
    )
};

export default ButtonGrp;

function Buttonvariants(){
    return(
        
        <div>
        <h4> basic variant </h4>
        <ButtonGroup variant="outlined" aria-aria-label="outlined button group">
        <Button>submit</Button>
        <Button>click</Button>
        <Button>enter</Button>
        </ButtonGroup>
        <br/>
        <br/>
        
        <ButtonGroup variant="text" arial-aria-label=" text button group">
            <Button>submit</Button>
            <Button>clcik</Button>
            <Button>enter</Button>
        </ButtonGroup>
        <br/>
        <br/>
        </div>
        
    )
};
function GroupSizeColors(){
    return(
        <div>
            <h3>groups size colors</h3>
        <ButtonGroup size="small" arial-label="small button group">
            <Button>submit</Button>
            <Button>clcik</Button>
            <Button>enter</Button>
        </ButtonGroup>
        <br/>
        <br/>
        <ButtonGroup color='secondary' arial-aria-label="medium secondary button">
           <Button>submit</Button>
            <Button>clcik</Button>
            <Button>enter</Button>
        </ButtonGroup>
        <br/>
        <br/>
        <ButtonGroup size="large"  arial-label="large button group">
           <Button>submit</Button>
            <Button>clcik</Button>
            <Button>enter</Button>
        </ButtonGroup>
        </div>
    )

   };
    function VerticalGroup(){
    return(
        <div>
            <h3>The button group can be displayed vertically using the orientation</h3>
            <ButtonGroup orientation="vertical" arial-aria-label="vartical outlined button group">
                <Button>click me</Button>
                <Button>enter</Button>
                <Button>submit</Button>
            </ButtonGroup>
            <ButtonGroup orientation="vertical" variant="contained" arial-aria-label="vartical contained button group">
                <Button>click me</Button>
                <Button>enter</Button>
                <Button>submit</Button>
            </ButtonGroup>
            
            <ButtonGroup orientation="vertical" variant="text" arial-aria-label="vartical text button group">
                <Button>click me</Button>
                <Button>enter</Button>
                <Button>submit</Button>
            </ButtonGroup>
            </div>
    )
    };
    function Disabledelevation(){
        return(
            <div>
                <h3>You can remove the elevation with the disableElevation prop</h3>
                <ButtonGroup disabledElevation variant="contained" arial-label="disable elevation button">
                    <Button>one</Button>
                    <Button>two</Button>
                </ButtonGroup>
            </div>
        )
    };
    
        
    


