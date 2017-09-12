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
    </multiregistro>
  </div>
</template>

<script>


import Formulario from '../components/InspeccionComponent.vue'
import Multiregistro from '../components/MultiRegistroComponent.vue'

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
    Multiregistro
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
