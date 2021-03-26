import React, { useState } from 'react';
import * as TiIcons from 'react-icons/ti';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SiberData';
import { IconContext } from 'react-icons';
import logo from '../images/logo.png'
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import stager from '../images/avatar.jpg'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

function Navbar({handleLogOut}) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
        <Tooltip title="Menu d'administration">
        <Link to='#' className='menu-bars'>
            <TiIcons.TiThMenuOutline style={{color:'#1a83ff'}} onClick={showSidebar} />
           {/* <a style={{color:'#1a83ff',fontSize: '22px'}} > Menu</a> */}
          </Link>
          </Tooltip>
          <div  className='menu-bars' style={{color:'#414141'}}>
       <a style={{fontSize: '21px',padding: '8px',fontWeight:'bold'}}>John Doe</a>
          </div>
          <Avatar alt="Admin" src={stager} />
         <KeyboardArrowDownIcon style={{color:'#414141'}} />
         <Tooltip title="Notifications">
       <Badge style={{color:'#414141'}}badgeContent={12} color="secondary">
          <NotificationsIcon />
        </Badge>
        </Tooltip>
        <Button variant="contained" color="secondary" onClick={handleLogOut} className="logout">Deconnexion</Button>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose  />
              </Link>
            </li>
            
            <div className="col-xl-12 col-lg-12">
                           <img style={{maxWidth: '120px'}} src={logo} alt=""/>
                   </div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;