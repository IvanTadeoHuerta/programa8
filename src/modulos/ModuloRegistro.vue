<template>
  <div>
    <formulario @enviaDatos="recibeDatos"></formulario>
    <multiregistro>
       <div slot="header">
              <h5 class="modal-title col-xs-12 col-sm-12 col-md-11 col-lg-11">
                  <b>{{ descriptivo | mayusculas | titulo }}</b>
                  <p><b>Folio:</b>{{folio}}</p>
              </h5>
              <button type="button" class="btn btn-success col-xs-12 col-sm-12 col-md-1 col-lg-1">
                   <span style="color: white" class="glyphicon glyphicon-plus"></span>
              </button>
       </div>
       <template slot="body">
            <dependencias v-if="tipo=='dependencias'"></dependencias>
            <vehiculos v-else-if="tipo=='vehiculos'"></vehiculos>
            <personas v-else-if="tipo=='personas'"></personas>
            <bienes v-else-if="tipo == 'bienes'"></bienes>
            <predios v-else-if="tipo == 'predios'"></predios>
            <inspectores v-else-if="tipo == 'inspectores'"></inspectores>
            <archivos v-else-if="tipo == 'archivos'"></archivos>
            <div v-else>No se encontró  multiregistro. Contacte con el administrador del sistema</div>
       </template>
    </multiregistro>
  </div>
</template>

<script>


import Formulario from '../components/InspeccionComponent.vue'
import Multiregistro from '../components/MultiRegistroComponent.vue'


let Dependencias = {
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

let Vehiculos = {
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

let Personas = {
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

let Bienes = {
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

let Predios = {
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

let Inspectores = {
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

let Archivos = {
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

export default {
  name: 'appRegistro',
  data() {
    return {
      folio: null,
      descriptivo: '',
      tipo: null
    }
  },
  created: function() {
    this.folio = null
    this.descriptivo = ''
    this.tipo = null
  },
  components: {
    Formulario,
    Multiregistro,
    Dependencias,
    Vehiculos,
    Personas,
    Bienes,
    Predios,
    Inspectores,
    Archivos
  },
  methods: {
    recibeDatos(folio, descriptivo, tipo) {
      this.folio = folio
      this.descriptivo = descriptivo
      this.tipo = tipo
      $('#modalMultiRegistros').modal('show')
    }
  },
  filters: {
    mayusculas(texto) {
      return texto.toUpperCase()
    },
    titulo(texto) {
      return `MULTIREGISTRO ${texto}`
    }
  }
}
</script>

<style>

</style>
