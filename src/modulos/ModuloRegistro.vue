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
import {Dependencias,Vehiculos,
        Personas,Bienes,Predios, 
        Inspectores,Archivos} from '../components/TablasMultiRegistrosComponent.vue'
import inspeccionMixin from '../mixins/inspeccion'

export default {
  name: 'appRegistro',
  mixins: [inspeccionMixin],
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
  }
}
</script>

<style>

</style>
