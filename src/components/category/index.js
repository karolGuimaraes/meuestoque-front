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

const CategoryListView = () => {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    tableCategories();
  }, []);

  const tableCategories = () => {
    api
    .get("/categories")
    .then((response) => {
      setCategories(response.data);
    })
    .catch((error) => {
      alert("Ocorreu um erro ao buscar as categorias");
    });
  }

  const categoryDelete = (id, i) => {
    api
      .delete(`/category/${id}`)
      .then((response) => {
        console.log(response.data)
        tableCategories();
      })
      .catch((error) => {
        alert(`Ocorreu um erro ao excuir a categoria ${id}`);
      });
  }

  const customerFormUpdate = () => {
    console.log('oi')
  }

  return (
    <Page
      className={classes.root}
      title="Categorias"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results categories={categories} categoryDelete={categoryDelete} customerFormUpdate={customerFormUpdate}/>
        </Box>
      </Container>
    </Page>
  );
};

export default CategoryListView;
