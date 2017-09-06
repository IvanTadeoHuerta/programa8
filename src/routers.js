import AppConsulta from './modulos/AppConsulta.vue'
import AppRegistro from './components/FormularioInspeccion.vue'


const routes = [
                { path: '/consultar' , component: AppConsulta , name: 'consultar'},
                { path: '/agregar' , component: AppRegistro , name: 'agregar'}
            ]

export default routes

