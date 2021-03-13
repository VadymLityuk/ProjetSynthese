import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import './style/main.css'
import './style/header.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
      <>
          <AppBar>
    <div className="header-area ">
        <div id="sticky-header" className="main-header-area">
            <div className="container-fluid ">
                <div className="header_bottom_border">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-2">
                            <div className="logo">
                                <a href="index.html">
                                <Link  to={"/Accueil"}>E Stage</Link> 
                                </a>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-7">
                            <div class="main-menu  d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><a href="index.html">home</a></li>
                                        <li><a href="jobs.html">Browse Job</a></li>
                                        <li><a href="#">pages <i class="ti-angle-down"></i></a>
                                            <ul class="submenu">
                                                <li><a href="candidate.html">Candidates </a></li>
                                                <li><a href="job_details.html">job details </a></li>
                                                <li><a href="elements.html">elements</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">blog <i class="ti-angle-down"></i></a>
                                            <ul class="submenu">
                                                <li><a href="blog.html">blog</a></li>
                                                <li><a href="single-blog.html">single-blog</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                            <div class="Appointment">
                                <div class="phone_num d-none d-xl-block">
                                    <a href="#">Log in</a>
                                </div>
                                <div class="d-none d-lg-block">
                                    <a class="boxed-btn3" href="#">Post a Job</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </AppBar>
    


    </>
  );
}