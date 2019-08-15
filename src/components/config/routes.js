import Menu from '../menus/menu'
import Pro1 from '../pro1/index'
import Child1 from '../pro1/children/child1'
import Pro2 from '../pro2/index'
const routes = [
    {
        path:'/Pro2',
        component:Pro2
    },
    {
        path:'/pro1',
        component:Pro1,
        children:[
            {
                path:'/pro1/child1',
                component:Child1
            }
        ]
    },
    {
        path:'/',
        component:Menu,
        children:[
            {
                path:'/Pro2',
                component:Pro2
            }
        ]
    },
    
]
export default routes