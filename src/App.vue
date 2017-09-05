<template>
  <div id="app">
    <cabecera :usuario="usuario"></cabecera>
    <menuoptions  
          @clicCerrarFormulario="ocultarPanelFormulario"  
          @clicVerFormulario="verPanelFormulario">
    </menuoptions>
    <busquedapanel 
          :accion="nameAction"
          :opcionesBusqueda="criterioBusqueda" 
          :filaSeleccionada="indicefila"
          @clicEnRegistro="mostrarDetalleInspeccion">
    </busquedapanel>
    <formulario 
          @clicBtnCancelarRegistro="ocultarPanelFormulario" 
          :accion="nameAction" 
          v-show="mostrarFormulario">
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
      mostrarFormulario: false,
      criterioBusqueda: [
                        {id:1, value:'Municipio'},
                        {id:2, value:'Folio'},
                        {id:4, value:'Regio'},
                        {id:7, value:'Estatus'}
                      ],
      indicefila: -1,
      nameAction: 'consultar'
    }
  },
  mounted: function() {
    this.mostrarFormulario = false
    /*this.inspecciones = inspeccionService.search('getCatalogos','')
                  .then(resp => { 
                    console.log(resp)
                  })*/
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
      this.mostrarFormulario = true
     
    },

    ocultarPanelFormulario: function(){      
      this.indicefila = -1
      this.nameAction = 'consultar'
      this.mostrarFormulario = false
    },

    mostrarDetalleInspeccion: function(idInspeccion){
         this.mostrarFormulario = idInspeccion != -1
         this.indicefila = idInspeccion
         this.nameAction = 'consultar'
    }
  }
}
</script>

<style>

</style>
