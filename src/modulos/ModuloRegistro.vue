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
       </template>
    </multiregistro>
  </div>
</template>

<script>


import Formulario from '../components/InspeccionComponent.vue'
import Multiregistro from '../components/MultiRegistroComponent.vue'


let Dependencias = {
  template: '<div>A custom dependencias!</div>'
}

let Vehiculos = {
  template: '<div>A custom Vehiculos!</div>'
}

let Personas = {
  template: '<div>A custom Personas!</div>'
}

let Bienes = {
  template: '<div>A custom Bienes!</div>'
}

let Predios = {
  template: '<div>A custom Predios!</div>'
}

let Inspectores = {
  template: '<div>A custom Inspectores!</div>'
}

let Archivos = {
  template: '<div>A custom Archivos!</div>'
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
