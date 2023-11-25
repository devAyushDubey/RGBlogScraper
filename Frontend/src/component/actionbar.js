"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  const handleFileDownload = async () => {
    try {
      
      const fileUrl = 'https://github.com/soumenkp2/DataHarvest---RateGain/blob/main/web_scraping/blogs_data.csv';
      const rawUrl = 'https://raw.githack.com${fileUrl.slice(18)}';
      const response = await fetch(rawUrl);
      const data = await response.blob();

      // Create a link element and trigger a click on it to initiate the download
      const link = document.createElement('a');
      link.href = URL.createObjectURL(data);

      // Extract the filename from the URL or use a default name
      const filename = fileUrl.substring(fileUrl.lastIndexOf('/') + 1) || 'downloadedFile';

      link.download = filename;
      link.click();

      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'var(--primary-color)' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RGBlogScraper
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFileDownload}
            sx={{ backgroundColor: 'var(--button-bg-color)', color: 'var(--button-text-color)' }}
          >
            Download XLS
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
