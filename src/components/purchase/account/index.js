import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from '../../../assets/Page';
import PurchaseForm from './PurchaseForm';
import { useParams } from 'react-router-dom';
import api from '../../../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Account = () => {
  const classes = useStyles();
  const { _id } = useParams();
  const [customer, setCustomer] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if(_id){
      api
      .get(`/customer/${_id}`)
      .then((response) => {
        setCustomer(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar o cliente");
      });
    } else {
      // setCustomer({"address": {}});
      setLoading(false);
      console.log('Sem id, novo usuário')
    }
  }, []);

  const customerCreate = (customer) => {
    console.log(customer)
    api
      .post(`/customer/`, customer)
      .then((response) => {
        console.log(`Cliente criado ${response.data}`)
      })
      .catch((error) => {
        alert(`Ocorreu um erro ao criar client`);
      });
  }

  const customerEdit = (customer) => {
    console.log(customer)
    api
      .put(`/customer/${customer._id}`, customer)
      .then((response) => {
        console.log(`Cliente editado ${response.data}`)
      })
      .catch((error) => {
        alert(`Ocorreu um erro ao editar client`);
      });
  }

  if (loading) {
    return <p>Please wait...</p>;
  }
    
  return (
    <Page
      className={classes.root}
      title="Editar Cliente"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          justify="center"
        >
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <PurchaseForm customer={customer} customerCreate={customerCreate} customerEdit={customerEdit} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Account;
