<?php $email=$_GET['email']; ?>
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
                <form action="<?php echo '../modelo/final-register.php?email='.$email; ?>" method="POST">
                    <div class="form-group">
                        <label for="username">Nombre de Usuario</label>
                        <input type="text" name="username" class="form-control" id="username" autocomplete="off">
                        <small id="username" class="form-text text-muted">Crear un nombre de usuario.</small>
                    </div>
                    <div class="form-group">
                        <label for="pass">Contraseña</label>
                        <input type="password" name="pass" class="form-control" id="pass" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="passConf">Contraseña</label>
                        <input type="password" name="passConf" class="form-control" id="passConf" autocomplete="off">
                    </div>
                    <button type="submit" class="btn btn-block btn-dark">Iniciar Sesion</button>
                </form>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
    <?php include_once '../includes/footer.php'; ?>