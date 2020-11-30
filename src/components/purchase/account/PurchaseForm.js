import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Fab,
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AddIcon from '@material-ui/icons/Add';

const ProfileDetails = ({ customer, customerCreate, customerEdit }) => {
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const [values, setValues] = useState(customer);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    
  };

  const onSubmit = async data => {
    if (customer._id) {
      await customerEdit(values);
    } else {
      await customerCreate(values);
      navigate("/app/customers")
    }
  };

  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      noValidate
      values={values}
    >
      <Card>
        <CardHeader
          title={customer._id ? "Editar Nota" : "Adicionar Nota"}
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            > 
              <TextField
                fullWidth
                label="Fornecedor"
                name="provider"
                required
                value={customer.provider}
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  // label="Data"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={2}
            justify="center"
          >
            <Fab color="primary" aria-label="add" size="medium" >
              <AddIcon />
            </Fab>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          justify="space-between" 
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Salvar
          </Button>
          <Button
            color="primary"
            variant="contained"
            component={RouterLink}
            to={"/app/purchases"}
          >
            Cancelar
          </Button>
        </Box>
      </Card>
    </form>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
