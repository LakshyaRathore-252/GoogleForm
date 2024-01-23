import React, { useState } from 'react';
import { Container, Box, Stack, Typography, useMediaQuery, useTheme, TextField, Snackbar, Alert } from '@mui/material';
import { Input, InputLabel, FormControlLabel, Checkbox, RadioGroup, Radio, Select, MenuItem, Button } from '@mui/material';
import { Formik, Field, Form, FieldArray } from 'formik';
import { ErrorMessage } from 'formik';
// import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const App = () => {

  const theme = useTheme();
  const isMidScreen = useMediaQuery(theme.breakpoints.up('md'));
  const ariaLabel = { 'aria-label': 'description' };
  const [formSubmit, setFormSubmit] = useState(false);

  const [selectedValue, setSelectedValue] = useState('None');
  const [selectedDate, handleDateChange] = React.useState(null);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const days = [
    {
      id: 1,
      day: 'Day 1'
    },
    {
      id: 2,
      day: 'Day 2'
    },
    {
      id: 3,
      day: 'Day 3'
    }
  ]

  const items = [
    "None",
    "Vegetarian",
    "Vegan",
    "Kosher",
    "Gluten-free",

  ]

  // Initial Form Values
  const initialValues = {
    name: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    address: '',
    gender: '',
    organization: '',
    days: [],
    dietaryRestrictions: 'None',
    paymentAgreement: false,
    comments: '',
  };

  // Submit handler
  const onSubmit = (values) => {
    if (values.days.length === 0) {
      alert("Please select atleast one day")
      return
    }
    alert("Form submit")
    console.log('Form values submitted:', values);
    // You can add your logic for form submission here
    setOpenSnackbar(true)

    // Rest form


  };


  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleShowSnackbar = () => {
    setOpenSnackbar(true);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (

    <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }} >

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          {/* Image */}
          <Stack justifyContent={'center'} alignItems={'center'} p={2} >
            <img
              style={{
                borderRadius: '8px',
                objectFit: 'fill',
                maxHeight: '25vh',
                maxWidth: '80vw',
                height: '192.5px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',

                width: '770px',
              }}
              loading='lazy'
              src='https://rb.gy/ufrf42'
              alt='Even-Image'
            />
          </Stack>

          {/* Event Resgisteration */}
          <Box marginLeft={isMidScreen ? 23 : 0} marginTop={2} p={isMidScreen ? 4 : 2}
            sx={{
              maxHeight: '32vh',
              maxWidth: '80.5vw',
              height: '205px',
              width: '700px',
              borderRadius: '10px',


            }}
            boxShadow={"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"}>
            <Typography variant={isMidScreen ? 'h4' : 'h5'} textAlign={'start'}>
              Event registration
            </Typography>
            <Typography variant={isMidScreen ? 'h6' : 'none'} marginTop={3} textAlign={'start'} sx={{ displa: 'flex', flexWrap: 'wrap' }}>
              Event Timing: January 4th-6th, 2016
              <br />
              Event Address: 123 Your Street Your City, ST 12345
              <br />
              Contact us at (123) 456-7890 or
              no_reply@example.com
            </Typography>
          </Box>

          {/* Name */}
          <Box marginLeft={isMidScreen ? 23 : 0} marginTop={2} p={isMidScreen ? 4 : 2}
            sx={{
              maxHeight: '25vh',
              maxWidth: '80.5vw',
              height: '92.5px',
              width: '700px',
              borderRadius: '10px',



            }}
            boxShadow={"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"}>
            <Typography>Name <sup>*</sup> </Typography>
            <Field
              name="name"
              validate={(value) => {
                return value ? undefined : 'Required';
              }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    label="Enter your name"
                    fullWidth
                    sx={{ width: '80%' }}
                  />
                </>
              )}
            />
            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
          </Box>

          {/* Phone No. */}
          <Box marginLeft={isMidScreen ? 23 : 0} marginTop={2} p={isMidScreen ? 4 : 2}
            sx={{
              maxHeight: '25vh',
              maxWidth: '80.5vw',
              width: '700px',
              height: '92.5px',
              borderRadius: '10px'
            }}
            boxShadow={"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"}
          >
            <Typography>Phone Number<sup>*</sup> </Typography>
            <Field
              name="phone"
              validate={(value) => {
                return value ? undefined : 'Required';
              }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    label="Phone Number"
                    fullWidth
                    sx={{ width: '80%' }}
                    type="tel"
                  />
                </>
              )}
            />
            <ErrorMessage name="phone" component="div" style={{ color: 'red' }} />
          </Box>



          {/* Email */}
          <Box marginLeft={isMidScreen ? 23 : 0} marginTop={2} p={isMidScreen ? 4 : 2}
            sx={{
              maxHeight: '25vh',
              maxWidth: '80.5vw',
              width: '700px',
              height: '92.5px',
              borderRadius: '10px'


            }}
            boxShadow={"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"}>
            <Typography>Email Address<sup>*</sup> </Typography>
            <Field
              name="email"
              validate={(value) => {
                return value ? undefined : 'Required';
              }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    label="Email"
                    fullWidth
                    sx={{ width: '80%' }}
                    type="email"
                  />
                </>

              )}
            />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </Box>

          {/* DOB */}
          <Box marginLeft={isMidScreen ? 23 : 0} marginTop={2} p={isMidScreen ? 4 : 2}
            sx={{
              maxHeight: '35vh',
              maxWidth: '90vw',
              width: '700px',
              height: '80.5px',
              borderRadius: '10px',



            }}
            boxShadow={"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"}>
            <Typography>Date Of Birth<sup>*</sup> </Typography>

            <Field
              name="dateOfBirth"
              validate={(value) => {
                return value ? undefined : 'Required';
              }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    type="date"
                    fullWidth
                    sx={{ width: '80%' }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <ErrorMessage name="dateOfBirth" component="div" style={{ color: 'red' }} />
                </>

              )}
            />

          </Box>

          {/* Address */}
          <Box marginLeft={isMidScreen ? 23 : 0} marginTop={2} p={isMidScreen ? 4 : 2}
            sx={{
              maxHeight: '25vh',
              maxWidth: '80.5vw',
              width: '700px',
              height: '92.5px',
              borderRadius: '10px'
            }}
            boxShadow={"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"}
          >
            <Typography>Address<sup>*</sup> </Typography>
            <Field
              name="address"
              validate={(value) => {
                return value ? undefined : 'Required';
              }}

              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    label="Street Address"
                    fullWidth
                    sx={{ marginBottom: '1rem' }}


                  />
                  <ErrorMessage name='address' component="div" style={{ color: 'red' }} />

                </>

              )}
            />
          </Box>

          {/* Select Gender */}
          <Box marginLeft={isMidScreen ? 23 : 0} marginTop={2} p={isMidScreen ? 4 : 2}
            sx={{
              maxHeight: '25vh',
              maxWidth: '80.5vw',
              width: '700px',
              height: '92.5px',
              borderRadius: '10px'
            }}
            boxShadow={"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"}
          >
            <Typography>Gender<sup>*</sup> </Typography>
            <Field
              as={Select}
              name="gender"
              sx={{ width: '80%' }}
              validate={(value) => {
                return value ? undefined : 'Required';
              }}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Field>
            <ErrorMessage name='gender' component="div" style={{ color: 'red' }} />
          </Box>



          {/* Organization */}
          <Box marginLeft={isMidScreen ? 23 : 0} marginTop={2} p={isMidScreen ? 4 : 2}
            sx={{
              maxHeight: '25vh',
              maxWidth: '80.5vw',
              width: '700px',
              height: '92.5px',
              borderRadius: '10px'


            }}
            boxShadow={"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"}>
            <Typography>Organization<sup>*</sup> </Typography>
            <Field
              as={Input}
              name="organization"
              placeholder="short answer text"
              sx={{ width: "80%" }}
              type="text"
              fullWidth
              validate={(value) => {
                return value ? undefined : 'Required';
              }}

            />
            < ErrorMessage name='organization' component="div" style={{ color: 'red' }} />
          </Box>

          {/* How many Days */}

          <Box marginLeft={isMidScreen ? 23 : 0} marginTop={2} p={isMidScreen ? 4 : 2}
            sx={{
              maxHeight: '25vh',
              maxWidth: '80.5vw',
              width: '700px',
              height: '250px',
              borderRadius: '10px'
              , display: 'flex', flexDirection: 'column',


            }}
            boxShadow={"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"}>


            <Typography>What days you will attend?<sup>*</sup> </Typography>





            <FieldArray
              name="days"
              validate={(value) => (value.length > 0 ? undefined : "required")}

            >
              {(arrayHelpers) => (
                <div>
                  {days.map((dayObject) => (
                    <FormControlLabel
                      key={dayObject.id}
                      control={
                        <Field
                          type="checkbox"
                          name="days"
                          value={dayObject.day}
                          as={Checkbox}
                        />
                      }
                      label={dayObject.day}
                    />
                  ))}
                </div>
              )}
            </FieldArray>
            <ErrorMessage name="days" component="div" style={{ color: 'red' }} />



          </Box>

          {/* Dietary restrictions */}
          <Box marginLeft={isMidScreen ? 23 : 0} marginTop={2} p={isMidScreen ? 4 : 2}
            sx={{
              maxHeight: '40vh',
              maxWidth: '80.5vw',
              width: '700px',
              height: '550px',
              borderRadius: '10px'
              , display: 'flex', flexDirection: 'column',


            }}
            boxShadow={"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"}>


            <div>
              <Typography>Dietary restrictions?<sup>*</sup> </Typography>
              <Field
                as={RadioGroup}
                row
                name="dietaryRestrictions"
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                {items.map((ele) => (
                  <FormControlLabel
                    key={ele}
                    value={ele}
                    control={<Radio />}
                    label={ele}
                  />
                ))}
              </Field>
            </div>


          </Box>

          {/* Money Section */}

          <Box marginLeft={isMidScreen ? 23 : 0} marginTop={2} p={isMidScreen ? 4 : 2}
            sx={{
              maxHeight: '25vh',
              maxWidth: '80.5vw',
              width: '700px',
              height: '110.5px',
              borderRadius: '10px'
              , display: 'flex', flexDirection: 'column', alignItems: "start", rowGap: '1rem'


            }}
            boxShadow={"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"}>

            <Typography>I understand that I will have to pay $$ upon arrival<sup>*</sup> </Typography>
            <FormControlLabel
              control={
                <Field
                  type="checkbox"
                  name="paymentAgreement"
                  as={Checkbox}
                />
              }
              label="Yes"
            />

            <ErrorMessage name="paymentAgreement" component="div" style={{ color: 'red' }} />
          </Box>

          {/* Additional Info */}
          <Box marginLeft={isMidScreen ? 23 : 0} marginTop={2} p={isMidScreen ? 4 : 2}
            sx={{
              maxHeight: '25vh',
              maxWidth: '80.5vw',
              width: '700px',
              height: '150px',
              borderRadius: '10px'
            }}
            boxShadow={"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"}
          >
            <Typography>Additional Comments</Typography>
            <Field
              name="comments"
              as={TextField}
              multiline
              rows={4}
              fullWidth
              validate={(value) => {
                return value ? undefined : 'Comments are required';
              }}
            />
            <ErrorMessage name="comments" component="div" style={{ color: 'red' }} />

          </Box>
          <Stack alignItems={'center'} justifyContent={'center'} marginTop={2} marginBottom={5}>


            <Button variant='contained' type="submit">Submit</Button>
          </Stack>
        </Form>

      </Formik>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Adjust the position as needed
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Form Submitted Successfully
        </Alert>
      </Snackbar>



    </ Container >
  );
};

export default App;
