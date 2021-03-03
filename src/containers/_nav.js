import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
   {
    _tag: 'CSidebarNavDropdown',
    name: 'Students',
    route: '/students',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'View Students',
        to: '/students/all-students',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Student',
        to: '/students/add-new-students',
      },
      ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Teacher',
    route: '/teacher',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'View Teacher',
        to: '/teacher/all-teacher',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Teacher',
        to: '/teacher/add-new-teacher',
      },
      ],
  },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Teacher',
  //   route: '/teacher',
  //   icon: 'cil-puzzle',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'View Teacher',
  //       to: '/teacher/all-teacher',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Add Teacher',
  //       to: '/teacher/add-new-teacher',
  //     },
  //     ],
  // },

  ];
 

export default _nav
