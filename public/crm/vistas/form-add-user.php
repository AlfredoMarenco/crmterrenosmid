<?php
include('../includes/head.php');
?>
<div class="container mt-1">
    <a href="javascript: history.go(-1)" class="btn btn-dark ocultar">Regresar</a>
    <div class="row mt-5">
        <div class="col-3"></div>
        <div class="col-6">
            <h2 class="text-center mb-4">Nuevo Usuario de Sistema</h2>
            <form method="POST" action="../modelo/add-user.php" class="needs-validation" novalidate>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="nombre">Nombre(s)</label>
                        <input type="text" class="form-control form-control-sm" placeholder="Nombre" name="nombre" id="nombre" placeholder="" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="primerApellido">Primer Apellido</label>
                        <input type="text" class="form-control form-control-sm" placeholder="Primer Apellido" name=primerApellido id="primerApellido" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="segundoApellido">Segundo Apellido</label>
                        <input type="text" class="form-control form-control-sm" placeholder="Segundo Apellido" name="segundoApellido" id="segundoApellido" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="privilegio">Privilegio</label>
                        <select name="privilegio" class="form-control form-control-sm" id="privilegio" placeholder="Selecciona" required>
                            <option selected disabled value="">-Seleccionar Privilegio-</option>
                            <option value="0">Admin</option>
                            <option value="1">Venderor</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="telefono">Telefono</label>
                        <input type="text" class="form-control form-control-sm" placeholder="Telefono" name="telefono" id="telefono" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="email">Email</label>
                        <input type="email" class="form-control form-control-sm" placeholder="Email" name="email" id="email" required>
                    </div>
                </div>
                <button type="submit" class="btn btn-success btn-sm btn-block">Agregar Contacto</button>
            </form>
            <div class="col-3"></div>
        </div>

        
    </div>
</div>
<?php include_once '../includes/footer.php'; ?>