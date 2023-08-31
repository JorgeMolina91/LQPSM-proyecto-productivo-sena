import { AdminLayout } from "../layouts" 
import { 
    UsersAdmin, 
    CategoriesAdmin, 
    ProductAdmin,
    TablesAdmin,
    OrdersAdmin, 
    TableDetailsAdmin,
} from "../pages/Admin" // Aqui importamos las paginas que vayamos creando


const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: OrdersAdmin,
        exact: true
    },
    {
        path: "/admin/users", //Esta es la ruta de los usuarios en la pagina de administrador
        layout: AdminLayout,
        component: UsersAdmin, //Este es el componente que importamos de pages/Admin
        exact: true
    }, 
    {
        path: "/admin/categories", //Esta es la ruta de los usuarios en la pagina de administrador
        layout: AdminLayout,
        component: CategoriesAdmin, //Este es el componente que importamos de pages/Admin
        exact: true
    },
    {
        path: "/admin/products", //Esta es la ruta de los usuarios en la pagina de administrador
        layout: AdminLayout,
        component: ProductAdmin, //Este es el componente que importamos de pages/Admin
        exact: true
    },
    {
        path: "/admin/tables", //Esta es la ruta de los usuarios en la pagina de administrador
        layout: AdminLayout,
        component: TablesAdmin, //Este es el componente que importamos de pages/Admin
        exact: true
    },
    {
        path:"/admin/table/:id",
        layout: AdminLayout,
        component: TableDetailsAdmin,
        exact: true
    }
    
];

export default routesAdmin;