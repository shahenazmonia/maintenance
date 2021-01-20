const database = [
  {
    id: '1',
    name: 'Services',
    icon: 'user',
    route: '/services',
  },
  {
    id: '11',
    name: 'Create Services',
    menuParentId: '-1',
    breadcrumbParentId: '1',
    icon: 'user',
    route: '/services/create',
  },
  {
    id: '12',
    name: 'Update Service',
    menuParentId: '-1',
    breadcrumbParentId: '1',
    icon: 'user',
    route: '/services/update/:id',
  },
  {
    id: '2',
    name: 'Departments',
    icon: 'user',
    route: '/departments',
  },
  {
    id: '21',
    name: 'Create Department',
    menuParentId: '-1',
    breadcrumbParentId: '2',
    icon: 'user',
    route: '/departments/create',
  },
  {
    id: '22',
    name: 'Update Department',
    menuParentId: '-1',
    breadcrumbParentId: '2',
    icon: 'user',
    route: '/departments/update/:id',
  },
  {
    id: '3',
    name: 'Categories',
    icon: 'user',
    route: '/categories',
  },
  {
    id: '31',
    name: 'Create Category',
    menuParentId: '-1',
    breadcrumbParentId: '3',
    icon: 'user',
    route: '/categories/create',
  },
  {
    id: '4',
    name: 'Sub Categories',
    icon: 'user',
    route: '/sub_categories',
  },
  {
    id: '41',
    name: 'Create Sub Category',
    menuParentId: '-1',
    breadcrumbParentId: '4',
    icon: 'user',
    route: '/sub_categories/create',
  },
  {
    id: '5',
    name: 'Parts',
    icon: 'user',
    route: '/parts',
  },
  {
    id: '51',
    name: 'Create Part',
    menuParentId: '-1',
    breadcrumbParentId: '5',
    icon: 'user',
    route: '/parts/create',
  },
  {
    id: '6',
    name: 'Offers',
    icon: 'user',
    route: '/offers',
  },
  {
    id: '61',
    name: 'Create Offer',
    menuParentId: '-1',
    breadcrumbParentId: '6',
    icon: 'user',
    route: '/offers/create',
  },
  {
    id: '7',
    name: 'Packages',
    icon: 'user',
    route: '/packages',
  },
  {
    id: '71',
    name: 'Create Package',
    menuParentId: '-1',
    breadcrumbParentId: '7',
    icon: 'user',
    route: '/packages/create',
  },
  {
    id: '8',
    name: 'Users',
    icon: 'user',
    route: '/user',
  },
]

export default database
