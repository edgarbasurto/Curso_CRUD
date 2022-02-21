<div class="modal fade bd-example-modal" id="modalmantenimiento" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">


            <div class="modal-header">
                <h5 class="modal-title" id="mdltitulo"></h5>

                <button class="modal-close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>

            <div class="modal-body">
                <form class="user" method="POST" id="producto_form">
                    <input type="hidden" name="prod_id" id="prod_id">

                    <div class="form-group">
                        <label class="form-label" for="prod_nom">Nombre</label>
                        <input type="text" class="form-control form-control-user" id="prod_nom" name="prod_nom" placeholder="Ingrese nombre" required>
                    </div>
                </form>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="submit" class="btn btn-primary" name="action" id="#" value="add" data-dismiss="modal">Guardar</button>
            </div>

        </div>
    </div>
</div>