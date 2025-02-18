import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';

const ReferralModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    courseName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    // Validate form fields
    if (!formData.referrerName || !formData.referrerEmail || !formData.refereeName || !formData.refereeEmail) {
      alert('Please fill all mandatory fields.');
      return;
    }

    // Submit form data to backend
    try {
      const response = await axios.post('https://your-backend-url/api/refer', formData);
      console.log('Referral submitted:', response.data);
      onClose();
    } catch (error) {
      console.error('Error submitting referral:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Refer a Friend</DialogTitle>
      <DialogContent>
        <TextField
          label="Referrer Name"
          name="referrerName"
          value={formData.referrerName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Referrer Email"
          name="referrerEmail"
          value={formData.referrerEmail}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Referee Name"
          name="refereeName"
          value={formData.refereeName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Referee Email"
          name="refereeEmail"
          value={formData.refereeEmail}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Course Name"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button onClick={handleSubmit} variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ReferralModal;