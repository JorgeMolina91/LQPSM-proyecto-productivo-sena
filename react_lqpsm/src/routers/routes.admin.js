import { AdminLayout } from "../layouts" 
import { HomeAdmin, UsersAdmin } from "../pages/Admin" // Aqui importamos el UsersAmin


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
        component: UsersAdmin, //Este es el componente UsersAdmin
        exact: true
    }
];

export default routesAdmin;