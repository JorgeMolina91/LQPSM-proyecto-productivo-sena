import { AdminLayout } from "../layouts" 
import { HomeAdmin, UsersAdmin, CategoriesAdmin } from "../pages/Admin" // Aqui importamos las paginas que vayamos creando


const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
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
];

export default routesAdmin;