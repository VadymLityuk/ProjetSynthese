import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PersonPinIcon from '@material-ui/icons/PersonPin';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Accueil" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ArrowBackIosIcon />
      </ListItemIcon>
      <ListItemText primary="Offres de stage" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ArrowForwardIosIcon />
      </ListItemIcon>
      <ListItemText primary="Demande de stage" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Candidats" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonPinIcon />
      </ListItemIcon>
      <ListItemText primary="Entreprises" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Gestion </ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Ajouter une offre" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Ajouter une demande" />
    </ListItem>
  </div>
);