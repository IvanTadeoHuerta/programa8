import AppConsulta from './modulos/AppConsulta.vue'
import Formulario from './components/FormularioInspeccion.vue'


const routes = [
                { path: '/consultar' , component: AppConsulta },
                { path: '/agregar' , component: Formulario }
            ]

export default routes

