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
import Button from '@mui/material/Button';
import XLSXDownload from './downloadxls';

const NestedList = () => {
  const [open, setOpen] = React.useState(true);
  const [checkedItems, setCheckedItems] = React.useState([]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleToggle = (id) => {
    const currentIndex = checkedItems.indexOf(id);
    const newCheckedItems = [...checkedItems];

    if (currentIndex === -1) {
      newCheckedItems.push(id);
    } else {
      newCheckedItems.splice(currentIndex, 1);
    }

    setCheckedItems(newCheckedItems);
  };

  const handleApiCall = () => {
    
    const idString = checkedItems.join(',');
    
    <XLSXDownload idString = "aaa"/>
    console.log(`API calls for IDs: ${idString}`);
  };

  return (
    <div>
      <List
        sx={{ width: '100%', maxWidth: 360, margin: 'auto', backgroundColor: 'var(--primary-color)' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" sx={{ backgroundcolor: 'var(--primary-color)' }}>
            Select the required fields.
          </ListSubheader>
        }
      >
        <ListItemButton id="blogTitle" onClick={() => handleToggle('blogTitle')}>
          <ListItemIcon>
            <Checkbox checked={checkedItems.includes('blogTitle')} 
            sx={{
                color: '#ff8d01',
                '&.Mui-checked': {
                  color: '#ff8d01', 
                },
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Blog Title" sx={{ color: 'white' }}
          
          />
        </ListItemButton>
        <ListItemButton id="blogURL" onClick={() => handleToggle('blogURL')}>
        <ListItemIcon>
          <Checkbox checked={checkedItems.includes('blogURL')}
           sx={{
            color: '#ff8d01',
            '&.Mui-checked': {
              color: '#ff8d01', 
            },
          }}
          />
        </ListItemIcon>
        <ListItemText primary="Blog URL" sx={{ color: 'white' }} />
      </ListItemButton>
      <ListItemButton id="date" onClick={() => handleToggle('date')}>
        <ListItemIcon>
          <Checkbox 
          checked={checkedItems.includes('date')} 
          sx={{
            color: '#ff8d01',
            '&.Mui-checked': {
              color: '#ff8d01', 
            },
          }}
          />
        </ListItemIcon>
        <ListItemText primary="Date" sx={{ color: 'white' }} />
      </ListItemButton>
      <ListItemButton id="likeCount" onClick={() => handleToggle('likeCount')}>
        <ListItemIcon>
          <Checkbox 
          checked={checkedItems.includes('likeCount')} 
          sx={{
            color: '#ff8d01',
            '&.Mui-checked': {
              color: '#ff8d01', 
            },
          }}
          />
        </ListItemIcon>
        <ListItemText primary="Like Count" sx={{ color: 'white' }} />
      </ListItemButton>
      <ListItemButton onClick={handleClick} id="tags" >
        <ListItemIcon>
          <Checkbox 
          checked={checkedItems.includes('tags')} 
          sx={{
            color: '#ff8d01',
            '&.Mui-checked': {
              color: '#ff8d01', 
            },
          }}
          />
        </ListItemIcon>
        <ListItemText primary="Tags" sx={{ color: 'white' }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} id="tag1">
            <ListItemIcon>
              <Checkbox  sx={{
                color: '#ff8d01',
                '&.Mui-checked': {
                  color: '#ff8d01', 
                },
              }}/>
            </ListItemIcon>
            <ListItemText primary="Hotel marketing strategies" sx={{ color: 'white' }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} id="tag2">
            <ListItemIcon>
              <Checkbox  sx={{
                color: '#ff8d01',
                '&.Mui-checked': {
                  color: '#ff8d01', 
                },
              }}/>
            </ListItemIcon>
            <ListItemText primary="Hotel Management" sx={{ color: 'white' }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} id="tag3">
            <ListItemIcon>
              <Checkbox  sx={{
                color: '#ff8d01',
                '&.Mui-checked': {
                  color: '#ff8d01', 
                },
              }}/>
            </ListItemIcon>
            <ListItemText primary="Hotel technology" sx={{ color: 'white' }} />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton id="imageURLs">
        <ListItemIcon>
          <Checkbox  sx={{
                color: '#ff8d01',
                '&.Mui-checked': {
                  color: '#ff8d01', 
                },
              }}/>
        </ListItemIcon>
        <ListItemText primary="Image URLs" sx={{ color: 'white' }} />
      </ListItemButton>
      </List>
      {/* <Button
        variant="contained"
        color="primary"
        onClick={handleApiCall}
        sx={{ backgroundColor: 'var(--button-bg-color)', color: 'var(--button-text-color)' }}
      >
        Download XLS
      </Button> */}
    </div>
  );
};

export default NestedList;

