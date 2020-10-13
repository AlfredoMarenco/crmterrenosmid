<?php
include('../includes/head.php');
?>
<div class="container-fluid mt-1">
    <a href="javascript: history.go(-1)" class="btn btn-dark ocultar">Regresar</a>
    <div class="row mt-5">
        <div class="col-3"></div>
        <div class="col-6">
            <h2 class="text-center mb-4">Agregar nuevo cliente</h2>
            <form method="POST" action="../modelo/add-contacto.php" class="needs-validation" novalidate>
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
                        <input type="text" class="form-control form-control-sm" placeholder="Segundo Apellido" name="segundoApellido" id="segundoApellido" >
                    </div>
                    <div class="form-group col-md-6">
                        <label for="desarrollo">Desarrollo</label>
                        <select name="desarrollo" class="form-control form-control-sm" id="desarrollo" placeholder="Selecciona" required>
                            <option selected disabled value="">-Seleccionar Desarrollo-</option>
                            <option value="CIUDAD CENTRAL">CIUDAD CENTRAL</option>
                            <option value="PALUMAR">PALUMAR</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="telefono">Telefono</label>
                        <input type="text" maxlength="10" class="form-control form-control-sm" placeholder="Telefono" name="telefono" id="telefono" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="email">Email</label>
                        <input type="email" class="form-control form-control-sm" placeholder="Email" name="email" id="email" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="pais">Pais</label>
                        <select name="pais" class="form-control form-control-sm" id="pais" required>
                            <option selected disabled value="">-Seleccionar Pais-</option>
                            <option value="Mexico">México</option>
                            <option value="Estados Unidos">Estados Unidos</option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="campaña">Campaña</label>
                        <select name="campaña" class="form-control form-control-sm" id="campaña" required>
                            <option selected disabled value="">-Seleccionar Campaña-</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Google Ads">Google Ads</option>
                        </select>
                    </div>
                </div>

                <button type="submit" class="btn btn-success btn-sm btn-block">Agregar Contacto</button>
            </form>
            <div class="col-3"></div>
        </div>

        
    </div>
</div>
<?php include_once '../includes/footer.php'; ?>