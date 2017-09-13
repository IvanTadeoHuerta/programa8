<template>
  <div>
    <formulario @enviaDatos="recibeDatos"></formulario>
    <multiregistro>
       <div slot="header">
              <h5 class="modal-title col-xs-12 col-sm-12 col-md-11 col-lg-11">
                  <a href="#" @click.prevent v-show="verFlechaRegreso"><span class="glyphicon glyphicon-chevron-left"></span></a>
                  <b>{{ descriptivo | mayusculas | titulo }}</b>
                  <p :class="{margenFolio: verFlechaRegreso}"><b>Folio:</b>{{folio}}</p>
              </h5>
              <button type="button" class="btn btn-success col-xs-12 col-sm-12 col-md-1 col-lg-1"
                    @click="agregaMultiRegistro(tipo)"
                    v-show="verBtnAgregar">
                   <span style="color: white" class="glyphicon glyphicon-plus"></span>
              </button>
       </div>
       <template slot="tablaRegistros">
            <dependencias v-if="tipo=='dependencias'"></dependencias>
            <vehiculos v-else-if="tipo=='vehiculos'"></vehiculos>
            <personas v-else-if="tipo=='personas'"></personas>
            <bienes v-else-if="tipo == 'bienes'"></bienes>
            <predios v-else-if="tipo == 'predios'"></predios>
            <inspectores v-else-if="tipo == 'inspectores'"></inspectores>
            <archivos v-else-if="tipo == 'archivos'"></archivos>
            <div v-else>No se encontró  multiregistro. Contacte con el administrador del sistema</div>
       </template>
       <template slot="formularioMultiRegistro">
         <form-dependencia></form-dependencia>
       </template>
    </multiregistro>
  </div>
</template>

<script>


import Formulario from '../components/InspeccionComponent.vue'
import Multiregistro from '../components/MultiRegistroComponent.vue'
import FormDependencia from '../components/DependenciasComponent.vue'
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
        Archivos,
        FormDependencia
  }
}
</script>
<style>
  .margenFolio{
     padding-left: 1.2em
  }
</style>