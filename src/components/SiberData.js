import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi'

export const SidebarData = [
  {
    title: 'Accueil',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Offres de Stage',
    path: '/offre',
    icon: <BiIcons.BiRightArrowCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Demandes de Stage',
    path: '/demande',
    icon: <BiIcons.BiLeftArrowCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Candidats',
    path: '/candidats',
    icon: <IoIcons.IoMdSchool />,
    cName: 'nav-text'
  },
  {
    title: 'Entreprises',
    path: '/messages',
    icon: <IoIcons.IoMdPeople  />,
    cName: 'nav-text'
  },
];