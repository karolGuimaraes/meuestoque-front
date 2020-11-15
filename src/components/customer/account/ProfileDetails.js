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
  TextField
} from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const ProfileDetails = ({ customer, customerCreate, customerEdit }) => {
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
    }
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
          title={customer._id ? "Editar Cliente" : "Adicionar Cliente"}
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
                label="Primeiro nome"
                name="firstname"
                required
                value={customer.firstname}
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Último nome"
                name="lastname"
                onChange={handleChange}
                value={customer.lastname}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Refêrencia"
                name="reference"
                onChange={handleChange}
                value={customer.reference}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Telefone"
                name="phone"
                onChange={handleChange}
                value={customer.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Instagram"
                name="instagram"
                onChange={handleChange}
                value={customer.instagram}
                variant="outlined"
              />
            </Grid>
            
            <Grid
              item
              md={6}
              xs={12}
            ></Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="CEP"
                name="address.zipcode"
                onChange={handleChange}
                value={customer.address ? customer.address.zipcode : null}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Logradouro"
                name="address.street"
                onChange={handleChange}
                value={customer.address ? customer.address.street : null}
                variant="outlined"
              >
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Complemento"
                name="address.complement"
                onChange={handleChange}
                value={customer.address ? customer.address.complement : null}
                variant="outlined"
              >
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Bairro"
                name="address.district"
                onChange={handleChange}
                value={customer.address ? customer.address.district : null}
                variant="outlined"
              >
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Cidade"
                name="address.city"
                onChange={handleChange}
                value={customer.address ? customer.address.city : null}
                variant="outlined"
              >
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Estado"
                name="address.state"
                onChange={handleChange}
                value={customer.address ? customer.address.state : null}
                variant="outlined"
              >
              </TextField>
            </Grid>
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
            to={"/app/customers"}
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
