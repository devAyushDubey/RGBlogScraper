"use client";
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const NestedList = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, margin: 'auto', backgroundColor: 'darkslategray' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{ color: 'white' }}>
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton id="blogTitle">
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary="Blog Title" sx={{ color: 'white' }} />
      </ListItemButton>
      <ListItemButton id="blogURL">
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary="Blog URL" sx={{ color: 'white' }} />
      </ListItemButton>
      <ListItemButton id="date">
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary="Date" sx={{ color: 'white' }} />
      </ListItemButton>
      <ListItemButton id="likeCount">
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary="Like Count" sx={{ color: 'white' }} />
      </ListItemButton>
      <ListItemButton onClick={handleClick} id="tags">
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary="Tags" sx={{ color: 'white' }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} id="tag1">
            <ListItemIcon>
              <Checkbox />
            </ListItemIcon>
            <ListItemText primary="Hotel marketing strategies" sx={{ color: 'white' }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} id="tag2">
            <ListItemIcon>
              <Checkbox />
            </ListItemIcon>
            <ListItemText primary="Hotel Management" sx={{ color: 'white' }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} id="tag3">
            <ListItemIcon>
              <Checkbox />
            </ListItemIcon>
            <ListItemText primary="Hotel technology" sx={{ color: 'white' }} />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton id="imageURLs">
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary="Image URLs" sx={{ color: 'white' }} />
      </ListItemButton>
    </List>
  );
}

export default NestedList;
