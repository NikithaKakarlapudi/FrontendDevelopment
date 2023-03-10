import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
function MultiSelectTreeViewExm() {
return (
<div>
    <h2>Tree views Examples</h2>
    <TreeView
      aria-label="multi-select"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
      sx={{ height: 216, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Calendar" />
        <TreeItem nodeId="3" label="Chrome" />
        <TreeItem nodeId="4" label="Webstorm" />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="6" label="MUI">
          <TreeItem nodeId="7" label="src">
            <TreeItem nodeId="8" label="index.js" />
            <TreeItem nodeId="9" label="tree-view.js" />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>



    <ControlledTreeViewExm/>
    <br/>
    <DisabledTreeItemsExm/>
</div>
  );
}

function ControlledTreeViewExm() {
    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);
  
    const handleToggle = (event, nodeIds) => {
      setExpanded(nodeIds);
    };
  
    const handleSelect = (event, nodeIds) => {
      setSelected(nodeIds);
    };
  
    const handleExpandClick = () => {
      setExpanded((oldExpanded) =>
        oldExpanded.length === 0 ? ['1', '5', '6', '7'] : [],
      );
    };
  
    const handleSelectClick = () => {
      setSelected((oldSelected) =>
        oldSelected.length === 0 ? ['1', '2', '3', '4', '5', '6', '7', '8', '9'] : [],
      );
    };
  
    return (
      <Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
        <Box sx={{ mb: 1 }}>
          <Button onClick={handleExpandClick}>
            {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
          </Button>
          <Button onClick={handleSelectClick}>
            {selected.length === 0 ? 'Select all' : 'Unselect all'}
          </Button>
        </Box>
        <TreeView
          aria-label="controlled"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
          selected={selected}
          onNodeToggle={handleToggle}
          onNodeSelect={handleSelect}
          multiSelect
        >
          <TreeItem nodeId="1" label="Applications">
            <TreeItem nodeId="2" label="Calendar" />
            <TreeItem nodeId="3" label="Chrome" />
            <TreeItem nodeId="4" label="Webstorm" />
          </TreeItem>
          <TreeItem nodeId="5" label="Documents">
            <TreeItem nodeId="6" label="MUI">
              <TreeItem nodeId="7" label="src">
                <TreeItem nodeId="8" label="index.js" />
                <TreeItem nodeId="9" label="tree-view.js" />
              </TreeItem>
            </TreeItem>
          </TreeItem>
        </TreeView>
      </Box>
    );
  }
  

function DisabledTreeItemsExm() {
    const [focusDisabledItems, setFocusDisabledItems] = React.useState(false);
    const handleToggle = (event) => {
      setFocusDisabledItems(event.target.checked);
    };
  
    return (
      <Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }} px={2}>
        <Box sx={{ mb: 1 }}>
          <FormControlLabel
            control={
              <Switch
                checked={focusDisabledItems}
                onChange={handleToggle}
                name="focusDisabledItems"
              />
            }
            label="Focus disabled items"
          />
        </Box>
        <TreeView
          aria-label="disabled items"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          disabledItemsFocusable={focusDisabledItems}
          multiSelect
        >
          <TreeItem nodeId="1" label="One">
            <TreeItem nodeId="2" label="Two" />
            <TreeItem nodeId="3" label="Three" />
            <TreeItem nodeId="4" label="Four" />
          </TreeItem>
          <TreeItem nodeId="5" label="Five" disabled>
            <TreeItem nodeId="6" label="Six" />
          </TreeItem>
          <TreeItem nodeId="7" label="Seven">
            <TreeItem nodeId="8" label="Eight" />
            <TreeItem nodeId="9" label="Nine">
              <TreeItem nodeId="10" label="Ten">
                <TreeItem nodeId="11" label="Eleven" />
                <TreeItem nodeId="12" label="Twelve" />
              </TreeItem>
            </TreeItem>
          </TreeItem>
        </TreeView>
      </Box>
    );
  }
  
export default MultiSelectTreeViewExm;