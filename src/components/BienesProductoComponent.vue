<template>
	<form id="bienesProductos">
    	<div class="col-lg-12">
    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Consecutivo</label>
    					<input type="text" name="consecutivo" class="form-control" value="${this[posicion].consecutivo}">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Folio</label>
    					<input type="text" name="folio" class="form-control" value="${this[posicion].folio}">
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Categoria del Bien y Producto</label>
    					<select name="tipo_producto" class="form-control">
    						<option value="-1">Seleccione una opción...</option>
    					</select>
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Tipo de Bien y Producto</label>
    					<select name="subcategoria_bien_producto" class="form-control">
    						<option value="-1">Seleccione una opción...</option>
    					</select>
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Tipo de Ilícito</label>
                        <select name="ilicito_producto" class="form-control js-example-basic-multiple" multiple="multiple">
                            <option value="prueba 1">prueba 1</option>
                            <option value="prueba 2">prueba 2</option>
                            <option value="prueba 3">prueba 3</option>
                        </select>    					
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Género del producto</label>
    					<select name="genero_producto" class="form-control">
    						<option value="-1">Seleccione una opción...</option>
    					</select>
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Unidad de medida</label>
    					<select name="unidad_medida" class="form-control">
    						<option value="-1">Seleccione una opción...</option>
    					</select>
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Lugar de depósito</label>
    					<select name="lugar_deposito" class="form-control">
    						<option value="-1">Seleccione una opción...</option>
    					</select>
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Cantidad Asegurada</label>
    					<input type="text" name="total_productos_asegurados" class="form-control">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Descripción del Bien y Producto Asegurado</label>
                        <textarea name="total_herramientas_menores" class="form-control" rows="3" cols="5"></textarea>			
    				</div>
    			</div>
    		</div>

    		<div class="form-group">
    			<div class="row">
    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Identificador del Bien</label>
    					<input type="text" name="identificador_bien" class="form-control">
    				</div>

    				<div class="col-md-6 col-sm-12 col-xs-12">
    					<label>Dependencia</label>
    					<select name="dependencia" class="form-control">
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