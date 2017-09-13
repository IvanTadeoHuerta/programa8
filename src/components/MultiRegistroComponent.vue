<template>
    <div class="modal fade" role="dialog" id="modalMultiRegistros" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="row col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h5 class="modal-title col-xs-12 col-sm-12 col-md-11 col-lg-11">
                            <a href="#" @click.prevent v-show="verFlechaRegreso">
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
                        <bienes v-else-if="tipo == 'bienes'"></bienes>
                        <predios v-else-if="tipo == 'predios'"></predios>
                        <inspectores v-else-if="tipo == 'inspectores'"></inspectores>
                        <archivos v-else-if="tipo == 'archivos'"></archivos>
                        <div v-else>No se encontró multiregistro. Contacte con el administrador del sistema</div>
                    </div>
                    <div v-show="verFlechaRegreso">
                        <form-dependencia v-if="tipo=='dependencias'"></form-dependencia>
                        <form-vehiculos v-else-if="tipo=='vehiculos'"></form-vehiculos>
                        <form-personas v-else-if="tipo=='personas'"></form-personas>
                        <form-bienes v-else-if="tipo == 'bienes'"></form-bienes>
                        <form-predios v-else-if="tipo == 'predios'"></form-predios>
                        <form-inspectores v-else-if="tipo == 'inspectores'"></form-inspectores>
                        <form-archivos v-else-if="tipo == 'archivos'"></form-archivos>
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

import FormDependencia from '../components/DependenciasComponent.vue'
import {
    Dependencias, Vehiculos,
    Personas, Bienes, Predios,
    Inspectores, Archivos
} from '../components/TablasMultiRegistrosComponent.vue'

export default {
    name: 'multiRegistro',
    props: ['setTipo','setFolio','setDescriptivo'],
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
        }
    },
    components: {
        Dependencias,
        Vehiculos,
        Personas,
        Bienes,
        Predios,
        Inspectores,
        Archivos,
        FormDependencia
    },
    watch:{
        setTipo: function(){
            this.tipo=this.setTipo
            this.descriptivo=this.setDescriptivo
            this.folio=this.setFolio
        },
        setFolio: function(){
            this.tipo=this.setTipo
            this.descriptivo=this.setDescriptivo
            this.folio=this.setFolio
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

