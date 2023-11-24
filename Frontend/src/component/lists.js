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

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'darkslategray' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton id="blogTitle">
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary="Blog Title" />
      </ListItemButton>
      <ListItemButton id="blogURL">
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary="Blog URL" />
      </ListItemButton>
      <ListItemButton id="date">
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary="Date" />
      </ListItemButton>
      <ListItemButton id="likeCount">
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary="Like Count" />
      </ListItemButton>
      <ListItemButton onClick={handleClick} id="tags">
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary="Tags" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} id="tag1">
            <ListItemIcon>
              <Checkbox />
            </ListItemIcon>
            <ListItemText primary="Hotel marketing strategies" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} id="tag2">
            <ListItemIcon>
              <Checkbox />
            </ListItemIcon>
            <ListItemText primary="Hotel Management" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} id="tag3">
            <ListItemIcon>
              <Checkbox />
            </ListItemIcon>
            <ListItemText primary="Hotel technology" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton id="imageURLs">
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary="Image URLs" />
      </ListItemButton>
    </List>
  );
}
