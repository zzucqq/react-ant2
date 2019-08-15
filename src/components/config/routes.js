import Menu from '../menus/menu'
import Pro1 from '../pro1/index'
import Child1 from '../pro1/children/child1'
import Pro2 from '../pro2'
import Pro3 from '../pro3'
const routes = [

    {
        path:'/pro1',
        component:Pro1,
        children:[
            {
                path:'/child1',
                component:Child1
            }
        ]
    },
    {
        path:'/',
        component:Menu,
        children:[
            {
                path:'/pro2/c',
                component:Pro2
            },
            {
                path:'/pro3/c',
                component:Pro3
            },
            {
                path: '/',
                redirect: '/pro2/c',
              },
        ],
        
},
    
]
export default routes