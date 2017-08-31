<template>
    <div class="container-fluid">
        <div class="row">
            <br/>
            <div class="col-md-12">
                <div class="panel panel-success">
                    <div class="panel-heading">Detalle del predio</div>
                    <div class="panel-body">
                        <form id="formularioPrincipal">
                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Estado</label>
                                    <input type="text" name="estado" class="form-control" value="México" readonly>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Tipo de Acción</label>
                                    <select name="tipoAccion" class="form-control">
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
                                    <select name="municipio" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Localidad</label>
                                    <select name="localidad" class="form-control">
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
                                    <select name="predio" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Clave única de identificación</label>
                                    <input type="text" name="claveUnicaIdentificacion" class="form-control" readonly>
                                </div>
                            </div>
                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Folio</label>
                                    <input type="text" name="folio" class="form-control" readonly>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Municipio</label>
                                    <select name="municipioDos" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Nombre del Predio</label>
                                    <input type="text" name="nombrePredio" class="form-control">
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Razón Social</label>
                                    <input type="text" name="razonSocial" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Localidad</label>
                                    <input type="text" name="localidadDos" class="form-control">
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Paraje</label>
                                    <input type="text" name="paraje" class="form-control">
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Coordenadas UTM_X</label>
                                    <input type="text" name="coordenadasUtmX" class="form-control">
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Coordenadas UTM_Y</label>
                                    <input type="text" name="coordenadasUtmY" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Metros Sobre el Nivel del Mar</label>
                                    <input type="text" name="metrosSobreNivelMar" class="form-control">
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Fecha de Inicio</label>
                                    <input type="text" name="fechaInicio" class="form-control">
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Fecha de Término</label>
                                    <input type="text" name="fechaTermino" class="form-control">
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Zona Crítica</label>
                                    <select name="zonaCritica" class="form-control">
                                        <option value="-">Seleccione una opción...</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Dependencias participantes</label>
                                    <div class="input-group">
                                        <input type="text" name="dependenciasParticipantes" class="form-control" readonly>
                                        <span class="input-group-btn">
                                            <button type="button" data-info="folio" class="btn btn-success multiregistro" data-multi="dependencias">Registros</button>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Total de participantes</label>
                                    <input type="text" name="totalParticipantes" class="form-control" readonly>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Vehículos Asegurados</label>
                                    <div class="input-group">
                                        <input type="text" name="vehiculosAsegurados" class="form-control" readonly>
                                        <span class="input-group-btn">
                                            <button type="button" class="btn btn-success multiregistro" data-info="folio" data-multi="vehiculosAsegurados">Registros</button>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Vehículos sin Irregularidades</label>
                                    <input type="text" name="vehiculosSinIrregularidades" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Vehículos Revisados</label>
                                    <input type="text" name="vehiculosRevisados" class="form-control" readonly>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Personas aseguradas o infraccionadas</label>
                                    <div class="input-group">
                                        <input type="text" name="personasAseguradasInfraccionadas" class="form-control" readonly>
                                        <span class="input-group-btn">
                                            <button type="button" data-info="folio" class="btn btn-success multiregistro" data-multi="personasAseguradas">Registros</button>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Total de Personas</label>
                                    <input type="text" name="totalPersonas" class="form-control" readonly>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Bienes y Productos Asegurados</label>
                                    <div class="input-group">
                                        <input type="text" name="bienesProductosAsegurados" class="form-control" readonly>
                                        <span class="input-group-btn">
                                            <button type="button" data-info="folio" class="btn btn-success multiregistro" data-multi="bienes">Registros</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Predios</label>
                                    <div class="input-group">
                                        <input type="text" name="predios" class="form-control" readonly>
                                        <span class="input-group-btn">
                                            <button type="button" data-info="folio" class="btn btn-success multiregistro" data-multi="predios">Registros</button>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>No de Orden</label>
                                    <input type="text" name="numeroOrden" class="form-control">
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Tipo de Documento</label>
                                    <select name="tipoDocumento" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Número de Documento</label>
                                    <input type="tex" name="numeroDocumento" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>
                                        <br>Dependencia que expide el documento</label>
                                    <select name="dependenciaExpideDocumento" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Agencia del ministerio publico que solicita el dictamen</label>
                                    <select name="agenciaMinisterioPublico" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>
                                        <br>Medidas de seguridad</label>
                                    <select name="medidasSeguridad" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>
                                        <br>Inspector Forestal</label>
                                    <div class="input-group">
                                        <input type="text" name="inspectorForestal" class="form-control" readonly>
                                        <span class="input-group-btn">
                                            <button type="button" data-info="data.folio" class="btn btn-success multiregistro" data-multi="inspector">Registros</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Valor comercial $</label>
                                    <input type="text" name="valorComercial" class="form-control">
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Impacto Ambiental $</label>
                                    <input type="text" name="impactoAmbiental" class="form-control">
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Reparación del Daño $</label>
                                    <input type="text" name="reparacionDanio" class="form-control">
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Total del dictamen</label>
                                    <input type="text" name="totalDictamen" class="form-control" readonly>
                                </div>
                            </div>
                            <div class="row">
                                <br>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Estatus Industria</label>
                                    <select name="estatusIndustria" class="form-control">
                                        <option value="-1">Seleccione una opción...</option>
                                    </select>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Archivos</label>
                                    <div class="input-group">
                                        <input type="text" name="archivos" class="form-control" readonly>
                                        <span class="input-group-btn">
                                            <button type="button" data-info="folio" class="btn btn-success multiregistro" data-multi="archivos">Registros</button>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Codigo de Identificación</label>
                                    <input type="text" name="codigoIdentificacion" class="form-control">
                                </div>
                                <div class="col-md-3 col-sm-12 col-xs-12">
                                    <label>Registro Forestal Nacional</label>
                                    <input type="text" name="registroForestalNacional" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <br>
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <label>Observaciones</label>
                                    <textarea class="form-control" name="observaciones" rows="2" cols="5"></textarea>
                                </div>
                            </div>
                            <div class="row">

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'inspeccion'
}
</script>
<style>

</style>
