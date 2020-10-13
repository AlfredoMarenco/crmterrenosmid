<?php
include('../includes/head.php');
?>
<div class="container mt-1">
    <div class="row text-center">
        <div class="col-3"></div>
        <div class="col-6">
        <i class="fas fa-exclamation-circle fa-7x"></i>
            <h1>Error al agregar usuario</h1>
            <p>Este usuario ya a sido registrado anteriormente por ti o algun otro asesor favor de contactar a administracion</p>
            <a class="btn btn-warning btn-block" href="../vistas/usuarios.php">Regresar a usuarios</a>
        </div>
        <div class="col-3"></div>

    </div>
</div>
<?php include_once '../includes/footer.php'; ?>