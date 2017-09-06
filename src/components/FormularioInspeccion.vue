<template>
    <div class="container-fluid">
        <div class="row">
            <br/>
            <div class="col-md-12">
                <div class="panel panel-success">
                    <div class="panel-heading"><b>{{ titulo }}</b></div>
                    <div class="panel-body">
                        <form id="formularioPrincipal" @submit.prevent>
                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Estado</label>
                                    <input type="text" class="form-control" value="México" readonly>
                               </div>

                               <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Tipo de Acción</label>
                                    <select name="tipo_accion" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>              
                                    </select>
                               </div>

                               <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Región</label>
                                    <select name="region" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                               </div>

                               <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Municipio</label>
                                    <select name="modulopredio_municipio" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                               </div>
                            </div>

                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Localidad</label>
                                    <select name="modulopredio_localidad" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Año</label>
                                    <select name="anio" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Predio</label>
                                    <select name="nombre_predio" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Clave única de identificación</label>
                                    <input type="text" name="modulopredio_cup" class="form-control" readonly>
                                </div>
                            </div>

                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Folio</label>
                                    <input type="text" name="folio" class="form-control" v-model="formularioLocal.folio" readonly>
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Municipio</label>
                                    <select class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Nombre del Predio</label>
                                    <input type="text" class="form-control" v-model="formularioLocal.nombre_predio">
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Razón Social</label>
                                    <input type="text" name="razon_social" class="form-control">
                                </div>
                            </div>

                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Localidad</label>
                                    <input type="text" class="form-control">
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Paraje</label>
                                    <input type="text" name="paraje" class="form-control">
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Coordenadas UTM_X</label>
                                    <input type="text" name="coordenadas_utm_x" class="form-control">
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Coordenadas UTM_Y</label>
                                    <input type="text" name="coordenadas_utm_y" class="form-control">
                                </div>
                            </div>

                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Metros Sobre el Nivel del Mar</label>
                                    <input type="text" name="metros_sobre_nivel_mar" class="form-control">
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Fecha de Inicio</label>
                                    <input type="text" name="fecha_inicio" class="form-control">
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Fecha de Término</label>
                                    <input type="text" name="fecha_termino" class="form-control">
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Zona Crítica</label>
                                    <select name="zona_critica" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <br>                      
                                <div class="col-md-3 col-sm-12 col-xs-12">                                          
                                    <label>Dependencias participantes</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" readonly>
                                        <span class="input-group-btn">
                                            <button type="button"  class="btn btn-success multiregistro" data-multi="dependencias">Registros</button>
                                        </span>
                                    </div> 
                                </div>                                  
                                               
                                <div class="col-md-3 col-sm-12 col-xs-12">                                          
                                    <label>Total de participantes</label>
                                    <input type="text" name="total_participantes" class="form-control" readonly>
                                </div>
                
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Vehículos Asegurados</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" readonly>
                                        <span class="input-group-btn">
                                            <button type="button" class="btn btn-success multiregistro"  data-multi="vehiculosAsegurados">Registros</button>
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Vehículos sin Irregularidades</label>
                                    <input type="text" name="vehiculos_sin_irregularidades" class="form-control">
                                </div>
                            </div>

                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Vehículos Revisados</label>
                                    <input type="text" name="vehiculos_revisados" class="form-control" readonly>
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Personas aseguradas o infraccionadas</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" readonly>
                                        <span class="input-group-btn">
                                            <button type="button"  class="btn btn-success multiregistro" data-multi="personasAseguradas">Registros</button>
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Total de Personas</label>
                                    <input type="text" name="total_personas" class="form-control" readonly>
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Bienes y Productos Asegurados</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" readonly>
                                        <span class="input-group-btn">
                                            <button type="button" class="btn btn-success multiregistro" data-multi="bienes">Registros</button>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Predios</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" readonly>
                                        <span class="input-group-btn">
                                            <button type="button" class="btn btn-success multiregistro" data-multi="predios">Registros</button>
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>No de Orden</label>
                                    <input type="text" name="num_orden" class="form-control">
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Tipo de Documento</label>
                                    <select name="tipo_documento" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Número de Documento</label>
                                    <input type="tex" name="num_documento" class="form-control">
                                </div>
                            </div>

                            <div class="row">
                                <br>      
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label><br>Dependencia que expide el documento</label>
                                    <select name="dependencia_expide_documento" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Agencia del ministerio publico que solicita el dictamen</label>
                                    <select name="agencia_ministerio_solicita_dictamen" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label><br>Medidas de seguridad</label>
                                    <select name="medidas_seguridad" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label><br>Inspector Forestal</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" readonly>
                                        <span class="input-group-btn">
                                            <button type="button" class="btn btn-success multiregistro" data-multi="inspector">Registros</button>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Valor comercial $</label>
                                    <input type="text" name="valor_comercial" class="form-control">
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Impacto Ambiental $</label>
                                    <input type="text" name="impacto_ambiental" class="form-control">
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Reparación del Daño $</label>
                                    <input type="text" name="reparacion_danio" class="form-control">
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Total del dictamen</label>
                                    <input type="text" name="total_dictamen" class="form-control" readonly>
                                </div>
                            </div>

                            <div class="row">
                                <br>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Estatus Industria</label>
                                    <select name="estatus_industria" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Archivos</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" readonly>
                                        <span class="input-group-btn">
                                            <button type="button" class="btn btn-success multiregistro" data-multi="archivos">Registros</button>
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Codigo de Identificación</label>
                                    <input type="text" name="codigo_identificacion" class="form-control">
                                </div>

                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Registro Forestal Nacional</label>
                                    <input type="text" name="registro_forestal_nacional" class="form-control">
                                </div>
                            </div>

                            <div class="row">
                                <br>                      

                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <label>Observaciones</label>
                                    <textarea class="form-control" name="observaciones" rows="3" cols="5"></textarea>                                          
                                </div>
                            </div>

                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                </div>
                                <div v-if="this.accion == 'agregar'" class="col-md-3 col-sm-12 col-xs-12">
                                    <router-link to="/consultar" class="btn btn-default btn-block">Cancelar</router-link>
                                </div>
                                <div v-if="this.accion == 'consultar'" class="col-md-3 col-sm-12 col-xs-12">
                                    <input type="submit" class="btn btn-default btn-block" value="Eliminar" @click="EliminarInspeccion">
                                </div>
                                <div v-if="this.accion == 'consultar'" class="col-md-3 col-sm-12 col-xs-12">
                                    <input type="submit" class="btn btn-success btn-block" value="Actualizar" @click="ActualizarInspeccion">
                                </div>
                                <div v-else-if="this.accion == 'agregar'" class="col-md-3 col-sm-12 col-xs-12">
                                    <input type="submit" class="btn btn-success btn-block" value="Agregar" @click="AgregarInspeccion">
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Formulario from '../datosFormularios/inspeccion'

export default {
    name: 'formulario',
    data() {
        return {
            titulo: '',
            accion: null,           
            formularioLocal:  Object.assign({}, Formulario)
        }
    },
    created: function(){
       this.titulo = (this.$route.name == 'consultar')? 'Detalle de la inspección seleccionada':'Registrar Inspección'
       this.accion = this.$route.name
       this.formularioLocal = Object.assign({}, Formulario)
        /*this.$bus.$on('set-folio', (folio) => {
            this.formularioLocal.nombre_predio= folio;
        })*/
    },
    mounted: function(){
       //$('#formularioPrincipal').validate()
    },
    methods:{
        EliminarInspeccion: function(){
            alert('Eliminar')
        },
        ActualizarInspeccion: function(){
            alert('Actualizar')
        },
        AgregarInspeccion: function (){
            alert('Agregar')
        }
    }
}
</script>
