import React from 'react';
import { Box, Typography, InputLabel, TextField, TextareaAutosize, Button, Stack } from '@mui/material';

const Contact = () => {
  const textareaStyle = {
    width: '75%',
    resize: 'vertical',
    minHeight: '5em', /* minimum height */
    maxHeight: '100em', /* maximum height */
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Stack alignItems="center" justifyContent="center" p="5px">
        <Typography variant="h1" textAlign="center" fontWeight="bold" padding={1} color="red">
          Love to hear from you,
          <br />
          Get in touch
        </Typography>
      </Stack>
      <form action='https://formspree.io/f/xeqbjrog' method='POST'>
        <Box width="100%" maxWidth="700px">
          <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24px', fontWeight: 'bold' }}>
            Your Name
          </InputLabel>
          <TextField name="username" margin="normal" variant="outlined" required />

          <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24px', fontWeight: 'bold' }}>
            Your email
          </InputLabel>
          <TextField name="email" margin="normal" variant="outlined" required />

          <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24px', fontWeight: 'bold' }}>
            Message
          </InputLabel>
          <TextareaAutosize
            name="message"
            margin="normal"
            variant="outlined"
            required
            style={textareaStyle}
          />

          <Button type="submit" color="primary" variant="contained" sx={{ m: 2 }}>
            SUBMIT
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Contact;
