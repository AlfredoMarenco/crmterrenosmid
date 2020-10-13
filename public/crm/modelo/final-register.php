<!doctype html>
<html lang="es">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <title>Registro</title>
</head>

<body>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="text-center">
                    <h3>CRM</h3>
                </div>
                <div class="text-center mb-2"><img width="33%" src="http://terrenosmidyucatan.com/assets/img/logo-Terrenos.png" class="img-fluid" alt=""></div>
                <?php
                include_once '../controlador/conexion.php';
                $email = $_GET['email'];
                $username =  $_POST['username'];
                $pass = $_POST['pass'];
                $passConf = $_POST['passConf'];
                $estatus = 'activo';

                if ($pass === $passConf) {
                    $sql_update = 'UPDATE usuarios SET pass=?,username=?, estatus=? WHERE email=?';
                    $passEncrypt = password_hash($pass, PASSWORD_DEFAULT);
                    $sentencia_update = $pdo->prepare($sql_update);
                    $sentencia_update->execute(array($passEncrypt, $username, $estatus, $email));
                    echo '<div class="alert alert-success" role="alert">
                    <h4 class="alert-heading">Cuenta confirmada!</h4>
                    <p>Tu registro fue concluido con exito, ya puedes hacer uso del sistema CRM Terrenos MID</p>
                    <hr>
                    <p class="mb-0">Te estemos redireccionando no actualices la pagina </p>
                    </div>' . $email . '-' . $username . '-' . $pass;
                    header("refresh:5;url=../index.php");
                    //echo'<script type="text/javascript">
                    //  alert("Registro exitoso!!");
                    //window.location.href="../index.php";
                    //</script>';
                    //echo "Pase aqui";
                    //echo "$email - $username - $pass";
                } else {
                    echo "La contraseña no coinciden";
                }
                ?>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</body>

</html>