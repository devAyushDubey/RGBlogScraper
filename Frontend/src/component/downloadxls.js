"use client";
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const XLSXDownload = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);

      // Replace 'your-file-url' with the actual URL of the file you want to download
      const fileUrl = 'https://drive.google.com/file/d/1RjQQjBqSUGzEms5aq6EPlGAqQCqVnsny/view?usp=sharing';
      const response = await fetch(fileUrl);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleDownload}
        disabled={loading}
        sx={{ backgroundColor: 'var(--button-bg-color)', color: 'var(--button-text-color)' }}
      >
        {loading ? 'Downloading...' : 'Download XLSX'}
      </Button>
    </div>
  );
};

export default XLSXDownload;
