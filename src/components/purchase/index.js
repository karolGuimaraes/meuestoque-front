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

const PurchaseView = () => {
  const classes = useStyles();


  return (
    <Page
      className={classes.root}
      title="Compras"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results />
        </Box>
      </Container>
    </Page>
  );
};

export default PurchaseView;
