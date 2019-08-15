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
                path:'/pro2',
                component:Pro2
            },
            {
                path:'/pro3',
                component:Pro3
            }
        ]
    },
    
]
export default routes