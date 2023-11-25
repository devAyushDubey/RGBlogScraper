"use client";
import React from 'react';
import Button from '@mui/material/Button';

class XLSXDownload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleDownload = async () => {
    try {
      this.setState({ loading: true });

      // Fetch data from your API endpoint
      const response = await fetch('https://www.boredapi.com/api/activity');
      const data = await response.blob();

      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      // Create a link element and trigger a click on it to initiate the download
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'yourFileName.xlsx'; // Specify the desired file name
      link.click();

      // Cleanup by revoking the object URL
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading } = this.state;

    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleDownload}
          disabled={loading}
        >
          {loading ? 'Downloading...' : 'Download XLSX'}
        </Button>
      </div>
    );
  }
}

export default XLSXDownload;
