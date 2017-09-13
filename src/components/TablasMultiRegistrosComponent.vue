<script>
    export let Dependencias = {
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
                                        <td><button type="button" class="btn btn-default">Eliminar</button></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="5" class="text-center">No hay registros</td>
                            </tr>
                        </tbody>
                    </table>`,
        data(){
            return {
            dependencias: []
            }
        }
    }

    export  let Vehiculos = {
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
                                        <td><button type="button" class="btn btn-default">Eliminar</button></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="5" class="text-center">No hay registros</td>
                            </tr>
                        </tbody>
                    </table>`,
        data(){
            return {
            vehiculos: []
            }
        }
    }

    export let Personas = {
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
                                        <td><button type="button" class="btn btn-default">Eliminar</button></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="5" class="text-center">No hay registros</td>
                            </tr>
                        </tbody>
                    </table>`,
        data(){
            return {
            personas: []
            }
        }
    }

    export let Productos = {
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
                            <template v-if="bienes.length > 0">
                                <tr
                                    v-for="(bienes, index ) in bienes" 
                                    :key="bienes.id" style="cursor:pointer">

                                        <td>{{ bienes.consecutivo }}</td>
                                        <td>{{ bienes.folio }}</td>
                                        <td>{{ bienes.categoria  }} </td>
                                        <td><button type="button" class="btn btn-success">Actualizar</button></td>
                                        <td><button type="button" class="btn btn-default">Eliminar</button></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="5" class="text-center">No hay registros</td>
                            </tr>
                        </tbody>
                    </table>`,
        data(){
            return {
            bienes: []
            }
        }
    }

    export  let Predios = {
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
                                        <td><button type="button" class="btn btn-default">Eliminar</button></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="5" class="text-center">No hay registros</td>
                            </tr>
                        </tbody>
                    </table>`,
        data(){
            return {
            predios: []
            }
        }
    }

    export let Inspectores = {
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
                                        <td><button type="button" class="btn btn-default">Eliminar</button></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="5" class="text-center">No hay registros</td>
                            </tr>
                        </tbody>
                    </table>`,
        data(){
            return {
            inspectores: []
            }
        }
    }

    export let Archivos = {
        template: `<table class="table">
                        <thead>
                            <tr>
                                <th>Consecutivo</th>
                                <th>Folio</th>
                                <th>Campo Asociado</th>
                                <th>Actualizar</th>
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
                                        <td>{{ archivo.campo  }} </td>
                                        <td><button type="button" class="btn btn-success">Actualizar</button></td>
                                        <td><button type="button" class="btn btn-default">Eliminar</button></td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="5" class="text-center">No hay registros</td>
                            </tr>
                        </tbody>
                    </table>`,
        data(){
            return {
            archivos: []
            }
        }
    }
</script>
