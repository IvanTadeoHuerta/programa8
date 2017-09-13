<template>
 	<form id="predio">
    	<div class="col-lg-12">
    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
                        <label>Consecutivo</label>
    					<input type="text" name="consecutivo" class="form-control" value="">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
                        <label>Folio</label>
    					<input type="text" name="folio" class="form-control" value="">
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Clave única de predio</label>
    					<input type="text" name="clave_unica_predio" class="form-control">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Cve_sedemex</label>
    					<input type="text" name="cve_sedemex" class="form-control">
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Campo Trabajo</label>
    					<input type="text" name="campo_trabajo" class="form-control">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Nombre del Predio</label>
    					<input type="text" name="nombre_del_predio" class="form-control">
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Cve_Tenencia</label>
    					<input type="text" name="cve_tenencia" class="form-control">
    				</div>  

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Descripción de como llegar al predio</label>
    					<textarea name="descripcion_llegar_predio" class="form-control" rows="3" cols="5"></textarea>
    				</div> 				
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Latitud(UTM)</label>
    					<input type="text" name="latitud_utm" class="form-control">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Longitud(UTM)</label>
    					<input type="text" name="longitud_utm" class="form-control">
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Superficie total(Ha)</label>
    					<input type="text" name="superficie_total_ha" class="form-control">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Superficie cartográfica(Ha)</label>
    					<input type="text" name="superficie_cartografica_ha" class="form-control">
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Superficie arbolada(Ha)</label>
    					<input type="text" name="superficie_arbolada_ha" class="form-control">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Superficie otros usos(Ha)</label>
    					<input type="text" name="superficie_otros_usos_ha" class="form-control">
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Microcuenca(subcuenca especifica)</label>
    					<input type="text" name="microcuenca_subcuenca_especifica" class="form-control">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Área natural protegida</label>
    					<select name="area_natural_protegida" class="form-control">
    						<option value="-1">Seleccione una opción...</option>
    					</select>
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Status del predio</label>
    					<input type="text" name="status_predio" class="form-control">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Observaciones del predio</label>
    					<textarea name="observaciones_predio" class="form-control" rows="3" cols="5"></textarea>
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Propietario o Representante legal</label>
    					<input type="text" name="propietario_o_representante_legal" class="form-control">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Polígonos del predio</label>
    					<input type="text" name="poligonos_del_predio" class="form-control">
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>CLAVE ESTATAL</label>
    					<input type="text" name="clave_estatal" class="form-control">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>CVE_REGFTAL</label>
    					<input type="text" name="cve_regftal" class="form-control">
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>CVE_MUN</label>
    					<input type="text" name="cve_num" class="form-control">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>CVE_LOC</label>
    					<input type="text" name="cve_loctext" class="form-control">
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
                <div class="row">
                    <br>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <button type="button" class="btn btn-default btn-block">Cancelar</button>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <button type="button" class="btn btn-success btn-block">Aceptar</button>
                    </div>
                </div>
            </div>
    	</div>
    </form>
</template>
<script>
export default {
  name: 'formPredio'
}
</script>

