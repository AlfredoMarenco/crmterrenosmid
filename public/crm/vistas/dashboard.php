<?php
include('../includes/head.php');
?>

<div class="container py-2 text-center">
    <h1 class="title">Panel de Control</h1>
    <center>
        <div class="row mt-3">
            <div class="col-md-4 my-2">
                <div class="card border-dark bg-light ">
                    <center><img src="../assets/img/imge-cotizacion.png" style="width:25%;" class="card-img-top img-fluid pt-3" alt="alumnos"></center>
                    <div class="card-body">
                        <h3 class="card-title">Cotizador</h3>
                        <small>Generador de cotizaciones de los desarrollos</small>
                        <hr>
                        <a href="./cotizadores.php" class="btn btn-dark">Ir a cotizador</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 my-2">
                <div class="card border-dark bg-light ">
                    <center><img src="../assets/img/imge-disponibilidad.png" style="width:30%;" class="card-img-top img-fluid pt-3" alt="alumnos"></center>
                    <div class="card-body">
                        <h3 class="card-title">Disponibilidad</h3>
                        <small>Consulta la disponibilidad de los desarrollos</small>
                        <hr>
                        <a href="./disponibilidad.php" class="btn btn-dark">Ir a disponibilidad</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 my-2">
                <div class="card border-dark bg-light ">
                    <center><img src="../assets/img/imge-contactos.png" style="width:25%;" class="card-img-top img-fluid pt-3" alt="alumnos"></center>
                    <div class="card-body">
                        <h3 class="card-title">Contactos</h3>
                        <small>Agenda de contactos provenientes de las campañas.</small>
                        <hr>
                        <a href="./contactos.php" class="btn btn-dark" tabindex="-1" role="button">Ir a Contactos</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 my-2" style="display:<?php echo $registroUsuarios?>;">
                <div class="card border-dark bg-light ">
                    <center> <img src="../assets/img/imge-usuarios.png" style="width:20%;" class="card-img-top img-fluid py-2" alt="alumnos"></center>
                    <div class="card-body">
                        <h5 class="card-title">Usuarios</h5>
                        <p>Usuarios del sistema</p>
                        <a href="./usuarios.php" class="btn btn-dark">Ir a administracion de usuarios</a>
                    </div>
                </div>
            </div>
        </div>
    </center>
</div>
<?php include_once '../includes/footer.php'; ?>