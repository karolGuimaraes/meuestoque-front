import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  Grid
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { NavLink as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box >
              <Grid 
                container
                justify="space-between" 
                alignItems="center">

                <Grid maxWidth={300} >
                  <TextField
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SvgIcon
                            fontSize="small"
                            color="action"
                          >
                            <SearchIcon />
                          </SvgIcon>
                        </InputAdornment>
                      )
                    }}
                    placeholder="Pesquisar"
                    variant="outlined"
                  />
                </Grid>

                <Grid>
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    component={RouterLink}
                    to={"/app/category"}
                  >
                    Adicionar
                  </Button>
                </Grid>

              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
