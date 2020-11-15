import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/assets/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    tableCustomers();
  }, []);

  const tableCustomers = () => {
    api
    .get("/customers")
    .then((response) => {
      setCustomers(response.data);
      console.log(response.data)
    })
    .catch((error) => {
      alert("Ocorreu um erro ao buscar os items");
    });
  }

  

  const customerDelete = (id, i) => {
    api
      .delete(`/customer/${id}`)
      .then((response) => {
        console.log(response.data)
        tableCustomers();
      })
      .catch((error) => {
        alert(`Ocorreu um erro ao excuir o cliente ${id}`);
      });
  }

  const customerFormUpdate = () => {
    console.log('oi')
  }

  return (
    <Page
      className={classes.root}
      title="Clientes"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results customers={customers} customerDelete={customerDelete} customerFormUpdate={customerFormUpdate}/>
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
