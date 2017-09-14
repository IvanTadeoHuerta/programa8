<script>
    import multiRegistroMixin from '../mixins/multiregistros'
    import config from '../services/config'
    const { url } = config
    const serviceImg = `${url}${config.Service.verArchivo}`

    export let Dependencias = {
        mixins: [multiRegistroMixin],
        template: `<table class="table">
                        <thead>
                            <tr>
                                <th>Consecutivo</th>
                                <th>Folio</th>
                                <th>Dependencia</th>
                                <th>Actualizar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="dependencias.length > 0">
                                <tr
                                    v-for="(dependencia, index ) in dependencias" 
                                    :key="dependencia.id" style="cursor:pointer">

                                        <td>{{ dependencia.consecutivo }}</td>
                                        <td>{{ dependencia.folio }}</td>
                                        <td>{{ dependencia.dependencia  }} </td>
                                        <td><button type="button" class="btn btn-success">Actualizar</button></td>
                                        <td><button 
                                                type="button" 
                                                class="btn btn-default"
                                                @click="eliminarMultiRegistro(dependencia.consecutivo,dependencia.folio,'dependencia')">
                                                Eliminar
                                            </button></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="5" class="text-center">No hay registros</td>
                            </tr>
                        </tbody>
                    </table>`,
        data(){
            return {
                dependencias: [   
                    {consecutivo:1, dependencia:'nombre dependencia Santiago', folio:'10280581'},
                    {consecutivo:2, dependencia:'nombre dependencia Ocoyoacac', folio:'10280581'},
                    {consecutivo:3, dependencia:'nombre dependencia Lerma', folio:'10280581'},
                    {consecutivo:4, dependencia:'nombre dependencia Temoaya', folio:'10280581'},
                    {consecutivo:5, dependencia:'nombre dependencia Tlazala', folio:'10280581'},
                    {consecutivo:6, dependencia:'nombre dependencia Metepec', folio:'10280581'},
                    {consecutivo:7, dependencia:'nombre dependencia Ameyalco', folio:'10280581'},
                    {consecutivo:8, dependencia:'nombre dependencia Tilapa', folio:'10280581'}

                ]       
            }
        },
        methods:{
            eliminarDependencia(consecutivo){
                this.popArreglo(this.dependencias, consecutivo , 'consecutivo')
            }
        }
    }

    export  let Vehiculos = {
        mixins: [multiRegistroMixin],
        template: `<table class="table">
                        <thead>
                            <tr>
                                <th>Consecutivo</th>
                                <th>Folio</th>
                                <th>Dependencia</th>
                                <th>Actualizar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                        <template v-if="vehiculos.length > 0">
                                <tr
                                    v-for="(vehiculo, index ) in vehiculos" 
                                    :key="vehiculo.id" style="cursor:pointer">

                                        <td>{{ vehiculo.consecutivo }}</td>
                                        <td>{{ vehiculo.folio }}</td>
                                        <td>{{ vehiculo.dependencia  }} </td>
                                        <td><button type="button" class="btn btn-success">Actualizar</button></td>
                                        <td><button 
                                                type="button" 
                                                class="btn btn-default"
                                                @click="eliminarMultiRegistro(vehiculo.consecutivo,vehiculo.folio,'vehiculos')">
                                                Eliminar
                                        </button></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="5" class="text-center">No hay registros</td>
                            </tr>
                        </tbody>
                    </table>`,
        data(){
            return {
                vehiculos: [
                    {consecutivo:1, dependencia:'vehculo de dependencia Santiago', folio:'10280581'},
                    {consecutivo:2, dependencia:'vehculo de dependencia Ocoyoacac', folio:'10280581'},
                    {consecutivo:3, dependencia:'vehculo de dependencia Lerma', folio:'10280581'},
                    {consecutivo:4, dependencia:'vehculo de dependencia Temoaya', folio:'10280581'},
                    {consecutivo:5, dependencia:'vehculo de dependencia Tlazala', folio:'10280581'},
                    {consecutivo:6, dependencia:'vehculo de dependencia Metepec', folio:'10280581'},
                    {consecutivo:7, dependencia:'vehculo de dependencia Ameyalco', folio:'10280581'},
                    {consecutivo:8, dependencia:'vehculo de dependencia Tilapa', folio:'10280581'}
                ]
            }
        },
        methods:{
            eliminarVehiculo(consecutivo){
                this.popArreglo(this.vehiculos, consecutivo , 'consecutivo')
            }
        }
    }

    export let Personas = {
        mixins: [multiRegistroMixin],
        template: `<table class="table">
                        <thead>
                            <tr>
                                <th>Consecutivo</th>
                                <th>Folio</th>
                                <th>Nombre del infractor</th>
                                <th>Actualizar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                        <template v-if="personas.length > 0">
                                <tr
                                    v-for="(persona, index ) in personas" 
                                    :key="persona.id" style="cursor:pointer">

                                        <td>{{ persona.consecutivo }}</td>
                                        <td>{{ persona.folio }}</td>
                                        <td>{{ persona.nombre_infractor  }} </td>
                                        <td><button type="button" class="btn btn-success">Actualizar</button></td>
                                        <td><button 
                                                type="button" 
                                                class="btn btn-default"
                                                @click="eliminarMultiRegistro(persona.consecutivo,persona.folio,'personas')">
                                                Eliminar
                                        </button></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="5" class="text-center">No hay registros</td>
                            </tr>
                        </tbody>
                    </table>`,
        data(){
            return {
                personas: [
                    {consecutivo:1, nombre_infractor:'nombre infractor Santiago', folio:'10280581'},
                    {consecutivo:2, nombre_infractor:'nombre infractor Ocoyoacac', folio:'10280581'},
                    {consecutivo:3, nombre_infractor:'nombre infractor Lerma', folio:'10280581'},
                    {consecutivo:4, nombre_infractor:'nombre infractor Temoaya', folio:'10280581'},
                    {consecutivo:5, nombre_infractor:'nombre infractor Tlazala', folio:'10280581'},
                    {consecutivo:6, nombre_infractor:'nombre infractor Metepec', folio:'10280581'},
                    {consecutivo:7, nombre_infractor:'nombre infractor Ameyalco', folio:'10280581'},
                    {consecutivo:8, nombre_infractor:'nombre infractor Tilapa', folio:'10280581'}
                ]
            }
        },
        methods:{
            eliminarPersona(consecutivo){
                this.popArreglo(this.personas, consecutivo , 'consecutivo')
            }
        }
    }

    export let Productos = {
        mixins: [multiRegistroMixin],
        template:  `<table class="table">
                        <thead>
                            <tr>
                                <th>Consecutivo</th>
                                <th>Folio</th>
                                <th>Categoria del Bien y Producto</th>
                                <th>Actualizar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="productos.length > 0">
                                <tr
                                    v-for="(producto, index ) in productos" 
                                    :key="producto.id" style="cursor:pointer">

                                        <td>{{ producto.consecutivo }}</td>
                                        <td>{{ producto.folio }}</td>
                                        <td>{{ producto.categoria  }} </td>
                                        <td><button type="button" class="btn btn-success">Actualizar</button></td>
                                        <td><button 
                                                type="button" 
                                                class="btn btn-default"
                                                @click="eliminarMultiRegistro(producto.consecutivo,producto.folio,'productos')">
                                                Eliminar
                                        </button></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="5" class="text-center">No hay registros</td>
                            </tr>
                        </tbody>
                    </table>`,
        data(){
            return {
                productos: [
                    {consecutivo:1, categoria:'categoria Santiago', folio:'10280581'},
                    {consecutivo:2, categoria:'categoria Ocoyoacac', folio:'10280581'},
                    {consecutivo:3, categoria:'categoria Lerma', folio:'10280581'},
                    {consecutivo:4, categoria:'categoria Temoaya', folio:'10280581'},
                    {consecutivo:5, categoria:'categoria Tlazala', folio:'10280581'},
                    {consecutivo:6, categoria:'categoria Metepec', folio:'10280581'},
                    {consecutivo:7, categoria:'categoria Ameyalco', folio:'10280581'},
                    {consecutivo:8, categoria:'categoria Tilapa', folio:'10280581'}
                ]
            }
        },
        methods:{
            eliminarProducto(consecutivo){
                this.popArreglo(this.productos, consecutivo , 'consecutivo')
            }
        }
    }

    export  let Predios = {
        mixins: [multiRegistroMixin],
        template: `<table class="table">
                        <thead>
                            <tr>
                                <th>Consecutivo</th>
                                <th>Folio</th>
                                <th>Clave única de predio</th>
                                <th>Actualizar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="predios.length > 0">
                                <tr
                                    v-for="(predio, index ) in predios" 
                                    :key="predio.id" style="cursor:pointer">

                                        <td>{{ predio.consecutivo }}</td>
                                        <td>{{ predio.folio }}</td>
                                        <td>{{ predio.cup  }} </td>
                                        <td><button type="button" class="btn btn-success">Actualizar</button></td>
                                        <td><button 
                                                type="button" 
                                                class="btn btn-default"
                                                @click="eliminarMultiRegistro(predio.consecutivo,predio.folio,'predios')">
                                                Eliminar
                                        </button></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="5" class="text-center">No hay registros</td>
                            </tr>
                        </tbody>
                    </table>`,
        data(){
            return {
                predios: [
                    {consecutivo:1, cup:'cup Santiago', folio:'10280581'},
                    {consecutivo:2, cup:'cup Ocoyoacac', folio:'10280581'},
                    {consecutivo:3, cup:'cup Lerma', folio:'10280581'},
                    {consecutivo:4, cup:'cup Temoaya', folio:'10280581'},
                    {consecutivo:5, cup:'cup Tlazala', folio:'10280581'},
                    {consecutivo:6, cup:'cup Metepec', folio:'10280581'},
                    {consecutivo:7, cup:'cup Ameyalco', folio:'10280581'},
                    {consecutivo:8, cup:'cup Tilapa', folio:'10280581'}
                ]
            }
        },
        methods:{
            eliminarPredio(consecutivo){
                this.popArreglo(this.predios, consecutivo , 'consecutivo')
            }
        }
    }

    export let Inspectores = {
        mixins: [multiRegistroMixin],
        template: `<table class="table">
                        <thead>
                            <tr>
                                <th>Consecutivo</th>
                                <th>Folio</th>
                                <th>Inspector Forestal</th>
                                <th>Actualizar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="inspectores.length > 0">
                                <tr
                                    v-for="(inspectores, index ) in inspectores" 
                                    :key="inspectores.id" style="cursor:pointer">

                                        <td>{{ inspectores.consecutivo }}</td>
                                        <td>{{ inspectores.folio }}</td>
                                        <td>{{ inspectores.inspector  }} </td>
                                        <td><button type="button" class="btn btn-success">Actualizar</button></td>
                                        <td><button 
                                                type="button" 
                                                class="btn btn-default"
                                                @click="eliminarMultiRegistro(inspectores.consecutivo,inspectores.folio,'inspectores')">
                                                Eliminar
                                        </button></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="5" class="text-center">No hay registros</td>
                            </tr>
                        </tbody>
                    </table>`,
        data(){
            return {
                inspectores: [
                    {consecutivo:1, inspector:'inspector Santiago', folio:'10280581'},
                    {consecutivo:2, inspector:'inspector Ocoyoacac', folio:'10280581'},
                    {consecutivo:3, inspector:'inspector Lerma', folio:'10280581'},
                    {consecutivo:4, inspector:'inspector Temoaya', folio:'10280581'},
                    {consecutivo:5, inspector:'inspector Tlazala', folio:'10280581'},
                    {consecutivo:6, inspector:'inspector Metepec', folio:'10280581'},
                    {consecutivo:7, inspector:'inspector Ameyalco', folio:'10280581'},
                    {consecutivo:8, inspector:'inspector Tilapa', folio:'10280581'}
                ]
            }
        },
        methods:{
            eliminarInspector(consecutivo){
                this.popArreglo(this.inspectores, consecutivo , 'consecutivo')
            }
        }
    }

    export let Archivos = {
        mixins: [multiRegistroMixin],
        template: `<table class="table">
                        <thead>
                            <tr>
                                <th>Consecutivo</th>
                                <th>Folio</th>
                                <th>Archivo</th>
                                <th>Campo Asociado</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="archivos.length > 0">
                                <tr
                                    v-for="(archivo, index ) in archivos" 
                                    :key="archivo.id" style="cursor:pointer">

                                        <td>{{ archivo.consecutivo }}</td>
                                        <td>{{ archivo.folio }}</td>
                                        <td><a href="#" @click.prevent="getImagen(archivo.nombre_archivo)" >Ver</a></td>
                                        <td>{{ archivo.campo  }} </td>
                                        <td><button 
                                                type="button" 
                                                class="btn btn-default"
                                                @click="eliminarMultiRegistro(archivo.consecutivo,archivo.folio,'archivos')">
                                                Eliminar
                                        </button></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="5" class="text-center">No hay registros</td>
                            </tr>
                        </tbody>
                    </table>`,
        data(){
            return {
                archivos: [
                    {consecutivo:1, nombre_archivo:'150100600010002_url_001', campo:'campo asociado Santiago', folio:'10280581'},
                    {consecutivo:2, nombre_archivo:'150100600010002_url_001', campo:'campo asociado Ocoyoacac', folio:'10280581'},
                    {consecutivo:3, nombre_archivo:'150100600010002_url_001', campo:'campo asociado Lerma', folio:'10280581'},
                    {consecutivo:4, nombre_archivo:'150100600010002_url_001', campo:'campo asociado Temoaya', folio:'10280581'},
                    {consecutivo:5, nombre_archivo:'150100600010002_url_001', campo:'campo asociado Tlazala', folio:'10280581'},
                    {consecutivo:6, nombre_archivo:'150100600010002_url_001', campo:'campo asociado Metepec', folio:'10280581'},
                    {consecutivo:7, nombre_archivo:'150100600010002_url_001', campo:'campo asociado Ameyalco', folio:'10280581'},
                    {consecutivo:8, nombre_archivo:'150100600010002_url_001', campo:'campo asociado Tilapa', folio:'10280581'}
                ]
            }
        },
        methods:{
            eliminarArchivo(consecutivo){
                this.popArreglo(this.archivos, consecutivo , 'consecutivo')
            },
            getImagen(nombre){
                 this.$bus.$emit('setNameFile', nombre)     
                $('#multiRegistroImagenesArchivo').modal('show')
            }
        }
    }

    export let Viewfile = {
        template:   `<div class="modal fade" id="multiRegistroImagenesArchivo" role="dialog" data-backdrop="static" data-keyboard="false">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">Vista previa del archivo</h4>
                                </div>
                                <div class="modal-body">
                                    <iframe :src="urlArchivo" width="100%" height="400px">
                                        Este navegador no soporta iframe
                                    </iframe>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>`,
        data() {
            return {
                nombreArchivo: '',
                urlArchivo: ''
            }
        },
        created: function() {
           
             this.$bus.$on('setNameFile', (nombre) =>{
                this.nombreArchivo = nombre
                this.urlArchivo = `${serviceImg}?action=get&nombre_archivo=${this.nombreArchivo}#zoom=100`
            })
        }
    }
</script>
