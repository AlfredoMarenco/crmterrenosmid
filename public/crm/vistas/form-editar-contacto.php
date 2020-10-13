<?php
include_once '../includes/head.php';
include_once '../modelo/modelo-tabla-leads.php';
?>
<div class="container mt-1">
    <a href="javascript: history.go(-1)" class="btn btn-dark ocultar">Regresar</a>
    <div class="row mt-5">
        <div class="col-3"></div>
        <div class="col-6">
            <h2 class="text-center mb-4">Editar cliente</h2>
            <form method="POST" action="../modelo/modelo-editar-contacto.php" class="needs-validation" novalidate>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="nombre">Nombre(s)</label>
                        <input type="text" class="form-control form-control-sm" placeholder="Nombre" name="nombre" id="nombre" value="<?php echo $data['nombre'] ?>" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="primerApellido">Primer Apellido</label>
                        <input type="text" class="form-control form-control-sm" placeholder="Primer Apellido" name=primerApellido id="primerApellido" value="<?php echo $data['primerApellido'] ?>" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="segundoApellido">Segundo Apellido</label>
                        <input type="text" class="form-control form-control-sm" placeholder="Segundo Apellido" name="segundoApellido" id="segundoApellido" value="<?php echo $data['segundoApellido'] ?>">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="desarrollo">Desarrollo</label>
                        <select name="desarrollo" class="form-control form-control-sm" id="desarrollo" placeholder="Selecciona" required>
                            <?php if ($data['desarrollo'] == 'CIUDAD CENTRAL') : ?>
                                <option selected value="CIUDAD CENTRAL">CIUDAD CENTRAL</option>
                                <option value="PALUMAR">PALUMAR</option>
                            <?php else : ?>
                                <option value="CIUDAD CENTRAL">CIUDAD CENTRAL</option>
                                <option selected value="PALUMAR">PALUMAR</option>
                            <?php endif ?>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="telefono">Telefono</label>
                        <input type="text" class="form-control form-control-sm" placeholder="Telefono" name="telefono" id="telefono" value="<?php echo $data['telefono'] ?>" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="email">Email</label>
                        <input type="email" class="form-control form-control-sm" readonly placeholder="Email" name="email" id="email" value="<?php echo $data['email'] ?>" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="pais">Pais</label>
                        <select name="pais" class="form-control form-control-sm" id="pais" required>
                            <?php if ($data['pais'] == 'Mexico') : ?>
                                <option selected value="Mexico">México</option>
                                <option value="Estados Unidos">Estados Unidos</option>
                            <?php else : ?>
                                <option value="Mexico">México</option>
                                <option selected value="Estados Unidos">Estados Unidos</option>
                            <?php endif ?>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="campaña">Campaña</label>
                        <select name="campaña" class="form-control form-control-sm" id="campaña" required>
                            <?php if ($data['campana'] == 'Facebook') : ?>
                                <option value="Facebook">Facebook</option>
                                <option value="Google Ads">Google Ads</option>
                            <?php else : ?>
                                <option value="Facebook">Facebook</option>
                                <option selected value="Google Ads">Google Ads</option>
                            <?php endif ?>
                        </select>
                    </div>
                    <input type="hidden"  value="<?php echo $id;?>" name="id">
                </div>

                <button type="submit" class="btn btn-success btn-sm btn-block">Editar Contacto</button>
            </form>
            <div class="col-3"></div>
        </div>


    </div>
</div>
<?php include_once '../includes/footer.php'; ?>