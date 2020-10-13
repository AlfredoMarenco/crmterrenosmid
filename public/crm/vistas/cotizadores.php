<?php
include('../includes/head.php');
?>

<div class="container">
    <div class="my-2"><a href="javascript: history.go(-1)" class="btn btn-dark ocultar">Regresar</a></div>
    <center>
        <h1 class="title">Panel de Control</h1>
        <div class="row mt-3">
            <div class="col-md-4 my-2">
                <div class="card border-dark bg-light ">
                    <center><img src="https://www.grupoorve.mx/hs-fs/hubfs/logo-orve_v1.png?width=142&name=logo-orve_v1.png" style="width: auto; height:55px;" class="card-img-top img-fluid pt-3" alt="alumnos"></center>
                    <div class="card-body">
                        <h3 class="card-title">Grupo Orve</h3>
                        <small>Desarrollos de Grupo Orve</small>
                        <hr>
                        <a href="./cotizadorgrupoorve.php" class="btn btn-dark">Ir a cotizador</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 my-2">
                <div class="card border-dark bg-light ">
                    <center><img src="https://sommetbienesraices.com/Content/Images/Site/logoGray.png" style="width: auto; height:55px;" class="card-img-top img-fluid pt-3" alt="alumnos"></center>
                    <div class="card-body">
                        <h3 class="card-title">Sommet</h3>
                        <small>Desarrollos de Sommet</small>
                        <hr>
                        <a href="./cotizadorsommet.php" class="btn btn-dark">Ir al cotizador</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Segunda Fila 
            <div class="row">
                <div class="col-md-4 my-2">
                    <div class="card border-success bg-light ">
                        <img src="./img/tutoresP.png" style="width:20%;" class="card-img-top img-fluid py-2" alt="alumnos">
                        <div class="card-body">
                            <h5 class="card-title">Usuarios</h5>
                            <p>Usuarios del sistema</p>
                            <a href="./vistas/usuarios.php" class="btn btn-success">Abrir</a>
                        </div>
                    </div>
                </div>
            </div>-->
    </center>
<?php include_once '../includes/footer.php'; ?>