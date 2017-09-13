<template>
	<form id="archivos">
    	<div class="col-lg-12">
    		<div class="form-group">
    			<div class="row">
	    			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	    				<label>Consecutivo</label>
	    				<input type="text" name="consecutivo" class="form-control" value="${this[posicion].consecutivo}">
	    			</div>

	    			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	    				<label>Folio</label>
	    				<input type="text" name="folio" class="form-control" value="${this[posicion].folio}">
	    			</div>
	    		</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
	    			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	    				<label>Campo Asociado</label>
	    				<select name="campoasociado" class="form-control">
	    					<option value="-1">Seleccione una opción...</option>
	    				</select>
	    			</div>

	    			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	    				<label>Archivo</label>
	    				<input type="file" name="url" class="form-control">
	    			</div>
	    		</div>
    		</div>

    		<div class="form-group">
    			<div class="row">   			
	    			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	    				<label>Fecha</label>
	    				<input type="text" name="fecha" class="form-control">
	    			</div>

	    			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
	    				<label>Descripcion</label>
	    				<textarea name="descripcion" class="form-control" rows="3" cols="5"></textarea>
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