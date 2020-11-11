import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
  Button,
  IconButton,
} from '@material-ui/core';
import {
  Edit as EditIcon,
  UserX as UserXIcon
} from 'react-feather';
import { NavLink as RouterLink } from 'react-router-dom';
import api from '../../services/api';


const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, ...rest }) => {
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    api
      .get("/invoices")
      .then((response) => {
        setCustomers(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      });
  }, []);



  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const customerDelete = (id, i) => {
    api
      .delete(`/user/${id}`)
      .then((response) => {
        console.log(response.data)
        setCustomers(customers.slice(i,1 ))
      })
      .catch((error) => {
        alert(`Ocorreu um erro ao excuir o cliente ${id}`);
      });
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Número
                </TableCell>
                <TableCell>
                  Data
                </TableCell>
                <TableCell>
                  Valor
                </TableCell>
                <TableCell>
                  Ações
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer, i) => (
                <TableRow
                  hover
                  key={customer.id}
                >
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.number}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {moment(customer.date).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {customer.phone}
                  </TableCell>
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <IconButton
                        edge="end"
                        size="small"
                        color="secondary"
                        component={RouterLink}
                        to={"/app/account"}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        edge="end"
                        size="small"
                        color="secondary"
                        onClick={() => customerDelete(customer._id, i)}
                      >
                        <UserXIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default Results;
