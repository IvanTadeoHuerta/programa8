<template>
  <div>
    <busquedapanel @clicEnRegistro="cambiaVerFormulario"></busquedapanel>
    <formulario v-show="mostrarFormulario" @enviaDatos="recibeDatos"></formulario>
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
       <div slot="tablaRegistros" v-show="verBtnAgregar">
            <dependencias v-if="tipo=='dependencias'"></dependencias>
            <vehiculos v-else-if="tipo=='vehiculos'"></vehiculos>
            <personas v-else-if="tipo=='personas'"></personas>
            <bienes v-else-if="tipo == 'bienes'"></bienes>
            <predios v-else-if="tipo == 'predios'"></predios>
            <inspectores v-else-if="tipo == 'inspectores'"></inspectores>
            <archivos v-else-if="tipo == 'archivos'"></archivos>
            <div v-else>No se encontró  multiregistro. Contacte con el administrador del sistema</div>
       </div>
       <div slot="formularioMultiRegistro" v-show="verFlechaRegreso">
            <form-dependencia v-if="tipo=='dependencias'"></form-dependencia>
            <form-vehiculos v-else-if="tipo=='vehiculos'"></form-vehiculos>
            <form-personas v-else-if="tipo=='personas'"></form-personas>
            <form-bienes v-else-if="tipo == 'bienes'"></form-bienes>
            <form-predios v-else-if="tipo == 'predios'"></form-predios>
            <form-inspectores v-else-if="tipo == 'inspectores'"></form-inspectores>
            <form-archivos v-else-if="tipo == 'archivos'"></form-archivos>
           <div v-else>No se encontró  multiregistro. Contacte con el administrador del sistema</div>
       </div>
    </multiregistro>
  </div>
</template>

<script>

import Busquedapanel from '../components/BusquedaComponent.vue'
import Formulario from '../components/InspeccionComponent.vue'
import Multiregistro from '../components/MultiRegistroComponent.vue'
import FormDependencia from '../components/DependenciasComponent.vue'
import inspeccionService from '../services/inspeccion'
import {Dependencias,Vehiculos,
        Personas,Bienes,Predios, 
        Inspectores,Archivos} from '../components/TablasMultiRegistrosComponent.vue'
import inspeccionMixin from '../mixins/inspeccion'


export default {
  name: 'appConsulta',
  mixins: [inspeccionMixin],
  data() {
    return {
      mostrarFormulario: false
    }
  },
  created: function() {
    this.mostrarFormulario = false
  },
  methods: {
    cambiaVerFormulario: function(verFormulario) {
      this.mostrarFormulario = verFormulario
    }
  },
  components: {
    Busquedapanel,
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
