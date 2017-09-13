<template>
    <div class="modal fade" role="dialog" id="modalMultiRegistros" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="row col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h5 class="modal-title col-xs-12 col-sm-12 col-md-11 col-lg-11">
                            <a href="#" @click.prevent="regresaTabla" v-show="verFlechaRegreso">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                            </a>
                            <b>{{ descriptivo | mayusculas | titulo }}</b>
                            <p :class="{margenFolio: verFlechaRegreso}">
                                <b>Folio:</b>{{folio}}</p>
                        </h5>
                        <button type="button" class="btn btn-success col-xs-12 col-sm-12 col-md-1 col-lg-1" @click="agregaMultiRegistro(tipo)" v-show="verBtnAgregar">
                            <span style="color: white" class="glyphicon glyphicon-plus"></span>
                        </button>
                    </div>
                </div>
                <div class="modal-body" style="max-height: 400px; overflow-y:auto;">
                    <div v-show="verBtnAgregar">
                        <dependencias v-if="tipo=='dependencias'"></dependencias>
                        <vehiculos v-else-if="tipo=='vehiculos'"></vehiculos>
                        <personas v-else-if="tipo=='personas'"></personas>
                        <productos v-else-if="tipo == 'productos'"></productos>
                        <predios v-else-if="tipo == 'predios'"></predios>
                        <inspectores v-else-if="tipo == 'inspectores'"></inspectores>
                        <archivos v-else-if="tipo == 'archivos'"></archivos>
                        <div v-else>No se encontró multiregistro. Contacte con el administrador del sistema</div>
                    </div>
                    <div v-show="verFlechaRegreso">
                        <form-dependencia v-if="tipo=='dependencias'"></form-dependencia>
                        <form-vehiculo v-else-if="tipo=='vehiculos'"></form-vehiculo>
                        <form-persona-asegurada v-else-if="tipo=='personas'"></form-persona-asegurada>
                        <form-producto v-else-if="tipo == 'productos'"></form-producto>
                        <form-predio v-else-if="tipo == 'predios'"></form-predio>
                        <form-inspector-forestal v-else-if="tipo == 'inspectores'"></form-inspector-forestal>
                        <form-archivo v-else-if="tipo == 'archivos'"></form-archivo>
                        <div v-else>No se encontró multiregistro. Contacte con el administrador del sistema</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import FormDependencia from '../components/DependenciaComponent.vue'
import FormArchivo from '../components/ArchivoComponent.vue'
import FormInspectorForestal from '../components/InspectorForestalComponent.vue'
import FormPersonaAsegurada from '../components/PersonaAseguradaComponent.vue'
import FormPredio from '../components/PredioComponent.vue'
import FormProducto from '../components/ProductoComponent.vue'
import FormVehiculo from '../components/VehiculoComponent.vue'

import {
    Dependencias, Vehiculos,
    Personas, Productos, Predios,
    Inspectores, Archivos
} from '../components/TablasMultiRegistrosComponent.vue'

export default {
    name: 'multiRegistro',
    props: ['setTipo','setFolio','setDescriptivo','setReset'],
    data(){
        return {
            verFlechaRegreso: false,
            verBtnAgregar: true,
            tipo: '',
            descriptivo: '',
            folio: null
        }
    },
    created: function(){
        this.verBtnAgregar = true
        this.verFlechaRegreso = false
        this.tipo = ''
        this.descriptivo = ''
        this.folio = null
    },
    methods:{

        agregaMultiRegistro(tipoMultiRegistro) {
            this.verBtnAgregar = false
            this.verFlechaRegreso = true
        },
        regresaTabla(){
            this.verBtnAgregar = true
            this.verFlechaRegreso = false
        }
    },
    components: {
        Dependencias,
        Vehiculos,
        Personas,
        Productos,
        Predios,
        Inspectores,
        Archivos,
        FormDependencia,
        FormArchivo,
        FormInspectorForestal,
        FormPersonaAsegurada,
        FormPredio,
        FormProducto,
        FormVehiculo
    },
    watch:{
        setReset: function(){
            this.tipo=this.setTipo
            this.descriptivo=this.setDescriptivo
            this.folio=this.setFolio
            this.verBtnAgregar = true
            this.verFlechaRegreso = false
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
  .margenFolio{
     padding-left: 1.2em
  }
</style>

