<template>
  <div id="app">
    <cabecera :usuario="usuario"></cabecera>
    <menuoptions  @clicCerrarFormulario="ocultarPanelFormulario"  @clicVerFormulario="verPanelFormulario"></menuoptions>
    <busquedapanel :accion="nameAction"></busquedapanel>
    <formulario @clicBtnCancelarRegistro="ocultarPanelFormulario" :accion="nameAction" v-show="mostarFormulario">
    </formulario>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Menuoptions from './components/MenuOptions.vue'
import Busquedapanel from './components/BusquedaPanel.vue'
import Formulario from './components/FormularioInspeccion.vue'
import inspeccionService from './services/inspeccion'
export default {
  name: 'app',
  data() {
    return {
      usuario: 'Ivan Tadeo Huerta',
      mostarFormulario: false,
      prueba: [],
      nameAction: ''
    }
  },
  mounted: function() {
    this.mostarFormulario = false
    this.prueba = inspeccionService.search('getCatalogos','')
                  .then(resp => { 
                    console.log(resp)
                  })
  },
  components: {
    Cabecera,
    Menuoptions,
    Busquedapanel,
    Formulario
  },
  methods: {
    verPanelFormulario:function() {
      this.nameAction = 'agregar'
      this.mostarFormulario = true
     
    },

    ocultarPanelFormulario: function(){
      this.nameAction = 'consultar'
      this.mostarFormulario = false
    }
  }
}
</script>

<style>

</style>
