<?php
//Hacemos la conexion a la base de datos
include_once '../controlador/conexion.php';
//Obtenemos la logica que genera los calculos de las cotizaciones para solo usarlas en HTML
include_once '../controlador/calculadorgrupoorve.php';
$fecha = Date('dmYHis');
?>
<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../css/bootstrap.css" media="print">
    <link rel="stylesheet" href="../css/bootstrap.css" media="all">

    <title><?php echo "Cotizacion_" . $nombre . "_" . $apellido . "_Plan" . $planFinanciemiento . "Meses_Enganche" . $mensualidadEnganche . "Meses_" . $fecha; ?></title>
</head>

<body>
    <div class="container">
        <div>
            <div class="my-2"><a href="javascript: history.go(-1)" class="btn btn-dark ocultar">Regresar</a></div>
            <center><img src="https://cdn2.hubspot.net/hubfs/2795955/LOGO%20CAMBIO%20-%202019_Mesa%20de%20trabajo%201.png" width="25%" height="auto">
                <h2><?php echo "$desarrollo - $etapa - $privada LOTE: $lote"; ?></h2>
                <h2>Cotizacion - <?php echo "Cliente: $nombre $apellido"; ?></h2>
            </center>
        </div>
        <br>
        <div class="row">

            <div class="col-md-6 text-center">
                <div class="border">
                    <h6>Plan de Financiamiento: <?php echo "$planFinanciemiento meses"; ?></h6>
                </div>
                <div class="border">
                    <h6>Financiamiento Enganche: <?php if ($mensualidadEnganche == 1) {
                                                        echo "Contado";
                                                    } elseif ($mensualidadEnganche == 0) {
                                                            echo "Promocion";
                                                    }else {
                                                        echo "$mensualidadEnganche meses";
                                                    } ?></h6>
                </div>
                <div class="border">
                    <p class="h6">Precio lote: <?php echo "$" . number_format($precioLote, 2); ?></p>
                </div>
                <div class="border">
                    <p class="h6">Enganche Total: <?php echo "$" . number_format($enganche, 2); ?></p>
                </div>
            </div>
            <div class="col-md-6 text-center">
                <div class="border">
                    <p class="h6">Apartado: <?php echo "$" . number_format($apartadoTerreno, 2); ?></p>
                </div>
                <div class="border" style="background-color: limegreen;">
                    <p class="h6">Mensualidades: <?php echo "$" . number_format($mensualidad, 2); ?></p>
                </div>
                <div class="border">
                    <p class="h6">Saldo Enganche: <?php echo "$" . number_format($saldoEnganche, 2); ?></p>
                </div>

                <div class="border">
                    <p class="h6">Enganche Diferido: <?php if ($mensualidadEnganche == 0) {
                                                            echo "$" . number_format(0, 2);
                                                        } else {
                                                            echo "$" . number_format($saldoEnganche / $mensualidadEnganche, 2);
                                                        } ?></p>
                </div>
            </div>
        </div>
        <div class="row mt-5">

            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Capital</th>
                        <th scope="col">Actualizacion</th>
                        <th scope="col">Enganche</th>
                        <th scope="col">Total a Pagar</th>
                        <th scope="col">Saldo Capital</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    include('../controlador/creador-tablas.php');
                    ?>
                </tbody>
            </table>
        </div>
    </div>

    <?php include_once '../includes/footer.php'; ?>