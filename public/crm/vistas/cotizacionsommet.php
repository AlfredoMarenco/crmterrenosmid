<?php
//Hacemos la conexion a la base de datos
include_once '../controlador/conexion.php';
//Obtenemos la logica que genera los calculos de las cotizaciones para solo usarlas en HTML
include_once '../controlador/calculadorsommet.php';
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
    <title><?php echo "Cotizacion_" . $nombre . "_" . $apellido . "_Plan" . $planFinanciemiento . "Meses_" . $fecha; ?></title>
</head>
<body>
    <div class="container">
        <div>
            <div class="my-2"><a href="javascript: history.go(-1)" class="btn btn-dark ocultar">Regresar</a></div>
            <center><img src="https://sommetbienesraices.com/Content/Images/Site/logoGray.png" width="25%" height="auto">
                <br>
                <h2><?php echo "$desarrollo - $etapa LOTE: $lote"; ?></h2>
                <h2>Cotizacion - <?php echo "Cliente: $nombre $apellido"; ?></h2>
            </center>
        </div>
        <br>
        <div class="row">
            <div class="col-md-6 text-center">
                <div class="border">
                    <h6>Plan de Financiamiento: <?php echo "$planFinanciemiento MSI"; ?></h6>
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
                    <p class="h6">Superficie total: <?php echo number_format($metros, 2) . " metros" ?></p>
                </div>
                <div class="border" style="background-color: limegreen;">
                    <p class="h6">Mensualidades: <?php echo "$" . number_format($mensualidad, 2); ?></p>
                </div>
                <div class="border">
                    <p class="h6">Total a Financiar: <?php echo "$" . number_format($totalAFinanciar, 2); ?></p>
                </div>
            </div>
        </div>
        <div class="row mt-5">

            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Capital</th>
                        <th scope="col">Intereses</th>
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