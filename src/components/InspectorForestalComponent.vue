<template>
	<form id="inspectorForestal">
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
    					<label>Inspector Forestal</label>
    					<select name="inspector_forestal" class="form-control">
    						<option value="-1">Seleccione una opción...</option>
    					</select>
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Estatus del Inspector</label>
    					<select name="estatus" class="form-control">
    						<option value="-1">Seleccione una opción...</option>
    					</select>
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
  name: 'formInspectorForestal'
}
</script>
