import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  makeStyles
} from '@material-ui/core';
import {
  ShoppingBag as ShoppingBagIcon,
  Users as UsersIcon,
  FileText as FileTextIcon,
  DollarSign as DollarSignIcon,
  Tag as TagIcon,
  Truck as TruckIcon
} from 'react-feather';
import NavItem from './NavItem';

const items = [
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Produtos'
  },
  {
    href: '/app/customers',
    icon: DollarSignIcon,
    title: 'Vendas'
  },
  {
    href: '/app/purchases',
    icon: FileTextIcon,
    title: 'Compras'
  },
  {
    href: '/app/customers',
    icon: UsersIcon,
    title: 'Clientes'
  },
  {
    href: '/app/providers',
    icon: TruckIcon,
    title: 'Fornecedores'
  },
  {
    href: '/app/categories',
    icon: TagIcon,
    title: 'Categorias'
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
     
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
 
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
