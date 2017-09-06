import ModuloConsulta from './modulos/ModuloConsulta.vue'
import ModuloRegistro from './modulos/ModuloRegistro.vue'


const routes = [
                { path: '/consultar' , component: ModuloConsulta , name: 'consultar'},
                { path: '/agregar' , component: ModuloRegistro , name: 'agregar'}
            ]

export default routes

