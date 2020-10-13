<?php
include('../includes/head.php');
?>
<div class="container mt-1">
    <a href="javascript: history.go(-1)" class="btn btn-dark ocultar">Regresar</a>
    <div class="row mt-1">
        <div class="col-md-10"></div>
        <div class="col-md-2"><a class="btn btn-success btn-block p-2" href="./form-add-user.php">Agregar Nuevo</a></div>
    </div>
    <div class="row mt-2 text-center">
        <h2 class="text-center">Usuarios del sistema</h2>
        <?php include_once '../controlador/tabla-usuarios.php'; ?>
    </div>
</div>
<?php include_once '../includes/footer.php'; ?>